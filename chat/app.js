var config = {
    apiKey: "AIzaSyDze0aMzD5JUYnXMK6uFwcP4ngxb8mPfSQ",
    authDomain: "hackclub-chat.firebaseapp.com",
    databaseURL: "https://hackclub-chat.firebaseio.com",
    storageBucket: "hackclub-chat.appspot.com",
    messagingSenderId: "152240304067"
};
firebase.initializeApp(config);
var chatData = firebase.database().ref();

function pushMessage(event) {
    if (event.keyCode == 13) {
        var name = $('#nameInput').val();
        var text = $('#messageInput').val();
        chatData.push({name: name, text: text});
        $('#messageInput').val('');
    }
}
$('#messageInput').keypress(pushMessage);

chatData.on("child_added", showMessage);

function showMessage(msg) {
    var message = msg.val();
    var messageSender = message.name;
    var messageContent = message.text;
    
    var messageE1 = $("<div/>").addClass("message");
    var senderE1 = $("<span/>").text(messageSender + ": ");
    var contentE1 = $("<span/>").text(messageContent);
    
    messageE1.append(senderE1);
    messageE1.append(contentE1);
    $('#messages').append(messageE1);
}
