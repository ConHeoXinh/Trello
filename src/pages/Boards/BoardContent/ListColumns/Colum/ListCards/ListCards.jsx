import { Box } from '@mui/material'
import TrelloCard from './Card/TrelloCard'
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable'

function ListCards({ cards }) {
  return (
    <SortableContext items={cards?.map(c => c._id)} strategy={verticalListSortingStrategy}>
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

        {cards?.map(card => <TrelloCard key={card._id} card={card}/>)}
      </Box>
    </SortableContext>
  )
}

export default ListCards