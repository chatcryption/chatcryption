const { Pool } = require('pg');

const pool = new Pool({
    host: 'localhost',
    max: 9,
    user: 'admin',
    password: 'ilovetesting'

})

module.exports = pool;