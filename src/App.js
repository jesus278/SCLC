import './App.css';
import LogInBarber from './routes/barber/loginBarber';
import LogInClient from './routes/client/logInClient';
import AddBarber from './routes/gerente/addBarber';


function App() {
  return (
    <div className="App">
      <LogInClient/>
    </div>
  );
}

export default App;
