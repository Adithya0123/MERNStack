// const mongoose = require('mongoose');

// const connectPromise = mongoose.connect(
//     "mongodb+srv://adithya12:Adithya011202@adithya.ciq8rrt.mongodb.net/?retryWrites=true&w=majority",
//     {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//     }
// );
//     connectPromise
//    .then(() => {
//         console.log("MongoDB Connection Successfull.");
//    })
// .catch((err) => {
//     console.log("Error in DB Connection");
// });

// module.exports = connectPromise;

const mongoose = require("mongoose");

const connect = mongoose.connect(
    "mongodb+srv://adithya12:Adithya011202@adithya.ciq8rrt.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);


connect.then(() => {
  console.log("MongoDB Connection Succeeded.");
}).catch(err => {
  console.log("Error in DB connection: " + err);
});

module.exports = connect;