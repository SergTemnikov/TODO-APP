import React, { useState } from 'react'
import { CssBaseline } from '@mui/material'
import PostList from '../PostList/PostList'
import PostForm from '../PostForm/PostForm'

const App = () => {

  const [posts, setPosts] = useState([])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  return (
    <>
      <CssBaseline />
      <PostForm create={createPost} />
      <PostList posts={posts} title='Post List #01' />
    </>
  )
}

export default App
