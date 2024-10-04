import { getMessagesFromDatabase } from "@/actions/get-messages-from-database";
import MessageForm from "@/components/ui/message-form";

export const runtime = "edge";

export default async function Home() {
  const messages = await getMessagesFromDatabase();

  return (
    <div className="container mx-auto mt-10 ">
      <MessageForm />
      <ul>
        {messages.map((message) => (
          <li key={message.id}>{message.name}</li>
        ))}
      </ul>
    </div>
  );
}
