# babel-preset-nodejs-lts

> Babel preset to make NodeJS LTS ECMAScript 2015 compatible.

Addes support to NodeJS LTS for:
- Destructing assignment
- Rest and default parameters
- Modules
- Unicode and sticky regular expressions
- Spread operator
- Function.name
- Object rest/spread properties
- Class field and static properties
- Async functions
- module.exports = exports['default']

## Install

```sh
$ npm install --save-dev babel-preset-nodejs-lts
```

## Usage

### Via `.babelrc`

**.babelrc**

```json
{
  "presets": ["nodejs-lts"]
}
```

### Via CLI

```sh
$ babel script.js --preset nodejs-lts
```

### Via Node API

```javascript
require('babel-core').transform('code', {
  presets: ['nodejs-lts'],
})
```

## License

```txt
The MIT License (MIT)

Copyright (c) 2015 Josh Manders <josh@joshmanders.com>

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```
