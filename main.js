/* LINE API Settings */
var endpointHost = 'trialbot-api.line.me';  // End Point(Fixed value)
var headers      = {
  'Content-Type':                 'application/json; charset=UTF-8',  //Fixed value
  'X-Line-ChannelID':             process.env.CHANNEL_ID,             //Your channel ID
  'X-Line-ChannelSecret':         process.env.CHANNEL_SECRET,         //Your channel secret
  'X-Line-Trusted-User-With-ACL': 'u5b8d5cd3e8f9baf9d7efe0692de87e75' //Fixed value
}

exportslambdaHandler = function(event, context){
  // Retrieve each message. max:100
  event.result.forEach( function(message, index){
    console.log(JSON.stringify(message));
  });
};
