import './HeaderComponent.css'

function HeaderComponent() {
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
                    <div className="h_account_options">
                        {/* Botones si esta deslogueado */}
                        {/* Ingresar */}
                        <button className="btn-primary h_account_text">Ingresa</button>
                        <button className="btn-primary btn_account_icon">
                            <i className="bi bi-box-arrow-in-right"></i>
                        </button>
                        {/* Registrarse */}
                        <button className="btn-primary h_account_text">Registrate</button>
                        <button className="btn-primary btn_account_icon">
                            <i className="bi bi-door-open"></i>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default HeaderComponent