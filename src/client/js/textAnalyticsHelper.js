async function submitText(text) {

  try {
    const response = await fetch('http://localhost:8081/test', {
      method: 'POST',
      mode: 'cors',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({text})  
    })

    return response.json()
    
  } catch (error) {
    console.log('Error occured while fetching: ', error);
  }  
}

function formatResponse(json) {
  const score = json.score_tag === 'P' 
                  ? 'Positive' 
                  : json.score_tag === 'N' || json.score_tag === 'N+' ? 'Negative' : 'Neutral'
  return `
    <p>Sentiment: ${score}</p>
    <p>Subjectivity: ${json.subjectivity}</p>
    <p>Confidence: ${json.confidence}</p>
    <p>Irony: ${json.irony}</p>
  `
}

export { submitText, formatResponse }