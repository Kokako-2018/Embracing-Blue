const request = require('supertest')

const env = require('./test-environment')
const postsDb = require('../../server/db/posts')

// Manage the test database

let testDb = null
beforeEach(() => {
  testDb = env.getTestDb()
  return env.initialise(testDb)
})
afterEach(() => env.cleanup(testDb))

// Tests

test('get all posts function', () => {
  return postsDb.getAllPosts(testDb)
    .then(posts => {
      expect(posts.length).toBe()
    })
})
