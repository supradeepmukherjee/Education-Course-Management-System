import { useState } from 'react';
import { Box, IconButton, Typography } from '@mui/material'
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import Logout from "@mui/icons-material/ExitToApp"
import Expand from '@mui/icons-material/ArrowForward';
import Collapse from '@mui/icons-material/KeyboardBackspace';
import Dashboard from '@mui/icons-material/Dashboard';
import Users from '@mui/icons-material/Groups';
import Receipt from '@mui/icons-material/Receipt';
import Create from '@mui/icons-material/AddBox';
import LiveCourses from '@mui/icons-material/OndemandVideo';
import WebIcon from '@mui/icons-material/Web';
import FAQ from '@mui/icons-material/Help';
import Category from '@mui/icons-material/Category';
import Team from '@mui/icons-material/Diversity1';
import CourseAnalytics from '@mui/icons-material/Analytics';
import OrderAnalytics from '@mui/icons-material/Insights';
import UserAnalytics from '@mui/icons-material/AccountTree';
import ListItem from './ListItem.js'
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
            <Typography variant='h5' className='dashboardSubmenu'>
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
            <Typography variant='h5' className='dashboardSubmenu'>
              {!collapsed && 'Content'}
            </Typography>
            <ListItem
              text={'Create Course'}
              to={'/admin/create'}
              icon={<Create />}
              selected={selected}
              setSelected={setSelected}
            />
            <ListItem
              text={'Live Courses'}
              to={'/admin/courses'}
              icon={<LiveCourses />}
              selected={selected}
              setSelected={setSelected}
            />
            <Typography variant='h5' className='dashboardSubmenu'>
              {!collapsed && 'Customization'}
            </Typography>
            <ListItem
              text={'Hero'}
              to={'/admin/hero'}
              icon={<WebIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <ListItem
              text={'FAQ'}
              to={'/admin/faq'}
              icon={<FAQ />}
              selected={selected}
              setSelected={setSelected}
            />
            <ListItem
              text={'Categories'}
              to={'/admin/categories'}
              icon={<Category />}
              selected={selected}
              setSelected={setSelected}
            />
            <Typography variant='h5' className='dashboardSubmenu'>
              {!collapsed && 'Controllers'}
            </Typography>
            <ListItem
              text={'Manage Team'}
              to={'/admin/team'}
              icon={<Team />}
              selected={selected}
              setSelected={setSelected}
            />
            <Typography variant='h5' className='dashboardSubmenu'>
              {!collapsed && 'Analytics'}
            </Typography>
            <ListItem
              text={'Courses Analytics'}
              to={'/admin/course-analytics'}
              icon={<CourseAnalytics />}
              selected={selected}
              setSelected={setSelected}
            />
            <ListItem
              text={'Orders Analytics'}
              to={'/admin/order-analytics'}
              icon={<OrderAnalytics />}
              selected={selected}
              setSelected={setSelected}
            />
            <ListItem
              text={'Users Analytics'}
              to={'/admin/user-analytics'}
              icon={<UserAnalytics />}
              selected={selected}
              setSelected={setSelected}
            />
            <Typography variant='h5' className='dashboardSubmenu'>
              {!collapsed && 'Extras'}
            </Typography>
            <Typography variant='h5' className='dashboardSubmenu'>
              {!collapsed && 'Miscellaneous'}
            </Typography>
            <div onClick={logoutHandler} className="">
              <ListItem to={'/'} text='Logout' icon={<Logout />} selected={selected} setSelected={setSelected} />
            </div>
          </Box>
        </Menu>
      </Sidebar>
    </Box>
  )
}

export default Sidebar