const chat_component = `<div class="user">
                <div class="avatar">
                    <img src="./src/assets/img/avatar-2.jpg" alt="avatar">
                </div>
                <div class="name">Bob Williams</div>
            </div>`;

for (let i = 0; i < 100; i++) {
    document.getElementById('chats').innerHTML += chat_component;
}