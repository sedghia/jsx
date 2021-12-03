import img2 from './img2.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
          <div className="ex1">
              <h1 className="titleRed">Your name here</h1>
              <br />
              <img src={img2} className="img2" alt="img2" />
              <br />
              <img src="/img1.jpg" />
          </div>
      
    </div>
  );
}

export default App;
