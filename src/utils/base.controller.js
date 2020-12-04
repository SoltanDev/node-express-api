const getAll = () => {
    return (req, res) => {
        const data = {}
        data.message = 'testing getAll handler succeeded'
        res.status(200).json({ data: data })
    }
}

const createOne = () => {
    return (req, res) => {
        const data = {}
        data.message = 'testing createOne handler '
        res.status(200).json({ data: data })
    }
}

const getOne = () => {
    return (req, res) => {
        const data = {}
        data.message = 'testing getOne handler'
        res.status(200).json({ data: data })
    }
}

const updateOne = () => {
    return (req, res) => {
        const data = {}
        data.message = 'testing updateOne handler'
        res.status(200).json({ data: data })
    }
}

const deleteOne = () => {
    return (req, res) => {
        const data = {}
        data.message = 'testing deleteOne handler'
        res.status(200).json({ data: data })
    }
}


const controller = () => ({
    getAll: getAll(),
    createOne: createOne(),
    getOne: getOne(),
    updateOne: updateOne(),
    deleteOne: deleteOne()
})

export default controller