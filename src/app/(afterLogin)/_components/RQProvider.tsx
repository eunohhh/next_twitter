"use client";
import { isServer, QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

function makeQueryClient() {
    return new QueryClient({
        defaultOptions: {
            queries: {
                refetchOnWindowFocus: false,
                retry: false,
                staleTime: 60 * 1000,
            },
        },
    });
}

// undefined 로 초기값 설정
let browserQueryClient: QueryClient | undefined = undefined;

function getQueryClient() {
    if (isServer) {
        return makeQueryClient();
    } else {
        if (!browserQueryClient) browserQueryClient = makeQueryClient();
        return browserQueryClient;
    }
}

function RQProvider({ children }: { children: React.ReactNode }) {
    const queryClient = getQueryClient();

    return (
        <QueryClientProvider client={queryClient}>
            {children}
            <ReactQueryDevtools initialIsOpen={process.env.NEXT_PUBLIC_MODE === "local"} />
        </QueryClientProvider>
    );
}

export default RQProvider;
