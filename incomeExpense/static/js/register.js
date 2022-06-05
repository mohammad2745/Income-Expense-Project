const usernameField = document.getElementById('usernameField');
const feedbackFieldArea = document.querySelector('.invalid-feedback')
usernameField.addEventListener('keyup', (e) => {
    const usernameVal = e.target.value;

    usernameField.classList.remove("is-invalid");
    feedbackFieldArea.style.display = 'none';

    if (usernameVal.length > 0) {
        fetch("/authentication/validate-username", {
            body: JSON.stringify({ username: usernameVal }),
            method: "POST"
        }).then(res => res.json()).then(data => {
            console.log('data', data)
            if (data.username_error) {
                usernameField.classList.add("is-invalid");
                feedbackFieldArea.style.display = 'block';
                feedbackFieldArea.innerHTML = `<p>${data.username_error}</p>`
            }
        });
    }
});