const db = require('../models')

//POST request to like a user
// const likeUser = (req, res) => {
//   db.relationship.findOrCreate({
//     where: {
//       userId: req.user,
//       recipient: req.params.id,
//       status: 0 
//     }
//   }).then((likes) => {
//     res.status(200).json({ likes })
//   })
// } 

const likeUser = (req, res) => {
  const recipientId = req.params.id
  const { currentUser } = req.body
  const likeStatus = 0

  console.log(`The recipientId is ${recipientId}`)
  console.log(`currentUser is ${currentUser}`)

  // this needs to be updated when blocking is implemented
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

const checkLikeStatus = (req,res) => {
  console.log("Checking like status")
  console.log(req.user)
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

const findMatches = (req, res) => {
  const currentUser = req.user.id
  console.log('The findMatches function is working')

  db.relationship.findAll({
    where: {
      userId: currentUser,
      status: 0
    }
  }).then((matches) => {
    res.json(matches)
  })
}

module.exports = {
  likeUser,
  unlikeUser,
  checkLikeStatus,
  findMatches
}
