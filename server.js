require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://rb14101999bti:rb14101999bti@cluster0.i2qoby4.mongodb.net/')
.then(() => {console.log('DB Connected')})
.catch((err) => {
    console.log(err);
});

const itemRoutes = require('./routes/item');
const app = express();
const PORT = process.env.PORT || 5000;

const allowedOrigins = ['https://ecommerce-site-danish.netlify.app','https://abcdefghi-357aalqga-rishabh-bansals-projects-738eae69.vercel.app'];
app.use(cors({
    origin : function(origin, callback){
        if(allowedOrigins.indexOf(origin) !== -1 || !origin){
            callback(null, true)
        }else {
            callback(new Error('Not allowed, blocked by cors'))
        }
    },
    methods : ['GET','POST','PUT','DELETE'],
    allowedHeaders : '',
    credentials : true
}));


app.use('/api/v1', itemRoutes);

app.use(express.json());
// app.listen(PORT, () => {
//     console.log('listening on port ' , PORT)
// })

