const axios = require('axios');
require('dotenv').config();

const { CREATE_BOOK } = require('./utils/bookQueries.js');
const sendQuery = require('./utils/sendQuery');
const formattedResponse = require('./utils/formattedResponse');
exports.handler = async(event) => {
    const { name, url, description,image } = JSON.parse(event.body);
    const variables = { name, url, description,image, archived: false };
    try {
        const { createBooks: createdBook } = await sendQuery(
            CREATE_BOOK,
            variables
        );

        return formattedResponse(200, createdBook);
    } catch (err) {
        console.error(err);
        return formattedResponse(500, { err: 'Something went wrong' });
    }
};