const fs = require("fs");
// const db = require("./db/db.json")

module.exports = (app) => {

    let db = JSON.parse(fs.readFileSync('db/db.json', 'utf8'));
    // console.log(db)

    // app.use('/some-other-route', function(req, res) {
    //     res.send("Hi there!")
    // })

    // 1 (app.get) GET `/api/notes` - Should read the `db.json` file and return all saved notes as JSON.

    app.get('/api/notes', function (req, res) {
        // return res.json(db);
        // res.json(db);
        res.send(db);
        console.log(db)
    })
    
    // 2 (app.post) POST `/api/notes` - Should receive a new note to save on the request body, add it to the `db.json` file, 
    // and then return the new note to the client.
    //how to add to the json file using a post route? 

    app.post('/api/notes', function (req, res) {
        let newNote = req.body;
        let highestId = 1;
        if (db.length) {
            highestId = Math.max(...(db.map(note => note.id)));
            highestId++        
        }

        newNote.id = highestId;
        db.push(newNote);
        // res.json(db.slice(-1));
        res.json(db);

        fs.writeFileSync( 'db/db.json', JSON.stringify( db ) )
        res.send( db )
    });

    // app.post('/api/notes', function(req, res) {
    //     fs.write(db, "Hello World")
    // })

    // 3 (app.delete) DELETE `/api/notes/:id` - Should receive a query parameter containing the id of a note to delete. 
    // This means you'll need to find a way to give each note a unique `id` when it's saved. 
    // In order to delete a note, you'll need to read all notes from the `db.json` file, remove the note with the given `id` property, 
    // and then rewrite the notes to the `db.json` file.

    app.delete('/api/notes/:id', function (req, res) {
        let deleteNote = req.params.id
        db = db.filter( note => note.id != deleteNote)
        res.end("Note has been deleted");

});
}
