const { firestore } = require('../helpers/database');
const Hidroponik = require('../models/hidroponik');

//function to add new Hidroponik data to the database
async function create (req, res) {
    try {
        // saving hidroponik data
        let hidroponik = {
            nama_hidroponik: req.body.nama_hidroponik,
            lokasi_hidroponik : req.body.lokasi_hidroponik,
            pemilik: req.body.pemilik,
            token_alat: req.body.token_alat,
            createdAt: new Date(),
            updatedAt: new Date()
        };

        await firestore.collection('hidroponiks').doc().set(hidroponik);

        return res.status(200).json({
            code: 200,
            status: "Hydroponic system registered successfully.",
            data: hidroponik
        });
    } catch (error) {
        return res.status(400).json({
            code: 400,
            error: error.message
        })
    }
}

//function to retrieve all hidroponik's data from database
async function list (req, res) {
    try {
        const hidroponiks = await firestore.collection('hidroponiks');
        const data = await hidroponiks.get();
        const hidroponiksArray = [];
        if(data.empty) {
            return res.status(404).json({
                code: 404,
                status: `Can't retrieve any data. Record is not found.`
            })
        }else {
            data.forEach(doc => {
                const hidroponik = new Hidroponik(
                    doc.id,
                    doc.data().nama_hidroponik,
                    doc.data().lokasi_hidroponik,
                    doc.data().pemilik,
                    doc.data().token_alat
                );
                hidroponiksArray.push(hidroponik);
            });
            
            return res.status(200).json({
                code: 200,
                status: "Retrieving all hydroponic system successfully.",
                data: hidroponiksArray
            });
        }
    } catch (error) {
        return res.status(400).json({
            code: 400,
            error: error.message
        })
    }
}

//function to retrieve hidroponik's data based on ID inputted from database
async function show (req, res) {
    try {
        const id = req.params.id;
        const hidroponik = await firestore.collection('hidroponiks').doc(id);
        const data = await hidroponik.get();
        if(!data.exists) {
            return res.status(404).json({
                code: 404,
                status: `Can't show data with id ${id}. Data is not found.`
            })
        }else {
            return res.status(200).json({
                code: 200,
                status: `Data with id ${id} is found.`,
                data: data.data()
            })
        }
    } catch (error) {
        return res.status(400).json({
            code: 400,
            error: error.message
        })
    }
}

//function to store updated Hidroponik's data to database
async function update (req, res) {
    try {
        const id = req.params.id;
        const data = req.body;
        const hidroponik = await firestore.collection('hidroponiks').doc(id).get();
        // const data = await hidroponik.get();

        if(!hidroponik.exists) {
            return res.status(404).json({
                code: 404,
                status: `Can't update data with id ${id}. Data is not found.`
            })
        }else {
            await hidroponik.update(data);
            const updatedData = await firestore.collection('hidroponiks').doc(id).get();

            return res.status(200).json({
                code: 200,
                status: "Hydroponic data is updated successfully.",
                data: updatedData.data()
            }) 
        }              
    } catch (error) {
        return res.status(400).json({
            code: 400,
            error: error.message
        })
    }
}

//function to store delete Hidroponik's data from database
async function remove (req, res) {
    try {
        const id = req.params.id;
        const hidroponik = await firestore.collection('hidroponiks').doc(id);
        const data = await hidroponik.get();
        if(!data.exists) {
            return res.status(404).json({
                code: 404,
                status: `Can't delete data with id ${id}. Data is not found.`
            })
        }else {
            await firestore.collection('hidroponiks').doc(id).delete();

            return res.status(200).json({
                code: 200,
                status: "Hydroponic data is deleted successfully."
            })
        }
    } catch (error) {
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