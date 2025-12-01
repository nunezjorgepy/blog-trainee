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
                        <input className='h_search_input' type="search" name="h_search" id="h_search" placeholder='Búsqueda...'/>
                    </div>

                    {/* Opciones de Cuenta */}
                    <div className="h_account_options">
                        <button className="btn-primary h_login">Ingresa</button>
                        <button className="btn-primary h_sign_in">Registrate</button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default HeaderComponent