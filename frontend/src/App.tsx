import Customers from "./components/Customers";
import Products from './components/Products';
import Header from "./components/Header";


function App() {
  return (
    <>
      <Header />

      <main>
      <section>
          <div>
            <Customers />
          </div>
        </section>
      </main>

    </>
  )
}

export default App;
