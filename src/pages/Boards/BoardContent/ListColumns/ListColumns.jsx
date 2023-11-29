import { Box, Button, TextField } from '@mui/material'
import Column from './Colum/Column'
import NoteAddIcon from '@mui/icons-material/NoteAdd'
import { SortableContext, horizontalListSortingStrategy } from '@dnd-kit/sortable'
import { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close'

function ListColumns({ columns }) {

  const [openNewColumnForm, setOpenNewColumnForm] = useState(false)
  const toggleOpenNewColumnForm = () => setOpenNewColumnForm(!openNewColumnForm)
  const [newColumnTitle, setNewColumnTitle] = useState('')

  const addNewColumn = () => {
    if (!newColumnTitle) {
      return
    }

    toggleOpenNewColumnForm()
    setNewColumnTitle('')
  }

  return (
    <SortableContext items={columns?.map(c => c._id)} strategy={horizontalListSortingStrategy}>
      <Box sx={{
        bgcolor: 'inherit',
        width: '100%',
        height: '100%',
        display: 'flex',
        overflowX: 'auto',
        overflowY: 'hidden',
        '&::-webkit-scrollbar-track': { m: 0 }
      }}>
        {columns?.map(column => <Column key={column._id} column={column} />)}
        {/* add new column */}
        {
          !openNewColumnForm
            ? <Box onClick={toggleOpenNewColumnForm} sx={{
              minWidth: '200px',
              maxWidth: '200px',
              mx: 2,
              borderRadius: '6px',
              height: 'fit-content',
              bgcolor: '#ffffff3d'
            }}>
              <Button startIcon={<NoteAddIcon />} sx={{
                color: 'white',
                width: '100%',
                justifyContent: 'flex-start',
                pl: 2.5,
                py: 1
              }}>Add new column</Button>
            </Box>
            : <Box sx={{
              minWidth: '200px',
              maxWidth: '200px',
              mx: 2,
              p: 1,
              borderRadius: '6px',
              height: 'fit-content',
              bgcolor: '#ffffff3d',
              display: 'flex',
              flexDirection: 'column',
              gap: 1
            }}>
              <TextField id="outlined-search" label="Enter column title" type="text" size="small" autoFocus
                value={newColumnTitle}
                onChange={(e) => setNewColumnTitle(e.target.value)}
                sx={{
                  minWidth: '120px', maxWidth: '170px',

                  '& label': { color: 'white' },
                  '& input': { color: 'white' },
                  '& label.Mui-focused': { color: 'white' },
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: 'white'
                    },
                    '&:hover fieldset': {
                      borderColor: 'white'
                    },
                    '&:Mui-focused fieldset': {
                      borderColor: 'white'
                    }
                  }
                }} />
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Button
                  variant="contained" color="success" size="small"
                  onClick={addNewColumn}
                  sx={{
                    boxShadow: 'none',
                    border: '0.5px solid',
                    borderColor: (theme) => theme.palette.success.main,
                    '&:hover': { bgcolor: (theme) => theme.palette.success.main }
                  }}
                >
                  Add Cloumn
                </Button>
                <CloseIcon
                  fontSize='small'
                  sx={{ color: 'white', cursor: 'pointer', '&:hover': { bgcolor: (theme) => theme.palette.warning.light } }}
                  onClick={toggleOpenNewColumnForm}
                />
              </Box>
            </Box>
        }
      </Box>
    </SortableContext>
  )
}

export default ListColumns