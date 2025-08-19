import './App.css';
import Habits from './components/Habits/Habits';
import Header from './components/Header/Header';
import SelectHabit from './components/SelectHabit/SelectHabit';

function App() {
  return (
    <div className='App'>
      <Header />
      <SelectHabit />
      <Habits />
    </div>
  );
}

export default App;
