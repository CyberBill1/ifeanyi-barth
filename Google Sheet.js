const scriptURL = 'https://script.google.com/macros/s/AKfycbyzat1TNE4k2UrmUAADkTYv8cgwGtvR4xtbGxfteshqhfJAPB_yO8ZWHhald2lhGie1fg/exec'

const form = document.forms['Testing']

form.addEventListener('submit', e => {

e.preventDefault()

fetch(scriptURL, { method: 'POST', body: new FormData(form)})

.then(response => alert("Thank you! your form is submitted successfully." ))

.then(() => { window.location.reload(); })

.catch(error => console.error('Error!', error.message)) 

})
