import React from 'react'
import { Box, Typography,  } from '@mui/material'
import PostItem from '../PostItem/PostItem'

const PostList = ({posts, title}) => {

  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Typography variant='h4'>{title}</Typography>
      </Box>
      {posts.map((post, index) => <PostItem number={index + 1} key={post.id} post={post} />)}
    </>
  )
}

export default PostList