const getAll = (model) => {
  return async (req, res) => {
    try {
      const data = await model.find({}).lean().exec();
      res.status(200).json({ data: data });
    } catch (e) {
      console.log(e);
      res.status(400).end();
    }
  };
};

const createOne = (model) => {
  return async (req, res) => {
    try {
      const data = await model.create({ ...req.body });
      res.status(201).json({ data: data });
    } catch (e) {
      console.log(e);
      res.status(400).end();
    }
  };
};

const getOne = (model) => {
  return async (req, res) => {
    try {
      const data = await model.findOne({ _id: req.params.id }).lean().exec();
      res.status(200).json({ data: data });
    } catch (e) {
      console.log(e);
      res.status(400).end();
    }
  };
};

const updateOne = (model) => {
  return async (req, res) => {
    try {
      const data = await model
        .findOneAndUpdate(
          { _id: req.params.id },
          { ...req.body },
          { new: true }
        )
        .lean()
        .exec();
      res.status(200).json({ data: data });
    } catch (e) {
      console.log(e);
      res.status(400).end();
    }
  };
};

const deleteOne = (model) => {
  return async (req, res) => {
    try {
      const data = await model.findOneAndRemove({ _id: req.params.id });
      res.status(200).json({ data: data });
    } catch (e) {
      console.log(e);
      res.status(400).end();
    }
  };
};

const controller = (model) => ({
  getAll: getAll(model),
  createOne: createOne(model),
  getOne: getOne(model),
  updateOne: updateOne(model),
  deleteOne: deleteOne(model),
});

export default controller;
