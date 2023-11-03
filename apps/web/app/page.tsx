import { trpc } from "./trpc";

export default async function Home() {
  const response = await trpc.hello.query({ name: "ezra" });
  const responce = await trpc.tasks.findAll.query();

  return (
    <div>
      <p>Server side - {response}</p>
    </div>
  );
}
