import './HomePage.css'
import HeaderComponent from "../../Components/Header/HEaderComponent"
import ArticlePreview from "../../Components/ArticlePreview/ArticlePreview"


function HomePage() {
    document.title = 'Home Page'
    return (
        <div className="whole_page_flex">
            <HeaderComponent />
            <main className="main homepage_main">
                <section className="last_articles">
                    <h2 className="last_articles_title">
                        Últimos artículos
                    </h2>
                    <div className="articles_container">
                        <ArticlePreview />
                        <ArticlePreview />
                        <ArticlePreview />
                        <ArticlePreview />
                        <ArticlePreview />{/* 
                        <ArticlePreview />
                        <ArticlePreview />
                        <ArticlePreview />
                        <ArticlePreview />
                        <ArticlePreview /> */}
                    </div>
                </section>

                <section className='most_voted section last_section'>
                    <h2 className="last_articles_title">
                        Mejor Votados
                    </h2>
                    <div className="articles_container">
                        <ArticlePreview />
                        <ArticlePreview />
                        <ArticlePreview />
                        <ArticlePreview />
                        <ArticlePreview />
                        <ArticlePreview />
                        <ArticlePreview />
                        <ArticlePreview />
                        <ArticlePreview />
                        <ArticlePreview />
                    </div>
                </section>

            </main>
        </div>
    )
}

export default HomePage