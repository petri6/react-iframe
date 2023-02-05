
function TryFrontendMessage() {
  return (
    <button style={{padding: "4px"}} onClick={testMessage}>Test Frontend</button>
  )
}

export default TryFrontendMessage;

function testMessage() {
  console.log("REACT: testing postMessage()");
  console.log("REACT: sending message: 🦄");
  const targetOrigin = "*";
  postMessage({from:"react", content: "🦄"}, targetOrigin);

  window.parent.postMessage({from:"react", content: "🦄"}, targetOrigin);
}
