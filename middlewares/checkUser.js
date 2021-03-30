import pool from '../db/pg.js';
const checkUser = async (req, res, next) => {
    const {id} = req.params;
    const {rowCount, rows }= await pool.query('SELECT * FROM users WHERE id=$1', [id]);
    if (!rowCount) return res.status(404).json({message: `User with id of ${id} does not exist`})
};

export default checkUser;