const axios = require("axios").default;
const qs = require("querystring");

const config = {
    headers: {
        "Content-Type": "application/x-www-form-urlencoded",
    }
}

const getToken = async() =>{
    let token = "";
    const promise = await axios.post(
        "https://accounts.spotify.com/api/token",
        qs.stringify({
            grant_type: "client_credentials",
            client_id: "220dd03c3a6240869ba60b5561798ca3",
            client_secret: "2aa139f9892f4caf941d0d319a30cc63",
        }),
        config
    );
    token = promise.data;
    return token.access_token;

}
module.exports = getToken;