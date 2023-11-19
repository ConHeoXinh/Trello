import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import GroupIcon from '@mui/icons-material/Group'
import CommentIcon from '@mui/icons-material/Comment'
import AttachmentIcon from '@mui/icons-material/Attachment'
function TrelloCard({ temporaryHideMedia }) {
  if (temporaryHideMedia) {
    return (
      <Card sx={{
        cusor:'pointer',
        boxShadow:'0 1px 1px rgba(0, 0, 0, 0.2)',
        overflow:'unset'
      }}>
        <CardContent sx={{ p:1.5, '&:last-child':{ p:1.5 } }}>
          <Typography>
Card 01
          </Typography>
        </CardContent>
      </Card>
    )
  }
  return (
    <Card sx={{
      cusor:'pointer',
      boxShadow:'0 1px 1px rgba(0, 0, 0, 0.2)',
      overflow:'unset'
    }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://cdn.dribbble.com/userupload/11445462/file/original-f13200e3c9bc09236e239250d690556e.jpg?resize=1024x1434"
        title="green iguana"
      />
      <CardContent sx={{ p:1.5, '&:last-child':{ p:1.5 } }}>
        <Typography>
Lizard
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" startIcon={<GroupIcon/>}>20</Button>
        <Button size="small" startIcon={<CommentIcon/>}>20</Button>
        <Button size="small" startIcon={<AttachmentIcon/>}>20</Button>
      </CardActions>
    </Card>
  )
}

export default TrelloCard