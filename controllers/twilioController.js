"use strict";
const AccessToken = require("twilio").jwt.AccessToken;
const dotenv = require("dotenv");
dotenv.config();

const twilioAccountSid = process.env.twilioAccountSid;
const twilioApiKey = process.env.twilioApiKey;
const twilioApiSecret = process.env.twilioApiSecret;
const VideoGrant = AccessToken.VideoGrant;


const generateToken = async (req, res, next) => {
  const response = {};
  try{
   const videogrant = new VideoGrant({
     room: req.body.room
   });
   const token = new AccessToken(
     twilioAccountSid,
     twilioApiKey,
     twilioApiSecret,
     { identity: req.body.identity }
   );
   token.addGrant(videogrant);
   response.status = true;
   response.token = token.toJwt();
   res.status(200).send(response);
   }catch(error){
       response.status=false;
       response.token = error;
      res.status(200).send(response);
   }
};

module.exports = {
  generateToken,
};