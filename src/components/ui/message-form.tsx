"use client";

import { useState } from "react";
import { Button } from "./button";
import { Input } from "./input";
import { addNameToDatabase } from "@/actions/add-message-to-database";

const MessageForm = () => {
  const [message, setMessage] = useState("");

  async function handleaddNameToDatabase() {
    const response = await addNameToDatabase(message);

    if (response.ok) {
      setMessage("");
      alert("Message added to database");
    } else if (!response.ok) {
      alert("Error adding message to database");
    }
  }
  return (
    <div className="flex flex-col justify-center gap-3">
      <Input
        placeholder="Enter your name"
        onChange={(e) => setMessage(e.target.value)}
        value={message}
      />
      <Button onClick={handleaddNameToDatabase}> Submit</Button>

      <div>
        <h1>Message: {message}</h1>
      </div>
    </div>
  );
};

export default MessageForm;
