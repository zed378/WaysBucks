// import package
import { useEffect } from "react";
import { io } from "socket.io-client";

// import components
import { DetailChat, Contact } from "../../components/chat";

// import assets
import cssModules from "../../assets/css/Chat.module.css";

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
      <div className={cssModules.chatContainer}>
        {/* <div className={cssModules.chatWrapper}>
          
        </div> */}
        <div className={cssModules.chatContact}>
          <Contact />
        </div>
        <div className={cssModules.chatDetail}>
          <DetailChat />
        </div>
      </div>
    </>
  );
}

export default ChatAdmin;
