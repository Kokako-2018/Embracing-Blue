# Embracing Blue

http://embracing-blue.herokuapp.com/

This is the final group-project of our 9 week EDA journey. We had one week to build this.

The focus of this website is to provide mental health resources for those affected and their communities

We wanted to include the full stack (including auth) in a large-scale app

Some of the technologies used include JavaScript, React, Redux, HTML, CSS, Bulma, Express, Node, Knex, PostgreSQL, SQLite3, Enzyme, and Cypress

Our hopes are to help as many people as possible

Built by Mark, Priya, Theta, Sam, Hameet, and Annette


---

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

---

## Views (Client Side)
  | name | purpose |
  | --- | --- |
  | Login | View for user to enter their login credentials |
  | Register | View for user to sign up for the App |
  | ConfirmLogout | View to checkout if logout is intentional |
  | CommentForm | For a user to add a comment to a post in the forum |
  | Comments | View to map over all comments |
  | EditPost | For a user to edit their own post in the the forum |
  | Invite | Ask user to join forum |
  | PostForm | For a user to submit a post to the forum |
  | Posts | View to get all posts |
  | EditIdentitiesPages | For admins to update itentities page content |
  | Lgbt | Resources for LGBTQAI+ |
  | Maori | Resources for Maori |
  | Men | Resources for Men |
  | Old | Resources for elderly |
  | Women | Resources for women |
  | Young | Resources for youth |
  | Anxiety | Resources for anxiety |
  | Depression | Resources for deperession |
  | Prevention | Resources for prevention of suicide |
  | Resources | Clickable icons for homepage |
  | App | Render all components and set <Routes> |
  | Footer | View for the footer |
  | Header | View for the header |
  | OurStories | Background to why we created the website |
  | SiteMap | View for easy access |
  | Tile | Template for images on homepage |
  
---

## Reducers (Client Side)

  | name | purpose |
  | --- | --- |
  | auth | Store information regarding user logins, auth status and auth errors |
  | comments | Store information regarding comments (from db) and how to edit, add and delete |
  | identitiesPage | Store information on receiving and editing itendity pages |
  | identity | Store information regarding viewing and dispaying identities |
  | index | Combining the reducers |
  | posts | Store information regarding posts, as well as adding, editing and deleting them |
  | resourcePage | Store information on receiving and editing resource pages |
  | resources | Store information regarding viewing and dispaying resources |

---

# Actions

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

## Pages Actions (client side)
| type | data | purpose |
| --- | --- | --- |
| RECEIVE_PAGE | page | For retreving a page from the server response |
| EDIT_PAGE | page | For editing a page |

## Identity Actions (client side)
| type | data | purpose |
| --- | --- | --- |
| VIEW_IDENTITY | identity | For retreving an identity from the server response |
| DISPLAY_IDENTITIES | identity | For displaying all identities |

## Resources Actions (client side)
| type | data | purpose |
| --- | --- | --- |
| VIEW_RESOURCE | resource | For retreving a resource from the server response |
| DISPLAY_RESOURCES | resource | For displaying all resources |

## Login/Logout/Register Actions (client side)
| type | data | purpose |
| --- | --- | --- |
| LOGIN_REQUEST | isFetching: true, isAuthenticated: false |  |
| LOGIN_SUCCESS | isFetching: false, isAuthenticated: true, user |  |
| LOGIN_FAILURE | isFetching: false, isAuthenticated: false, message |  |
| LOGOUT_REQUEST | isFetching: true, isAuthenticated: true |  |
| LOGOUT_SUCCESS | isFetching: false, isAuthenticated: false |  |

---

# API (Client - Server)

## API auth

| Method | Endpoint | Protected | Usage | Response |
| --- | --- | --- | --- | --- |
| Post | /api/auth/login | Yes | Log In a User | The Users JWT Token |
| Post | /api/auth/register | Yes | Register a User | The Users JWT Token |

## API comments

| Method | Endpoint | Protected | Usage | Response |
| --- | --- | --- | --- | --- |
| GET | /api/posts/${id}/comments | No | Get all comments attached to post |
| POST | /api/posts/${id} | Yes | Add a comment if logged in |
| PUT | /api/posts/${id}/comments/${comment.id} | Yes | Edit comment if it is your own/if admin |
| DELETE | /api/posts/${id}/comments/${comment.id} | Yes | Delete comment if it is your own/if admin |

## API posts

| Method | Endpoint | Protected | Usage | Response |
| --- | --- | --- | --- | --- |
| GET | /api/posts | No | Get all posts |
| POST | /api/posts | Yes | Add a post if logged in |
| PUT | /api/posts/${id} | Yes | Edit post if it is your own/if admin |
| DELETE | /api/posts/${id} | Yes | Delete post if it is your own/if admin |

## API pages

| Method | Endpoint | Protected | Usage | Response |
| --- | --- | --- | --- | --- |
| GET | /api/resources/${pages.id} | Yes | Get view for editing resource page if admin |
| PUT | /api/resources/edit/${id} | Yes | Edit resource page if admin |
| GET | /api/identities/${pages.id} | Yes | Get view for editing identities page if admin |
| PUT | /api/identities/edit/${id} | Yes | Edit identities page if admin |

---

## Routes (server-side)
### auth.js
* router.post('/register')
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
* router.get('/Māori')
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

---

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

### comments.js
* getComments
* addComment
* editComment
* deleteComment

### pages.js
* getResourcesPage
* editResourcesPage
* getIdentitiesPage
* editIdentitiesPage

---

## Database model

### Users (join to forum)
 | Column Name | Data Type |
 | --- | --- |
 | id | integer |
 | user_name | string |
 | preferred_name | string |
 | email_address | string |
 | is_admin | boolean |
 | hash | text |

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
 
  ### Identities
  Column Name | Data Type |
 | --- | --- |
 | id | integer |
 | image1 | string |
 | title | string |
 | header | text |
 | subheader | text |
 | preblurb | text |
 | blurb | text |
 | text_extra | text |
 | text_extra2 | text |
 
 ### Resources
 
  Column Name | Data Type |
 | --- | --- |
 | id | integer |
 | image1 | string |
 | title | string |
 | header | text |
 | subheader | text |
 | preblurb | text |
 | blurb | text |
 | text_extra | text |
 | text_extra2 | text |


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
