import React from 'react'
import { Box, Typography, } from '@mui/material'
import PostItem from '../PostItem/PostItem'

const PostList = ({ posts, title, remove }) => {

  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Typography variant='h4'>{title}</Typography>
      </Box>
      {posts.map((post, index) => {
        return <PostItem
          number={index + 1} key={post.id} post={post} remove={remove}/>
      })}
    </>
  )
}

export default PostList