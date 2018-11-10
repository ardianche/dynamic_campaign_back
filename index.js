const express = require('express');
const fileUpload = require('express-fileupload');
const path = require('path');
const app = express();
const db_conf = require('./config/db');
const courses = require('./routes/courses');
const campaigns = require('./routes/campaigns');
const conditions = require('./routes/conditions');
const tables = require('./routes/tables');
const port = 5000;
const cors = require('cors');

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());
app.use((res,req,next)=>{
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Header','*');
    next();
});

app.use('/api/courses',courses);
app.use('/conditions',conditions);
app.use('/campaigns',campaigns);
app.use('/tables',tables);
app.listen(port,()=>{
    console.log(`Server running on port: ${port}.`);
});
