show dbs
use shivamKart
show collections
db.items.find({price: 200})

# Deleting data from the Mongo Database
db.items.deleteOne({price: 200})
<!-- deleteOne will delete the matching document entry 
and will delete entry in case of muti document match -->

db.items.deleteMany({price: 24000})