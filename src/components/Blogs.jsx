import { useEffect } from "react"
import { useState } from "react"
import Blog from "./Blog"

export default function Blogs() {
    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        fetch('blog.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    return (
        <>
            <section>
            <div className="grid grid-cols-1 gap-4 w-[50%]">
                {
                    blogs.map(blog => <Blog key={blog.id} blog={blog}></Blog>)
                }
            </div>
            </section>
        </>
    )
}