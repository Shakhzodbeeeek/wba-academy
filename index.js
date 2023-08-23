let form = document.querySelector('#form')

let bot = {
  TOKEN: '5486030324:AAFXJHN8m550nyQgtTB_Mee8IZP1Fs2wJoo',
  chatID: '1408092377',
}

form.addEventListener('submit', (e) => {
  e.preventDefault()

  let name = document.querySelector('#name')
  let email = document.querySelector('#email')
  let subject = document.querySelector('#subject')
  let message = document.querySelector('.form-control')

  fetch(
    `https://api.telegram.org/bot${bot.TOKEN}/sendMessage?chat_id=${
      bot.chatID
    }&text=${
      'name: ' +
      ' ' +
      name.value +
      ' ' +
      'email: ' +
      email.value +
      'subject: ' +
      subject.value +
      ' ' +
      'message: ' +
      message.value
    }`,
    {
      method: 'GET',
    }
  ).then(
    (succes) => {
      alert('Send message true')
    },
    (error) => {
      alert('Message not send')
      console.log(error)
    }
  )
})
