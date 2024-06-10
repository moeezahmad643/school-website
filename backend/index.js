const express = require('express')
const app = express()
const port = 3000
const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('./students', (err) => {
    if (err) return console.error(err.message);
    console.log('Connected to the SQlite database.');
});

const createTableQuery = `
CREATE TABLE IF NOT EXISTS students (
id INTEGER PRIMARY KEY AUTOINCREMENT,
name TEXT,
roll TEXT UNIQUE,
age INTEGER,
class INTEGER
)
`;

// Run the SQL query to create the table
db.serialize(() => {
    db.run(createTableQuery, (err) => {
        if (err) {
            console.error('Error creating table:', err.message);
        } else {
            console.log('Table created successfully');
        }
    });
});

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`The Server Is live on http://localhost:${port}`)
})