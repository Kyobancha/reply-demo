import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import Drawer from '@mui/material/Drawer'
import Toolbar from '@mui/material/Toolbar'
import { useState, ReactNode, useEffect } from 'react'
import { NavigationData } from '../types/NavigationData'
import { NavigationChildrenList } from './NavigationItem'
import { AppBar } from './AppBar'

const appBarHeight = '4rem'
const drawerWidth = 240

interface Props {
  content: ReactNode
}

export function Navigation(props: Props) {
  const { content } = props

  const [mobileOpen, setMobileOpen] = useState(false)
  const [isClosing, setIsClosing] = useState(false)
  const [navigationData, setNavigationData] = useState<NavigationData>()

  useEffect(() => {
    fetch(
      'https://partner-navigationservice.e-spirit.cloud/navigation/preview.20eb4e8b-19a2-496a-b151-3317cd7dacd9?language=de_DE&format=caas'
    )
      .then((res) => res.json())
      .then((data) => {
        setNavigationData(data)
      })
  }, [])

  const handleDrawerClose = () => {
    setIsClosing(true)
    setMobileOpen(false)
  }

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false)
  }

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen)
    }
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar onClick={handleDrawerToggle} componentHeight={appBarHeight} />
      <Box
        component="nav"
        sx={{
          width: { sm: drawerWidth },
          flexShrink: { sm: 0 },
          '&  > div > div': { marginTop: appBarHeight },
        }}
        aria-label="mailbox folders"
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          <NavigationChildrenList
            structureData={navigationData?.structure}
            navigationObject={navigationData?.idMap}
            level={0}
            componentStyle={{ paddingLeft: 0 }}
          />
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
          open
        >
          <NavigationChildrenList
            structureData={navigationData?.structure}
            navigationObject={navigationData?.idMap}
            level={0}
            componentStyle={{ paddingLeft: 0 }}
          />
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
        }}
      >
        <Toolbar />
        {content}
      </Box>
    </Box>
  )
}
