import React from 'react'
import { Box, Button, Divider, ListItemIcon, ListItemText, Menu, MenuItem, Tooltip, Typography } from '@mui/material'

import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import AddCardIcon from '@mui/icons-material/AddCard'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import ContentPasteIcon from '@mui/icons-material/ContentPaste'
import DragHandleIcon from '@mui/icons-material/DragHandle'

import { Cloud, ContentCut } from '@mui/icons-material'
import ListCards from './ListCards/ListCards'
import { mapOrder } from '~/utils/sorts'

function Column({ column }) {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  const orderedCards = mapOrder(column?.cards, column?.cardOrderIds, '_id')

  return (
    <Box sx={{ minWidth:'300px', maxWidth:'300px',
      bgcolor: (theme) => (theme.palette.mode === 'dark'? '#2c3e50':'#ebecf0'), ml: 2, borderRadius: '6px', height:'fit-content', maxHeight:(theme) => `calc(${theme.trello.boardContentHeight} - ${theme.spacing(5)})` }}>
      {/* header list card */}
      <Box sx={{
        height: (theme) => theme.trello.columnHeaderHeight,
        p:2,
        display:'flex',
        alignItems:'center',
        justifyContent:'space-between'
      }}>
        <Typography sx={{
          fontSize:'1rem',
          fontWeight:'bold',
          cursor:'pointer'
        }}>{column?.title}</Typography>
        <Box>
          <Tooltip title="More option">
            <ExpandMoreIcon
              sx={{
                color:'text.primary', cursor:'pointer'
              }}
              id="basic-column-dropdown"
              aria-controls={open ? 'basic-menu-column-dropdown' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
            />
          </Tooltip>

          <Menu
            id="basic-menu-column-dropdown"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button-workspace'
            }}
          >
            <MenuItem>
              <ListItemIcon>
                <AddCardIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText>Add new card</ListItemText>
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <ContentCut fontSize="small" />
              </ListItemIcon>
              <ListItemText>Cut</ListItemText>
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <ContentCopyIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText>Copy</ListItemText>
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <ContentPasteIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText>Paste</ListItemText>
            </MenuItem>
            <Divider />
            <MenuItem>
              <ListItemIcon>
                <DeleteForeverIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText>Remove this column</ListItemText>
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <Cloud fontSize="small" />
              </ListItemIcon>
              <ListItemText>Archive this column</ListItemText>
            </MenuItem>
          </Menu>
        </Box>
      </Box>

      <ListCards cards={orderedCards}/>
      {/* footer list card */}
      <Box sx={{
        height: (theme) => theme.trello.columnFooterHeight,
        p:2,
        display:'flex',
        alignItems:'center',
        justifyContent:'space-between'
      }}>
        <Button startIcon={<AddCardIcon/>}>Add new card</Button>
        <Tooltip title="Drag to move">
          <DragHandleIcon sx={{ cursor:'pointer' }}/>
        </Tooltip>
      </Box>
    </Box>
  )
}

export default Column