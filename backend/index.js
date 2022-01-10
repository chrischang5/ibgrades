import app from "./server.js";
import mongodb from "mongodb";
import dotenv from "dotenv";
import coursesDAO from "./data_access_object/coursesDAO.js";

dotenv.config();
const MongoClient = mongodb.MongoClient;

const port = process.env.PORT || 8000;

MongoClient.connect(process.env.COURSES_DB_URI, {
  wtimeout: 2500,
})
  .catch((err) => {
    console.error(err.stack);
    process.exit(1);
  })
  .then(async (client) => {
    // initial connection to DB
    await coursesDAO.injectDB(client);
    console.log("Successfully connected to MnngoDB");
    app.listen(port, () => {
      console.log(
        `${new Date()}  App Started. Listening on port:${port}`
      );
    });
  });
