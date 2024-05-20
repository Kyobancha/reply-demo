import List from '@mui/material/List'
import { CSSProperties } from 'react'
import { NavigationObject, StructureData } from '../types/NavigationData'
import { NavigationItem } from './NavigationInput'
import { SxProps } from '@mui/material'

interface Props {
  structureData: StructureData[] | undefined
  navigationObject: { [key: string]: NavigationObject } | undefined
  level: number
  componentStyle?: CSSProperties
  sx?: SxProps
}

export function NavigationChildrenList(props: Props) {
  const {
    structureData: navigationItems,
    navigationObject,
    level,
    componentStyle,
    sx,
  } = props

  return (
    <List sx={sx}>
      {navigationItems?.map((navigationItem, index) => (
        <NavigationItem
          navigationItem={navigationItem}
          navigationObject={navigationObject}
          level={level}
          index={index}
          componentStyle={componentStyle}
          key={index}
        ></NavigationItem>
      ))}
    </List>
  )
}
