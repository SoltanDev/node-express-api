import { Router } from "express";
import controller from "./player.controller";

const router = Router();

router.route("/")
  .get(controller.getAll)
  .post(controller.createOne);

router
  .route("/:id")
  .get(controller.getOne)
  .put(controller.updateOne)
  .delete(controller.deleteOne);

export default router;