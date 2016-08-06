'use strict';

const chalk = require('chalk');
const ghauth = require('ghauth');
const ghissues = require('ghissues');
const ghslug = require('github-slug');

const authOptions = {
	configName: 'issue-lister',
	scopes: ['user']
};

module.exports = (input, opts) => {
	if (typeof input !== 'string') {
		throw new TypeError(`Expected a string, got ${typeof input}`);
	}

	opts = opts || {};

	ghauth(authOptions, (err, authData) => {
		ghissues.list(authData, 'voorhoede', 'fastatic', (err, list) => {
			console.log('Issues in rvagg/node-levelup:');
			list.forEach(i => {
				console.log('#%s: %s', i.number, i.title);
			});
		});
	});

	return input + ' & ' + (opts.postfix || 'rainbows');
};
