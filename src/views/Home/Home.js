import "./Home.css"
import blogs from "../../data"
import BlogCard from "../../component/BlogCard/BlogCard"

function Home() {
    return (
        <>
            <div className="blog-container">
                {
                    blogs.map((blogObject) => {
                        const {
                            id,
                            title,
                            content,
                            famous,
                            cultural_events,
                            picture

                        } = blogObject

                        return (
                            <BlogCard
                                id={id}
                                title={title}
                                content={content}
                                famous={famous}
                                cultural_events={cultural_events}
                                 picture={picture}
                            />)
                    })
                }
            </div>
        </>
    )
}
export default Home