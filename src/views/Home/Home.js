import "./Home.css"
import blogs from "../../data"
import BlogCard from "../../component/BlogCard/BlogCard"

function Home() {
    return (
       <>
       <div className="blog-container">
        {
            blogs.map((blogObject,i) => {
                const{
                    
                    title,
                    content,
                    famous,
                    cultural_events,
                    city
                }= blogObject

                return(
                    <BlogCard
                    key={i}
                    title={title}
                    content={content}
                    famous={famous}
                    cultural_events={cultural_events}
                    city={city.picture}
                    />)
            })
        } 
    </div>
        </>
    )
}
export default Home