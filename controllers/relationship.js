const db = require('../models')

//POST request to like a user
const likeUser = (req, res) => {
  const recipientId = req.params.id
  const { currentUser } = req.body
  const likeStatus = 0

  console.log(`The recipientId is ${recipientId}`)
  console.log(`currentUser is ${currentUser}`)

  db.relationship.findOrCreate({
    where: {
      userId: currentUser,
      recipient: recipientId,
      status: likeStatus
    }
  }).then((likes) => {
    res.status(200).json({ likes })
  })
}

//DELETE request to remove a like
const unlikeUser = (req, res) => {
  const recipientId = req.params.id
  const { currentUser } = req.body
  const likeStatus = 0

  db.relationship.destroy({
    where: {
      userId: currentUser,
      recipient: recipientId,
      status: likeStatus
    }
  }).then(() => {
    res.json({ message: `Like deleted.` })
  }).catch(err => {
    res.json({ message: err })
  })
}

//GET request to get like status
const checkLikeStatus = (req, res) => {
  const recipientId = req.params.id
  const currentUser = req.user.id
  const likeStatus = 0

  db.relationship.findOne({
    where: {
      userId: currentUser,
      recipient: recipientId,
      status: likeStatus
    }
  }).then((data) => {
    res.json(!!data)
  })
}

//GET request to find matches based on likes
const findMatches = (req, res) => {
  const currentUser = req.user.id

  db.relationship.findAll({
    where: {
      userId: currentUser,
      status: 0
    }
  }).then((matches) => {
    console.log(matches)
    res.json(matches)
  })
}

module.exports = {
  likeUser,
  unlikeUser,
  checkLikeStatus,
  findMatches
}
