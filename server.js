if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');

const indexRouter = require('./routes/index')

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.set('layout', 'layouts/layout');
app.use(expressLayouts);
app.use(express.static('public'));

const mongoose = require('mongoose')
mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true })
const db = mongoose.connection
db.on('error', error => console.error(error))
db.once('open', () => console.error('Connected to Mongoose'))

app.use('/', indexRouter)

app.listen(process.env.PORT || 3000)

/*The line app.set('layout', 'layouts/layout') is a configuration setting in an Express application that sets the default layout file for the application. In this line, app.set('layout', ...) is used to set a property in the Express application configuration, where the property key is 'layout' and the property value is the location of the default layout file.
The value of the property is set to 'layouts/layout', which is the location of the default layout file relative to the root directory of the application. The file extension is not included in the value because Express will automatically look for an .ejs file with the specified name.
A layout is a template that defines the structure and common elements of a group of views in an Express application. By using a layout, the common elements of a website can be maintained in a single place, reducing duplication and making it easier to make changes that affect the entire site.
By setting the default layout file with the line app.set('layout', 'layouts/layout'), Express will use the specified layout file as the default layout for the views in the application. This means that views in the application will extend the layout and include the common elements defined in the layout file.
In this way, the line app.set('layout', 'layouts/layout') sets the default layout file for the Express application, allowing the use of layouts with the EJS template engine and making it easier to maintain the common elements of the views in the application. */
