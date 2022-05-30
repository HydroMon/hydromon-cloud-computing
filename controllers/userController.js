const { firestore } = require('../helpers/database');
const User = require('../models/user');

async function create (req, res) {
    try {
        let data = {
            nama_lengkap: req.body.nama_lengkap,
            email: req.body.email,
            password: req.body.password,
            username: req.body.username,
            telepon: req.body.telepon,
            role: req.body.role
        }

        await firestore.collection('user').doc().set(data);

        return res.status(200).json({
            code: 200,
            status: "User is added successfully."
        });
    } catch(error) {
        return res.status(400).json({
            code: 400,
            status: error.message
        })
    }
}

async function list (req, res) {
    try {
        const data = await firestore.collection('user').get();
        let userArray = [];

        if(data.empty) {
            return res.status(404).json({
                code: 404,
                status: "No user found."
            });
        } else {
            data.forEach( doc => {
                const user = new User(
                    doc.id,
                    doc.data().nama_lengkap,
                    doc.data().email,
                    doc.data().password,
                    doc.data().username,
                    doc.data().telepon,
                    doc.data().role
                );

                userArray.push(user);
            });

            return res.status(200).json({
                code: 200,
                status: "Get all user successfully.",
                data: userArray
            });
        }
    } catch(error) {
        return res.status(400).json({
            code: 400,
            status: error.message
        })
    }
}

async function show (req, res) {
    try {
        const id = req.params.id;

        const data = await firestore.collection('user').doc(id).get();
        
        if(!data.exists) {
            return res.status(404).json({
                code: 404,
                status: `User with id ${id} is not found.`
            })
        } else {
            return res.status(200).json({
                code: 200,
                status: `User with id ${id} is found.`,
                data: data.data()
            })
        }

    } catch(error) {
        return res.status(400).json({
            code: 400,
            status: error.message
        })
    }
}

async function update (req, res) {
    try {
        const id = req.params.id;
        const data = req.body;

        const checkData = await firestore.collection('user').doc(id).get();

        if(checkData.exists) {
            await firestore.collection('user').doc(id).update(data);
    
            return res.status(200).json({
                code: 200,
                status: "User is updated successfully."
            })
        } else {
            return res.status(404).json({
                code: 404,
                status: `Can't update user with id ${id}. User is not found.`
            })
        }

    } catch(error) {
        return res.status(400).json({
            code: 400,
            status: error.message
        })
    }
}

async function remove (req, res) {
    try {
        const id = req.params.id;

        const checkData = await firestore.collection('user').doc(id).get();

        if(checkData.exists) {
            await firestore.collection('user').doc(id).delete();
    
            return res.status(200).json({
                code: 200,
                status: "User is deleted successfully."
            })
        } else {
            return res.status(404).json({
                code: 404,
                status: `Can't delete user with id ${id}. User is not found.`
            })
        }

    } catch(error) {
        return res.status(400).json({
            code: 400,
            error: error.message
        })
    }
}

module.exports = {
    create,
    list,
    show,
    update,
    remove
}