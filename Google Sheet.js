const scriptURL = 'https://script.google.com/macros/s/AKfycbwtUbqkhrHz-dgv0UekE-FSr1-dDlZqALq9vJNP343S-tZmm0VBk62Kf-qHWtqotME9/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {

e.preventDefault()

fetch(scriptURL, { method: 'POST', body: new FormData(form)})

.then(response => alert("Thank you! your form is submitted successfully." ))

.then(() => { window.location.reload(); })

.catch(error => console.error('Error!', error.message)) 

})
