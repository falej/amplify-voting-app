const AWS = require('aws-sdk');
const DynamoDB = new AWS.DynamoDB();

let tableName = "VotingAppVideos";
if(process.env.ENV && process.env.ENV !== "NONE") {
    tableName = tableName + '-' + process.env.ENV;
}

exports.handler = async (event) => {

    let responseCode = 200;
    let responseHeaders = {
        "Access-Control-Allow-Origin" : "*",
        "Access-Control-Allow-Credentials" : true
    };

    let responseBody = null;

    try {

        let data = await DynamoDB.scan({
            TableName: tableName
        }).promise();

        console.log(data);

        let videos = {};

        data.Items.forEach( (item) => {
            videos[item['id'].S] = {
                id: item['id'].S,
                title: item['title'].S,
                description: item['description'].S,
                urlVideo: item['url_video'].S,
                urlThumbnail: item['url_thumbnail'].S
            };
        });

        responseBody ={
            status: 0,
            payload: {
                videos: videos
            }
        };

        return {
            statusCode: responseCode,
            headers: responseHeaders,
            body: JSON.stringify(responseBody)
        };

    } catch(error) {

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
