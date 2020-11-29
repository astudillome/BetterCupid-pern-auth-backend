const router = require('express').Router()
const ctrl = require('../controllers');

router.put('/:id', ctrl.relationship.likeUser);
router.delete('/:id', ctrl.relationship.unlikeUser);
router.get('/:id', ctrl.relationship.checkLikeStatus);
router.get('/', ctrl.relationship.findMatches);

module.exports = router;
