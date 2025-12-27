import { useState } from 'react'
import './SignUpForm.css'
import { getUserByEmail, getUserByPhone, getUserByUsername } from '../../services/userService'

/* 
    TODO:
        - Verificar más sobre los autocomplete de los input y select, que figuran como error en la consola (cuadro azul arriba a la derecha)
        - No me convence la forma en la que verifico si el usuario ya existe. Seguramente esto mejorará al usar contextos.
        - Verificar la información enviada (que el nombre sea sólo letras y no este vacío, etc...)

    Next:
        - Estados para todos los inputs y select de formulario
*/

function SignUpForm(props) {
    const { setShowSignUpForm } = props

    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [country, setCountry] = useState('')

    const [usernameExists, setUsernameExists] = useState(false)
    const [emailExists, setEmailExists] = useState(false)
    const [phoneExists, setPhoneExists] = useState(false)

    async function sendData(e) {
        e.preventDefault()

        const usernameExists = await getUserByUsername(username)
        setUsernameExists(usernameExists)
        const emailExists = await getUserByEmail(email)
        setEmailExists(emailExists)
        const phoneExists = await getUserByPhone(phone)
        setPhoneExists(phoneExists)

        /* Verifico si alguno de los campos ya existe en la base de datos. Si existe, no permito continuar. */
        if (usernameExists || emailExists || phoneExists) {
            console.log('Usuario ya existente')
            return
        }

        const data = {
            name,
            lastname: lastName,
            username,
            email,
            country,
            password,
            phone
        }

        console.log(data)
    }

    function closeForm(e) {
        e.preventDefault()
        setShowSignUpForm(false)

        setName('')
        setLastName('')
        setUsername('')
        setPassword('')
        setEmail('')
        setPhone('')
        setCountry('')
    }

    return (
        <>
            {/* Fondo semi-transparente, donde se puede clickear par cerrar el formulario */}
            <div className="signup_form_flex">
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
                                    <input 
                                    type="text" 
                                    className="signUpInput" 
                                    id='completeName' 
                                    placeholder='Ingresa tu nombre completo'
                                    value={name}
                                    onChange={(e) => setName(e.target.value)} />
                                </div>
                            </div>

                            <div className="form_group">
                                <label htmlFor="lastName" className="required">Apellido</label>
                                <div className="input_with_icon">
                                    <i className="bi bi-person-fill"></i>
                                    <input 
                                    type="text" 
                                    className="signUpInput" 
                                    id='lastName' 
                                    placeholder='Ingresa tu Apellido' 
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}/>
                                </div>
                            </div>
                        </div>

                        {/* Second row - Username y Mail */}
                        <div className="form_row">
                            <div className="form_group">    
                                <label htmlFor="username" className="required">Usuario</label>
                                <div className="input_with_icon">
                                    <i className="bi bi-person-circle"></i>
                                    <input 
                                    type="text" 
                                    className="signUpInput" 
                                    id='username' 
                                    placeholder='Elegí tu nombre de usuario' 
                                    value={username}
                                    onChange={(e) => {setUsername(e.target.value)}}/>
                                </div>
                                {usernameExists && <div className="already_exist_warning">El usuario ya existe</div>}
                                
                            </div>

                            <div className="form_group">    
                                <label htmlFor="password" className="required">Contraseña</label>
                                <div className="input_with_icon">
                                    <i className="bi bi-key"></i>
                                    <input 
                                    type="password" 
                                    className="signUpInput" 
                                    id='password' 
                                    placeholder='Elegí tu contraseña' 
                                    value={password}
                                    onChange={(e) => {setPassword(e.target.value)}}/>
                                </div>
                            </div>
                        </div>

                        {/* Third row - Password y Teléfono */}
                        <div className="form_row">
                            <div className="form_group">
                                <label htmlFor="userEmail" className="required">Email</label>
                                <div className="input_with_icon">
                                    <i className="bi bi-envelope"></i>
                                    <input 
                                    type="email" 
                                    className="signUpInput" 
                                    id='userEmail' 
                                    placeholder='Ingresa tu correo' 
                                    value={email}
                                    onChange={(e) => {setEmail(e.target.value)}}/>
                                </div>
                                {emailExists && <div className="already_exist_warning">El email ya existe</div>}
                            </div>

                            <div className="form_group">
                                <label htmlFor="phone" className="required">Teléfono</label>
                                <div className="input_with_icon">
                                    <i className="bi bi-telephone-fill"></i>
                                    <input 
                                    type="text" 
                                    className="signUpInput" 
                                    id='phone' 
                                    placeholder='Ingresa tu teléfono'
                                    value={phone}
                                    onChange={(e) => {setPhone(e.target.value)}}/>
                                </div>
                                {phoneExists && <div className="already_exist_warning">El teléfono ya existe</div>}
                            </div>
                        </div>

                        {/* Fourth Row - País */}
                        <div className="form_row">
                            <div className="form_group two_columns">
                                <label htmlFor="country" className="required">País</label>
                                <div className="input_with_icon">
                                    <i className="bi bi-globe-americas"></i>
                                    <select 
                                    name="country" 
                                    id="country" 
                                    className='signUpInput country' 
                                    value={country}
                                    onChange={(e) => {setCountry(e.target.value)}}>
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
            </div>
        </>
    )
}

export default SignUpForm