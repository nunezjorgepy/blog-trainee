import './Article.css'
import { Link } from 'react-router'

function Article() {
    return (
        <section className="article_section section">
            <div className="article_container bottom_border_small">
                {/* Título del artículo */}
                <h1 className="article_title">
                    Título del artículo
                </h1>
                {/* Creado por y fecha del artículo */}
                <div className="article_info">
                    <Link to={'/user/jorgenunez'} className="article_created_by">
                        jorgenunez
                    </Link>
                    <div className="article_created_at">
                        28/11/2025
                    </div>
                </div>
                {/* Arítculo */}
                <div className="article_text">
                    <p className="article_paragraph">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, molestiae cupiditate. Hic tenetur beatae aliquid quia provident maiores placeat ratione.
                    </p>
                    <p className="article_paragraph">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum, debitis consequuntur harum non tempora amet totam dolor a vero quis aliquam nesciunt quos voluptatem delectus atque dolorem quidem voluptate facilis?
                    </p>
                    <p className="article_paragraph">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt rerum libero voluptate molestiae odio unde consequuntur, nihil ipsa aut explicabo!
                    </p>
                </div>
                {/* Tags */}
                
                <div className="article_tags">
                    <div className="tags">
                        <i className="bi bi-bookmark-fill tags_icon"></i>
                    </div>
                    <Link to={'/'} className='tag'>tag1</Link>
                    <Link to={'/'} className='tag'>tag2</Link>
                    <Link to={'/'} className='tag'>tag3</Link>
                    <Link to={'/'} className='tag'>tag4</Link>
                    <Link to={'/'} className='tag'>tag5</Link>
                </div>
            </div>
        </section>
    )
}

export default Article