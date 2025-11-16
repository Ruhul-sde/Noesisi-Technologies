
import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: async ({ queryKey }) => {
        const res = await fetch(queryKey[0], {
          credentials: "include",
        });

        if (res.status === 401) {
          window.location.href = "/auth/login";
          throw new Error("Unauthorized");
        }

        if (!res.ok) {
          throw new Error(`${res.status}: ${await res.text()}`);
        }

        return res.json();
      },
    },
  },
});
