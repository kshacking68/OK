function sendMessage() {
    const messageInput = document.getElementById('message-input');
    const message = messageInput.value.trim();

    if (message !== '') {
        displayMessage(message);
        messageInput.value = '';
    }
}

function displayMessage(message) {
    const chatContainer = document.getElementById('chat-container');
    const messageElement = document.createElement('div');
    messageElement.textContent = message;
    messageElement.classList.add('message');
    chatContainer.appendChild(messageElement);

    
    chatContainer.scrollTop = chatContainer.scrollHeight;
}


const logo = document.getElementById('logo');
let isJumping = false;

logo.addEventListener('mouseover', () => {
    if (!isJumping) {
        logo.style.transform = 'translateY(-10px)';
        isJumping = true;
    }
});

logo.addEventListener('mouseout', () => {
    if (isJumping) {
        logo.style.transform = 'translateY(0)';
        isJumping = false;
    }
});


document.addEventListener('contextmenu', (event) => {
    event.preventDefault();
});

document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});
document.getElementById('button1').onclick = function() {
    window.location.href = 'https://youtube.com/@KS-Agency-143?si=4UN0hSpkdiwB3sKM';
};

document.getElementById('button2').onclick = function() {
    window.location.href = 'https://docs.google.com/forms/d/e/1FAIpQLSeEBBIwAwljWwHemxwv-mC2XEsiREpwER-RTxD0wbTk7_z0Gg/viewform?usp=sf_link';
};
