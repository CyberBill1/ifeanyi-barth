const scriptURL = 'https://script.google.com/macros/s/AKfycbw4tFeWkH7aEzS5xM4Ga88bZKqcpvxr2Wjk_MoemhqTaGY9kcg6TrqHF_4cUZ5j280K8w/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {

e.preventDefault()

fetch(scriptURL, { method: 'POST', body: new FormData(form)})

.then(response => alert("Thank you! your form is submitted successfully." ))

.then(() => { window.location.reload(); })

.catch(error => console.error('Error!', error.message)) 

})
