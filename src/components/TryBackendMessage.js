
function TryBackendMessage() {
    return (
      <button style={{padding: "4px"}} onClick={testBackend}>Test Backend</button>
    )
}

export default TryBackendMessage;

async function testBackend() {
  let data = await getData("https://signal-arrow.com/wp-json/endpoint/v1/test/1", {})
  console.log("REACT: got response:", data)
}

async function getData(url = '') {
  const response = await fetch(url, {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json'
      },
  });
  return response.json(); // JSON string to JavaScript data
}

async function postData(url = '', data) {
  const response = await fetch(url, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(data) // JavaScript data to JSON string
  });
  return response.json(); // JSON string to JavaScript data
}
