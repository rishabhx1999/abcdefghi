require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const itemRoutes = require('./routes/item');

mongoose.connect('mongodb+srv://rb14101999bti:rb14101999bti@cluster0.i2qoby4.mongodb.net/mydatabase', { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
    console.log('DB Connected');
    Item.syncIndexes(); // Sync the indexes
})
.catch((err) => {
    console.log(err);
});


const app = express();
const PORT = process.env.PORT || 5000;

const allowedOrigins = [
    'https://ecommerce-site-danish.netlify.app',
    'https://ecommerce-store-eosin-chi.vercel.app',
    'http://localhost:5173'
];

const corsOption = {
    origin : function(origin, callback){
        if(allowedOrigins.indexOf(origin) !== -1 || !origin){
            callback(null, true)
        }else {
            callback(new Error('Not allowed, blocked by cors'))
        }
    },
    methods : ['GET','POST','PUT','DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials : true
};


app.use(cors(corsOption));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());


app.get('/', (req, res) => {
    res.send('Hello Express!');
});

app.use('/api/v1', itemRoutes);

app.listen(PORT, () => {
    console.log('listening on port ' , PORT)
})

