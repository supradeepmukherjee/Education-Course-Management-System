import { useState } from 'react';
import { Box, IconButton, Typography } from '@mui/material'
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import Logout from "@mui/icons-material/ExitToApp"
import Settings from '@mui/icons-material/Settings';
import Expand from '@mui/icons-material/ArrowForward';
import Collapse from '@mui/icons-material/KeyboardBackspace';
import Dashboard from '@mui/icons-material/Dashboard';
import Users from '@mui/icons-material/Groups';
import ListItem from './ListItem.js'
import Receipt from '@mui/icons-material/Receipt';
import { Link } from 'react-router-dom';
import './Sidebar.css'

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [selected, setSelected] = useState('Dashboard')
  const logoutHandler = async e => {

  }
  return (
    <Box
      sx={{
        '& .ps-sidebar-container': {
          background: `${'#111c43 !important'
            }`
        },
        '& .ps-menuitem-root:hover': {
          color: '#868dfb !important'
        }
      }}
    >
      <Sidebar
        collapsed={collapsed}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          height: '100vh',
          width: collapsed ? '0' : '18%'
        }}
      >
        <Menu>
          <MenuItem onClick={() => setCollapsed(!collapsed)} icon={collapsed ? <Expand /> : null} className='expand'>
            {!collapsed && (
              <Box display='flex' justifyContent='space-between' alignItems='center' ml='15px'>
                <Link to={'/'}>
                  <h3 className='sidebarHeading'>
                    ECMS
                  </h3>
                </Link>
                <IconButton onClick={() => setCollapsed(!collapsed)} sx={{ display: 'inline-block' }}>
                  <Collapse />
                </IconButton>
              </Box>
            )}
          </MenuItem>
          {!collapsed && (
            <Box mb='25px'>
              <Box display='flex' justifyContent='center' alignItems='center'>
                <img src={'user?.chavi'} alt="" className='sidebarChavi' />
              </Box>
              <Box textAlign={'center'}>
                <Typography variant='h6' sx={{ mt: '10px' }}>
                  {user?.role}
                </Typography>
                <Typography variant='h4' sx={{ marginTop: '10px' }}>
                  : {user?.name}
                </Typography>
              </Box>
            </Box>
          )}
          <Box pl={collapsed ? null : '10%'}>
            <ListItem
              text={'Dashboard'}
              to={'/admin'}
              icon={<Dashboard />}
              selected={selected}
              setSelected={setSelected}
            />
            <Typography variant='h5' className='dashboardSection'>
              {!collapsed && 'Data'}
            </Typography>
            <ListItem
              text={'Users'}
              to={'/admin/users'}
              icon={<Users />}
              selected={selected}
              setSelected={setSelected}
            />
            <ListItem
              text={'Receipts'}
              to={'/admin/receipts'}
              icon={<Receipt />}
              selected={selected}
              setSelected={setSelected}
            />
            <Typography variant='h5' className='dashboardSection'>
              {!collapsed && 'Content'}
            </Typography>
          </Box>
          <Typography variant='h5' className='dashboardSection'>
            {!collapsed && 'Miscellaneous'}
          </Typography>
          <ListItem to={'/admin/settings'} text='Settings' icon={<Settings />} selected={selected} setSelected={setSelected} />
          <div onClick={logoutHandler} className="">
            <ListItem to={'/'} text='Logout' icon={<Logout />} selected={selected} setSelected={setSelected} />
          </div>
        </Menu>
      </Sidebar>
    </Box>
  )
}

export default Sidebar