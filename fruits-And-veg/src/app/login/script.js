const username = document.getElementById('email')
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

  if(password.value <= 8)
  {
     messages.push('password must be at least 8 characters long')
  }
  if(password.value >= 20)
  {
   messages.push('password must be less than 20')
  }
  if(password.value == 'password')
  {
     messages.push('password cannot be password')
  }

  if(messages.length >0)
  {
   e.preventDefault()
   errorElement.InnerText = messages.join(',')
  }
})
