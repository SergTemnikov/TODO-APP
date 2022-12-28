import React from 'react'
import { Box, Card, Typography, Button } from '@mui/material'

const PostItem = ({post, number, remove}) => {

  return (
    <Box id='post' sx={{ display: 'flex', justifyContent: 'center' }}>
      <Box width={550} sx={{ margin: '10px' }}>
        <Card elevation={5} sx={{ padding: '10px' }}>
          <Box>
            <Typography variant='h5'>{number}. {post.title}</Typography>
            <Typography variant='p'>{post.body}</Typography>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'end' }}>
            <Button onClick={() => remove(post)} variant='contained' color='error'>Удалить</Button>
          </Box>
        </Card>
      </Box>
    </Box>
  )
}

export default PostItem