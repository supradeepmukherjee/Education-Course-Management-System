import Notifications from '@mui/icons-material/Notifications';
import { useEffect, useState } from 'react';
import { format } from 'timeago.js'
import './Header.css'
import io from 'socket.io-client'
const socket = io('/')

const Header = ({ open, setOpen }) => {
  const [notifications, setNotifications] = useState([])
  const [audio] = useState(new Audio('/sound.mp3'))
  useEffect(() => {
    if (notificationsData) {
      setNotifications(notificationsData.filter(n => n.status === 0))
    }
  }, [])
  useEffect(() => {
    socket.on('new notification', data => {
      audio.play()
    })
  }, [audio])
  return (
    <div className='dashboardHeader'>
      <div className="dashboardHeaderContainer" onClick={() => setOpen(!open)}>
        <Notifications sx={{ cursor: 'pointer' }} />
        <span className='notifications'>
          {notifications.length}
        </span>
      </div>
      {open && (
        <div className="notificationContainer">
          <h5>
            Notifications
          </h5>
          {notifications.map(notification => {
            return (
              <div className="notificationContainerItem">
                <div className="notificationContainerItemInfo">
                  <p>
                    {notification.title}
                  </p>
                  <p style={{ cursor: 'pointer' }}>
                    Mark as Read
                  </p>
                </div>
                <p style={{ padding: 'initial .5rem' }}>
                  {notification.msg}
                </p>
                <p style={{ padding: '.5rem', fontSize: '15px' }}>
                  {format(notification.createdAt)}
                </p>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default Header