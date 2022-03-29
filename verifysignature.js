console.log('Loading function');
const AWS = require('aws-sdk');
const dynamo = new AWS.DynamoDB.DocumentClient();
exports.handler = function(event, context, callback) {
var eventdata = {
      event: '',
      timestamp: '',
      id:''
}
var params = {
  TableName: 'mailevents',
  Item: {
    'event': 'S',
    'timestamp': 'N',
    'id': 'S'
  }
};
dynamo.put(params, function(err, data) {
  if (err) {
    console.log("Error", err);
  } else {
    console.log("Success", data);
  }
