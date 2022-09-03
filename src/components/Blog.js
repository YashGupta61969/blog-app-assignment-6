import React from 'react'
import './blog.css'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

function Blog() {
    const {id} = useParams()
    const {blogs} = useSelector(state=>state.blogs)
    const blog = blogs.find(blg=>blg.id === +id)

  return (
    <div className='blog_page'>

        <div className="blog_page_head">
        <h1>{blog.title}</h1>
        <span>Category : {blog.category}</span>
        <p>Author : {blog.authorName}</p>
        <p>Date : {blog.createdAt}</p>
        </div>

<div className="description">
    <p>{blog.description}</p>
    <p>Sub Categories : {blog.subCategory.map(text=><span key={text}>{text}</span>)}</p>
</div>

    </div>
  )
}

export default Blog
