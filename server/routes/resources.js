const express = require('express')
const router = express.Router()
const server = require('../server')
const depression = require('../db/depression')
const anxiety = require('../db/anxiety')
const prevention = require('../db/prevention')

const request = require('superagent')

//db functions for these have yet to be made

router.get('/depression', function (req, res) {
    depression.getDepressed()
        .then(depression => {
            res.json(depression)
        })
        .catch(err => {
            console.log({ err })
            res.status(500).send('DATABASE ERROR: ' + err.message)
        })
})

router.get('/anxiety', function (req, res) {
    depression.getAnxiety()
        .then(anxiety => {
            res.json(anxiety)
        })
        .catch(err => {
            console.log({ err })
            res.status(500).send('DATABASE ERROR: ' + err.message)
        })
})

router.get('/prevention', function (req, res) {
    depression.getPrevention()
        .then(prevention => {
            res.json(prevention)
        })
        .catch(err => {
            console.log({ err })
            res.status(500).send('DATABASE ERROR: ' + err.message)
        })
})