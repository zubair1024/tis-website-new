import Banner from "@/components/Banner";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Layout from "@/components/Layout";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import dynamic from "next/dynamic";

const title = "TIS Solutions";
//TODO add a proper description
const description = "This is a description";

const Home = () => {
  return (
    <Layout title={title} description={description}>
      <>
        <header className="fixed w-full">
          <Header></Header>
        </header>
        <main className="pt-10">
          <Banner></Banner>
          <Services></Services>
          <Portfolio></Portfolio>
          <ContactUs></ContactUs>
        </main>
        <footer>
          <Footer></Footer>
        </footer>
      </>
    </Layout>
  );
};

export default dynamic(() => Promise.resolve(Home), {
  ssr: false,
});
