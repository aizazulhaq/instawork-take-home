import "@/index.css";
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createRouter } from "@tanstack/react-router";

// Import the generated route tree
import { routeTree } from "@/routeTree.gen";
import { ThemeProvider } from "@/layout/theme-provider";
import MainSidebarLayout from "@/layout/-main-sidebar-layout";

// Create a new router instance
const router = createRouter({ routeTree });

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

// Render the app
const rootElement = document.getElementById("root")!;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        <MainSidebarLayout>
        <RouterProvider router={router} />

        </MainSidebarLayout>
      </ThemeProvider>
    </StrictMode>
  );
}