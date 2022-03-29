# Event Monitoring and Logging Serverless Application

This is a serverless application that receives a webhook via POST or GET HTTP method from mailgun, sends the raw received data to dynamoDB and processed data to an SNS topic, and replies with the `200 Success` or '406 Not Acceptable' response to the webhook sender.

The architecture for this app looks like the following diagram:

![](./assets/eventmonitor.png)


This app contains the following components:

1. _An API Gateway HTTP API endpoint_ -  
2. _A Lambda Function_ - that we use to process the request, write the raw data to Dynamodb table events and send it to the SNS topic, and immediately return the `200 Success` or '406 Not Acceptable' response to the API Gateway.
3. _A DynamoDB table_ - To which the function will write the raw request to.
4. _An SNS topic_ - that webhook events are sent to, you can connect rest of your application to this webhook.
