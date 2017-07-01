const express = require('express')
const serveStatic = require('serve-static')
const path = require('path')

const app = express()

app.use(serveStatic('build', {
  extensions: ['html'],
  setHeaders(res, path) {
    const isRevved = /[a-f0-9]{7,}/.exec(path)
    res.setHeader('Cache-Control',
      isRevved
        ? `max-age=31536000,immutable`
        : `max-age=0,s-maxage=31536000` )
  }
}))
app.get('*', function (request, response) {
  response.sendFile(path.resolve(__dirname, 'build/200.html'));
});

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Listening on port ${port}`))
