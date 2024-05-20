import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import MenuIcon from '@mui/icons-material/Menu'
import { AppBar as MuiAppBar, IconButton } from '@mui/material'

interface Props {
  onClick: () => void
  componentHeight: string
}

export function AppBar(props: Props) {
  const { onClick: handleClick, componentHeight } = props

  return (
    <MuiAppBar
      position="fixed"
      sx={{
        height: componentHeight,
        zIndex: 9999,
      }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleClick}
          sx={{ mr: 2, display: { sm: 'none' } }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap component="div">
          Neo Replay Navigation Demo
        </Typography>
      </Toolbar>
    </MuiAppBar>
  )
}
