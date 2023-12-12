const express = require('express');
const app = express();
const methodOverride = require('method-override')

/*ROUTES IMPORTS */
const mainRoutes = require('./src/routes/mainRoutes');
const shopRoutes = require('./src/routes/shopRoutes');
const adminRoutes = require('./src/routes/adminRoutes');
const authRoutes = require('./src/routes/authRoutes');


app.use(express.static('public'));
app.use(express.urlencoded());
app.use(express.json());
app.use(methodOverride('_method'));

app.use('/', mainRoutes);
app.use('/shop', shopRoutes);
app.use('/admin', adminRoutes);
app.use('/admin', authRoutes);

app.listen(4000, () => console.log( 'servidor corriendo en http://localhost:4000'));