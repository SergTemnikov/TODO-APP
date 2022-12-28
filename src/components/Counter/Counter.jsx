import React, { useState } from 'react'
import { Box, Button, Card, Paper, Typography } from '@mui/material'

const Counter = () => {

  const [count, setCount] = useState(0)

  function increment() {
    setCount(count + 1)
  }

  function decrement() {
    setCount(count - 1)
  }

  return (
    <>
      <Paper elevation={5} sx={{padding: '10px', margin: '10px'}}>
        <Card sx={{ padding: '5px' }}>
          <Typography variant='h5' alignContent={'center'}>{count}</Typography>
        </Card>
        <Box variant="text" aria-label="text button group" sx={{ marginTop: '10px' }}>
          <Button onClick={increment} variant='contained' sx={{ marginRight: '10px' }}>INC +</Button>
          <Button onClick={decrement} variant='contained' sx={{ marginRight: '10px' }}>DEC -</Button>
        </Box>
      </Paper>
    </>
  )
}

export default Counter