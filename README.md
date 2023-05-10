# rend

A Node.js renderer using template literals.

## Install

```sh
npm install treeder/rend
```

## Usage

First make a `layout.js` file with two functions, `header()` and `footer()`:

```js
export function header(d) {
  return `<!DOCTYPE html>
<head>
    <meta charset="UTF-8">
    <title>My Rad Site</title>
</head>
<body>
    `
}

export function footer(d) {
  return `
    </body>
    </html>
    `
}
```

Then make an `index.js` file with your body content:

```html
<h2>Hello ${d.name}!</h2>
```

Now we send that back in a request.

This is a fastify example, but you can do the same with Express or whatever you like to use. Put the following in `app.js`.

```js
import Fastify from 'fastify'
import {rend} from 'rend'

const fastify = Fastify({
  logger: true
})

fastify.get('/', async (request, reply) => {
    return rend(reply, index, {name: 'John Wick'})
})

// Run the server
const start = async () => {
  try {
    await fastify.listen({ port: 3000 })
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()
```

Start it up with `node app.js` and surf to https://localhost:3000. That's it!

### Includes

## Development

To run the example, first install fastify:

```sh
npm i -g fastify-cli
```

then:

```sh
make run
```