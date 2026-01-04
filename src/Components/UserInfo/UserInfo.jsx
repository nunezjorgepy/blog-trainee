import './UserInfo.css'

function UserInfo() {
    return (
        <div className='user_info'>
            <h3 className="user_info_title title">
                <i className="bi bi-person-circle"></i>
                Información de usuario
            </h3>
            <div className="user_info_container">
                <div className="user_info_group">
                    <span className="user_info_span">Nombre</span>
                    <div className="user_info_field_text">
                        Jorge Alberto
                    </div>
                </div>
                <div className="user_info_group">
                    <span className="user_info_span">Apellido</span>
                    <div className="user_info_field_text">
                        Nuñez
                    </div>
                </div>
                <div className="user_info_group">
                    <span className="user_info_span">Usuario</span>
                    <div className="user_info_field_text">
                        jorgenunez
                    </div>
                </div>
                <div className="user_info_group">
                    <span className="user_info_span">Email</span>
                    <div className="user_info_field_text">
                        jorge.nunez@hotmail.com
                    </div>
                </div>
                <div className="user_info_group">
                    <span className="user_info_span">País</span>
                    <div className="user_info_field_text">
                        Argentina
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserInfo