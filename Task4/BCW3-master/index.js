'use strict';
const express = require('express');
const app = express();
const multer = require('multer');
const path = require('path');

app.listen(5000);

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads');
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    },
});
const upload = multer({ storage: storage }).single('image');
app.post('/task2/upload', (req, res) => {
    upload(req, res ,(err) => {
        if(err){
            res.send('Error');
        }else{
            console.log(req.file);
            res.send('Upload done');
        }
    });
});



