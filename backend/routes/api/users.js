const express = require('express');
const bcrypt = require('bcryptjs');
const asyncHandler = require('express-async-handler');
const { check, body } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User } = require('../../db/models');

const router = express.Router();

const validateSignup = [
  check('email')
    .exists({ checkFalsy: true })
    .isEmail()
    .withMessage('Please provide a valid email.'),
  body('email')
    .custom(async value => {
      const existingUser = await User.findOne({
        where: {
          email: value
        }
      })
      if (existingUser) {
        throw new Error('E-mail already in use');
      }
    }),
  body('username')
  .custom(async value => {
    const existingUser = await User.findOne({
      where: {
        username: value
      }
    })
    if (existingUser) {
      throw new Error('Username already in use');
    }
  }),
  check('username')
    .exists({ checkFalsy: true })
    .isLength({ min: 4 })
    .withMessage('Please provide a username with at least 4 characters.'),
  check('username')
    .not()
    .isEmail()
    .withMessage('Username cannot be an email.'),
  check('password')
    .exists({ checkFalsy: true })
    .isLength({ min: 6 })
    .withMessage('Password must be 6 characters or more.'),
  handleValidationErrors
];

// Sign up
router.post(
  '/',
  validateSignup,
  async (req, res) => {
    const { email, password, username } = req.body;
    const hashedPassword = bcrypt.hashSync(password);
    const user = await User.create({ email, username, hashedPassword });

    const safeUser = {
      id: user.id,
      email: user.email,
      username: user.username,
    };

    await setTokenCookie(res, safeUser);

    return res.json({
      user: safeUser
    });
  }
);

//Get a user

router.get('/:id(\\d+)', asyncHandler(async(req, res) => {
  const id = req.params.id;
  const user = await User.findByPk(id)
  res.json(user)
}));

// Get Users

router.get('/', asyncHandler(async (req, res) => {
  const users = await User.findAll();
  res.json(users);
}));


// Get Stories for a User
router.get('/:id(\\d+)/stories/', asyncHandler(async (req, res) => {
  const id = req.params.id;
  const stories = await Story.findAll({
    where: { authorId: +id }
  });
  res.json(stories);
}));

module.exports = router;
