import CustomerList from "./components/Customers/List";
import Products from './components/Products/List';
import Header from "./components/Header";


function App() {
  return (
    <>
      <Header />

      <main>
        <section>
          <div>
            <CustomerList />
          </div>
        </section>

        <section>
          <div>
            <Products />
          </div>
        </section>
      </main>

    </>
  )
}

export default App;