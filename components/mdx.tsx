import NextLink from "next/link";
import NextImage from "next/image";

export const components = {
  h1: function H1(props: any) {
    return <h1 className="mt-8 mb-5 text-2xl font-bold" {...props} />;
  },
  h2: function H2(props: any) {
    return <h2 className="mt-8 mb-5 text-xl font-bold" {...props} />;
  },
  h3: function H3(props: any) {
    return <h3 className="mt-8 mb-5 text-lg font-bold" {...props} />;
  },
  p: function P(props: any) {
    return <p className="my-5 leading-7" {...props} />;
  },
  ol: function Ol(props: any) {
    return <ol className="pl-10 my-6 leading-7 list-decimal" {...props} />;
  },
  ul: function Ul(props: any) {
    return <ul className="pl-10 my-6 leading-7 list-disc" {...props} />;
  },
  a: function A({ href = "", ...props }: any) {
    const className =
      "text-blue-500 underline hover:text-blue-600 transition-colors";

    if (href.startsWith("http")) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={className}
          {...props}
        />
      );
    }

    return (
      <NextLink href={href}>
        <a className={className} {...props} />
      </NextLink>
    );
  },
  img: function Img(props: any) {
    return <NextImage className="mx-auto" {...props} />;
  },
};
