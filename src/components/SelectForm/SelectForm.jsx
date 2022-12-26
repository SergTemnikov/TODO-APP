import React, { useState } from 'react'
import { Box, Container, FormControl, InputLabel, Select, MenuItem } from '@mui/material'

const SelectForm = () => {

  const [filter, setFilter] = useState('')

  const handleChange = (event) => {
    setFilter(event.target.value);
  }

  return (
    <Box>
      <Container maxWidth='md'>
        <FormControl sx={{ m: 1, minWidth: 200 }} size="small">
          <InputLabel id="demo-simple-select-label">Sort posts...</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={filter}
            label="Sort posts..."
            onChange={handleChange}>
            <MenuItem value=''>
              <em>None</em>
            </MenuItem>
            <MenuItem value='title'>By Title</MenuItem>
            <MenuItem value='description'>By Description</MenuItem>
          </Select>
        </FormControl>
      </Container>
    </Box>
  )
}

export default SelectForm