import React from 'react'
import { AppBar, Box, Toolbar, Typography } from '@mui/material'
import { Container } from '@mui/system'

const Header = () => {
  return (
    <Box>
      <AppBar position='static'>
        <Container maxWidth='md'>
          <Toolbar>
            <Typography variant='h5'>TODO App / Notes</Typography>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  )
}

export default Header