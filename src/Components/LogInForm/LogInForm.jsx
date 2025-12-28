import { useContext } from 'react'
import { UserContext } from '../../Context/userContext'
import { useNavigate } from 'react-router'

function LogInForm(props) {
    const { setShowLogInForm } = props
    const { 
        username, 
        setUsername, 
        password, 
        setPassword, 
        checkPassword, 
        setIsLoggedIn
    } = useContext(UserContext)
    const navigate = useNavigate()

    async function handleLoginSubmit(e) {
        e.preventDefault()
        const passVerify = await checkPassword()

        if (passVerify) {
            navigate('/')
            setIsLoggedIn(true)
            cancelSumbit(e)
        }
    }

    function cancelSumbit(e) {
        e.preventDefault()
        setShowLogInForm(false)

        /* Volviendo a los valores originales */
        setUsername('')
        setPassword('')
    }
    return (
        <div className="form_flex">
            <div className="form_container">
                <div className="form_header">
                    <h2 className="form_header_title">
                        <i className="bi bi-box-arrow-in-right"></i>
                        <span>Ingresa</span>
                    </h2>
                </div>

                {/* Formulario */}
                <form className="form_body">
                    <div className="form_row">
                        {/* Usuario / Email */}
                        <div className="form_group">
                            <label htmlFor="login_username" className="required">Ususario</label>
                            <div className="input_with_icon">
                                <i className="bi bi-person-fill"></i>
                                <input 
                                    type="text" 
                                    className="form_input" 
                                    id="login_username" 
                                    placeholder='Ingresa tu usuario'
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}/>
                            </div>
                        </div>

                        {/* Contraseña */}
                        <div className="form_group">
                            <label htmlFor="login_password" className="required">Contraseña</label>
                            <div className="input_with_icon">
                                    <i className="bi bi-key"></i>
                                <input 
                                    type="password" 
                                    className="form_input" 
                                    id="login_password" 
                                    placeholder='Ingresa tu contraseña'
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}/>
                                    <button className="watch_password">
                                        <i className="bi bi-eye-fill"></i>
                                    </button>
                            </div>
                        </div>
                        
                    </div>

                    {/* Botones */}
                    <div className="form_row last_row">
                        <button onClick={(e) => {handleLoginSubmit(e)}} className="primary_btn">
                            <i className="bi bi-box-arrow-in-right"></i>
                            Ingresar
                        </button>
                        <button onClick={(e) => {cancelSumbit(e)}} className="primary_btn">
                            <i className="bi bi-x-circle"></i>
                            Cancelar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LogInForm