#!/usr/bin/env node
'use strict';
const meow = require('meow');
const getGhIssues = require('./');

const cli = meow(`
	Usage
	  $ get-gh-issues
`);

getGhIssues();
