const gql = require("graphql-tag");

const typeDefs = gql`
    # Define your schemas

    # Defines the entry points into the entire schema.
    type Query {
        # Top level fields that client can query for.
        tracksForHome: [Track!]!
    }

    # A Track is a group of modules that represents a learning path.
    type Track {
        id: ID!
        # Track module name.
        title: String!
        # Author of the corresponding track.
        author: Author!
        # URL string to tracks main image
        thumbnail: String
        # Tracks length in minutes.
        length: Int!
        # Number of modules in the track.
        modulesCount: Int!
    }

    type Author {
        id: ID!
        name: String!
        photo: String
    }
`;
module.exports = typeDefs;