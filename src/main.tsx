import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import PageRoutes from "./routes/index.tsx";
import { ConfigProvider } from "antd";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#2BD9C7",
        },
        components: {
          Tabs: {
            itemActiveColor: "#fff",
            itemSelectedColor: "#fff",
            fontFamily: "OjahDisplayBlack",
          },
          Table: {
            headerBg: "#F2FFFE",
            footerBg: "#F2FFFE",
          },
        },
      }}
    >
      <PageRoutes />
    </ConfigProvider>
  </React.StrictMode>
);
