import { useState } from 'react';

const Formulario = ({ setUser }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const validateField = (fieldName, value) => {
    const newErrors = { ...errors };

    if (fieldName === 'name') {
      if (value === null || value === "") {
        newErrors.name = 'El nombre está vacío D:';
      } else {
        delete newErrors.name;
      }
    }

    if (fieldName === 'email') {
      if (value === null || value === "") {
        newErrors.email = 'El email está vacío D:';
      } else if (!/\S+@\S+\.\S+/.test(value)) {
        newErrors.email = 'El email no es válido';
      } else {
        delete newErrors.email;
      }
    }

    if (fieldName === 'password') {
      if (value.length <= 6) {
        newErrors.password = 'La contraseña debe tener más de 6 caracteres';
      } else {
        delete newErrors.password;
      }
    }

    setErrors(newErrors);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'name') {
      setName(value);
    } else if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }

    validateField(name, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (Object.keys(errors).length === 0) {
      setUser({ name, email, password });
    }
  };

  return (
    <form onSubmit={handleSubmit} action="#">
      <div>
        <input type="text" name="name" placeholder="Nombre" value={name} onChange={handleChange}/>
        {errors.name && <p>{errors.name}</p>}
      </div>

      <div>
        <input type="email" name="email" placeholder="Email" value={email} onChange={handleChange}/>
        {errors.email && <p>{errors.email}</p>}
      </div>

      <div>
        <input type="password" name="password" placeholder="Contraseña" value={password} onChange={handleChange}/>
        {errors.password && <p>{errors.password}</p>}
      </div>

      <button type="submit">Registrar</button>
    </form>
  );
};

export default Formulario;