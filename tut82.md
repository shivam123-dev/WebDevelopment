# Searching for data in mondo db
use shivamKart

# This query will give all the objects with rating equal to 5
db.items.find({rating:5}) # here {rating:5} is a filter

# This query will give all the objects with rating greater than or equal to 3.5
db.items.find({rating:{$gte: 3.5}})

# This query will give all the objects with rating greater than 3.5
db.items.find({rating:{$gt: 3.5}})

# And operator
db.items.find({rating:{$gt: 3.5}, price:{$gt: 4000}})

# This query will give all the objects with rating less than 5 and qty less than 1000
db.items.find({rating:{$lt: 5}, qty:{$lt: 1000}})

# OR Operator
db.items.find({ 
    $or: [{rating:{$gt: 3.5}, price:{$gt: 4000}}]
})

# Projection in Mongo DB
db.items.find({rating:{$gt: 3.5}},{rating:1})