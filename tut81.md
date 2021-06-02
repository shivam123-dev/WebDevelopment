# Inserting data in Mongo DB

# creates a data base in mongo db
use shivamKart 

# for creating a table in mongodb
db.items.insertOne({name: "Nokia Lumia", price: 24000, rating: 4.5, qty: 233, sold:98})

# for inserting more than one data items in table at a time
db.items.insertMany([{ name: "Nokia Lumia", price: 24000, rating: 4.5, qty: 233, sold: 98 }, { name: "Nokia 3310", price: 200, rating: 5, qty: 250, sold: 200 }])
db.items.insertMany([{ name: "Nokia Lumia", price: 24000, rating: 4.5, qty: 233, sold: 98 }, { name: "Nokia 3310", price: 200, rating: 5, qty: 250, sold: 200, isBig:true}])

# for finding/querying the data items in table
db.items.find()