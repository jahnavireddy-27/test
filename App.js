
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import MainComponent from './component/mainComponent';

function App() {
  return (
    <div style={{ backgroundColor:"black"}}>
    <h1 style={{textAlign:"center",color:"white"}}>Tic-Tac-Toe</h1>
      <MainComponent></MainComponent>
    </div>
    
  );
}

export default App;
