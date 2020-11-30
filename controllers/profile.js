const db = require('../models')

// GET request for all profiles
const getAllProfiles = (req, res) => {
  db.profile.findAll().then(foundProfiles => {
    if (!foundProfiles) return res.json({
      message: 'No profiles in Database'
    })
    res.status(200).json({ profiles: foundProfiles })
  })
}

//GET request for finding your own profile 
const getOwnProfile = (req, res) => {
  if (!req.user) {
    res.sendStatus(401);
    return;
  }
  db.profile.findByPk(
    req.user.dataValues.id
  ).then((data) => {
    res.status(200).json(data)
  })
}

//GET request for viewing another profile 
const viewProfile = (req, res) => {
  const { targetProfile } = req.body
  console.log(targetProfile)
  db.profile.findOne({
    where: { userId: req.params.id }
  }).then((profile) => {
    res.status(200).json({ profile })
  })
}

const createProfile = (req, res) => {
  const { displayName, gender, profilePic, city, geoState, aboutMe } = req.body
  console.log(`The current user is ${req.user.dataValues.id}`)
  db.profile.create({
    where: {
      userId: req.user.dataValues.id,
      display_name: displayName,
      gender: gender,
      image: profilePic,
      city: city,
      state: geoState,
      about_me: aboutMe
    }
  }).then((profile) => {
    res.status(200).json({ profile })
  })
}

const editProfile = (req, res) => {
 
  db.profile.update(
    req.body
  , {
    where: {
      id: req.body.id,
    }
  }) 
  .then((editedProfile) => {
    res.status(200).json({ profile: editedProfile })
  })
}

//DELETE request to remove a profile
const deleteProfile = (req, res) => {
  const currentUserId = req.user.id

  console.log(`The deleteProfile function was called successfully, user id is ${currentUserId}`)

  db.profile.destroy({
    where: {
      userId: currentUserId
    }
  }).then((num) => {
    console.log(`${num} profiles deleted`)
    res.json({ message: `Profile with id ${currentUserId} deleted.` })
  }).catch(err => {
    res.json({ message: err })
  })
}

module.exports = {
  getAllProfiles,
  getOwnProfile,
  viewProfile,
  createProfile,
  deleteProfile,
  editProfile,
}
