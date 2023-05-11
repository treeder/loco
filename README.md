# loco

A Node.js localization library, based on @lit/localize, but for server side rendering. 

## Install

```sh
npm install treeder/loco
```

## Usage

First make a `layout.js` file with two functions, `header()` and `footer()`:

```js
import { Loco } from 'loco'
// Initialize:
let loco = new Loco()
await loco.addLocale('es', './public/i18n/locales/es.js')

// then use it anywhere:
let s = `<div>${loco.msg('Hello', {id: 'hello', locale: 'en'})}</div>`
```

Or you can use the default Loco instance and do the following:

```js
import { addLocale, msg } from 'loco'

await addLocale('es', './public/i18n/locales/es.js')

// then use it anywhere:
let s = `<div>${msg('Hello', {id: 'hello', locale: 'en'})}</div>`
```
