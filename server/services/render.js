const axios = require('axios');


exports.homeRoutes = (req, res) => {
    axios.get('http://localhost:3000/api/users')
        .then(response => res.render('pages/index', { users: response.data }))
        .catch(err => res.send(err))
}
exports.addUser = (req, res) => {
    res.render('pages/add_user')
}
exports.updateUser = (req, res) => {

    axios.get('http://localhost:3000/api/users', { params: { id: req.query.id } })
        .then(response => res.render('pages/update_user', { user: response.data }))
        .catch(err => res.send(err))
    res.render('pages/update_user')
}
exports.deleteUser = (req, res) => {
    res.render('pages/update_user')
}
