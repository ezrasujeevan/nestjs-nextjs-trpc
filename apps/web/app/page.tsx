import { trpc } from "./trpc";

export default async function Home() {
  const response = await trpc.hello.query({name:"ezra"});
  return (
    <div>
      <p>Server side - {response}</p>

    </div>
  );
}
