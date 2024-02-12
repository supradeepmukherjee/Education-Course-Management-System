import React from 'react'

const People = ({ team = false }) => {
    const columns = [
        {
            field: 'id',
            headerName: 'ID',
            flex: .5
        },
        {
            field: 'name',
            headerName: 'Name',
            flex: 1
        },
        {
            field: 'email',
            headerName: 'Email',
            flex: .5
        },
        {
            field: 'role',
            headerName: 'Role',
            type: 'number',
            flex: .5
        },
        {
            field: 'courses',
            headerName: 'Courses',
            type: 'number',
            flex: .5
        },
        {
            field: 'createdAt',
            headerName: 'Registered at',
            type: 'number',
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
                    <Button>
                        <Delete />
                    </Button>
                )
            }
        }
    ]
    const rows = []
    if (team) {
        // filter accordingly
    }
    return (
        <div className='dashboard'>
            <div className="dashboardSidebar">
                <Sidebar />
            </div>
            <div className="dashboardMain">
                <Main />
                <div className="allCourses">
                    <Box m='20px'>
                        <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-end' }}>
                            <div className="submitBtn" style={{ width: '210px' }}>
                                Add new Member 
                                {/* implement this functionality later. admin has to enter the email of the person to include in his/her team */}
                            </div>
                        </div>
                        <Box mt='40px'>
                            <DataGrid rows={rows} columns={columns} checkboxSelection autoHeight />
                        </Box>
                    </Box>
                </div>
            </div>
        </div>
    )
}

export default People