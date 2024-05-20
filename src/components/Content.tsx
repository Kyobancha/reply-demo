import { Box, Toolbar, Typography } from '@mui/material'
import { useLocation } from 'react-router-dom'
import { NavigationData } from '../types/NavigationData'
import { useEffect, useState } from 'react'

interface Props {
  navigationData: NavigationData | undefined
}

export function Content(props: Props) {
  const { navigationData } = props

  const [title, setTitle] = useState('')
  const { pathname } = useLocation()

  useEffect(() => {
    const navigationId: string | undefined =
      navigationData?.seoRouteMap[pathname]

    if (navigationData && navigationId) {
      setTitle(navigationData?.idMap[navigationId].label)
    }
  }, [pathname])

  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        p: '1rem',
      }}
    >
      <Toolbar />
      <Typography>
        This could be the content for:{' '}
        <span style={{ color: 'red' }}>{title}</span>
      </Typography>
    </Box>
  )
}
