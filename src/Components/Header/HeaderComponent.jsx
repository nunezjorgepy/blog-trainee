import { useContext, useState } from 'react'
import './HeaderComponent.css'
import SignUpForm from '../SignUpForm/SignUpForm'
import LogInForm from '../LogInForm/LogInForm'
import { UserContext } from '../../Context/userContext'
import { Link } from 'react-router'

function HeaderComponent() {
    // Esta variable puede usarse en el context del usuario, que probablemente sea el más alto de todos
    const { isLoggedIn, setIsLoggedIn } =useContext(UserContext)
    /*
    TODO:
        Llevar la variable isLoggedIng a un archivo global, ya que se usará en varios componentes;
        Funcionalidad para el botón de búsqueda de pantallas chicas;
        Funcionalidad para los botones Ingresa y Registrate;
     */
    const [showSignUpForm, setShowSignUpForm] = useState(false)
    const [showLogInForm, setShowLogInForm] = useState(false)
    
    return (
        <header>
            <div className="h_width">
                <div className="h_flex">
                    {/* Logo */}
                    <Link to={'/'} className="h_logo">
                        B
                    </Link>

                    {/* Search Bar */}
                    <div className="h_search_bar">
                        <div className="h_search_big_screens">
                            <input className='h_search_input' type="search" name="h_search" id="h_search" placeholder='Búsqueda...'/>
                            <button className='h_search_btn'>
                                <i className="bi bi-search h_search_icon"></i>
                            </button>
                        </div>
                        <button className="h_search_btn_small_screens btn-primary">
                            <i className="bi bi-search h_search_icon"></i>
                        </button>
                    </div>

                    {/* Opciones de Cuenta */}
                    <div className="h_account_divisor">
                        {
                            isLoggedIn ? 
                            <>
                                {/* Botones si esta logueado */}
                                <div className="h_account_options h_account_logged_in">
                                    {/* Ingresar */}
                                    <button onClick={() => setIsLoggedIn(false)} className="btn-primary h_account_text">Salir</button>
                                    <button onClick={() => setIsLoggedIn(false)} className="btn-primary btn_account_icon">
                                        <i className="bi bi-box-arrow-left"></i>
                                    </button>
                                    {/* Registrarse */}
                                    <button className="btn-primary h_account_text">Configuración</button>
                                    <button className="btn-primary btn_account_icon">
                                        <i className="bi bi-person-gear"></i>
                                    </button>
                                </div>
                            </> :
                            <>
                                {/* Botones si esta deslogueado */}
                                <div className="h_account_options h_account_logged_out">
                                    {/* Ingresar */}
                                    <button onClick={() => {setShowLogInForm(true)}} className="btn-primary h_account_text">Ingresa</button>
                                    <button onClick={() => {setShowLogInForm(true)}} className="btn-primary btn_account_icon">
                                        <i className="bi bi-box-arrow-in-right"></i>
                                    </button>
                                    {/* Registrarse */}
                                    <button onClick={() => setShowSignUpForm(true)} className="btn-primary h_account_text">Registrate</button>
                                    <button onClick={() => setShowSignUpForm(true)} className="btn-primary btn_account_icon">
                                        <i className="bi bi-door-open"></i>
                                    </button>
                                </div>
                            </>
                        }
                        
                    </div>
                </div>
            </div>

            {showSignUpForm && <SignUpForm setShowSignUpForm={setShowSignUpForm} />}
            {showLogInForm && <LogInForm setShowLogInForm={setShowLogInForm} setIsLoggedIn={setIsLoggedIn}/>}
        </header>
    )
}

export default HeaderComponent