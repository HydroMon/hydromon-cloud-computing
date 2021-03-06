const passwordHash = require('password-hash');
const jwt = require('jsonwebtoken');
const { firestore } = require('../helpers/database');
const User = require('../models/user');

async function registrasi (req, res) {
    try {
        const password = passwordHash.generate(req.body.password);

        // check user's email whether it is already used or not
        let checkEmail = await firestore.collection('user').where('email', '==', req.body.email).get();

        if(!checkEmail.empty) {
            return res.status(403).json({
                code: 403,
                status: "Email is already used. Use another email."
            })
        }

        // save user's data
        let user = {
            nama_lengkap: req.body.nama_lengkap,
            email: req.body.email,
            password: password,
            username: req.body.username,
            telepon: req.body.telepon,
            createdAt: new Date(),
            updatedAt: new Date()
        };
    
        await firestore.collection('user').doc().set(user);
        let dataUser = await firestore.collection('user').where('email', '==', req.body.email).get();
        let data;
        
        dataUser.forEach( doc => {
            data = {
                id: doc.id,
                nama_lengkap: doc.data().nama_lengkap,
                email: doc.data().email,
                password: doc.data().password,
                username: doc.data().username,
                telepon: doc.data().telepon,
                role: doc.data().role
            }
        });
        
        return res.status(200).json({
            code: 200,
            status: "Registration is successful.",
            data: data
        });

    } catch(error) {
        return res.status(400).json({
            code: 400,
            status: error.message
        })
    }
}

async function login (req, res) {
    try {
        // check user's data in database
        let checkUser = await firestore.collection('user').where('email', '==', req.body.email).get();

        if(checkUser.empty) {
            return res.status(404).json({
                code: 404,
                status: 'No such user.'
            })
        }

        let userData = [];
        checkUser.forEach(user => {
            const data = {
                id: user.id,
                email: user.data().email,
                password: user.data().password,
                username: user.data().username
            }

            userData.push(data);
        })

        // verify user's password
        const verify = passwordHash.verify(req.body.password, userData[0].password);

        if(verify) {
            const userToken = {
                id: userData[0].id,
                email: userData[0].email,
                username: userData[0].username 
            };

            const token = jwt.sign({ userToken }, process.env.TOKEN_SECRET, { expiresIn: '1h' });

            // get user's data
            const doc = await firestore.collection('user').doc(userData[0].id).get();

            const data = new User(
                doc.id,
                doc.data().id_hidroponik,
                doc.data().nama_lengkap,
                doc.data().email,
                doc.data().password,
                doc.data().username,
                doc.data().telepon,
                doc.data().role
            );

            return res.status(200).send({
                code:200,
                status: "Login is successful.",
                token: token,
                data: data
            })
        } else {
            return res.status(422).send({
                code: 422,
                status: "Invalid password."
            })
        }
    } catch(error) {
        return res.status(400).json({
            code: 400,
            status: error.message
        })
    }
}

module.exports = {
    registrasi,
    login
};
