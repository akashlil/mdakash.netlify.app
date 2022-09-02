import clientPromise from "../../../lib/mongo";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    const client = await clientPromise;
    const projectsAdd = await client
      .db("Myprotfilo")
      .collection("addproject")
      .insertOne(data);

    res.json(JSON.parse(JSON.stringify(projectsAdd)));
  } else {
    const client = await clientPromise;
    const projects = await client
      .db("Myprotfilo")
      .collection("addproject")
      .find({})
      .toArray();

    res.json(JSON.parse(JSON.stringify(projects)));
  }
}
