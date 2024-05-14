import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import ExpandLessIcon from '@mui/icons-material/ExpandLess'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { RoutePath } from '../Router'
import { Collapse } from '@mui/material'
import { NavigationObject, StructureData } from '../types/NavigationData'

interface Props {
  structureData: StructureData[] | undefined
  navigationObject: { [key: string]: NavigationObject } | undefined
}

export function NavigationItem(props: Props) {
  const { structureData: navigationItems, navigationObject } = props

  const [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate()

  const navigationValues = Object.values(navigationObject ?? {})

  function getLabel(navigationItemId: string) {
    if (navigationObject) {
      const element = navigationValues.find((navigationElement) => {
        return navigationElement.id === navigationItemId
      })
      console.log(element?.label)
      return <p>{element?.label}</p>
    }
  }

  function routeHome() {
    navigate(RoutePath.TEST)
  }

  function toggleOpen() {
    setIsOpen(!isOpen)
  }

  function getExpandIcon(navigationItem: StructureData) {
    const expandIconStyle = {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }

    if (!!navigationItem.children?.length) {
      if (isOpen) {
        return (
          <div style={expandIconStyle}>
            <ExpandLessIcon onClick={toggleOpen} />
          </div>
        )
      } else {
        return (
          <div style={expandIconStyle}>
            <ExpandMoreIcon onClick={toggleOpen} />
          </div>
        )
      }
    }
  }

  return (
    <List>
      {navigationItems?.map((navigationItem, index) => (
        <div style={{ display: 'flex', alignItems: 'flex-start' }}>
          {getExpandIcon(navigationItem)}
          <ListItem
            key={index}
            disablePadding
            sx={{ pl: '1rem' }}
            onClick={routeHome}
          >
            <ListItemButton>
              <ListItemText
                primary={
                  navigationObject ? getLabel(navigationItem.id) : 'loading...'
                }
              />
            </ListItemButton>
          </ListItem>
          <Collapse in={isOpen} timeout="auto" unmountOnExit>
            <NavigationItem
              structureData={navigationItem.children}
              navigationObject={navigationObject}
            ></NavigationItem>
          </Collapse>
        </div>
      ))}
    </List>
  )
}
