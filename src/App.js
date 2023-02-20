import './App.css';
import Button from './components/Button';
import Counter from './components/Counter';
import airflowLogo from './image/airflow.svg';
import { useState } from 'react';

function App() {

  const [numClicks, setNumClicks] = useState(0);

  const handleClick = () => {
    setNumClicks (numClicks + 1);
  }

  const restartCounter = () => {
    setNumClicks(0);
  }


  return (
    <div className="App">
      <div className='airflow-logo-container'>
        <div className='title'><strong>Counter</strong></div>
        <img
        className='airflow-logo'
        src={airflowLogo}
        alt='Logo airflow'/>
      </div>
      <div className='container-principal'>
        <Counter numClicks={numClicks} />
        <Button 
          text='Click'
          isButtonClick={true}
          handleClick={handleClick}/>
        <Button 
          text='Restart'
          isButtonClick={false}
          handleClick={restartCounter}/>
      </div>
    </div>
  );
}

export default App;
