"use strict";;

var apn = require("apn");

var tokens = ["1ba28967589773b1209adcd9cc06c839b6e234202a0ab0090c02a360ede60349"];

var service = new apn.Provider({
	"cert": "E:/studios/ApnStudio/apns-dev-cert.pem",
	"key": "E:/studios/ApnStudio/apns-dev-key.pem",
	"passphrase":"123456",
	"production":false
});

var note = new apn.Notification({
	"alert":"abcd...",
	"sound":"default"
});

// The topic is usually the bundle identifier of your application.
note.topic = "com.wuxizone.smart";
note.badge = 1;

console.log(`Sending: ${note.compile()} to ${tokens}`);
service.send(note, tokens).then( result => {
	console.log("sent:", result.sent.length);
	console.log("failed:", result.failed.length);
	console.log(result.failed);
});
// service.shutdown();