import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import GroupIcon from '@mui/icons-material/Group'
import CommentIcon from '@mui/icons-material/Comment'
import AttachmentIcon from '@mui/icons-material/Attachment'
function TrelloCard({ card }) {

  const shouldShowCardAction = () => {
    return !!card?.memberIds?.length || !!card?.comments?.length || !!card?.attachments?.length
  }

  return (
    <Card sx={{
      cusor:'pointer',
      boxShadow:'0 1px 1px rgba(0, 0, 0, 0.2)',
      overflow:'unset'
    }}>
      {card?.cover && <CardMedia sx={{ height: 140 }} image={card?.cover}/>}
      <CardContent sx={{ p:1.5, '&:last-child':{ p:1.5 } }}>
        <Typography>{card?.title}</Typography>
      </CardContent>
      {shouldShowCardAction && <CardActions>
        {!!card?.memberIds?.length && <Button size="small" startIcon={<GroupIcon/>}>{card?.memberIds?.length}</Button>}
        {!!card?.comments?.length && <Button size="small" startIcon={<CommentIcon/>}>{card?.comments?.length}</Button>}
        {!!card?.attachments?.length && <Button size="small" startIcon={<AttachmentIcon/>}>{card?.attachments?.length}</Button>}
      </CardActions>}
    </Card>
  )
}

export default TrelloCard