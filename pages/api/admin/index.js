import clientPromise from "../../../lib/mongo";

export default async function header(req, res) {
  const client = await clientPromise;
  const datas = await client
    .db("Myprotfilo")
    .collection("admin")
    .find({})
    .toArray();
  res.json(JSON.parse(JSON.stringify(datas)));
}
