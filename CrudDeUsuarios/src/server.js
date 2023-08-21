require("dotenv").config();
const { DB } = require("./db/config");
const app = require("./app");
const colors = require("colors");

DB.authenticate()
  .then(() => console.log("Database authenticate 🌱 "))
  .catch((err) => console.log(err));

DB.sync({ force: false })
  .then(() => console.log("Database synced 🥷🏾 "))
  .catch((err) => console.log(err));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`App runnig on port ${PORT} ⚔️ `);
});
