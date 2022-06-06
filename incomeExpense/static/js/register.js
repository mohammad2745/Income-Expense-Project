const usernameField = document.getElementById('usernameField');
const feedbackFieldArea = document.querySelector('.invalid-feedback')
const emailField = document.querySelector('#emailField')
const emailFeedbackArea = document.querySelector('.emailFeedbackArea')
const usernameSuccessOutput = document.querySelector('.usernameSuccessOutput')

// Email Validation
emailField.addEventListener('keyup', (e) => {
    const emailVal = e.target.value;
    usernameSuccessOutput.style.display = 'none'

    emailField.classList.remove("is-invalid");
    emailFeedbackArea.style.display = 'none';

    if (emailVal.length > 0) {
        fetch("/authentication/validate-email", {
            body: JSON.stringify({ email: emailVal }),
            method: "POST"
        }).then(res => res.json()).then(data => {
            console.log('data', data)
            if (data.email_error) {
                emailField.classList.add("is-invalid");
                emailFeedbackArea.style.display = 'block';
                emailFeedbackArea.innerHTML = `<p>${data.email_error}</p>`
            }
        });
    }
});


// Username Validation
usernameField.addEventListener('keyup', (e) => {
    const usernameVal = e.target.value;
    usernameSuccessOutput.textContent = `Checking ${usernameVal}`;

    usernameField.classList.remove("is-invalid");
    feedbackFieldArea.style.display = 'none';

    if (usernameVal.length > 0) {
        fetch("/authentication/validate-username", {
            body: JSON.stringify({ username: usernameVal }),
            method: "POST"
        }).then(res => res.json()).then(data => {
            usernameSuccessOutput.style.display = 'none'
            console.log('data', data)
            if (data.username_error) {
                usernameField.classList.add("is-invalid");
                feedbackFieldArea.style.display = 'block';
                feedbackFieldArea.innerHTML = `<p>${data.username_error}</p>`
            }
        });
    }
});