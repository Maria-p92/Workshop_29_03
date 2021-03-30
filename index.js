import express from 'express';
import morgan from 'morgan';
import 'dotwnv/config';
import 'colors';
import users from './routes/users.js';

const app = express()
const port = process.env.PORT || 5000

if(process.env.NODE_ENV )

app.use(morgan('dev'))

app.use('/users', users )
app.get('/', (req, res) => res.send('Welcome to Api'))

app.listen(port, ()=>console.log(`Server running on port ${port}`.yellow))