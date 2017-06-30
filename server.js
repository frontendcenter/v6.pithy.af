const express = require('express')
const serveStatic = require('serve-static')

const app = express()

app.use(serveStatic('build', {
  setHeaders(res, path) {
    const isRevved = /[a-f0-9]{7,}/.exec(path)
    res.setHeader('Cache-Control',
      isRevved
        ? `max-age=31536000,immutable`
        : `max-age=0,s-maxage=31536000` )
  }
}))

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Listening on port ${port}`))
