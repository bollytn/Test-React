import './App.css'
import SayHello from './components/SayHello'
import Heading from './components/Heading'
import Layout from './components/Layout'
import Button from './components/Button'
import Input from './components/Input'
import Container from './components/Container'
import Product from './components/ProductList'
import Reducer from './components/Reducer'

function App() {
  const objData = {
    name: "Bilel",
    age: 38,
    loggedIn: true,
  }
  const productsData = [
    { id: 1, name: 'Product 1', price: 10, desc: 'this is product 1' },
    { id: 2, name: 'Product 2', price: 20, desc: 'this is product 2' },
    { id: 3, name: 'Product 3', price: 30, desc: 'this is product 3' },
  ]
  return (
    <>
      <SayHello objData={objData} />
      <Layout>
        <Heading>this is heading</Heading>
      </Layout>
      <Button handleClick={(e, id) => console.log(e.target, id)} />
      <Input value='bilel' handleChange={(e) => console.log(e.target.value)} />
      <Container styles={{
        border: '1px solid white',
        padding: '1rem',
      }} />
      <Product productsData={productsData} />
      <Reducer>
        {(count) => <p>Count: {count}</p>}
      </Reducer>

    </>
  )
}

export default App
