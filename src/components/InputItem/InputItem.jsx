import React, { useState } from 'react'
import { Box, Card, Typography, TextField } from '@mui/material'

const InputItem = () => {

  const [value, setValue] = useState('Input text')

  function commonValue(val) {
    return !val ? 'Input text' : val
  }

  return (
    <Box id='textField' sx={{ margin: '10px' }}>
      <Card elevation={5} sx={{ padding: '10px' }}>
        <Card sx={{ padding: '5px' }}>
          <Typography variant='h5'>
            {commonValue(value)}
          </Typography>
        </Card>
        <Box sx={{ marginTop: '10px' }}>
          <TextField
            id="outlined-basic"
            label={commonValue(value)}
            variant="outlined"
            onChange={e => setValue(e.target.value)} />
        </Box>
      </Card>
    </Box>
  )
}

export default InputItem