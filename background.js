


chrome.extension.onConnect.addListener(function(port){
    console.log("Connected....");
    var disconnectMes="Hey you disconnected!";
    
    port.onMessage.addListener(function(msg){
        console.log("message received " + msg);
        port.postMessage(disconnectMes);
    });
    port.onDisconnect.addListener(function(){
        console.log("You haved siconnected on disconect");
        alert("You have ended your timer! Don't procrastinate! " );
    });
});





function disconnectMessage(){
    alert("Hey you disconnected.");
    console.log("hey you disconnected");
}

