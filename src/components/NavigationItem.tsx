import List from '@mui/material/List'
import { CSSProperties } from 'react'
import { NavigationObject, StructureData } from '../types/NavigationData'
import { NavigationItem } from './NavigationInput'

interface Props {
  structureData: StructureData[] | undefined
  navigationObject: { [key: string]: NavigationObject } | undefined
  level: number
  componentStyle?: CSSProperties
}

export function NavigationChildrenList(props: Props) {
  const {
    structureData: navigationItems,
    navigationObject,
    level,
    componentStyle,
  } = props

  return (
    <List>
      {navigationItems?.map((navigationItem, index) => (
        <NavigationItem
          navigationItem={navigationItem}
          navigationObject={navigationObject}
          level={level}
          index={index}
          componentStyle={componentStyle}
        ></NavigationItem>
      ))}
    </List>
  )
}
