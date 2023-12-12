const analytics = async model => {
    const last12Months = []
    const currentDate = new Date()
    currentDate.setDate(currentDate.getDate() + 1)
    for (let i = 0; i < 12; i++) {
        const end = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() - i * 28)
        const start = new Date(end.getFullYear(), end.getMonth(), end.getDate() - 28)
        const monthYr = end.toLocaleString('default', {
            day: 'numeric',
            month: 'short',
            year: 'numeric'
        })
        const count = await model.countDocuments({
            createdAt: {
                $gte: start,
                $lt: end
            }
        })
        last12Months.push({
            month: monthYr,
            count
        })
    }
    return last12Months
}

export default analytics