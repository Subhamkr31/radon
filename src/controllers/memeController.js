let axios = require("axios");

let memeCreate = async function (req, res) {

    try {
        let memeId = req.query.template_id
        let text0 = req.query.text0
        let text1 = req.query.text1

        let option = {
            method: "post",
            url: `https://api.imgflip.com/caption_image?template_id=${memeId}&text0=${text0}&text1=${text1}&username=chewie12345&password=meme@123`
        }
        let result = await axios(option)
        res.status(201).send({ status: true, data: result })

    } catch (err) {
        res.status(500).send(err.message)
    }
}

module.exports.memeCreate = memeCreate