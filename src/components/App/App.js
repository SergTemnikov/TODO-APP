import React, { useState } from 'react'
import { CssBaseline, Typography, Box, Divider } from '@mui/material'
import PostList from '../PostList/PostList'
import PostForm from '../PostForm/PostForm'
import Header from '../Header/Header'
import SelectForm from '../SelectForm/SelectForm'

const App = () => {
  const [posts, setPosts] = useState([])
  const [selectedSort, setSelectedSort] = useState('')

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const sortPosts = (sort) => {
    setSelectedSort(sort)
    console.log(selectedSort);
  }

  return (
    <>
      <CssBaseline />
      <Header />
      <PostForm create={createPost} />
      <Divider sx={{ marginBottom: '10px' }} />
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <SelectForm
          defaultValue='None'
          value={selectedSort}
          onChange={sortPosts}
          options={[
            { value: 'title', name: 'By Title' },
            { value: 'body', name: 'By Description' }
          ]} />
      </Box>
      {
        posts.length
          ? <PostList posts={posts} title='Post List' remove={removePost} />
          : <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Typography variant='h6' sx={{ color: 'grey' }}>No Posts Found...</Typography>
          </Box>
      }

    </>
  )
}

export default App
