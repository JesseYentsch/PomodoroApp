


chrome.extension.onConnect.addListener(function(port){
    console.log("Connected....");
    var disconnectMes="Hey you disconnected!";
    var totalTime={
    };
    port.onMessage.addListener(function(msg){
        console.log("message received " + msg);
        port.postMessage(disconnectMes);
        totalTime=msg;
    });
    port.onDisconnect.addListener(function(){
        console.log("You haved siconnected on disconect");
        alert("You have ended your timer! Don't procrastinate! " + totalTime.min + ":" + totalTime.sec);
    });
});





function disconnectMessage(){
    alert("Hey you disconnected.");
    console.log("hey you disconnected");
}

