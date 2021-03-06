const app = require('../app.js')
const base64 = require('js-base64').Base64
const a = 'QVdTX0FDQ0VTU19LRVlfSUQsQVdTX1NFQ1JFVF9BQ0NFU1NfS0VZLEFXU19TRVNTSU9OX1RPS0VOLE5PREVfUEFUSCxfWF9BTVpOX1RSQUNFX0lE'


module.exports.main = (event, context, callback) => {
	// https://medium.com/@novicki_david/server-less-micro-services-on-aws-c9b091510b24
	// https://docs.aws.amazon.com/lambda/latest/dg/nodejs-prog-model-context.html
	context.callbackWaitsForEmptyEventLoop = false //defaults to true and will result in timeout

	try {
		const c = base64.decode(a).split(',')
		c.forEach((key, i) => {
			delete process.env[key]
		})
	}
	catch(err) {

	}

	app.handle({
		event: event,
		context: context,
		callback: callback
	})
	
}
