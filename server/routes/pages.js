const express = require('express')
const router = express.Router()
const server = require('../server')

const identities = require('../db/pages')
const resources = require('../db/pages')

const request = require('superagent')

const { decode } = require('../auth/token')



router.get('/resources/edit/:id', decode, function (req, res) {
	resources.getPages(req.params.id)
		.then(pages => {
			res.json(pages)
		})
		.catch(err => {
			res.status(500).send('DATABASE ERROR: ' + err.message)
		})
})

router.put('/resources/edit/:id', decode, function (req, res) {
	resources.editPages(req.params.id, req.body)
		.then(pages => {
			res.json(pages)
		})
		.catch(err => {
			res.status(500).send('DATABASE ERROR: ' + err.message)
		})		
})

router.get('/identities/edit/:id', decode, function (req, res) {
	identities.getPages(req.params.id)
		.then(pages => {
			res.json(pages)
		})
		.catch(err => {
			res.status(500).send('DATABASE ERROR: ' + err.message)
		})
})

router.put('/identities/edit/:id', decode, function (req, res) {
	identities.editPages(req.params.id, req.body)
		.then(pages => {
			res.json(pages)
		})
		.catch(err => {
			res.status(500).send('DATABASE ERROR: ' + err.message)
		})		
	})

	module.exports = router