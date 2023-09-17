import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

function Create() {
   const [title, setTitle] = useState("")
   const [body, setBody] = useState("")
   const [author, setAuthor] = useState("mario")
   const [isPending, setIsPending] = useState(false)
   const history = useNavigate()

   const handleSubmit = (e) => {
      e.preventDefault()
      const blog = { title, body, author }
      setIsPending(true)
      fetch("http://localhost:8000/blogs", {
         method: "POST",
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify(blog),
      }).then(() => {
         console.log("new blog added")
         setTitle("")
         setBody("")
         setAuthor("mario")
         setIsPending(false)
         history("/")
      })
   }
   return (
      <div className="create">
         <h2>Add a new blog</h2>
         <form onSubmit={handleSubmit}>
            <label>Blog Title:</label>
            <input
               type="text"
               onChange={(event) => setTitle(event.target.value)}
               value={title}
               required
               name="title"
            ></input>
            <label>Blog Body:</label>
            <textarea
               required
               value={body}
               onChange={(e) => setBody(e.target.value)}
            ></textarea>
            <label>Blog Author:</label>
            <select value={author} onChange={(e) => setAuthor(e.target.value)}>
               <option value="mario">mario</option>
               <option value="yoshi">yoshi</option>
            </select>
            {!isPending && <button>Add blog</button>}
            {isPending && <button disabled>Adding...</button>}

            <p>{title}</p>
            <p>{body}</p>
            <p>{author}</p>
         </form>
      </div>
   )
}

export default Create
