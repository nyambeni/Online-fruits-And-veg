const fname = document.getElementById('first-name')
const lname = document.getElementById('last-name')
const password = document.getElementById('password')
const form = document.getElementById('form')
const errorElement = document.getElementById('err')

form.addEventListener('submit',(e) =>
{
    let messages = []
  if(username.vaue == " "|| username.value == null)
  {
      messages.push('username is required')
  }
  if(messages.length >0)
  {
   e.preventDefault()
   errorElement.InnerText = messages.join(',')
  }
  







})