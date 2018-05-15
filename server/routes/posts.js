const express = require('express')
const router = express.Router()
const server = require('../server')

const posts = require('../db/posts')
const comments = require('../db/comments')

const request = require('superagent')

const { decode } = require('../auth/token')


router.get('/posts', function (req, res) {
  posts.getAllPosts()
    .then(posts => {
      res.json(posts)
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.post('/posts', decode, function (req, res) { //decode verifies token sent
  const data = req.body                             //to make sure it's valid
  data.user_id = req.user.id
  posts.addPost(data)
    .then(post => {
      res.status(201).json(post)
    })
    .catch(err => {
      console.log({ err })
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })

})

router.put('/posts/:id', decode, function (req, res) {
  posts.editPost(req.params.id, req.body)
    .then(post => {
      res.json(post)
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })

})

router.delete('/posts/:id', decode, function (req, res) {
  posts.deletePost(req.params.id)
    .then(post => {
      res.json(post)
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })

})

router.get('/posts/:id/comments', function (req, res) {
  comments.getComments(req.params.id)
    .then(post => {
      res.json(post)
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })

})

router.post('/posts/:id', decode, function (req, res) {
  const newComment =
    {
      ...req.body,
      user_id: req.user.id,
      post_id: req.params.id
    }

  console.log(newComment)
  // user.id from user table will be equal
  comments.addComment(newComment) //to user_id column in comments table
    .then(post => {
      res.json(post)
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })

})

router.put('/posts/:id/comments/:comment_id', decode, function (req, res) {
  comments.editComment(req.params.comment_id)
    .then(post => {
      res.json(post)
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })

})

router.delete('/posts/:id/comments/:comment_id', decode, function (req, res) {
  console.log(req.params)
  comments.deleteComment(req.params.comment_id, )
    .then(post => {
      res.json(post)
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })

})

module.exports = router
