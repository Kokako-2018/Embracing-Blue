import postsReducer from '../../client/reducers/posts'

test('Reducer Initial State', () => {
  const expected = []

  const actual = postsReducer(undefined, {})

  expect(actual).toEqual(expected)
})


test('RECEIVE_ALL_POSTS case', () => {
  const fakePosts = [
    'This is a fake post',
    'What do you know? Another fake post'
  ]

  const expected = [...fakePosts]

  const action = {
    type: 'RECEIVE_ALL_POSTS',
    posts: fakePosts
  }

  const actual = postsReducer(undefined, action)

  expect(actual).toEqual(expected)
})



test('delete cat case', () => {
  const post = {
    content: 'this post is gona be deleted'
  }

  const action = {
    type: 'DELETE_POST',
    post
  }

  const initialState = [
    post
  ]

  const expected = []

  const actual = postsReducer(initialState, action)

  expect(actual).toHaveLength(initialState.length - 1)
  expect(actual.find(actualPost => actualPost.content == post.content)).toBeFalsy()
})