import { Box, Toolbar } from '@mui/material'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export function Content(props: Props) {
  const { children } = props

  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        p: '1rem',
      }}
    >
      <Toolbar />
      {children}
    </Box>
  )
}
