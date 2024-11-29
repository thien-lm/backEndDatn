import { Environment } from "./environment";

export const DevEnvironment: Environment = {
  db_uri: "mongodb+srv://abcdef:111111111111a@cluster0.atwn6ip.mongodb.net/job-recommender-database",
  jwt_secret_key: "secretkey",
  jwt_refresh_secret_key: "rfscrerejwt_refresh_secret_key",
  sendgrid: {
    api_key: "your_sendgrid_api_key",
    email_from: "phu24012002@gmail.com",
  },
  gmail_auth: {
    user: "phunh205165@gmail.com",
    pass: "baxn zodi ewxc cuhm",
  },
};
