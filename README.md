# loco

A Node.js localization library, based on [@lit/localize](https://lit.dev/docs/localization/overview/), but for server side rendering. And you can use the same file for both the server side and client side! :boom: 

The cool part of how this works is you can use a default language in your code and it will swap out different languages if the keys exist. If they don't, it will use the default so 
you don't have weird language keys showing up in your interface. 

You can share the same language files between the backend and frontend if you like. 

## Install

```sh
npm install treeder/loco
```

## Usage

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
