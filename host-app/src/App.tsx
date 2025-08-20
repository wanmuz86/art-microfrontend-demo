import { useNavigate } from 'react-router-dom'
import './App.css'

function App() {
  
const navigate = useNavigate();

const navigateToMicroApp = () => {
  navigate('/app/detail');
};

  return (
    <>
    <h1>Host Application</h1>
      <button onClick={navigateToMicroApp}>Go to Detail Page in Micro App</button>
    </>
  )
}

export default App
