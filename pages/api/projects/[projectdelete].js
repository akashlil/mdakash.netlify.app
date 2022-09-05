import clientPromise from "../../../lib/mongo";
const ObjectId = require("mongodb").ObjectId;
export default async function handler(req, res) {
  if (req.method === "DELETE") {
    const { projectdelete } = req.query;
    const query = { _id: ObjectId(projectdelete) };
    const client = await clientPromise;
    const projectsDeletes = await client
      .db("Myprotfilo")
      .collection("addproject")
      .deleteOne(query);
    res.json(JSON.parse(JSON.stringify(projectsDeletes)));
  }
}
