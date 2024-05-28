import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/routes";
import AuthProvider from "./Provider/AuthProvider";
import { HelmetProvider } from "react-helmet-async";
const helmetContext = {};

import {
    QueryClient,
    QueryClientProvider
} from "@tanstack/react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
    <HelmetProvider context={helmetContext}>
        <QueryClientProvider client={queryClient}>
            <AuthProvider router={router}>
                <RouterProvider router={router} />
            </AuthProvider>
        </QueryClientProvider>
    </HelmetProvider>
);
