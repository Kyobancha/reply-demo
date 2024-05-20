import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import { NavigationChildrenList } from './NavigationItem'
import { NavigationData } from '../types/NavigationData'

interface Props {
  mobileOpen: boolean
  navigationData: NavigationData | undefined
  drawerWidth: string
  appBarHeight: string
  onDrawerTransitionEnd: () => void
  onDrawerClose: () => void
}

export function Navigation(props: Props) {
  const {
    mobileOpen,
    navigationData,
    drawerWidth,
    appBarHeight,
    onDrawerTransitionEnd: handleDrawerTransitionEnd,
    onDrawerClose: handleDrawerClose,
  } = props

  return (
    <Box
      component="nav"
      sx={{
        width: { sm: drawerWidth },
        flexShrink: { sm: 0 },
      }}
    >
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onTransitionEnd={handleDrawerTransitionEnd}
        onClose={handleDrawerClose}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: drawerWidth,
          },
        }}
      >
        <NavigationChildrenList
          sx={{ marginTop: appBarHeight }}
          structureData={navigationData?.structure}
          navigationObject={navigationData?.idMap}
          level={0}
          componentStyle={{ paddingLeft: 0 }}
        />
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', sm: 'block' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: drawerWidth,
          },
        }}
        open
      >
        <NavigationChildrenList
          sx={{ marginTop: appBarHeight }}
          structureData={navigationData?.structure}
          navigationObject={navigationData?.idMap}
          level={0}
          componentStyle={{ paddingLeft: 0 }}
        />
      </Drawer>
    </Box>
  )
}
