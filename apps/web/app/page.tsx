import { trpc } from "./trpc";

export default async function Home() {
  const response = await trpc.hello.query({ name: "ezra" });
  const task = await trpc.return(
    <div>
      <p>Server side - {response}</p>
    </div>
  );
}
