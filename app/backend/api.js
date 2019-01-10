module.exports = function (app, db) {

    app.get('/getValues', function (req, response) {
        db.collection("Board games").find({}).toArray (function (err, docs) {
            response.status(200);
            response.send(JSON.stringify(docs))
        });
    })

    // app.post('/createValue', function (req, response) {
    //     const data = req.body
    //     db.collection("Board games").insertOne(data, null, function (err, docs) {
    //         response.status(200);
    //         response.send(JSON.stringify(docs))
    //     })
    // })

    // app.delete('/deleteValue/:val'), function (req, response) {
    //     let itemId = req.params.val
    //     const query = {_id: itemId}
    //     db.collection("Board games").deleteOne(query, null, function (err, docs) {
    //         response.status(200);
    //         response.send(JSON.stringify(docs))
    //     })
    // }





}