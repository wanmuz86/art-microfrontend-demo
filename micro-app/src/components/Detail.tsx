
const Detail = (props:MicroAppProps) => {
  return (
    <div>
        <h2>This is the Detail Component</h2>
        {props.initialData && <p>Message from host app: {props.initialData.message}</p>}
    </div>
  )
}

export default Detail