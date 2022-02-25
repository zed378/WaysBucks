// import package
import { useEffect } from "react";
import { io } from "socket.io-client";

// hold socket.io server
let socket;

function ChatAdmin() {
  useEffect(() => {
    socket = io("http://localhost:5000");

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <>
      <h1>Test</h1>
    </>
  );
}

export default ChatAdmin;
