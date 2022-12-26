import React, { useState } from 'react'
import { CssBaseline, Typography, Box, Divider } from '@mui/material'
import PostList from '../PostList/PostList'
import PostForm from '../PostForm/PostForm'
import Header from '../Header/Header'

const App = () => {

  const [posts, setPosts] = useState([])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <>
      <CssBaseline />
      <Header />
      <PostForm create={createPost} />
      <Divider sx={{marginBottom: '10px'}} />
      {
        posts.length
          ? <PostList posts={posts} title='Post List #01' remove={removePost} />
          : <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Typography variant='h4'>No Posts Found...</Typography>
          </Box>
      }


    </>
  )
}

export default App
