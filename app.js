require('dotenv').config();
const express = require('express');
const expressSession = require('express-session');
const path = require('path');
const cookieParse = require('cookie-parser');
const consign = require('consign');
const mongoose = require('mongoose');

const app = express();
const key = process.env.DB_PASS;
const user = process.env.DB_USER;

mongoose.connect(`mongodb+srv://${user}:${key}@cluster0.smzrjmr.mongodb.net/noticias?retryWrites=true&w=majority`,
{useNewUrlParser: true, useUnifiedTopology: true}).then(() => {
  console.log('banco de dados conectado');
})
.catch((err) => {
  console.log('erro na conexão', err.message+'\n')
})

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(cookieParse('portal-noticias'));
app.use(expressSession());
app.use(express.json());
app.use(express.urlencoded());
app.use(express.static(path.join(__dirname, 'public')));

consign({})
.include('models')
.then('controllers')
.then('routes')
.into(app);

app.listen(5000, ()=>{
  console.log('Servidor rodando');
})