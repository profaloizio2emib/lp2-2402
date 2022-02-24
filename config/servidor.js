const express = require('express')
const app = express()

const porta = process.env.PORT || 4040

module.exports = {app, porta}
