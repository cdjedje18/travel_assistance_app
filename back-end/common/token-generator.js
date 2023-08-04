const jwt = require("jsonwebtoken");
const config = require("./config");

function generateAccessToken(username) {
    return jwt.sign({ username }, config.jwtSecret, {
        expiresIn: "1800s",
    });
}

module.exports = {
    generateAccessToken,
};