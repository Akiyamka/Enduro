// load enduro for the first time to init global variables
require('../index')

// vendor dependencies
var rimraf = require('rimraf')
var path = require('path')

// local dependencies
var enduro_helpers = require(ENDURO_FOLDER + '/libs/flat_utilities/enduro_helpers')

global.DELETE_TEST_PROJECTS = true

// create test folder where all the test projects will be created
before(function (done) {
	rimraf(path.join(process.cwd(), 'testfolder'), function () {
		enduro_helpers.ensure_directory_existence(path.join(process.cwd(), 'testfolder', 'dummy_filename'))
			.then(() => {
				global.CMD_FOLDER = path.join(process.cwd(), 'testfolder')
				done()
			})
	})
})

// delete the test folder
after(function (done) {
	if (DELETE_TEST_PROJECTS) {
		rimraf(path.join(process.cwd(), 'testfolder'), function () {
			done()
		})
	} else {
		done()
	}
})
