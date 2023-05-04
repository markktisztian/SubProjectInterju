const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const router = express.Router();

const app = express();
const port = process.env.PORT || 3000;
const cors = require('cors');

app.use(cors());

app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/BlockChain', { useNewUrlParser: true });
const db= mongoose.connection
db.on('error',(error)=>console.error(error))
db.once('open',()=> {
    console.log('Connected to Database')
})

const Data = mongoose.model('Data', {
    name: String,
    email: String,
});

app.post('/api/sub', (req, res) =>{
    const {name, email} = req.body;
        const newData = new Data({ name, email }); 
        newData.save()
            .then(_result => {
                res.status(200).send(newData);
            })
            .catch(err => {
                res.status(500).send(err);
            });
    }
);


app.get('/api/currentData', (_req, res) => {
    res.status(200).send();
  });

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
module.exports = router;