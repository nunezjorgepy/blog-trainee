import { Link } from 'react-router'
import './Comment.css'

/* 
TODO:
    - Cambiar los links (Link) para que me lleve a la página correcta.
*/

function Comment(props) {
    const { isAnswer } = props
    return (
        <div className={`comment_container + ${isAnswer && 'answer'}`}>
            {/* Información del comentario */}
            <div className="comment_info">
                <Link to={'/user/jorgenunez'} className="comment_by">
                    jorgenunez
                </Link>
                <div className="comment_date">
                    28/11/2025 22:15
                </div>
            </div>
            {/* Comentario */}
            <div className="comment_text">
                <p className="comment_paragraph">
                    Este es el comentario que hago sobre un artículo
                </p>
            </div>
        </div>
    )
}

export default Comment