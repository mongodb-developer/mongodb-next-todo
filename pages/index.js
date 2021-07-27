import Head from "next/head";
import { useState } from "react";
import { connectToDatabase } from "../util/mongodb";
import Todos from "../components/Todos";
import NewTodoForm from "../components/NewTodoForm";

import "tailwindcss/tailwind.css";

export default function Home({ isConnected, todos }) {
  const [allTodos, setAllTodos] = useState(todos || []);

  return (
    <div className="flex justify-center bg-green-600 min-h-screen">
      <Head>
        <title>MongoDB Atlas & Next.js Todo App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container bg-white rounded shadow p-6 m-4 w-full lg:w-3/4">
        <h1 className="text-2xl font-bold text-grey-darkest">
          MongoDB Atlas & Next.js Todo App
        </h1>
        {isConnected ? (
          <>
            <h2 className="text-green-600 pt-4">
              You are connected to MongoDB
            </h2>
            <NewTodoForm setAllTodos={setAllTodos} />
            <Todos allTodos={allTodos} setAllTodos={setAllTodos} />
          </>
        ) : (
          <h2 className="text-red-500 pt-4">
            You are NOT connected to MongoDB. Check the <code>README.md</code>{" "}
            for instructions.
          </h2>
        )}
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { client, db } = await connectToDatabase();
  const isConnected = await client.isConnected();
  const collection = db.collection("todos");

  const todos = await collection.find({}).toArray();

  return { props: { isConnected, todos: JSON.parse(JSON.stringify(todos)) } };
}
