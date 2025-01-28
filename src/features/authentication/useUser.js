import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../../services/apiAuth";

export function useUser() {
  const { isLoading, data: user } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUser,
    onSuccess: (data) => {
      console.log("User fetched successfully:", data);
    },
    onError: (error) => {
      console.error("Error fetching user:", error.message);
    },
  });

  const isAuthenticated = user?.role === "authenticated";

  console.log("useUser state:", { isLoading, user, isAuthenticated });

  return { isLoading, user, isAuthenticated };
}
