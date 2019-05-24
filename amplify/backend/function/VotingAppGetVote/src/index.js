const AWS = require('aws-sdk');
const DynamoDB = new AWS.DynamoDB();

let tableName = "VotingAppVotes";
if(process.env.ENV && process.env.ENV !== "NONE") {
    tableName = tableName + '-' + process.env.ENV;
}

exports.handler = async (event) => {

    console.log("Query String Parameters: ");
    console.log(event.queryStringParameters);

    let responseCode = 200;
    let responseHeaders = {
        "Access-Control-Allow-Origin" : "*",
        "Access-Control-Allow-Credentials" : true
    };

    let responseBody = {};

    try {

        let params = {
            TableName: tableName,
            Key: {
                "id": {
                    S: event.queryStringParameters.video + "_" + event.queryStringParameters.username
                }
            }
        };

        let data = await DynamoDB.getItem(params).promise();
        console.log("DATA:");
        console.log(data);

        let vote = null;

        if (data.Item) {
            vote = {
                id: data.Item["id"].S,
                idVideo: data.Item["id_video"].S,
                username: data.Item["username"].S,
                vote: data.Item["vote"].S
            };
        }

        responseBody ={
            status: 0,
            payload: {
                vote: vote
            }
        };

        return {
            statusCode: responseCode,
            headers: responseHeaders,
            body: JSON.stringify(responseBody)
        };

    } catch (error) {

        console.log(error);

        responseBody = {
            status: -1,
            payload: {
                error: error
            }
        };

        return {
            statusCode: responseCode,
            headers: responseHeaders,
            body: JSON.stringify(responseBody)
        };

    }

};
