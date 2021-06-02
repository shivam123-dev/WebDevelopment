# Updating data from Mongo Database
show dbs
use shivamKart
show collections
db.anotherCollection.insertOne({a:80}) <!-- Creates "anotherCollection" named one more collection other than "items" collection-->

<!-- Updates the price of Nokia Lumia -->
db.items.find()
<!-- Updates only one -->
db.items.updateOne({"name": "Nokia Lumia"},{$set: {price:2}})
db.items.find()
<!-- Updates many -->
db.items.updateMany({name: "Nokia 3310"}, {$set: {price: 3, rating: 1}})
db.items.find()