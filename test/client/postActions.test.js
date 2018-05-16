import posts from '../../client/reducers/posts'
import { receiveAllPosts, addPostAction, editPostAction, deletePostAction } from '../../client/actions/posts'
import nock from 'nock'



test('Receive All Posts action creator', () => {
  const fakePosts = [
    'Post One',        // creating fake data for test
    'Holy moly another post'
  ]

  const expected = {
    type: 'RECEIVE_ALL_POSTS', //expect this action from actions/action.js
    posts: fakePosts //date being passed to posts is our created fake data
  }

  const actual = receiveAllPosts(fakePosts) //actual is calling our real function but
  //is passing it our fake posts as data
  expect(actual).toEqual(expected)
})



test('receiveAllPosts will dispatch an action on success', () => {
  const fakePosts = [
    'A hella post',
    'Gosh me would you check the state of this post!'
  ]
  const scope = nock('http://localhost:8080')
    .get('/api/posts')
    .reply(200, fakePosts);

  const expectedAction = {
    type: 'RECEIVE_ALL_POSTS',
    posts: fakePosts
  }

  const dispatch = jest.fn()
    .mockImplementationOnce(action => {
      expect(action).toEqual(expectedAction)
      scope.done()
    })

  receiveAllPosts(dispatch)

})



test('receiveAllPosts error', () => {
  const scope = nock('http://localhost:8080')
    .get('/api/posts')
    .reply(404);

  const actual = receiveAllPosts()()
  expect(actual).toBe(undefined)
})



test('test addPost action creator', () => {
  const fakePost = [
    'This post is very fake'
  ]

  const expected = {
    type: 'ADD_POST',
    post: fakePost
  }

  const actual = addPostAction(fakePost)

  expect(actual).toEqual(expected)
})
