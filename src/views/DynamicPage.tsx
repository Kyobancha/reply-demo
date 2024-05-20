import { Navigation } from '../components/Navigation'
import { Typography } from '@mui/material'
import { useLocation } from 'react-router-dom'

export function DynamicPage() {
  const { pathname } = useLocation()

  return (
    <Navigation
      content={<Typography>You are currently located at {pathname}</Typography>}
    />
  )
}
