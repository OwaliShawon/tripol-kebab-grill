const dbFile = require("../../util/mongo");
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
export default function handler(req, res) {
  res.status(200).json({ name: 'hello' })
  console.log("testing Database: ", dbFile);
}
