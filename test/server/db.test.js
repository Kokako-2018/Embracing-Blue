const request = require('supertest')

const env = require('./test-environment')
const posts = require('../../server/db/posts')

// Manage the test database

let testDb = null
beforeEach(() => {
  testDb = env.getTestDb()
  return env.initialise(testDb)
})
afterEach(() => env.cleanup(testDb))

// Tests

test('getAllposts function gets all posts', () => {
  const expected = 3
  return posts.getAllPosts(testDb)
    .then(posts => {
      const actual = posts.length
      expect(actual).toBe(expected)
    })
})

test('addPost functions adds a post', () => {
  const expected = 0
  return posts.addPost(testDb)
    .then(posts => {
      const actual = posts.length
      expect(actual).toBe(expected)
    })
})