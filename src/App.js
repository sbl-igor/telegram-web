import { useEffect } from 'react';
import './App.css';
const tg = window.Teelgram.WebApp;

function App() {

  useEffect(() => {
    tg.ready();
  })

  const onClose = () => {
    tg.close();
  }

  return (
    <div className="App">
      working......
      <button onClick={onClose}>Close</button>
    </div>
  );
}

export default App;
