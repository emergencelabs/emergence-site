import Nav from "../components/nav";
export default function Layout({ children }) {
  return (
    <>
      {/* <Meta /> */}
      <div className="min-h-screen max-w-4xl mx-auto">
        {/* <Alert preview={preview} /> */}
        <Nav />
        <main className="max-w-3xl mx-auto">{children}</main>
      </div>
      {/* <Footer /> */}
    </>
  );
}
