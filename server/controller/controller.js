const Userdb = require('../model/model');

// create and save new user;

exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({ message: "Content cannot be empty" })
        return;
    }
    const user = new Userdb({
        name: req.body.name,
        email: req.body.email,
        gender: req.body.gender,
        status: req.body.status
    })
    user
        .save(user)
        .then(data => res.redirect('/') )
        .catch(err => res.status(500).send({ message: err.message || "Some error occured while createing user" }))
}

// fetch data from database

exports.find = (req, res) => {
    if (req.query.id) {
        const id = req.query.id
        console.log(id);
        Userdb.findById(id)
            .then(data => {
                if (!data) {
                    res.status(404).send({ message: "could not find user with id " + id })
                } else {
                    res.send(data)
                    console.log(data);
                }
            })
            .catch(err => res.status(500).send({ message: "Error fetching user" }))
    } else {
        Userdb.find()
            .then(data => res.send(data))
            .catch(err => res.status(500).send({ message: err.message || "Some error occured while createing user" }))
    }


}

// update user 

exports.update = (req, res) => {
    if (!req.body) {
        return res.status(400).send({ message: "Data to update cannot be empty" })
    }
    const id = req.params.id;

    Userdb.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({ menubar: "cannot update user with " + id })
            } else {
                res.send(data)
                console.log(data);
            }
        }).catch(err => { res.status(500).send({ message: 'Error Update User' }) })
}

exports.delete = (req, res) => {
    const id = req.params.id;
    Userdb.findByIdAndDelete(id)
        .then(data => {
            if (!data) {
                res.status(404).send({ message: 'Cannot delete user with ' + id })
            } else {
                res.send(data)
            }
        }).catch(err => res.status(500).send({ message: "Error deleting user" }))
}