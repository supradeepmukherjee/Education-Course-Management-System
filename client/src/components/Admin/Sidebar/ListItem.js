import { Typography } from '@mui/material';
import { MenuItem } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';

const ListItem = ({ text, selected, setSelected, to, icon }) => {
    return (
        <MenuItem
            active={selected === text}
            onClick={() => setSelected(text)}
            icon={icon}
            component={<Link to={to} />}
        >
            <Typography>
                {text}
            </Typography>
        </MenuItem>
    )
}

export default ListItem