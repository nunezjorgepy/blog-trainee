import { Link } from "react-router"
import './ArticlePreview.css'
/* TODO: cambiar el link para que me lleve a la página del artículo */

function ArticlePreview() {
    return (
        <div className="preview_conainer">
            <Link to={'/article'}>
                <h3 className="preview_title">
                    Título del artículo
                </h3>
                <div className="preview_paragraphs">
                    <p className="preview_p">Estos son los primeros párrafos del artículo</p>
                    <p className="preview_p">Solamente se mostrarán unas pocas palabras</p>
                    <p className="preview_p">Como para empezar a ver de qué se trata</p>
                </div>
            </Link>
            <div className="prev_article_info">
                <Link to={'/'} className="prev_username">
                    jorgenunez
                </Link>
                <div className="prev_article_date">
                    28/11/2025
                </div>
            </div>
        </div>
    )
}

export default ArticlePreview