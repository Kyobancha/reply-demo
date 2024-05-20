import { Dashboard } from '../components/Dashboard'
import { Typography } from '@mui/material'
import { useLocation } from 'react-router-dom'

export function DynamicPage() {
  const { pathname } = useLocation()

  return (
    <Dashboard
      content={<Typography>You are currently located at {pathname}</Typography>}
    />
  )
}
