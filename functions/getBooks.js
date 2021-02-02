const axios = require('axios');
require('dotenv').config();
const { GET_BOOKS } = require('./utils/bookQueries.js');
const sendQuery = require('./utils/sendQuery');
const formattedResponse = require('./utils/formattedResponse');
exports.handler = async(event) => {
    try {
        const res = await sendQuery(GET_BOOKS);
        const data = res.allBooks.data;
        return formattedResponse(200, data);
    } catch (err) {
        console.error(err);
        return formattedResponse(500, { err: 'Cant get Books, Something went wrong' });
    }
};

