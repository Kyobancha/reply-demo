import { useEffect, useState } from 'react'
import { NavigationData } from '../types/NavigationData'
import { Navigation } from '../components/Navigation'

export function StartPage() {
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

  return (
    <>
      <Navigation navigationData={navigationData} />
    </>
  )
}
