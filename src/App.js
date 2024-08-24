
import { Container } from "./components/Portfolio/components/index"
import { Header, Footer, Hero, MostPopulaire } from "./components/Portfolio/sections/index";

const App = () => {
  return (
    <>
      <Header />
      <Container>
        <Hero />
        <MostPopulaire />
      </Container>
      <Footer />
    </>
  )
}

export default App