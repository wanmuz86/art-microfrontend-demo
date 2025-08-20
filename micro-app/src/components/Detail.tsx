
const Detail = (props:MicroAppProps) => {

    const sendDataToHost = () => {
        if (props.onDataReceived) {
            props.onDataReceived(`Data from micro-app:  ${new Date().toLocaleString()}`);
        }
    }
  return (
    <div>
        <h2>This is the Detail Component</h2>
        {props.initialData && <p>Message from host app: {props.initialData.message}</p>}

        <button onClick={sendDataToHost}>Send data to Host</button>
    </div>
  )
}

export default Detail