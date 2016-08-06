#!/usr/bin/env node
'use strict';
const meow = require('meow');
const getGhIssues = require('./');

const cli = meow(`
	Usage
	  $ get-gh-issues [input]

	Options
	  --foo  Lorem ipsum [Default: false]

	Examples
	  $ get-gh-issues
	  unicorns & rainbows
	  $ get-gh-issues ponies
	  ponies & rainbows
`);

console.log(getGhIssues(cli.input[0] || 'unicorns'));
