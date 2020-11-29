const db = require('../models')

const login = (req, res) => {
  console.log(req.user);
  res.setHeader('Access-Control-Allow-Credentials', 'true')
  //https://github.com/jaredhanson/passport/issues/570#issuecomment-638644317
  //req.login(req.user,() => {});
  res.json({ user: req.user.id })
}

const register = (req, res) => {
  const { name, email, password, birthday } = req.body
  
  // validate the POSTed data - making sure we have a name, an email, a pw
  if (!name || !email || !password || !birthday) {
    return res.json({ message: 'Please enter a name, an email, a password, and your birthday.' })
  }

  // make sure the user doesn't already exist
  db.user.findOne({ where: { email } })
    .then(foundUser => {
      if (foundUser) {
        return res.json({ message: "A user with that email already exists" })
      }

      // if the user doesn't exist, create and save a user to the DB
      db.user.create({
        name,
        email,
        password,
        birthday
      }).then(newUser => {
        db.profile.create({
          userId: newUser.id,
        })
        console.log('New user created!')
        res.json(newUser)
      })
    })
}

const deleteUser = (req, res) => {
  const currentUserId = req.user.id

  console.log(`The deleteUser function was called successfully, user id is ${currentUserId}`)

  db.user.destroy({
    where: {
      id: currentUserId
    }
  }).then((num) => {
    console.log(`${num} users deleted`)
    res.json({ message: `User with id ${currentUserId} deleted.` })
  }).catch(err => {
    res.json({ message: err })
  })
}

const logout = (req, res) => {
  if (!req.user) {
    return res.json({ message: 'No User to log out' })
  }
  req.logout()
  res.json({ message: "User logged out" })
}

module.exports = {
  login,
  register,
  deleteUser,
  logout
}
