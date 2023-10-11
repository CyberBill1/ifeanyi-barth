const scriptURL = 'https://script.google.com/macros/s/AKfycbzS4G0WAPu3zkF--CLxFmxgpwX16lCdkSPw5bJR76pSpQDfcebw5OYRngt4A_o_ag23mA/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {

e.preventDefault()

fetch(scriptURL, { method: 'POST', body: new FormData(form)})

.then(response => alert("Thank you! your form is submitted successfully." ))

.then(() => { window.location.reload(); })

.catch(error => console.error('Error!', error.message)) 

})
