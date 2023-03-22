import ProtectedRoute from "@/Components/ProtectedRoute/ProtectedRoute";
import { AuthContextProvider } from "@/context/AuthContext";
import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useRouter } from "next/router";

const noAuthRequired = ["/hr-login", "/employee-login", "/"];

export default function App({ Component, pageProps }) {
  const router = useRouter();

  return (
    <AuthContextProvider>
      {noAuthRequired.includes(router.pathname) ? (
        <Component {...pageProps} />
      ) : (
        <ProtectedRoute>
          <Component {...pageProps} />
        </ProtectedRoute>
      )}
    </AuthContextProvider>
  );
}
