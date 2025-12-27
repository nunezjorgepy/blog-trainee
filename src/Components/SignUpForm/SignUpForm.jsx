import './SignUpForm.css'

/* 
    TODO:
        - Verificar más sobre los autocomplete de los input y select, que figuran como error en la consola (cuadro azul arriba a la derecha)
*/

function SignUpForm(props) {
    const { setShowSignUpForm } = props

    function sendData(e) {
        e.preventDefault()
        console.log(`Sending Data...`)
    }

    function closeForm(e) {
        e.preventDefault()
        setShowSignUpForm(false)
    }

    return (
        <>
            {/* Fondo semi-transparente, donde se puede clickear par cerrar el formulario */}
            <div className="on_click_delete" onClick={() => setShowSignUpForm(false)}></div>
            <div className='form_container'>
                <div className="form_header">
                    <h2 className="form_header_title">
                        <i className="bi bi-person-plus"></i>
                        <span>Crear Cuenta</span>
                    </h2>
                    <span className="form_header_span">Ingresa a nuestra comunidad</span>
                </div>

                <form className="form_body">
                    {/* First row - Nombre y Apellido */}
                    <div className="form_row">
                        <div className="form_group">    
                            <label htmlFor="completeName" className="required">Nombre</label>
                            <div className="input_with_icon">
                                <i className="bi bi-person-fill"></i>
                                <input type="text" className="signUpInput" id='completeName' placeholder='Ingresa tu nombre completo' />
                            </div>
                        </div>

                        <div className="form_group">
                            <label htmlFor="lastName" className="required">Apellido</label>
                            <div className="input_with_icon">
                                <i className="bi bi-person-fill"></i>
                                <input type="text" className="signUpInput" id='lastName' placeholder='Ingresa tu Apellido' />
                            </div>
                        </div>
                    </div>

                    {/* Second row - Username y Mail */}
                    <div className="form_row">
                        <div className="form_group">    
                            <label htmlFor="username" className="required">Usuario</label>
                            <div className="input_with_icon">
                                <i className="bi bi-person-circle"></i>
                                <input type="text" className="signUpInput" id='username' placeholder='Elegí tu nombre de usuario' />
                            </div>
                        </div>

                        <div className="form_group">    
                            <label htmlFor="password" className="required">Contraseña</label>
                            <div className="input_with_icon">
                                <i className="bi bi-key"></i>
                                <input type="password" className="signUpInput" id='password' placeholder='Elegí tu contraseña' />
                            </div>
                        </div>
                    </div>

                    {/* Third row - Password y Teléfono */}
                    <div className="form_row">
                        <div className="form_group">
                            <label htmlFor="userEmail" className="required">Email</label>
                            <div className="input_with_icon">
                                <i className="bi bi-envelope"></i>
                                <input type="text" className="signUpInput" id='userEmail' placeholder='Ingresa tu correo' />
                            </div>
                        </div>

                        <div className="form_group">
                            <label htmlFor="phone" className="required">Teléfono</label>
                            <div className="input_with_icon">
                                <i className="bi bi-telephone-fill"></i>
                                <input type="text" className="signUpInput" id='phone' placeholder='Ingresa tu teléfono' />
                            </div>
                        </div>
                    </div>

                    {/* Fourth Row - País */}
                    <div className="form_row">
                        <div className="form_group two_columns">
                            <label htmlFor="country" className="required">País</label>
                            <div className="input_with_icon">
                                <i className="bi bi-globe-americas"></i>
                                <select name="country" id="country" className='signUpInput country' defaultValue={""}>
                                    <option value="" disabled>Selecciona tu país</option>
                                    <option value="DE">Alemania</option>
                                    <option value="AR">Argentina</option>
                                    <option value="AU">Australia</option>
                                    <option value="BR">Brasil</option>
                                    <option value="CA">Canada</option>
                                    <option value="ZA">Chile</option>
                                    <option value="CN">China</option>
                                    <option value="CO">Colombia</option>
                                    <option value="EG">Egipto</option>
                                    <option value="US">Estados Unidos</option>
                                    <option value="ES">España</option>
                                    <option value="FR">Francia</option>
                                    <option value="IN">India</option>
                                    <option value="IT">Italia</option>
                                    <option value="JP">Japón</option>
                                    <option value="MX">México</option>
                                    <option value="NG">Nigeria</option>
                                    <option value="UK">Reino Unido</option>
                                    <option value="RU">Rusia</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* Fifth Row - Botones Enviar y Cancelar */}
                    <div className="form_row last_row">
                        <button onClick={(e) => sendData(e)} type='submit' className="submit_btn send_info_btn">
                            <i className="bi bi-person-plus"></i>
                            Enviar
                        </button>
                        <button onClick={(e) => closeForm(e)} className="submit_btn cancel_form_btn">
                            <i className="bi bi-x-circle"></i>
                            Cancelar
                        </button>
                    </div>

                    {/* Form Footer */}
                    <p className='signup_form_footer_p'>
                        Al crear una cuenta, aceptas nuestros <span className='signup_form_footer_span'>Terminos y Condiciones</span> y las <span className='signup_form_footer_span'>Políticas de Privacidad</span>
                    </p>
                </form>
            </div>
        </>
    )
}

export default SignUpForm