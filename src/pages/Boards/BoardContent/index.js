import { Box } from '@mui/material'

function BoardContent() {
  return (
    <Box
      sx={{
        backgroundColor: 'primary.light',
        height: (theme) =>
          `calc(100vh-${theme.trello.appBarHeight}-${theme.trello.boardBarHeight})`,
        width: '100%',
        display: 'flex',
        alignItems: 'center'
      }}
    >
          content
    </Box>
  )
}

export default BoardContent