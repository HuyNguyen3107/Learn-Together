import { client } from "./client.js";
console.log(client);

const getPosts = async () => {
  const posts = await client.get("posts");
  console.log(posts);
};

getPosts();
