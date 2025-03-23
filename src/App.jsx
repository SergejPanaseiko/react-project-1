import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header"
import HelloSection from "./components/HelloSection/HelloSection"
import Message from "./components/Message/Message";

const App = () => {
  return (
    <>
      <div>Hello world!</div>
      <Header />
      <HelloSection />
      <Message
        author="Alex"
        text="Sell an iron"
        isOnLine={true}
      />
      <Footer />
</>
  )
}
export default App;