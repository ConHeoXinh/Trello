import { Box } from '@mui/material'
import ListColumns from './ListColumns/ListColumns'


function BoardContent() {

  return (
    <Box
      sx={{
        height: (theme) => theme.trello.boardContentHeight,
        width: '100%',
        display: 'flex',
        bgcolor: (theme) => (theme.palette.mode === 'dark'? '#34495e':'#1976d2'),
        p:'10px 0'
      }}
    >
      <ListColumns/>
    </Box>
  )
}

export default BoardContent