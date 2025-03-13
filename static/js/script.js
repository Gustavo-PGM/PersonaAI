document.addEventListener('DOMContentLoaded', () => {
    const messagesContainer = document.getElementById('messages');
    const messageInput = document.getElementById('messageInput');
    const fileInput = document.getElementById('fileInput');

    // Envio de mensagem por Enter
    messageInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });

    // Envio de imagem
    fileInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file && file.type.startsWith('image/')) {
            addMessage(`Imagem: ${file.name}`, 'user');
        }
    });

    function sendMessage() {
        const text = messageInput.value.trim();
        if (text) {
            addMessage(text, 'user');
            messageInput.value = '';
            // Aqui você adicionaria a lógica de resposta do bot
        }
    }

    function addMessage(text, sender) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${sender}`;
        messageDiv.textContent = text;
        messagesContainer.appendChild(messageDiv);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }
});