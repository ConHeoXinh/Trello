import { Avatar, AvatarGroup, Box, Button, Chip, Tooltip } from '@mui/material'
import DashboardIcon from '@mui/icons-material/Dashboard'
import VpnLockIcon from '@mui/icons-material/VpnLock'
import AddToDriveIcon from '@mui/icons-material/AddToDrive'
import BoltIcon from '@mui/icons-material/Bolt'
import FilterListIcon from '@mui/icons-material/FilterList'
import PersonAddIcon from '@mui/icons-material/PersonAdd'
import { capitalizeFirstLetter } from '~/utils/formatters'

const MENU_STYLES ={
  color: 'white',
  bgcolor: 'transparent',
  border: 'none',
  px:'5px',
  borderRadius:'4px',
  '.MuiSvgIcon-root':{
    color: 'white'
  },
  '&:hover':{
    bgcolor:'primary.50'
  }
}

function BoardBar({ board }) {

  return (
    <Box px={2}
      sx={{
        height: (theme) => theme.trello.appBarHeight,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 2,
        paddingX: 2,
        overflowX: 'auto',
        borderBottom:'1px solid white',
        bgcolor: (theme) => (theme.palette.mode === 'dark'? '#2c3e50':'#1976d2')
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Chip icon={<DashboardIcon />} label={board?.title}
          clickable
          sx={MENU_STYLES}
        />
        <Chip icon={<VpnLockIcon />} label={capitalizeFirstLetter(board?.type)}
          clickable
          sx={MENU_STYLES}
        />

        <Chip icon={<AddToDriveIcon />} label="Add To GG"
          clickable
          sx={MENU_STYLES}
        />
        <Chip icon={<BoltIcon />} label="automation"
          clickable
          sx={MENU_STYLES}
        />
        <Chip icon={<FilterListIcon />} label="Filters"
          clickable
          sx={MENU_STYLES}
        />
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>

        <Button startIcon={<PersonAddIcon/>} variant="outlined"
          sx={{
            color:'white',
            borderColor:'white',
            '&:hover':{ borderColor:'white' }
          }}
        >Invite</Button>
        <AvatarGroup max={4} sx={{
          gap:'10px',
          '& .MuiAvatar-root':{
            width:34,
            height:34,
            fontSize:16,
            border: 'none',
            color: 'white',
            cursor:'pointer',
            '&:first-of-type':{ bgcolor: '#a4b0be' }
          }
        }}>
          <Tooltip title="conheoxinh">
            <Avatar alt="conheoxinh" src="/static/images/avatar/1.jpg" />
          </Tooltip>
          <Tooltip title="conheoxinh">
            <Avatar alt="conheoxinh" src="/static/images/avatar/1.jpg" />
          </Tooltip>
          <Tooltip title="conheoxinh">
            <Avatar alt="conheoxinh" src="/static/images/avatar/1.jpg" />
          </Tooltip>
          <Tooltip title="conheoxinh">
            <Avatar alt="conheoxinh" src="/static/images/avatar/1.jpg" />
          </Tooltip>
        </AvatarGroup>
      </Box>
    </Box>
  )
}

export default BoardBar