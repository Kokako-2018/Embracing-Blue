const express = require('express')
const router = express.Router()
const server = require('../server')

const posts = require('../db/posts')
const comments = require('../db/comments')

const request = require('superagent')



router.get('/posts', function (req, res) {
  posts.getAllPosts()
    .then(posts => {
      res.json(posts)
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
  })
})

router.post('/posts', function (req, res) {
  const data = req.body
  data.user_id = 1
  posts.addPost(data)
    .then(post => {
      res.status(201).json(post)
    })
    .catch(err => {
      console.log({err})
      res.status(500).send('DATABASE ERROR: ' + err.message)
  })

})

router.put('/posts/:id', function (req, res) {
  posts.editPost(req.params.id, req.body)
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
  comments.getComments()
    .then(post => {
      res.json(post)
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
  })

})

router.post('/posts/:id', function (req, res) {
  comments.addComment(req.body)
    .then(post => {
      res.json(post)
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
  })

})

router.put('/posts/:id/comments/:comment_id', function (req, res) {
  comments.editComment(req.params.comment_id)
    .then(post => {
      res.json(post)
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
  })

})

router.delete('/posts/:id/comments/:comment_id', function (req, res) {
  comments.deleteComment(req.params.comment_id,)
    .then(post => {
      res.json(post)
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
  })

})

module.exports = router
