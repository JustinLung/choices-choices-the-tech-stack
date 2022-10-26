import Footer from "../components/Footer";

export default function layout({ children }: any) {
  return (
    <>
      <main>{children}</main>
      <Footer />
    </>
  );
}
