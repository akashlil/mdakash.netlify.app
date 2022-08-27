import clientPromise from "../../../lib/mongo";

export default async function handler(req, res) {
  const client = await clientPromise;
  const projects = await client
    .db("Myprotfilo")
    .collection("addproject")
    .find({})
    .toArray();

  res.json(JSON.parse(JSON.stringify(projects)));
}
