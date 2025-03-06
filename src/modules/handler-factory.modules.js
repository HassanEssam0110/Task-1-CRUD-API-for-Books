import { errorHandler } from "../middlewares/index.middlewares.js";
import { AppError } from "../utils/index.utils.js";

const getAll = (Model) => {
  return errorHandler(async (req, res, next) => {
    const docs = await Model.find();

    // SEND RESPONSE
    res.status(200).json({ message: "success", data: docs });
  });
};

const getOne = (Model) => {
  return errorHandler(async (req, res, next) => {
    const doc = await Model.findById(req.params.id);
    if (!doc) return next(new AppError(404, `${Model.modelName} not found`));

    // SEND RESPONSE
    return res.status(200).json({ message: "success", data: doc });
  });
};

const createOne = (Model) => {
  return errorHandler(async (req, res, next) => {
    const doc = await Model.create(req.body);

    // SEND RESPONSE
    res.status(201).json({ message: "success", data: doc });
  });
};

const updateOne = (Model) => {
  return errorHandler(async (req, res, next) => {
    const updatedDoc = await Model.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!updatedDoc)
      return next(new AppError(404, `${Model.modelName} not found`));

    // SEND RESPONSE
    res.status(200).json({ message: "success", data: updatedDoc });
  });
};

const deleteOne = (Model) => {
  return errorHandler(async (req, res, next) => {
    const deletedDoc = await Model.findByIdAndDelete(req.params.id);
    if (!deletedDoc)
      return next(new AppError(404, `${Model.modelName} not found`));

    // SEND RESPONSE
    res.status(200).json({ message: "success" });
  });
};

export { getAll, getOne, createOne, updateOne, deleteOne };
