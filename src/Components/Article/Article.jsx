import { useEffect, useState } from 'react'
import './Article.css'
import { Link, useParams } from 'react-router'
import { getOneArticle } from '../../services/articleService'

function Article() {
    const { article_id } = useParams()
    const [articleSelected, setArticleSelected] = useState({})
    const [isLoadingArticle, setIsLoadingArticle] = useState(true)

    function loadArticle(){
        setIsLoadingArticle(true)
        setTimeout(
            async function() {
                // Busco el artículo
                const foundArticle = await getOneArticle(article_id)
                // Guardo la respuesta en mi estado
                setArticleSelected(foundArticle)

                setIsLoadingArticle(false)
            },
            1000
        )
    }

    useEffect(
        () => {
            loadArticle()
        },
        []
    )

    return (
        <section className="article_section section">
            <div className="article_container bottom_border_small">
                {isLoadingArticle ? 
                    <>
                        <div className="loading">El artículo se esta cargando</div>
                    </> :
                    <>
                        {/* Título del artículo */}
                        <h1 className="article_title">
                            {articleSelected.title}
                        </h1>
                        {/* Creado por y fecha del artículo */}
                        <div className="article_info">
                            <Link to={'/user/' + articleSelected.author} className="article_created_by">
                                {articleSelected.author}
                            </Link>
                            <div className="article_created_at">
                                {articleSelected.article_at.slice(0, 10).split('-').reverse().join('/')}
                            </div>
                        </div>
                        {/* Arítculo */}
                        <div className="article_text">
                            {
                                articleSelected.paragraphs.map(
                                    (paragraph, index) => {
                                        return(
                                            <p key={index} className="article_paragraph">
                                                {paragraph}
                                            </p>
                                        )
                                    }
                                )
                            }
                        </div>

                        {/* Tags */}
                        <div className="article_tags">
                            <div className="tags">
                                <i className="bi bi-bookmark-fill tags_icon"></i>
                            </div>
                            {
                                articleSelected.tags.map(
                                    (tag, index) => {
                                        return(
                                            <Link key={index} to={'/'} className='tag'>{tag}</Link>
                                        )
                                    }
                                )
                            }
                        </div>
                    </>
                    }
            </div>
        </section>
    )
}

export default Article