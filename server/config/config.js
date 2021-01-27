const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/productdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true

})

    .then(() => console.log("DB connect established"))
    .catch(err => console.log("there was a screw up", err))