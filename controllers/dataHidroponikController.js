const { firestore } = require('../helpers/database');
const { formatDate, formatTime } = require('../helpers/datetime');
const DataHidroponik = require('../models/dataHidroponik');

async function create (req, res) {
    try {
        let data = {
            id_hidroponik: req.body.id_hidroponik,
            date: formatDate(new Date()),
            time: formatTime(new Date()),
            tds: req.body.tds,
            ph: req.body.ph,
            ec: req.body.ec,
            humidity: req.body.humidity,
            temperature: req.body.temperature,
            light_intense: req.body.light_intense,
            label: req.body.label,
            accuracy: req.body.accuracy,
            action: req.body.action,
            action_taken: req.body.action_taken
        }

        await firestore.collection('data_hidroponik').doc().set(data);

        return res.status(200).json({
            code: 200,
            status: "Hydroponic data is added successfully."
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
        const data = await firestore.collection('data_hidroponik').get();
        let dataHidroponikArray = [];

        if(data.empty) {
            return res.status(404).json({
                code: 404,
                status: "No hydroponic data found."
            });
        } else {
            data.forEach( doc => {
                const dataHidroponik = new DataHidroponik(
                    doc.id,
                    doc.data().id_hidroponik,
                    doc.data().waktu,
                    doc.data().tds,
                    doc.data().ph,
                    doc.data().ec,
                    doc.data().humidity,
                    doc.data().temperature,
                    doc.data().light_intense,
                    doc.data().label,
                    doc.data().accuracy,
                    doc.data().action,
                    doc.data().action_taken
                );

                dataHidroponikArray.push(dataHidroponik);
            });

            return res.status(200).json({
                code: 200,
                status: "Get all hydroponic data successfully.",
                data: dataHidroponikArray
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

        const data = await firestore.collection('data_hidroponik').doc(id).get();
        const subscriber = await firestore.collection('data_hidroponik').doc(id)

        if(!data.exists) {
            return res.status(404).json({
                code: 404,
                status: `Data with id ${id} is not found.`
            })
        } else {
            subscriber.onSnapshot(docSnapshot=> {
                return res.status(200).json({
                            code: 200,
                            status: `Data with id ${id} is found.`,
                            data: docSnapshot.data()
                        })
              }, err => {
                return res.status(500).send(err)
              });
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

        const checkData = await firestore.collection('data_hidroponik').doc(id).get();

        if(checkData.exists) {
            await firestore.collection('data_hidroponik').doc(id).update(data);
    
            return res.status(200).json({
                code: 200,
                status: "Hydroponic data is updated successfully."
            })
        } else {
            return res.status(404).json({
                code: 404,
                status: `Can't update data with id ${id}. Data is not found.`
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

        const checkData = await firestore.collection('data_hidroponik').doc(id).get();

        if(checkData.exists) {
            await firestore.collection('data_hidroponik').doc(id).delete();
    
            return res.status(200).json({
                code: 200,
                status: "Hydroponic data is deleted successfully."
            })
        } else {
            return res.status(404).json({
                code: 404,
                status: `Can't delete data with id ${id}. Data is not found.`
            })
        }

    } catch(error) {
        return res.status(400).json({
            code: 400,
            error: error.message
        })
    }
}

async function currentDate (req, res) {
    try {
        const id_hidroponik = req.params.id;
        let currDate = formatDate(new Date());

        let data = await firestore.collection('data_hidroponik').where('id_hidroponik', '==', id_hidroponik).where('date', '==', currDate).get();

        let dataHidroponikArray = [];
        if(data.empty) {
            return res.status(404).json({
                code: 404,
                status: "No hydroponic data found."
            });
        } else {
            data.forEach( doc => {
                const dataHidroponik = new DataHidroponik(
                    doc.id,
                    doc.data().id_hidroponik,
                    doc.data().waktu,
                    doc.data().tds,
                    doc.data().ph,
                    doc.data().ec,
                    doc.data().humidity,
                    doc.data().temperature,
                    doc.data().light_intense,
                    doc.data().label,
                    doc.data().accuracy,
                    doc.data().action,
                    doc.data().action_taken
                );

                dataHidroponikArray.push(dataHidroponik);
            });

            return res.status(200).json({
                code: 200,
                status: `Get all hydroponic data for date ${currDate} successfully.`,
                data: dataHidroponikArray
            });
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
    remove,
    currentDate
}