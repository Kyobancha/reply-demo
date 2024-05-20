import { useEffect, useState } from 'react'
import { NavigationData } from '../types/NavigationData'
import { Navigation } from '../components/Navigation'
import { Typography } from '@mui/material'
import { useLocation } from 'react-router-dom'

export function DynamicPage() {
  const [navigationData, setNavigationData] = useState<NavigationData>()
  const { pathname } = useLocation()

  useEffect(() => {
    fetch(
      'https://partner-navigationservice.e-spirit.cloud/navigation/preview.20eb4e8b-19a2-496a-b151-3317cd7dacd9?language=de_DE&format=caas'
    )
      .then((res) => res.json())
      .then((data) => {
        setNavigationData(data)
      })
  }, [])

  navigationData?.idMap

  return (
    <Navigation
      navigationData={navigationData}
      content={<Typography>You are currently located at {pathname}</Typography>}
    />
  )
}
