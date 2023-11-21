import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import GroupIcon from '@mui/icons-material/Group'
import CommentIcon from '@mui/icons-material/Comment'
import AttachmentIcon from '@mui/icons-material/Attachment'
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
function TrelloCard({ card }) {

  const { attributes, listeners, setNodeRef, transform, transition, isDragging
  } = useSortable({ id: card._id, data: { ...card } })

  const dndKitCardStyles = {
    // touchAction:'none',// danh cho pointer
    transform: CSS.Translate.toString(transform),
    transition, opacity: isDragging ? 0.5 : undefined, border: isDragging ? '1px solid #2ecc71' : undefined
  }

  const shouldShowCardAction = () => {
    return !!card?.memberIds?.length || !!card?.comments?.length || !!card?.attachments?.length
  }

  return (
    <Card
      ref={setNodeRef}
      style={dndKitCardStyles} {...attributes} {...listeners}
      sx={{
        cusor: 'pointer',
        boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)',
        overflow: 'unset',
        display: card?.FE_PlaceholderCard ? 'none' : 'block'
        // overflow: card?.FE_PlaceholderCard ? 'hidden' : 'unset'
        // height: card?.FE_PlaceholderCard ? '0px' : 'unset'
      }}>
      {card?.cover && <CardMedia sx={{ height: 140 }} image={card?.cover} />}
      <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}>
        <Typography>{card?.title}</Typography>
      </CardContent>
      {shouldShowCardAction && <CardActions>
        {!!card?.memberIds?.length && <Button size="small" startIcon={<GroupIcon />}>{card?.memberIds?.length}</Button>}
        {!!card?.comments?.length && <Button size="small" startIcon={<CommentIcon />}>{card?.comments?.length}</Button>}
        {!!card?.attachments?.length && <Button size="small" startIcon={<AttachmentIcon />}>{card?.attachments?.length}</Button>}
      </CardActions>}
    </Card>
  )
}

export default TrelloCard