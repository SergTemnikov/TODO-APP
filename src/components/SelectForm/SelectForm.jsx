import React from 'react'
import { Box, Container, FormControl, InputLabel, Select, MenuItem } from '@mui/material'

const SelectForm = ({ options, defaultValue, value, onChange }) => {
  return (
    <Box>
      <Container maxWidth='md'>
        <FormControl sx={{ m: 1, minWidth: 200 }} size="small">
          <InputLabel>Sort posts...</InputLabel>
          <Select
            value={value}
            label="Sort posts..."
            onChange={e => onChange(e.target.value)}
          >
            <MenuItem value={defaultValue}><em>{defaultValue}</em></MenuItem>
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