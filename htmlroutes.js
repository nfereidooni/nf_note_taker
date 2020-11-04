const path = require("path");

module.exports = (app) => {

    // 1 app.get - > return the 'notes.html file'

    app.get("/notes", function (req, res) {
        res.sendFile(path.join(__dirname, '/public/notes.html'));
    });

    // 2 app.get - > return the 'index.html file'

    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, '/public/index.html'));
    });

};
