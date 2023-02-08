let users = document.querySelectorAll('#chats .user');
let chatContainer = document.getElementsByClassName('chat-container')[0];
let main = document.getElementById('main');


users.forEach((user) => {
    user.addEventListener('click', () => {
        chatContainer.style.display = 'block';
        main.style.display = 'none';
    })
});