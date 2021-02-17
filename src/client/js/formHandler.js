const { submitText, formatResponse } = require('./textAnalyticsHelper')

function handleSubmit(event) {
  event.preventDefault();

  if (event.target[0].value) {

    submitText(event.target[0].value)
    .then((data) => {
      console.log('Response: ', data);
      const results = document.getElementById('results');

      if (data && data.status.msg == 'OK') {
        results.innerHTML = formatResponse(data)
      } else {
        results.textContent = "Cannot reach the server... you might be offline."
      }
    })
  } else {
    alert('Input field cannot be empty... please try again.')
  }

}

export { handleSubmit }