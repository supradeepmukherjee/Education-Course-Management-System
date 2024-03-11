import { useState } from 'react'
import Sidebar from '../Sidebar/Sidebar'
import { DataGrid } from '@mui/x-data-grid'
import { Box, Button, Modal } from "@mui/material"
import Delete from "@mui/icons-material/Delete"
import Edit from "@mui/icons-material/Edit"
import './AllCourses.css'
import Header from '../Header/Header'

const AllCourses = () => {
    const [open, setOpen] = useState(false)
    const [id, setId] = useState('')
    const columns = [
        {
            field: 'id',
            headerName: 'ID',
            flex: .5
        },
        {
            field: 'title',
            headerName: 'Course Title',
            flex: 1
        },
        {
            field: 'ratings',
            headerName: 'Ratings',
            flex: .5
        },
        {
            field: 'purchased',
            headerName: 'Purchased',
            type: 'number',
            flex: .5
        },
        {
            field: 'createdAt',
            headerName: 'Created At',
            flex: .5
        },
        {
            field: 'actions',
            headerName: 'Actions',
            flex: .2,
            minWidth: 150,
            sortable: false,
            renderCell: params => {
                return (
                    <Button onClick={() => {
                        setOpen(!open)
                        setId(params.row.id)
                    }}>
                        <Delete />
                    </Button>
                )
            }
        }
    ]
    const rows = []
    return (
        <div className='dashboard'>
            <div className="dashboardSidebar">
                <Sidebar />
            </div>
            <div className="dashboardMain">
                <Header />
                <div className="allCourses">
                    <Box m='20px' >
                        <Box mt='40px'>
                            <DataGrid rows={rows} columns={columns} checkboxSelection autoHeight />
                        </Box>
                    </Box>
                    {open&&(
                        <Modal open={open}>
                            
                        </Modal>
                    )}
                </div>
            </div>
        </div>
    )
}

export default AllCourses