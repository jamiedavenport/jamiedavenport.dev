import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import * as Fathom from "fathom-client";
import { useEffect } from "react";
import { DefaultSeo } from "next-seo";
import "../styles/global.css";
import { twitterUsername } from "@/lib/accounts";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    Fathom.load("SQHIJQYW", {
      includedDomains: ["www.jamiedavenport.dev"],
    });

    function onRouteChangeComplete() {
      Fathom.trackPageview();
    }
    // Record a pageview when route changes
    router.events.on("routeChangeComplete", onRouteChangeComplete);

    // Unassign event listener
    return () => {
      router.events.off("routeChangeComplete", onRouteChangeComplete);
    };
  }, [router]);

  return (
    <>
      <DefaultSeo
        openGraph={{
          type: "website",
          locale: "en_GB",
          url: "https://www.jamiedavenport.dev/",
          site_name: "Jamie Davenport",
        }}
        twitter={{
          handle: `@${twitterUsername}`,
        }}
      />
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
