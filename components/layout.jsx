import Nav from "../components/nav"
import Footer from "./footer"
export default function Layout({ children }) {
  return (
    <div className="min-h-screen mx-auto">
      {/* <Alert preview={preview} /> */}
      <Nav />
      <main className="mx-auto">{children}</main>
      <Footer />
    </div>
  )
}
