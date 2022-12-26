import { AppBar, Box, Toolbar, Typography } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'

const Header = () => {
  return (
    <Box>
      <AppBar position='static'>
        <Container>
          <Toolbar>
            <Typography variant='h5'>TODO App / Notes</Typography>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  )
}

export default Header