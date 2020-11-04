const fs = require("fs");
const db = require("./db/db.json")

module.exports = (app) => {

    app.use('/some-other-route', function(req, res) {
        res.send("Hi there!")
    })
    // 1 (app.get) GET `/api/notes` - Should read the `db.json` file and return all saved notes as JSON.

    app.get('/api/notes', function(req, res) {
        res.send(db)
    })
    

    // 2 (app.post) POST `/api/notes` - Should receive a new note to save on the request body, add it to the `db.json` file, 
    // and then return the new note to the client.
    //how to add to the json file using a post route? 

    // app.post('/api/notes', function(req, res) {
    //     fs.write(db, "Hello World")
    // })

    // 3 (app.delete) DELETE `/api/notes/:id` - Should receive a query parameter containing the id of a note to delete. 
    // This means you'll need to find a way to give each note a unique `id` when it's saved. 
    // In order to delete a note, you'll need to read all notes from the `db.json` file, remove the note with the given `id` property, 
    // and then rewrite the notes to the `db.json` file.

};


// Application should allow users to create and save notes.

// Application should allow users to view previously saved notes.

// Application should allow users to delete previously saved notes.