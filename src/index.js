import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LogInBarber from './routes/barber/loginBarber';
import AddBarber from './routes/gerente/addBarber';
import LogInGerente from './routes/gerente/logInGerente';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>

      <Routes>
        <Route  path="/Barbero" element={<LogInBarber/>} />
      </Routes>
      <Routes>
        <Route  path="/Gerente"  element={<LogInGerente/>} />
        
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
