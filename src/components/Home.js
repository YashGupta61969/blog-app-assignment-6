import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { removeBlog, clear } from '../features/blogs/blogSlice';
import './home.css'


function Home() {
   const dispatch = useDispatch();
   const navigate = useNavigate()
   const {blogs} = useSelector(state=>state.blogs)

   const remove = (e,id)=>{
    e.stopPropagation()
    dispatch(removeBlog(id))
   }

  return (
    <div className='home'>
      <h1>Blogs</h1>

{blogs.length ? <div className="blogs">
            {blogs.map(blog=>(
                <div key={blog.id} onClick={()=>navigate(`blog/${blog.id}`)} className="blog">
                    <div className="blog_left">
                        <h1>{blog.title}</h1>
                        <p>By {blog.authorName}</p>
                    </div>
                    <div className="blog_right">
                        <strong>{blog.createdAt}</strong>
                        <button onClick={(e)=>remove(e,blog.id)}>Remove blog</button>
                    </div>
                </div>
            ))}
        </div> : <strong>No Posts Found</strong>}

       {blogs.length && <button className='clear' onClick={()=>dispatch(clear())}>Clear All</button>}
    </div>
  )
}

export default Home
