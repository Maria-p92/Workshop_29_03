import express from 'express';
import checkUser from '../middlewares/checkUser.js';

const users = express.Router()

/*
@route GET /
@desc
@access Public
*/

//GET users
users.get('/', (req, res)=> res.send('GET all'));

//GET /users/:id
users.get('/:id', (req, res, next) => {
    db.query('SELECT * FROM users WHERE id = $1', [req.params.id], (err, res) => {
      if (err) {
        return next(err)
      }
      res.send(res.rows[0])
    })
  });

// POST /users
users.post('/', (req, res)=> res.send('POST'));

// PUT /users/:id
users.put('/:id', (req, res)=> res.send('PUT'));

// DELETE /users/:id
users.delete('/', (req, res)=> res.send('DELETE'));



export default users;

