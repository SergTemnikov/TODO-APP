import React, { useState } from 'react'
import { Box, TextField, Button } from '@mui/material'

const PostForm = ({create, remove}) => {

  const [post, setPost] = useState({
    title: '',
    body: ''
  })

  const addNewPost = (e) => {
    e.preventDefault()
    const newPost = {
      ...post,
      id: Date.now()
    }
    create(newPost)
    setPost({title: '', body: ''})
  }

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <Box component='form' sx={{ margin: '20px' }}>
        <TextField
          fullWidth
          value={post.title}
          onChange={e => setPost({ ...post, title: e.target.value })}
          label='Post Title'
          sx={{ margin: '10px 0 10px 0' }} />
        <TextField
          fullWidth
          value={post.body}
          onChange={e => setPost({ ...post, body: e.target.value })}
          label='Post Description' />
        <Box sx={{ marginTop: '10px', textAlign: 'end' }}>
          <Button onClick={addNewPost} variant='contained'>Add Post</Button>
        </Box>
      </Box>
    </Box>
  )
}

export default PostForm