import { Box } from '@mui/material'

function BoardBar() {
  return (
    <Box
      sx={{
        backgroundColor: 'primary.dark',
        height: (theme) => theme.trello.boardBarHeight,
        width: '100%',
        display: 'flex',
        alignItems: 'center'
      }}
    >
          board bar
    </Box>
  )
}

export default BoardBar