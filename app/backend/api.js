const { ObjectID } = require('mongodb');
module.exports = function (app, db) {

    app.get('/getValues', function (req, response) {
        db.collection("Board games").find({}).toArray (function (err, docs) {
            response.status(200);
            response.send(JSON.stringify(docs))
        });
    })

    app.post('/createValue', function (req, response) {
        const data = req.body
        db.collection("Board games").insertOne(data, null, function (err, docs) {
            response.status(200);
            response.send(JSON.stringify(docs))
        })
    })

    app.delete('/deleteValue/:value', function (req, response) {
        // const itemId = req.params.value
        // const query = {_id: itemId}
        db.collection("Board games").deleteOne({_id: ObjectID( req.params.value)}, function (err, docs) {
            response.status(200);
            response.send(JSON.stringify(docs))
        })
    })

    app.get('/getValue/:searchValue', function (req, response) {
        const query = req.params.searchValue
        db.collection("Board games").find({category: query}).toArray (function (err, docs) {
            response.status(200);
            response.send(JSON.stringify(docs))
        });
        // {key: /.*chi.*/g}
    })





}