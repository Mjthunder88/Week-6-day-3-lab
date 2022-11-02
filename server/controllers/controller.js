const path = require('path')

module.exports = {
    landingPage: (req, res) => {
        res.sendFile(path.join(__dirname, "../../client/index.html"))
    }
}