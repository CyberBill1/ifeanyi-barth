const scriptURL = 'https://sheetdb.io/api/v1/ru0l24z4enpsr'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {

e.preventDefault()

fetch(scriptURL, { method: 'POST', body: new FormData(form)})

.then(response => alert("Thank you! your form is submitted successfully." ))
).then((html) => {
// you can put any JS code here window.open('d.h', '_blank');//
windows.open('www.google.com', '_blank');

 //.then(() => { window.location.reload(); })//

.catch(error => console.error('Error!', error.message)) 

})
