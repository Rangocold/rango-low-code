import logo from './logo.svg';
import './App.css';
import { GlobalContext, useGlobalContextReducer } from './Stores';

function App() {
  const context = useGlobalContextReducer();
  console.log('try');
  return (
    <GlobalContext.Provider value={context}>

    </GlobalContext.Provider>
  );
}

export default App;
