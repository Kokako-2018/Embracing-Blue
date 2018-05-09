const express = require('express')
const router = express.Router()
const server = require('../server')

const posts = require('../db/posts') 

const request = require('superagent')

//db functions for these have yet to be made

router.get('/posts', function (req, res) {
  posts.getAllPosts()
    .then(post => {
      res.json(post)
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
  })
})

router.post('/posts', function (req, res) {
  posts.addPost(req.body)
    .then(post => {
      res.json(post)
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
  })

})

router.put('/posts/:id', function (req, res) {
  posts.editPost(req.params.id)
    .then(post => {
      res.json(post)
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
  })

})

router.delete('/posts/:id', function (req, res) {
  posts.deletePost(req.params.id)
    .then(post => {
      res.json(post)
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
  })

})

router.get('/posts/:id/comments', function (req, res) {
  posts.getComments()
    .then(post => {
      res.json(post)
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
  })

})

router.post('/posts/:id', function (req, res) {
  posts.addComment(req.body)
    .then(post => {
      res.json(post)
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
  })

})

router.put('/posts/:id/comments/:id', function (req, res) {
  posts.editComment(req.params.id)
    .then(post => {
      res.json(post)
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
  })

})

router.delete('/posts/:id/comments/:id', function (req, res) {
  posts.deleteComment(req.params.id)
    .then(post => {
      res.json(post)
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
  })

})
