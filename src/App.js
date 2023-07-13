import './App.css';
import People from './Components/People';
import Input from './Components/Input';
import useStore from './store';
import { useEffect } from 'react';

function App() {
  const toggleDarkMode = useStore(state => state.toggleDarkMode)
  const dark = useStore(state => state.dark)


  useEffect(() => {
    if (dark) {
      document.querySelector('body').classList.add('dark')
    } else {
      document.querySelector('body').classList.remove('dark')
    }
  }, [dark])
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={toggleDarkMode}> Dark Mode</button>
        <p>
          <People />
          <Input />
        </p>
      </header>
    </div>
  );
}

export default App;
