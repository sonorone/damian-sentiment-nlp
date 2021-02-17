const { submitText, formatResponse } = require('./textAnalyticsHelper')

function handleSubmit(event) {
  event.preventDefault();

  if (event.target[0].value) {
    const results = document.getElementById('results');

    // two params: POST endpoint, and the text to for analysis
    submitText('http://localhost:8081/test', event.target[0].value)
    .then((data) => {
      if (data.status && data.status.msg == 'OK') {
        results.innerHTML = formatResponse(data)
      } else {
        results.textContent = "Cannot reach the server... Check your connection or the system might be offline."
      }
    })
  } else {
    results.textContent = "Input field cannot be empty... please try again."
  }
}

export { handleSubmit }