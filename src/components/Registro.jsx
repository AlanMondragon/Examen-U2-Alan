const Registro = ({ user }) => {
    return (
      <div className="registro">
        <h2>Datos del Usuario Registrado</h2>
        <p><strong>Nombre:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Contraseña:</strong> {user.password}</p>
      </div>
    );
  };
  
  export default Registro;