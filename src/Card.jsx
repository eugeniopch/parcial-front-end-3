//Este componente deberia recibir por props y mostrar en pantalla la informacion
//que envia el usuario



function Card(user) {
  return (
      <div className='card-container'>
        <div className='card' key={user.id}>
              <p className='card-text'>Nombre: {user.data.nombre}</p>
              <p className='card-text'>Película favorita: {user.data.pelicula}</p>
        </div>
      </div>
  );
}

export default Card;
