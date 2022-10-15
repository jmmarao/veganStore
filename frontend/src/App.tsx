import Autentication from "./components/Autentication";
import CustomerList from "./components/Customers/List";
import NewCustomer from "./components/Customers/New";
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
      </main>

    </>
  )
}

export default App;
