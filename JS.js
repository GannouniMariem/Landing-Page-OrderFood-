const name = document.getElementById('name')
const phone = document.getElementById('phone')
const form = document.getElementById('form')
const email = document.getElementById('mail')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
  let messages = []
  if (name.value === '' || name.value == null) {
    messages.push('Name is required')
  }

  if (phone.value != Number && phone.value.length <8 ) {
    messages.push('phone must be number')
  }

  if (phone.value.length >= 20) {
    messages.push('phone must be less than 20 characters')
  }

  if (messages.length > 0) {
    e.preventDefault()
    errorElement.innerText = messages.join(', ')
  }
})
