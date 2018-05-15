var Knex = require('knex')
var config = require('../../knexfile')[process.env.NODE_ENV || 'development']
var db = Knex(config)




function getResourcesPage(id, testDb) {
	const conn = testDb || db
	return conn('resources')
		.where('id', id)
		.select()
}


function editResourcesPage(id, pageData, testDb) {
	const conn = testDb || db
	return conn('resources')
		.where('id', id)
		.update({
			'photo_url': pageData.photo_url,
			'title': pageData.title,
			'header': pageData.header,
			'blurb': pageData.blurb,
			'text_extra': pageData.text_extra
		})
}



function getIdentitiesPage(id, testDb) {
	const conn = testDb || db
	return conn('identities')
		.where('id', id)
		.select()
}


function editIndentitiesPage(id, pageData, testDb) {
	const conn = testDb || db
	return conn('identities')
		.where('id', id)
		.update({
			'photo_url': pageData.photo_url,
			'title': pageData.title,
			'header': pageData.header,
			'blurb': pageData.blurb,
			'text_extra': pageData.text_extra
		})
}


module.exports = {
	getResourcesPage,
	getIdentitiesPage,
	editIndentitiesPage,
	editResourcesPage
}