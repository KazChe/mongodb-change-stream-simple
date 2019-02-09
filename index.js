const client = require("mongodb").MongoClient;
const config = {
    mongoDBUrl : "ADD_YOUR_URL_HERE",
};
const url = config.mongoDBUrl;
const matchStage = {
      $match : {"operationType" : "insert" }
};

client.connect(url, (err, client) => {
    if (err) throw err;

var coll = client.db("ADD_DB_NAME").collection("ADD_COLLECTION_NAME");
const changeStream = coll.watch([matchStage]);

changeStream.on('change', c => {
    console.log('Change Stream:', JSON.stringify(c));

});