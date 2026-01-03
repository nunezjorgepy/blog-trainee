import { Link } from "react-router"
import './ArticlePreview.css'
/* TODO: cambiar el link para que me lleve a la página del artículo */

function ArticlePreview(props) {
    const { article } = props
    const article_date = article.article_at.slice(0, 10).split('-').reverse().join('/')
    const article_paragraphs = article.paragraphs

    const HTMLParagraphs = article_paragraphs.map(
        (paragraphs, index) => {
            return(
                <p key={index} className="preview_p">{paragraphs}</p>
            )
        }
    )

    return (
        <div className="preview_conainer">
            <Link to={'/article/' + article._id}>
                <h3 className="preview_title">
                    {article.title}
                </h3>
                <div className="preview_paragraphs">
                    {HTMLParagraphs}
                </div>
            </Link>
            <div className="prev_article_info">
                <Link to={'/user/' + article.author} className="prev_username">
                    {article.author}
                </Link>
                <div className="prev_article_date">
                    {article_date.slice(0, 10)}
                </div>
            </div>
        </div>
    )
}

export default ArticlePreview