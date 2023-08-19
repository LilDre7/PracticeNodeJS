require("dotenv").config();
const { DB } = require("./db/config");
const app = require("./app");
const colors = require("colors");

const PORT = process.env.PORT || 8080;

DB.authenticate()
  .then(() => console.log("Database authenticate 🌱 "))
  .catch((err) => console.log(err));

DB.sync({ force: false })
  .then(() => console.log("Database synced 🥷🏾 "))
  .catch((err) => console.log(err));

app.listen(PORT, () => {
  console.log(`App runnig on port ${PORT} ⚔️ `);
});
