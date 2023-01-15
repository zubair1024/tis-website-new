import { NextSeo } from "next-seo";

interface ILayoutProps {
  title: string;
  description: string;
  children: JSX.Element;
}

const Layout = (props: ILayoutProps) => {
  return (
    <>
      <NextSeo
        title={props.title}
        description={props.description}
        additionalLinkTags={[
          {
            rel: "icon",
            href: "/favicon.ico",
          },
          {
            rel: "preload",
            href: "http://fonts.googleapis.com/css?family=Lato:400,700",
            as: "font",
            type: "font/woff2",
            crossOrigin: "anonymous",
          },
        ]}
        additionalMetaTags={[
          {
            name: "viewport",
            content: "width=device-width, initial-scale=1",
          },
        ]}
      ></NextSeo>
      <div className="">{props.children}</div>
    </>
  );
};

export default Layout;
