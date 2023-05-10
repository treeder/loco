export class Loco {
  constructor() {
    this.localeMap = {}
  }

  // eg: addLocale('en', '/locales/en.js')
  async addLocale(locale, file) {
    let localeTemplates = await import(file)
    this.localeMap[locale] = localeTemplates.templates
  }

  // eg: msg('Hello', {id: 'hello', locale: 'en'})
  msg(str, opts = {}) {
    if (!opts.id) return str
    if (!opts.locale) return str
    if (this.localeMap[opts.locale]) {
      let s = this.localeMap[opts.locale][opts.id]
      if (s) return s
    }
    return str
  }
}

// default Loco
// export const loco = new Loco()
// export function msg(str, opts = {}) {
//   return loco.msg(str, opts)
// }
