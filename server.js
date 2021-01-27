const express = require('express');
const cors = require('cors');
const app = express();

require('./server/config/config');

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ exteneded: true }))

require('./server/routes/routes')(app);

app.listen(8030, () => {
    console.log('you are now listening at port 8030!')
})