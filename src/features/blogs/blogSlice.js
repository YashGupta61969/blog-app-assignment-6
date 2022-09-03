import { createSlice } from "@reduxjs/toolkit";
import blogs from '../../data/data'

const initialState = {
    blogs: blogs
}

const blogSlice = createSlice({
    name:'blogs',
    initialState,
    reducers:{
        removeBlog:(state,{payload})=>{
            state.blogs = state.blogs.filter(val=>val.id!==payload)
        },
        clear:(state)=>{
            state.blogs = []
        }
    }
})

export default blogSlice.reducer

export const {removeBlog, clear} = blogSlice.actions