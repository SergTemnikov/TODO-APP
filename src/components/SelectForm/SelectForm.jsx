import React, { useState } from 'react'
import { Box, Container, FormControl, InputLabel, Select, MenuItem } from '@mui/material'

const SelectForm = ({ options, defaultValue }) => {

  const [option, setOption] = useState('')

  return (
    <Box>
      <Container maxWidth='md'>
        <FormControl sx={{ m: 1, minWidth: 200 }} size="small">
          <InputLabel>Sort posts...</InputLabel>
          <Select
            value={option}
            label="Sort posts..."
            onChange={e => setOption(e.target.value)}>
            <MenuItem value=''><em>{defaultValue}</em></MenuItem>
            {options.map(option => {
              return <MenuItem value={option.value} key={option.value}>{option.name}</MenuItem>
            })}
          </Select>
        </FormControl>
      </Container>
    </Box>
  )
}

export default SelectForm