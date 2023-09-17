import React, { useState, useEffect } from "react"
import BlogList from "./BlogList"
import useFetch from "../useFetch"

function Home() {
   const [name, setName] = useState(true)
   const {
      data: blogs,
      isPending,
      error,
   } = useFetch("http://localhost:8000/blogs")

   //     const inputName = (event) = {
   // setName(name,event.target)
   //     }
   const handleClick = (a) => {
      console.log("hello world", a)
      setName(!name)
   }
   const handleClickAgain = (name, e) => {
      console.log("hello" + name, e.target)
   }

   return (
      <div className="home">
         <h2>Homepage</h2>
         {error && <div>{error}</div>}
         {isPending && <div>Loading...</div>}
         {blogs && <BlogList blogs={blogs} title={"All Blogs"}></BlogList>}

         {/* papma filter ug data */}
         {/* <BlogList
            setBlogs={setBlogs}
            blogs={blogs.filter(({ author }) => author === "mario")}
            title={"Mario's Blogs"}
         ></BlogList> */}

         <p>{name ? "Mario" : "Luigi"}</p>
         <button onClick={handleClick}> Click me</button>
         <button
            onClick={(e) => {
               handleClickAgain("daryl", e)
            }}
         >
            Click me again
         </button>
         {/* <input value={name}></input> */}
      </div>
   )
}

export default Home
