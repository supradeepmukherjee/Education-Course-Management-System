import { Modal as MuiModal, Box } from '@mui/material'

const Modal = ({ open, setOpen, active, setRoute, component: Component }) => {
    return (
        <MuiModal open={open} onClose={() => setOpen(false)} aria-labelledby='modal-modal-title' aria-describedby='modal-modal-description'>
            <Box
                sx={{
                    backgroundColor: 'white', // dark bg slate
                    outline: 'none',
                    padding: '4px',
                    borderRadius: '8px',
                    width: '450px',
                    translate: '-50% -50%',
                    left: '50%',
                    top: '50%',
                    position: 'absolute'
                }}
            >
                <Component />
            </Box>
        </MuiModal>
    )
}

export default Modal