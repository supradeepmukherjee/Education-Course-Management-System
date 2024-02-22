import { useState } from 'react'
import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import { Box } from '@mui/material'
import { format } from 'timeago.js'
import Mail from '@mui/icons-material/Mail'

const Invoices = ({ isDashboard }) => {
    const [userOrders, setUserOrders] = useState([])
    // filter orders by matching orders' user id with logged in user id and show the courses by matching the course present in the order id with the required course id
    const columns = [
        {
            field: 'id',
            headerName: 'ID',
            flex: .3,
        },
        {
            field: 'userName',
            headerName: 'Name',
            flex: isDashboard ? .6 : .5
        },
        ...(isDashboard
            ? []
            : [
                {
                    field: 'userEmail',
                    headerName: 'Email',
                    flex: 1
                },
                {
                    field: 'title',
                    headerName: 'Course Title',
                    flex: 1
                }
            ]
        ),
        {
            field: 'price',
            headerName: 'Price',
            flex: .5
        },
        ...(isDashboard
            ? [{
                field: 'createdAt',
                headerName: 'Created At',
                flex: .5
            }]
            :
            [{
                field: '',
                headerName: 'Email',
                flex: .2,
                renderCell: params => {
                    return (
                        <a href={`mailto:${params.row.userEmail}`}>
                            <Mail />
                        </a>
                    )
                }
            }]
        )
    ]
    const rows = [

    ]
    return (
        <div style={{ marginTop: isDashboard ? '0' : '40px' }}>
            <Box m={isDashboard ? '0' : '40px'}>
                <Box
                    mt={isDashboard ? '0' : '40px'}
                    height={isDashboard ? '35vh' : '90vh'}
                    overflow='hidden'
                >
                    <DataGrid
                        checkboxSelection={isDashboard ? false : true}
                        rows={rows}
                        columns={columns}
                        slots={isDashboard ? null : { toolbar: GridToolbar }}
                    />
                </Box>
            </Box>
        </div>
    )
}

export default Invoices