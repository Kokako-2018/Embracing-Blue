const request = require('supertest')

//The routes tests only test the responses of the route functions not whether a post is actually being posted or edited. It's not talking to the database at all. It is only the wiring i.e. that the route functions are receving and sending the correct responses. 

//post is defined below in the actual test
jest.mock('../../server/db/posts', () => ({
  getAllPosts: () => Promise.resolve([
    {id: 1, text: 'test text 1'},
    {id: 2, text: 'test text 2'}
  ]),
  addPost: (post) => Promise.resolve(post),
  editPost: (post) => Promise.resolve(post),
  deletePost: (post) => Promise.resolve(post)
}))

const server = require('../../server/server')

test('GET /posts', () => {
  const expectedLength = 2
  return request(server)
    .get('/api/posts')
    .expect(200)
    .then(res => {
      expect(res.body).toHaveLength(expectedLength)
    })
    .catch(err => {
      expect(err).toBeFalsy()
    })
})


//res.body is the thing which will come back after you send it using .send
test('POST /posts', () => {
  const fakePost = {
    id: 1
  }
  return request(server)
    .post('/api/posts')
    .expect(201)
    .send(fakePost)
    .then(res => {
      expect(res.body).toEqual(fakePost)
    })
    .catch(err => {
      expect(err).toBeFalsy()
    })
})


test('PUT/posts', () => {
  const post = {
    id: 1
  }

  return request(server)
    .put('/api/posts/' + post.id)
    .expect(200)
    .send(post)
    .then(res => {
      expect(res.body).toEqual('' + post.id)
    })
    .catch(err => {
      expect(err).toBeFalsy()
    })
})


test('DELETE/posts', () => {
  const postId = '1'

  return request(server)
    .delete('/api/posts/' + postId)
    .expect(200)
    .then(res => {
      expect(res.body).toEqual(postId)
    })
    .catch(err => {
      expect(err).toBeFalsy()
    })
})