const express = require('express')
const fs = require('fs')
const data_exporter = require('json2csv').Parser;
const User = require('../models/User')
const router = express.Router()

router.get('/users', async (req,res,next) => {
    const dataUser = await User.find();
    if(!dataUser) return next({'data': 'error data'})

    const dataNew = JSON.parse(JSON.stringify(dataUser));
    const json_data = new data_exporter({dataNew});

    const csv_data = json_data.parse(dataNew);

    try {
        if (!fs.existsSync('./files')) {
            fs.mkdirSync('./files')
        }
        const dateNew = Date.now()
        const path = './files/' + dateNew + '.csv'
        fs.writeFile(path, csv_data, ()=> {})
        res.download(path, dateNew + '.csv')
    } catch (err) {
        console.error(err)
        return res.status(400).json({success: false, message: err})
    }
})

module.exports = router;