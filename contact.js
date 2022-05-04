const formEl = document.querySelector('form');

formEl.addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Your message has been sent!')

    const inputName = document.querySelector('input[name=Name]');
    const inputEmail = document.querySelector('input[name=email]');
    const inputMessage = document.querySelector('textarea');

    inputName.value = '';
    inputEmail.value = " ";
    inputMessage.value = '';
});