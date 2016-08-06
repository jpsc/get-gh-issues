# get-gh-issues [![Build Status](https://travis-ci.org/jpsc/get-gh-issues.svg?branch=master)](https://travis-ci.org/jpsc/get-gh-issues)

> Get github issues from your repo on your console


## Install

```
$ npm install --save get-gh-issues
```


## Usage

```js
const getGhIssues = require('get-gh-issues');

getGhIssues('unicorns');
//=> 'unicorns & rainbows'
```


## API

### getGhIssues(input, [options])

#### input

Type: `string`

Lorem ipsum.

#### options

##### foo

Type: `boolean`<br>
Default: `false`

Lorem ipsum.


## CLI

```
$ npm install --global get-gh-issues
```

```
$ get-gh-issues --help

  Usage
    get-gh-issues [input]

  Options
    --foo  Lorem ipsum [Default: false]

  Examples
    $ get-gh-issues
    unicorns & rainbows
    $ get-gh-issues ponies
    ponies & rainbows
```


## License

MIT © [jpsc](http://raw.jpsc.space)
