import React from "react"
import { useParams, useNavigate } from "react-router-dom"
import useFetch from "../useFetch"

function BlogDetails() {
   const { id } = useParams()
   const {
      data: blog,
      error,
      isPending,
   } = useFetch("http://localhost:8000/blogs/" + id)

   const history = useNavigate()

   const handleClickDelete = () => {
      fetch("http://localhost:8000/blogs/" + blog.id, {
         method: "DELETE",
      }).then(() => {
         history("/")
      })
   }

   return (
      <div className="blog-details">
         {isPending && <div>Loading...</div>}
         {error && <div>{error}</div>}
         {blog && (
            <article>
               <h2>{blog.title}</h2>
               <p>Written by {blog.author}</p>
               <div>{blog.body}</div>
               <button onClick={handleClickDelete}>Delete</button>
            </article>
         )}
      </div>
   )
}

export default BlogDetails
