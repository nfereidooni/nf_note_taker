const fs = require("fs");

module.exports = (app) => {

    let db = JSON.parse(fs.readFileSync('db/db.json', 'utf8'));

    // 1 (app.get) GET `/api/notes`

    app.get('/api/notes', function (req, res) {
        // return res.json(db);
        // res.json(db);
        res.send(db);
        console.log(db)
    })
    
    // 2 (app.post) POST `/api/notes`

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

    // 3 (app.delete) DELETE `/api/notes/:id` 

    app.delete('/api/notes/:id', function (req, res) {
        let deleteNote = req.params.id
        db = db.filter( note => note.id != deleteNote)
        res.end("Note has been deleted");

});
}
