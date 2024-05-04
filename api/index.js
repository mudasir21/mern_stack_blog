import express from 'express'      // changes type to module in json so would work now
// const express = require('express')

import mongoose from 'mongoose';
import dotenv from 'dotenv'

// const mongoURL = ''

dotenv.config();

mongoose.connect(process.env.MONGOURL)
.then(() => {
    console.log("mongodb connected successfully");
}).catch(error => {
    console.log(error)
})
const app = express();

app.listen(3000, () => {
    console.log("listening to port 3000...");
})