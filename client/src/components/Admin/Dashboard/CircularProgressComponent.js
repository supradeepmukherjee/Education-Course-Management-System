import { Box, CircularProgress } from '@mui/material'

const CircularProgressComponent = ({ open, value }) => {
    return (
        <Box sx={{ position: 'relative', display: 'inline-flex' }}>
            <CircularProgress
                variant='determinate'
                value={value}
                size={45}
                color={value > 99 ? 'info' : 'error'}
                thickness={45}
                style={{ zIndex: open ? -1 : 1 }}
            />
            <Box
                sx={{
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    position: 'absolute',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
            </Box>
        </Box>
    )
}

export default CircularProgressComponent