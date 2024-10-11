import express from 'express';
import colors from 'colors';
import moragan from 'morgan';
import dotenv from 'dotenv';

//const express = require('express')
//const colors = require('colors')
//const morgan = require('morgan')
//const dotenv = require('dotenv')

dotenv.config();

const app = express();

app.use(express.json());
app.use(moragan('dev'));

app.get('/',(req,res) => {
    res.status(200).send({
        message : "Server running",
    });
});

const PORT = process.env.PORT || 8080
const NODE_ENV = process.env.NODE_ENV || 'development';

app.listen(PORT,()=>{
    console.log(`Server running in ${NODE_ENV} mode on port ${PORT}`.bgCyan.white);
});