import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, useLocation } from "react-router-dom";
import { router } from "./Routes/routes.jsx";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { NextUIProvider } from "@nextui-org/react";
import AuthProviders from "./Providers/AuthProviders.jsx";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
        <NextUIProvider>
          <AuthProviders>
            <HelmetProvider>
              {/* <div className="dark text-foreground bg-background"> */}

              <RouterProvider router={router} />
              {/* </div> */}
            </HelmetProvider>
          </AuthProviders>
        </NextUIProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </React.StrictMode>
);
