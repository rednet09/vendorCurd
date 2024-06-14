const db = require("../config/db");

const user = {
  findVendor: async () => {
    const [result] = await db.execute(
      "SELECT  * FROM PrLineItems WHERE id = ? ",
      [id]
    );
    return result[0];
  },
};

module.exports = user;
