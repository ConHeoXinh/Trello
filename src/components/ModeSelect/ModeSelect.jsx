import { Box, FormControl, InputLabel, MenuItem, Select, useColorScheme } from '@mui/material'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness'

function ModeSelect() {
  const { mode, setMode } = useColorScheme()

  const handleChange = (event) => {
    const selectedMode = event.target.value
    setMode(selectedMode)
  }

  return (
    <FormControl sx={{ minWidth:'120px' }} size="small">
      <InputLabel id="label-select-dark-light-mode"
        sx={{ color:'white', '& .Mui-focused':{
          color:'white'
        } }}
      >Mode</InputLabel>
      <Select
        labelId="label-select-dark-light-mode"
        id="select-dark-light-mode"
        value={mode}
        label="Age"
        onChange={handleChange}
        sx={{
          color:'white',
          '.MuiOutlinedInput-notchedOutline':{ borderColor: 'white' },
          '&:hover .MuiOutlinedInput-notchedOutline':{ borderColor: 'white' },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline':{ borderColor: 'white' },
          '.MuiSvgIcon-root':{ color:'white' }
        }}
      >
        <MenuItem value="light">
          <Box sx={{ display: 'flex', alignItems: 'center', gap:'8px' }}>
            <LightModeIcon fontSize="small"/>Light
          </Box>
        </MenuItem>
        <MenuItem value="dark">
          <Box sx={{ display: 'flex', alignItems: 'center', gap:'8px' }}>
            <DarkModeIcon fontSize="small"/>Dark
          </Box>
        </MenuItem>
        <MenuItem value="system">
          <Box sx={{ display: 'flex', alignItems: 'center', gap:'8px' }}>
            <SettingsBrightnessIcon fontSize="small"/>System
          </Box>
        </MenuItem>
      </Select>
    </FormControl>
  )
}
export default ModeSelect
