import { useState } from 'react';

const Formulario = ({ setUser }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (name === null || name === "") {
      newErrors.name = 'El nombre esta vacio D:';

    }


    
    if (email === null || email === "") {
      newErrors.email = 'El email no esta vacio D:';
    }

    if (password.length <= 6) {
      newErrors.password = 'La contraseña debe tener más de 6 caracteres';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      setUser({ name, email, password });
    }
  };

  return (
    <form onSubmit={handleSubmit} action="#">
      <div>
        <input type="text" placeholder="Nombre" value={name} onChange={(e) => setName(e.target.value)}/>
        {errors.name && <p>{errors.name}</p>}
      </div>

      <div>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        {errors.email && <p>{errors.email}</p>}
      </div>

      <div>
        <input
          type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)}
        />
        {errors.password && <p>{errors.password}</p>}
      </div>

      <button type="submit">Registrar</button>
    </form>
  );
};

export default Formulario;