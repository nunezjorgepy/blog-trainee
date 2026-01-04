import './UserInfo.css'

function UserInfo(props) {
    const { userSelected, isLoadingUser } = props

    return (
        <div className='user_info'>
            <h3 className="user_info_title title">
                {isLoadingUser ? 
                'Cargando información' : 
                    <>
                    <i className="bi bi-person-circle"></i>
                    Información de usuario
                    </>
                }
            </h3>
            
            <div className="user_info_container">
                <div className="user_info_group">
                    <span className="user_info_span">Nombre</span>
                    <div className="user_info_field_text">
                        {isLoadingUser ? 'Cargando...' : userSelected.name}
                    </div>
                </div>
                <div className="user_info_group">
                    <span className="user_info_span">Apellido</span>
                    <div className="user_info_field_text">
                        {isLoadingUser ? 'Cargando...' : userSelected.lastname}
                    </div>
                </div>
                <div className="user_info_group">
                    <span className="user_info_span">Usuario</span>
                    <div className="user_info_field_text">
                        {isLoadingUser ? 'Cargando...' : userSelected.username}
                    </div>
                </div>
                <div className="user_info_group">
                    <span className="user_info_span">Email</span>
                    <div className="user_info_field_text">
                        {isLoadingUser ? 'Cargando...' : userSelected.email}
                    </div>
                </div>
                <div className="user_info_group">
                    <span className="user_info_span">País</span>
                    <div className="user_info_field_text">
                        {isLoadingUser ? 'Cargando...' : userSelected.country}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserInfo