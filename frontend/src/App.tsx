<<<<<<< HEAD
import Customers from "./components/Customers";
import Products from './components/Products';
=======
import CustomerList from "./components/Customers/List";
import Products from './components/Products/List';
>>>>>>> b83164b007f215bf03311ef284b21910289d79f1
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
<<<<<<< HEAD
=======
        </section>

        <section>
          <div>
            <Products />
          </div>
>>>>>>> b83164b007f215bf03311ef284b21910289d79f1
        </section>
      </main>

    </>
  )
}

export default App;