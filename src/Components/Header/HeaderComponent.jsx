import { useState } from 'react'
import './HeaderComponent.css'
import SignUpForm from '../SignUpForm/SignUpForm'

function HeaderComponent() {
    // Esta variable puede usarse en el context del usuario, que probablemente sea el más alto de todos
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    /*
    TODO:
        Llevar la variable isLoggedIng a un archivo global, ya que se usará en varios componentes;
        Funcionalidad para el botón de búsqueda de pantallas chicas;
        Funcionalidad para los botones Ingresa y Registrate;
     */
    const [showSignUpForm, setShowSignUpForm] = useState(false)

    function setLogged(){
        /* Modifica el estado de la variable isLoggedIn. Si es true, el usuario esta logueado y se muestran las opciones Salir y Configuración. Es es false, esta deslogueado y semuestran Ingresa y Registrate.
        
        IMPORTANTE: esta variable debería estar en un archivo global, ya que se usará en varias secciones (o componentes)
        */
        setIsLoggedIn(!isLoggedIn)
    }

    
    return (
        <header>
            <div className="h_width">
                <div className="h_flex">
                    {/* Logo */}
                    <div className="h_logo">
                        B
                    </div>

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
                                    <button onClick={setLogged} className="btn-primary h_account_text">Salir</button>
                                    <button onClick={setLogged} className="btn-primary btn_account_icon">
                                        <i class="bi bi-box-arrow-left"></i>
                                    </button>
                                    {/* Registrarse */}
                                    <button className="btn-primary h_account_text">Configuración</button>
                                    <button className="btn-primary btn_account_icon">
                                        <i class="bi bi-person-gear"></i>
                                    </button>
                                </div>
                            </> :
                            <>
                                {/* Botones si esta deslogueado */}
                                <div className="h_account_options h_account_logged_out">
                                    {/* Ingresar */}
                                    <button onClick={() => setShowSignUpForm(true)} className="btn-primary h_account_text">Ingresa</button>
                                    <button onClick={setLogged} className="btn-primary btn_account_icon">
                                        <i className="bi bi-box-arrow-in-right"></i>
                                    </button>
                                    {/* Registrarse */}
                                    <button className="btn-primary h_account_text">Registrate</button>
                                    <button className="btn-primary btn_account_icon">
                                        <i className="bi bi-door-open"></i>
                                    </button>
                                </div>
                            </>
                        }
                        
                    </div>
                </div>
            </div>

            {showSignUpForm && <SignUpForm setShowSignUpForm={setShowSignUpForm} />}
        </header>
    )
}

export default HeaderComponent