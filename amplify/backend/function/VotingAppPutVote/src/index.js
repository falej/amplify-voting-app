const AWS = require('aws-sdk');
const DynamoDB = new AWS.DynamoDB();

let tableName = "VotingAppVotes";
if(process.env.ENV && process.env.ENV !== "NONE") {
    tableName = tableName + '-' + process.env.ENV;
}

exports.handler = async (event) => {

    console.log("Body Parameters: ");
    console.log(event.body);

    let requestParams = JSON.parse(event.body);

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
                    S: requestParams.video + "_" + requestParams.username
                }
            },
            ExpressionAttributeValues: {
                ":id_video": {
                    S: requestParams.video
                },
                ":username": {
                    S: requestParams.username
                },
                ":vote": {
                    S: requestParams.vote
                }
            },
            UpdateExpression: "SET id_video = :id_video, username = :username, vote = :vote",
            ReturnValues: "ALL_NEW"
        };

        console.log("PARAMS:");
        console.log(params);

        let data = await DynamoDB.updateItem(params).promise();
        console.log("DATA:");
        console.log(data);

        let vote = {
            id: data.Attributes["id"].S,
            idVideo: data.Attributes["id_video"].S,
            username: data.Attributes["username"].S,
            vote: data.Attributes["vote"].S
        };

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
