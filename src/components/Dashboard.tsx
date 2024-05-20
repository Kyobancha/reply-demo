import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import Toolbar from '@mui/material/Toolbar'
import { useState, ReactNode, useEffect } from 'react'
import { NavigationData } from '../types/NavigationData'
import { AppBar } from './AppBar'
import { Navigation } from './Navigation'

const appBarHeight = '4rem'
const drawerWidth = '20rem'

interface Props {
  content: ReactNode
}

export function Dashboard(props: Props) {
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
      <Navigation
        mobileOpen={mobileOpen}
        navigationData={navigationData}
        drawerWidth={drawerWidth}
        appBarHeight={appBarHeight}
        onDrawerTransitionEnd={handleDrawerTransitionEnd}
        onDrawerClose={handleDrawerClose}
      />
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
