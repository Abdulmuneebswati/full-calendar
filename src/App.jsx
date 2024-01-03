import './App.css';
import Calendar from './Calendar';
import  compaign from "./compaign.json"

function App() {
  return (
    <>
      <Calendar campaigns={compaign} />
    </>
  );
}

export default App
