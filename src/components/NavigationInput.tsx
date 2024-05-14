import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import ExpandLessIcon from '@mui/icons-material/ExpandLess'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import { CSSProperties, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { RoutePath } from '../Router'
import { Collapse } from '@mui/material'
import { NavigationObject, StructureData } from '../types/NavigationData'
import { NavigationChildrenList } from './NavigationItem'

interface Props {
  navigationItem: StructureData
  navigationObject: { [key: string]: NavigationObject } | undefined
  index: number
  level: number
  componentStyle?: CSSProperties
}

export function NavigationItem(props: Props) {
  const { navigationItem, navigationObject, index, level, componentStyle } =
    props

  const [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate()

  const navigationValues = Object.values(navigationObject ?? {})

  function routeHome() {
    navigate(RoutePath.TEST)
  }

  function getLabel(navigationItemId: string) {
    if (navigationObject) {
      const element = navigationValues.find((navigationElement) => {
        return navigationElement.id === navigationItemId
      })
      return <p>{element?.label}</p>
    }
  }

  function getExpandIcon(navigationItem: StructureData) {
    if (navigationItem.children?.length) {
      if (isOpen) {
        return (
          <ExpandLessIcon
            onClick={() => setIsOpen(!isOpen)}
            sx={{ marginLeft: '1rem' }}
          />
        )
      } else {
        return (
          <ExpandMoreIcon
            onClick={() => setIsOpen(!isOpen)}
            sx={{ marginLeft: '1rem' }}
          />
        )
      }
    }
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        paddingLeft: `${2 * level}rem`,
        ...componentStyle,
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {getExpandIcon(navigationItem)}
        <ListItem key={index} disablePadding onClick={routeHome}>
          <ListItemButton>
            <ListItemText
              primary={
                navigationObject
                  ? getLabel(navigationItem.id)
                  : '<missing label>'
              }
            />
          </ListItemButton>
        </ListItem>
      </div>
      <Collapse in={isOpen} timeout="auto" unmountOnExit>
        <NavigationChildrenList
          structureData={navigationItem.children}
          navigationObject={navigationObject}
          level={level + 1}
        ></NavigationChildrenList>
      </Collapse>
    </div>
  )
}
