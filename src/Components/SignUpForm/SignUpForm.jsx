import { useContext } from 'react'
import './SignUpForm.css'
import { getUserByEmail, getUserByPhone, getUserByUsername, postNewUser } from '../../services/userService.js'
import { UserContext } from '../../Context/userContext.jsx'

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

    const {
        name,
        setName,
        lastName,
        setLastName,
        username,
        setUsername,
        password,
        setPassword,
        email,
        setEmail,
        phone,
        setPhone,
        country,
        setCountry,
        usernameExists,
        setUsernameExists,
        emailExists,
        setEmailExists,
        phoneExists,
        setPhoneExists,
    } = useContext(UserContext)

    async function sendData(e) {
        e.preventDefault()

        const checkUsername = await getUserByUsername(username)
        setUsernameExists(checkUsername)
        const checkEmail = await getUserByEmail(email)
        setEmailExists(checkEmail)
        const checkPhone = await getUserByPhone(phone)
        setPhoneExists(checkPhone)

        /* Verifico si alguno de los campos ya existe en la base de datos. Si existe, no permito continuar. */
        if (usernameExists || emailExists || phoneExists) {
            // Si alguno de los campos ya existen en la base de datos, no permite continuar
            return
        }

        // La data a enviar
        // TODO: verificar que la información sea correcta antes de ser enviada.
        const data = {
            name,
            lastname: lastName,
            username,
            email,
            country,
            password,
            phone
        }

        // Si la data es correcta, ingresa al nuevo usuario en la base de datos
        await postNewUser(data)
        setShowSignUpForm(false)
        setDataToDefult()
    }

    function closeForm(e) {
        e.preventDefault()
        setShowSignUpForm(false)

        setDataToDefult()
    }

    function setDataToDefult(){
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
            <div className="form_flex">
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
                                    className="form_input" 
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
                                    className="form_input" 
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
                                    className="form_input" 
                                    id='username' 
                                    placeholder='Elegí tu nombre de usuario' 
                                    value={username}
                                    onChange={(e) => {setUsername(e.target.value)}}/>
                                </div>
                                {usernameExists && <div className="form_warning">El usuario ya existe</div>}
                                
                            </div>

                            <div className="form_group">    
                                <label htmlFor="password" className="required">Contraseña</label>
                                <div className="input_with_icon">
                                    <i className="bi bi-key"></i>
                                    <input 
                                    type="password" 
                                    className="form_input" 
                                    id='password' 
                                    placeholder='Elegí tu contraseña' 
                                    value={password}
                                    onChange={(e) => {setPassword(e.target.value)}}/>
                                    <button className="watch_password">
                                        <i className="bi bi-eye-fill"></i>
                                    </button>
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
                                    className="form_input" 
                                    id='userEmail' 
                                    placeholder='Ingresa tu correo' 
                                    value={email}
                                    onChange={(e) => {setEmail(e.target.value)}}/>
                                </div>
                                {emailExists && <div className="form_warning">El email ya existe</div>}
                            </div>

                            <div className="form_group">
                                <label htmlFor="phone" className="required">Teléfono</label>
                                <div className="input_with_icon">
                                    <i className="bi bi-telephone-fill"></i>
                                    <input 
                                    type="text" 
                                    className="form_input" 
                                    id='phone' 
                                    placeholder='Ingresa tu teléfono'
                                    value={phone}
                                    onChange={(e) => {setPhone(e.target.value)}}/>
                                </div>
                                {phoneExists && <div className="form_warning">El teléfono ya existe</div>}
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
                                    className='form_input country' 
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
                            <button onClick={(e) => sendData(e)} type='submit' className="primary_btn send_info_btn">
                                <i className="bi bi-person-plus"></i>
                                Enviar
                            </button>
                            <button onClick={(e) => closeForm(e)} className="primary_btn cancel_form_btn">
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