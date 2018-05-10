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
  
  const fakePost = {
    thread_content: 'Test',
    title: 'Test title',
    image_url: 'fake/blah',
    user_id: 1
  }
  const expected = {
    ...fakePost,
    id: 4,
    is_approved: 0
  }
  return posts.addPost(fakePost, testDb)
    .then(actual => {
      expect(actual).toEqual(expected)
      return testDb('posts')
    })
    .then(posts => {
      expect(posts.length).toBe(4)
    })
})