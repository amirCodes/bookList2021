const GET_BOOKS = `
query {
  allBooks{
   data{
     name 
     url 
     description 
     image
     _id 
     archived 
    } 
  }
}`;

const CREATE_BOOK = `
    mutation($name: String!, $url: String!, $description: String!, $image: String! ) {
      createBooks( data: { name:$name, url: $url, description: $description, image: $image, archived: false }) {
            name
            _id
            url
            description
            image
            archived
        }
    }
`;

const UPDATE_BOOK = `
  mutation($id: ID!, $archived: Boolean!, $name: String!, $url: String!, $description: String!, $image: String!  ) {
        updateBooks( id: $id, data: { name:$name, url: $url, description: $description,image: $image, archived: $archived }) {
            name
            _id
            url
            description
            image
            archived
        }
    }
`;

const DELETE_BOOK = `
  mutation($id: ID!) {
        deleteBooks( id: $id) {
            _id
        }
    }
`;

module.exports = {
    GET_BOOKS,
    CREATE_BOOK,
    UPDATE_BOOK,
    DELETE_BOOK,
};