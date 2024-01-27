import { useState } from 'react';
import { Box, Typography } from '@mui/material'
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import Logout from "@mui/icons-material/ExitToApp"
import Settings from '@mui/icons-material/Settings';
import ListItem from './ListItem.js'
import './Sidebar.css'

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [selected, setSelected] = useState('Dashboard')
  const logoutHandler = async e => {

  }
  return (
    <Box
      sx={{
        '& .ps-sidebar-container':{
          
        }
      }}
    >
      <Sidebar>
        <Menu>
          <Typography variant='h5' className='misc'>
            {!collapsed && 'MISCELLANEOUS'}
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