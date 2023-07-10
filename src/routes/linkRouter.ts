import express from 'express';
import postLink from '../controllers/postLinkController';
import getLink from '../controllers/getLinkController';
import validateUrl from '../middleware/validateUrl';

const router = express.Router();

router.route('/post-link').post(postLink);
// router.post('/post-link',validateUrl,postLink)

router.route('/get-link/:id').get(getLink);

export default router;
