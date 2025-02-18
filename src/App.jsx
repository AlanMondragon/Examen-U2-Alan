import { useState } from 'react';
import './App.css';
import Formulario from './components/Formulario';
import Registro from './components/Registro';

function App() {
  const [user, setUser] = useState(null);

  return (
    <div>
      <h1>Formulario de Registro</h1>
      <Formulario setUser={setUser} />
      {user && <Registro user={user} />}
    </div>
  );
}

export default App;