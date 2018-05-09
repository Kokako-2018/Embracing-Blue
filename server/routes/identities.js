const express = require('express')
const router = express.Router()
const server = require('../server')
const young = require('../db/young')
const women = require('../db/women')
const lgbt = require('../db/lgbt')
const multicultural = require('../db/multicultural')
const old = require('../db/old')


const request = require('superagent')

//db functions for these have yet to be made

router.get('/young', function (req, res) {
    young.getYoung()
        .then(young => {
            res.json(young)
        })
        .catch(err => {
            console.log({err})
            res.status(500).send('DATABASE ERROR: ' + err.message)
        })
})

router.get('/women', function (req, res) {
    young.getWomen()
        .then(women => {
            res.json(women)
        })
        .catch(err => {
            console.log({err})
            res.status(500).send('DATABASE ERROR: ' + err.message)
        })
})

router.get('/lgbt', function (req, res) {
    young.getLgbt()
        .then(lgbt => {
            res.json(lgbt)
        })
        .catch(err => {
            console.log({err})
            res.status(500).send('DATABASE ERROR: ' + err.message)
        })
})

router.get('/multicultural', function (req, res) {
    young.getMulticultural()
        .then(multicultural => {
            res.json(multicultural)
        })
        .catch(err => {
            console.log({err})
            res.status(500).send('DATABASE ERROR: ' + err.message)
        })
})

router.get('/old', function (req, res) {
    young.getOld()
        .then(old => {
            res.json(old)
        })
        .catch(err => {
            console.log({err})
            res.status(500).send('DATABASE ERROR: ' + err.message)
        })
})
