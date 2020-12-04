const getAll = () => {
    return (req, res) => {
        const data = {}
        data.message = 'gesting getAll handler succeeded'
        res.status(200).json({ data: data })
    }
}

const controller = () => ({
    getAll: getAll()
})

export default controller