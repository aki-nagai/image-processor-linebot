var https = require('https');   

/* LINE API Settings */
var endpointHost = 'trialbot-api.line.me';  // End Point(Fixed value)
var headers      = {
  'Content-Type':                 'application/json; charset=UTF-8',  //Fixed value
  'X-Line-ChannelID':             process.env.CHANNEL_ID,             //Your channel ID
  'X-Line-ChannelSecret':         process.env.CHANNEL_SECRET,         //Your channel secret
  'X-Line-Trusted-User-With-ACL': 'u5b8d5cd3e8f9baf9d7efe0692de87e75' //Fixed value
}

// Func: Retrieve image from mesasge using its content id
function retriveImageFrom(contentId, callback){
  var options = {
    hostname: endpointHost,
    path:     '/v1/bot/message/' + contentId + '/content',
    headers:  headers,
    method:   'GET'
  };
  var req = https.request(options, function(res){
    var data = [];
    res.on('data', function(chunk){
      //image data dividing it in to multiple request
      data.push(new Buffer(chunk));
    }).on('error', function(err){
      console.log(err);
    }).on('end', function(){
      console.log('finish to retrive image')
      img = Buffer.concat(data);
      callback(null, img);
    });
  });

  req.end();
}

// Func: Send text to user
function sendTextTo(mid, text){
    var options = {
          hostname: endpointHost,
          path:     '/v1/events',
          headers:  headers,
          method:   'POST'
        };
    var req = https.request(options, function(res){
          res.on('data', function(chunk){
                }).on('error', function(err){
                    console.log(err);
                }).on('end', function(){            //call when no more date in response
                    console.log('finish sending text message')
                });
        });
    var body = JSON.stringify({
          to:        [mid],                   //NOTE: to parameter require array of mids
          toChannel: 1383378250,              //Fixed value
          eventType: "138311608800106203",    //Fixed value
          content: {
                  contentType: 1,       //Fixed value if send text
                  toType:      1,       //Fiexd value if send text
                  text:        text
                }
        });

    req.write(body);
    req.end();
}

// Lambda Handler
exportslambdaHandler = function(event, context){
  // Retrieve each message. max:100
  event.result.forEach( function(message, index){
    console.log(JSON.stringify(message));
    var mid = message.content.from;
    sendTextTo(mid, '受信したよ');
  });
};
