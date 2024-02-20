import Notifications from '@mui/icons-material/Notifications';
import './Header.css'

const Header = ({ open, setOpen }) => {
  return (
    <div className='dashboardHeader'>
      <div className="dashboardHeaderContainer" onClick={() => setOpen(!open)}>
        <Notifications sx={{ cursor: 'pointer' }} />
        <span className='notifications'>
          6
        </span>
      </div>
      {open && (
        <div className="notificationContainer">
          <h5>
            Notifications
          </h5>
          <div className="notificationContainerItem">
            <div className="notificationContainerItemInfo">
              <p>
                New Question Received
              </p>
              <p style={{ cursor: 'pointer' }}>
                Mark as Read
              </p>
            </div>
            <p style={{ padding: 'initial .5rem' }}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel quo praesentium eum doloremque reprehenderit quibusdam qui magni repellat labore magnam, eius voluptate voluptatum quod necessitatibus alias ducimus vitae nemo cum.
            </p>
            <p style={{ padding: '.5rem', fontSize: '15px' }}>
              7 days ago
            </p>
          </div>
        </div>
      )}
    </div>
  )
}

export default Header