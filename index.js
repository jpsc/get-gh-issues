'use strict';

const chalk = require('chalk');
const ghauth = require('ghauth');
const ghissues = require('ghissues');
const ghslug = require('github-slug');

const authOptions = {
	configName: 'issue-lister',
	scopes: ['user']
};

function getSlug() {
	return new Promise((resolve, reject) => {
		ghslug('./', (err, slug) => {
			if (err) {
				reject(err);
			} else {
				resolve(slug);
			}
		});
	});
}

function setAuth() {
	return new Promise((resolve, reject) => {
		ghauth(authOptions, (err, authData) => {
			if (err) {
				reject(err);
			} else {
				resolve(authData);
			}
		});
	});
}

function getIssues(authData) {
	return getSlug()
		.then(slug => new Promise((resolve, reject) => {
			const user = slug.split('/')[0];
			const repo = slug.split('/')[1];
			ghissues.list(authData, user, repo, (err, issues) => {
				if (err) {
					reject(err);
				} else if (issues.length) {
					console.log(`Issues from ${slug}:`);
					issues.forEach(issue => {
						const labels = issue.labels.map(label => label.name);
						console.log(`${chalk.green(issue.number)}: ${issue.title} [${labels.join(',')}]`);
					});
				} else {
					console.log(`${chalk.green('No issues, keep the good work.')}`);
				}
			});
		}));
}

module.exports = function () {
	return setAuth()
		.then(authData => getIssues(authData))
		.catch(err => console.log(err));
};
