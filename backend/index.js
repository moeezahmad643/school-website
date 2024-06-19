const express = require('express')
const app = express()
const port = 3000
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors')

app.use(cors())
app.use(express.json())


let db = new sqlite3.Database('./students', (err) => {
    if (err) return console.error(err.message);
    console.log('Connected to the SQlite database.');
});


const tocreateeven = `
    CREATE TABLE IF NOT EXISTS event (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        mytitle TEXT,
        description TEXT,
        date TEXT,
        img TEXT
    )
`;

// Run the SQL query to create the table
db.serialize(() => {
    db.run(tocreateeven, (err) => {
        if (err) {
            console.error('Error creating table:', err.message);
        } else {
            console.log('Table created successfully');
        }
    });
});

app.post('/events', (req, res) => {
    const data = req.body
    const { title, description, date, image } = req.body
    console.log({ title, description, date, image })

    if (title && description && data && image) {

        db.run(`INSERT INTO event ( mytitle, description, date, img) VALUES (?, ?, ?, ?)`,

            [title, description, date, image],
            function(err) {
                if (err) {
                    console.error('Error inserting event:', err.message);
                    return res.json({ error: "Internal database error." });
                }

                console.log(`A new event has been inserted with id ${this.lastID}`);
                res.status(201).json({ message: "Event added successfully." });
            });


    }
    else {
        res.json({ data: "we don't get data" })
    }
})

app.get('/event',(req,res)=>{
    db.all('select * from event',(err,result)=>{

        if(err){
            console.log(err);
            res.json({
                data:'error in the database'
            })
        }else{
            res.json(result)
        }
    }
)
})

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`The Server Is live on http://localhost:${port}`)
})