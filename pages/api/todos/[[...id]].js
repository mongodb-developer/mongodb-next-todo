import { connectToDatabase } from "../../../util/mongodb";
import { ObjectId } from "bson";

export default async (req, res) => {
  const {
    query: { id },
    method,
  } = req;
  const { db } = await connectToDatabase();
  const collection = db.collection("todos");
  let result, todo;

  switch (method) {
    case "POST":
      const { newTodoTitle } = JSON.parse(req.body);
      result = await collection.insertOne({
        title: newTodoTitle,
        completed: false,
      });
      todo = result.ops[0];
      res.json({ todo });
      break;
    case "PUT":
      const { _id, completed } = JSON.parse(req.body);
      const filter = { _id: ObjectId(_id) };
      const updateDoc = { $set: { completed: completed } };
      result = await collection.updateOne(filter, updateDoc);
      todo = await collection.find(filter).toArray();
      res.json({ todo: todo[0] });
      break;
    case "DELETE":
      const doc = { _id: ObjectId(id[0]) };
      result = await collection.deleteOne(doc);
      res.json({ deleted: result.deletedCount });
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
};
