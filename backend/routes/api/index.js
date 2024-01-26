const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const storiesRouter = require('./stories.js');
const commentsRouter = require('./comments.js');
const likesRouter = require('./likes.js');
const followsRouter = require('./follows.js');
const { restoreUser } = require("../../utils/auth.js");

router.use(restoreUser);

router.use('/session', sessionRouter);
router.use('/users', usersRouter);
router.use('/stories', storiesRouter);
router.use('/comments', commentsRouter);
router.use('/likes', likesRouter);
router.use('/follows', followsRouter);

module.exports = router;
