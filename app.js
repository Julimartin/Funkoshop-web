const express = require('express');
const methodOverride = require('method-override');
const app = express();
const path = require('path');


/*ROUTES IMPORTS */
const mainRoutes = require('./src/routes/mainRoutes');
const shopRoutes = require('./src/routes/shopRoutes');
const adminRoutes = require('./src/routes/adminRoutes');
const authRoutes = require('./src/routes/authRoutes');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './src/views'));

app.use(express.urlencoded());
app.use(express.json());
app.use(methodOverride('_method'));
app.use(express.static(path.resolve(__dirname, 'public')));

app.use('/', mainRoutes);
app.use('/shop', shopRoutes);
app.use('/admin', adminRoutes);
app.use('/auth', authRoutes);

app.listen(4000, () => console.log( 'servidor corriendo en http://localhost:4000'));