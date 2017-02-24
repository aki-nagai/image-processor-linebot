exports.lambdaHandler = function(event, context){
  // Retrieve each message. max:100
  event.result.forEach( function(message, index){
    console.log(JSON.stringify(message));
  });
};
