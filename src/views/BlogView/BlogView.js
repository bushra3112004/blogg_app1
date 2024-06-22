import "./BlogView.css"
import { useParams } from "react-router-dom"
import blogs from "../../data"

function BlogView(){
    const{id}=useParams()
    const selectedBlog = blogs.find((blogObject)=>blogObject.id===id)
    return(
        <div>
         <h1>{selectedBlog.title}</h1>
         <p>
            <img src={selectedBlog.city.picture}/>
         </p>
            {selectedBlog.content}
        </div>
    )
}
export default BlogView