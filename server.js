'use strict'





/******************************************************************************\
  Initialize the app
\******************************************************************************/

let app = require('koa')()

app.use(require('koa-logger')())
app.use(require('koa-static')('.'))





/******************************************************************************\
  Start the server
\******************************************************************************/

let port = process.env.PORT || 3000
app.listen(port)
