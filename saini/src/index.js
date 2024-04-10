import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import Commerce from "./hooks/useContext/Commerce";

const root = createRoot(document.getElementById("root"));

root.render(
  <ChakraProvider>
    <BrowserRouter>
      <Commerce>
        {/* ye commerce useContext hook ke liye use kiya hai taki saare componets pe data send kr sake */}
        <App />
      </Commerce>
    </BrowserRouter>
  </ChakraProvider>
);
