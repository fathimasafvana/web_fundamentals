const messageInput = document.getElementById("messageInput");
const sendButton = document.getElementById("sendButton");
const messages = document.getElementById("messages");


function sendMessage() {

    const messageText = messageInput.value.trim();

    if (messageText === "") {
        return;
    }


    // Create message div

    const message = document.createElement("div");

    message.classList.add("message", "sent");


    // Create message text

    const text = document.createElement("p");

    text.textContent = messageText;


    // Create time

    const time = document.createElement("span");

    const now = new Date();

    time.textContent = now.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit"
    });


    // Add text and time

    message.appendChild(text);

    message.appendChild(time);


    // Add message to chat

    messages.appendChild(message);


    // Clear input

    messageInput.value = "";


    // Scroll to latest message

    messages.scrollTop = messages.scrollHeight;
}


// Send button

sendButton.addEventListener("click", function() {

    sendMessage();

});


// Press Enter to send

messageInput.addEventListener("keypress", function(event) {

    if (event.key === "Enter") {

        sendMessage();

    }

});