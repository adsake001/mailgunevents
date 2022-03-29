//This function saves the raw json payload to a DynamoDB table
const AWS = require('aws-sdk');
const crypto = require('crypto');
console.log('Loading function');
exports.handler = function(event, context, callback) {
const signature = {
      timestamp: '',
      token: '',
      signature:''
}

const verify = ({ signingKey, timestamp, token, signature }) => {
    const encodedToken = crypto
        .createHmac('sha256', signingKey)
        .update(timestamp.concat(token))
        .digest('hex')
    return (encodedToken === signature)
}
//If signature is not equals to encodedtoken throw an error 406.
if (verify !== signature) { 
	res.sendStatus(406);send('Not Acceptable')
//If signature matches encodedtoken send 200 success and execute saveraw.js function to write raw payload to Dynamo DB.
	} else {
	 res.sendStatus(200).send('Success'),
	 invoke({
	    
	 })
	 
	}
}
