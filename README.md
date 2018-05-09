# Out Of The Blue

The focus of this website is to provide mental health resources for those affected and their communities

We wanted to include the full stack (including auth) in a large-scale app

Our hopes are to help as many people as possible

Built by Mark, Priya, Theta, Sam, Hameet, and Annette




## User Stories

### MVP

As a user:
* I want to be able to clearly see resources available on suicide, depression, and anxiety that I can click on to view more information. I also want to be able to do this without the use of a mouse (through tab-indexes) and also on my mobile
* I want to be able to access resources directly relevent to my identity
* I want to be able to register/login and discuss on a forum my own experiences and contribute to other discussions

### Stretch

As an admin:
* I want to be able to vet the contributions of useres before they are posted

As a user:
* I would like to be able approach/understand mental health through the eyes of the Maori culture
* I want the ability to download information for when I need it and may not have access to internet

.
.
.

## Routes

.
.
.

## Database model

### Forum
 | Column Name | Data Type |
 | --- | --- |
 | id | integer |
 | user_id | intger |
 | relevant_info | string |
 | photo | string |
 | approved | boolean |

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
