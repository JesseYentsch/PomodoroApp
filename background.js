
var totalMin=0;
var totalSec=0;

chrome.extension.onConnect.addListener(function(port){
    console.log("Connected....");
    var disconnectMes="Hey you disconnected!";
    
    port.onMessage.addListener(function(msg){
        console.log("message received" +msg.min + msg.sec);
        port.postMessage(disconnectMes);
        totalMin=msg.min;
        totalSec=msg.sec;
    });
    port.onDisconnect.addListener(function(){
        console.log("You haved siconnected on disconect");
        alert("You have ended your timer! Don't procrastinate! " + totalMin + ":" + totalSec );
    });
});





function disconnectMessage(){
    alert("Hey you disconnected.");
    console.log("hey you disconnected");
}

