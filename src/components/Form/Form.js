import React, { Fragment } from 'react';
import Swal from 'sweetalert2'
import './Form.scss'

const Form = (props) => {



    const handleSubmit = (event) => {
        event.preventDefault();

        const nameInput = event.target.name;
        const emailInput = event.target.email;
        const cellphoneInput = event.target.cellphone;
        const ageInput = event.target.age;

        console.log('Nombre: ', nameInput.value);
        console.log('Correo: ', emailInput.value);
        console.log('Celular: ', cellphoneInput.value);
        console.log('Edad: ', ageInput.value);

        // Lightbox de sweetalert
        Swal.fire({
            title: 'Tu información fue enviada con éxito, estaremos en contacto contigo',
            text: 'Reiniciando el formulario a su estado original.',
            icon: 'success',
            showConfirmButton: false,
            timer: 5000, 
            timerProgressBar: true,
        })

        nameInput.value = "";
        emailInput.value = "";
        cellphoneInput.value = "";
        ageInput.value = "";
    };
    return (
        <Fragment>
            <div className="form-container">
                <div className="welcome-message">
                    {props.selectedAirline === "" ? "Por favor selecciona una aerolinea." : `Hola, bienvenido, sabemos que quieres viajar en un ${props.selectedAirline}, por favor diligencia el siguiente formulario:`}
                </div>
                <div className="form-fields">
                    <form className="form" id="form" onSubmit={handleSubmit}>
                        <div className="form-name form-div">
                        <label for="name">Nombre completo:</label>
                        <br/>
                        <input type="text" id="name" name="name" className="form-field" required />
                        </div>
                        <div className="form-email form-div">
                        <label for="email">Email:</label>
                        <br/>
                        <input type="email" id="email" name="email" className="form-field" required />
                        </div>
                        <div className="form-cellphone form-div">
                        <label for="cellphone">Celular:</label>
                        <br/>
                        <input type="text" id="cellphone" name="cellphone" className="form-field" required pattern='^[0-9]*$' />
                        </div>
                        <div className="form-age form-div">
                        <label for="age">Edad:</label>
                        <br/>
                        <input type="number" id="age" name="age" min="18" max="100" className="form-field" required />
                        </div>
                        <button type="submit" id="submit-btn" className="submit-btn">Envíar</button>
                    </form>
                </div>
            </div>
        </Fragment>
    )
}

export default Form