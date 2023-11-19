import { Box } from '@mui/material'
import TrelloCard from './Card/TrelloCard'

function ListCards() {
  return (
    <Box sx={{
      display:'flex',
      flexDirection:'column',
      p: '0 5px',
      m: '0 5px',
      gap:1,
      overflowX:'hidden',
      overflowY:'auto',
      maxHeight: (theme) => `calc(
    ${theme.trello.boardContentHeight} - 
    ${theme.spacing(5)} -
    ${theme.trello.columnHeaderHeight} -
    ${theme.trello.columnFooterHeight})`,
      '&::-webkit-scrollbar-track': { backgroundColor: '#ced0da' },
      '&::-webkit-scrollbar-thumb': { backgroundColor: '#bfccf' }
    }}>

      <TrelloCard/>
      <TrelloCard temporaryHideMedia/>
    </Box>
  )
}

export default ListCards