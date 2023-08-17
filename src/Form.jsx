import { useState } from "react";


const Form = (props) => {
  //Aqui deberias agregar los estados y los handlers para los inputs
  const [nombre, setNombre] = useState('')
  const [pelicula, setPelicula] = useState('')
  const [mensajeError, setMensajeError] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    nombre.trimStart();
    if (nombre.length < 3) {
      setMensajeError('El nombre debe de tener más de tres caracteres')
    } else if (pelicula.length < 6) {
      setMensajeError('La película debe de tener más de seis caracteres')
    } else {
      props.onSubmit({ nombre, pelicula })
      setNombre('')
      setPelicula('')
      setMensajeError('')
    }
  }
          return (
            <div className="form-container">
              <h1>Elige tu película favorita</h1>
              <form onSubmit={handleSubmit} className="my-form">
                <label>
                  <input
                    type='text'
                    value={nombre}
                    onChange={(event) => setNombre(event.target.value)}
                    className="form-input"
                    placeholder="Ingrese su nombre"
                  />
                </label>
                <br />
                <label>
                  <input
                    type='text'
                    value={pelicula}
                    onChange={(event) => setPelicula(event.target.value)}
                    className="form-input"
                    placeholder="Ingrese su película favorita"
                  />
                </label>
                <br />
                <button type='submit' className="submit-button">Submit</button>
              </form>
              {mensajeError && <p className="error-text">{mensajeError}</p>}
            </div>
          )
          };      
          
export default Form;