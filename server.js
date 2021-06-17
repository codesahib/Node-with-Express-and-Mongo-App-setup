// Main server code
import express from "express" // Or const express = require('express');
import cors from "cors"
import restaurants from "./api/restaurants.route.js"

const app = express()

app.use(express.static('./public')) // To get static resources

app.use(cors()) // Middleware
app.use(express.json()) // Body parser. Server can accept JSON in body of request

app.get('/',(req,res) => {
    res.send('This is home page')
});

app.use("/api/v1/restaurants", restaurants) // Backend api
app.use("*", (req,res) => res.status(404).json({error: "Page not found"})) // Or app.all('*',(req,res) => {res.status(404).send('Not Found')})

export default app