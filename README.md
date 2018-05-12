# Out Of The Blue

The focus of this website is to provide mental health resources for those affected and their communities

We wanted to include the full stack (including auth) in a large-scale app

Our hopes are to help as many people as possible

Built by Mark, Priya, Theta, Sam, Hameet, and Annette




## User Stories

### MVP

As a user:
* I want to be able to clearly see resources available on prevention, depression, and anxiety that I can click on to view more information. I also want to be able to do this without the use of a mouse (through tab-indexes) and also on my mobile
* I want to be able to access resources directly relevent to my identity
* I want to be able to register/login and discuss on a forum my own experiences and contribute to other discussions

### Stretch

As an admin:
* I want to be able to vet the contributions of useres before they are posted
* As an admin I would like to be able fill out a template

As a user:
* I would be able to receive an email verification upon registering
* I would like to have the option to sign up for a mailing list
* I would like to be able to see FAQ
* I would like to be able approach/understand mental health through the eyes of the Maori culture
* I want the ability to download information for when I need it and may not have access to internet

.
.
.


## Views (client side)
### App.jsx - stateful
* Will dispatch props
* Renders other components
* <Route><Route/> and path =  are defined here
 
 ### components
 * Header Component 
 * spacer image component
### Resources - just functional

* Prevention.jsx
* Anxiety.jsx
* Depression.jsx

### Identities - just functional
* Young.jsx
* Women.jsx
* Men.jsx
* Lbgt.jsx
* Multicultural.jsx
* Old.jsx


## Post Actions (client side)
| type | data | purpose |
| --- | --- | --- |
| RECEIVE_ALL_POSTS | posts | For retreving all user posts from the server response |
| ADD_POST | post | For adding a post to the client store after is had been added to the db |
| EDIT_POST | id | For editing a post |
| DELETE_POST | id | For deleting a post from the db |

## Comment Actions (client side)
| type | data | purpose |
| --- | --- | --- |
| RECEIVE_COMMNENTS | comments | For retreving all comments on a posts from the server response |
| ADD_COMMENT| comment | For adding a comment to a post on the client store after is had been added to the db |
| EDIT_COMMENT | id | For editing a comment |
| DELETE_COMMENT | id | For deleting a comment from the db |

## Login/Logout Actions (client side)
| type | data | purpose |
| --- | --- | --- |
| LOGIN_REQUEST | isFetching: true, isAuthenticated: false |  |
| LOGIN_SUCCESS | isFetching: false, isAuthenticated: true, user |  |
| LOGIN_FAILURE | isFetching: false, isAuthenticated: false, message |  |
| LOGOUT_REQUEST | isFetching: true, isAuthenticated: true |  |
| LOGOUT_SUCCESS | isFetching: false, isAuthenticated: false |  |


## Reducer folders
* auth.js
* comments.js
* posts.js
* index.js - this will contain the combineReducers function

Store will be in the index.js in clients side


## Routes (server-side)
### auth.js
* router.post
* register function - links to router.post

### resources.js
* router.get('/depression')
* router.get('/anxiety')
* router.get('/prevention')

### identities.js
* router.get('/young')
* router.get('/women')
* router.get('/men')
* router.get('/lgbt')
* router.get('/multicultural')
* router.get('/old')

## posts.js
* router.get('/posts') - link to db function getAllPosts() --show all posts
* router.post('/posts') - link to addPost() --click on add post button and redirect to a form?
* router.put('/posts/:id') - link to editPost() -- edit existing post (user id must match user id of created post)
* router.delete('/posts/:id) - link to deletePost() -- delete post matching id

* router.get('/posts/:id/comments) - link to getComments() --get all comments on an individual post
* router.post('/posts/:id) - link to addComment() -- add comment to specific post
* router.put('/posts/:id/comments/:id) - link to editComment() -- edit your own comment on a post
* router.delete('/posts/:id/comments/:id) - link to deleteComment() -- delete your own comment on a post



## Db functions

### users.js (auth)
* createUser
* userExists
* getUserByName

### posts.js
* getAllPosts
* addPost
* editPost
* deletePost

### comments.js - these will probably need a .join .where to connect them to users and posts tables
* getComments
* addComment
* editComment
* deleteComment



## Database model

### Posts
 | Column Name | Data Type |
 | --- | --- |
 | id | integer |
 | user_id | intger |
 | content | text |
 | image_url | string |
 | is_approved | boolean |
 
 ### Comments
  Column Name | Data Type |
 | --- | --- |
 | id | integer |
 | user_id | intger |
 | post_id | integer |
 | comment | text |
 | is_approved | boolean |
 

### Users (join to forum)
 | Column Name | Data Type |
 | --- | --- |
 | id | integer |
 | user_name | string |
 | preferred_name | string |
 | email_address | string |
 | is_admin | boolean |
 | hash | text |
 ---



## Setup

Run the following commands in your terminal:

```sh
yarn install
knex migrate:latest
knex seed:run

```

  `yarn dev` for bundling, watch and nodemon

  `yarn start` only runs server (setup for heroku)


## Heroku!!!

### Creating your app

Create your app with `heroku create [name]`

You can check that this was successful by running `heroku apps` to view a list of your apps


### Adding postgres

Add postgresql (hobby dev) to your app at `https://dashboard.heroku.com/apps/[APP NAME HERE]/resources`

Check that pg has been added by running `heroku addons` to ensure the postgresql db is on your app


### Deploying!

I have created several npm scripts that will be useful for deploying your app to heroku easily.

`yarn run heroku:deploy` will push your local master branch to your heroku app

`yarn run heroku:migrate` will run your knex migrations on your deployed heroku app

`yarn run heroku:seed` will run your seeds on your deployed app

If ever you need to rollback, you can also just use `yarn run heroku:rollback`


### Ta-Da!
Your app should be deployed!
