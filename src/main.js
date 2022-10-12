// @ts-check

//Template engine: Pug
//CSS framekwork: Tailwind CSS

const Koa = require('koa')
const path = require('path')
const Pug = require('koa-pug')

const app = new Koa()
const port = 3000


// @ts-ignore
new Pug({
  viewPath: path.resolve(__dirname, './views'),
  app, // Binding `ctx.render()`, equals to pug.use(app)
})

app.use(async (ctx) => {
    await ctx.render('main')
})

app.listen(port, () => {
    console.log(`Listening at port: ${port}`)
})