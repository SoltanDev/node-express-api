import { Router } from 'express';
import controller from './club.controller';

const router = Router();

// api/clubs/
router.route('/')
    .get(controller.getAll)
    .post(controller.createOne)


// api/clubs/:id

router.route('/:id')
    .get(controller.getOne)
    .put(controller.updateOne)
    .delete(controller.deleteOne)

export default router