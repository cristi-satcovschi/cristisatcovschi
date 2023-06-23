import "../styles/globals.css";
import type { AppType } from "next/app";
import type { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

import { api } from "~/utils/api";
import BlogLayout from "~/components/blogLayout";
import "tailwindcss/tailwind.css";
import { useRouter } from "next/router";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  const router = useRouter();

  const isBlogPage = router.pathname.includes("blog");

  return (
    <SessionProvider session={session}>
      {isBlogPage ? (
        <BlogLayout>
          <Component {...pageProps} />
        </BlogLayout>
      ) : (
        <Component {...pageProps} />
      )}
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
