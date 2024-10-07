const express = require('express')
const methodOverride = require('method-override')
const bodyParser = require('body-parser') 
const cookieParser = require('cookie-parser')
const session = require('express-session')
const flash = require('express-flash')
const multer = require('multer')
require('dotenv').config()

const database = require("./config/database")
database.connect()

const systemConfig = require("./config/system")
const route = require("./routes/client/index.route")
const routeAdmin = require("./routes/admin/index.route")

const app = express()
const port = process.env.PORT

app.use(methodOverride('_method'))

app.use(bodyParser.urlencoded({ extended: false }))

app.set("views", `${__dirname}/views`)
app.set("view engine", "pug")

//Flash
app.use(cookieParser('hoang-phan'))
app.use(session({
    secret: 'hoang-phan',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}));
app.use(flash())

//App Locals Var
app.locals.prefixAdmin = systemConfig.prefixAdmin

app.use(express.static(`${__dirname}/public`))

//Routes
route(app)
routeAdmin(app)

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
}) 