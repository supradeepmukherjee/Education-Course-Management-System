import { } from 'react'
import Header from '../Header/Header'
import Sidebar from '../Sidebar/Sidebar'
import { Bar, BarChart, Label, LabelList, ResponsiveContainer, XAxis, YAxis } from "recharts"
import './Course.css'

const Course = () => {
    const data = [
        { name: 'Aug 2023', uv: 3 },
        { name: 'Sep 2023', uv: 4 },
        { name: 'Oct 2023', uv: 3 },
        { name: 'Nov 2023', uv: 9 },
        { name: 'Dec 2023', uv: 7 },
        { name: 'Jan 2024', uv: 6 },
    ]
    // courses.last12Months.forEach(item => data.push({ name: item.month, uv: item.count }))
    return (
        <div className='dashboard'>
            <div className="dashboardSidebar">
                <Sidebar />
            </div>
            <div className="dashboardMain">
                <Header />
                <div className="courseAnalytics">
                    <div className='courseAnalyticsContainer'>
                        <h1 className="heading">
                            Courses Analytics
                        </h1>
                        <p className=''>
                            Last 12 months analytics data
                        </p>
                    </div>
                    <div className="courseAnalyticsContainer2">
                        <ResponsiveContainer width='90%' height='50%'>
                            <BarChart width={150} height={300} data={data}>
                                <XAxis dataKey='name'>
                                    <Label offset={0} position='insideBottom' />
                                </XAxis>
                                <YAxis domain={[0, 'auto']} />
                                <Bar dataKey='uv' fill='#43b114'>
                                    <LabelList dataKey='uv' position='top' />
                                </Bar>
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Course