const pg_client = require('../config/postgres_config.js');
const mongo_client = require('../config/mongo_config.js');

module.exports = function (app, appEnv) {
	// console.log("Initializing Routes...", appEnv);
	require('./users.js')(app, appEnv, pg_client);
	require('./file_system.js')(app, appEnv, pg_client);
	require('./email.js')(app, appEnv, pg_client);
	require('./movies.js')(app, appEnv, mongo_client);
};