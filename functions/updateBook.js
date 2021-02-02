const axios = require('axios');
require('dotenv').config();
const { UPDATE_BOOK } = require('./utils/bookQueries.js');
const sendQuery = require('./utils/sendQuery');
const formattedResponse = require('./utils/formattedResponse');
exports.handler = async(event) => {
    if (event.httpMethod !== 'PUT') {
        return formattedResponse(405, { err: 'Method not supported' });
    }
    const { name, url, description, image, _id: id, archived } = JSON.parse(event.body);
    const variables = { name, url, description,image, archived, id };
    try {
        const { updateBooks: updatedBook } = await sendQuery(
            UPDATE_BOOK,
            variables
        );

        return formattedResponse(200, updatedBook);
    } catch (err) {
        console.error(err);
        return formattedResponse(500, { err: 'Something went wrong' });
    }
};