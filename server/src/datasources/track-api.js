const { RESTDataSource } = require("@apollo/datasource-rest");


class TrackAPI extends RESTDataSource {
    baseURL = "https://odyssey-lift-off-rest-api.herokuapp.com/";

    getAuthor(authorId) {
        return this.get(`author/${encodeURIComponent(authorId)}`);
    }

    getTracksForHome() {
        return this.get("tracks");
    }
}

module.exports = TrackAPI;