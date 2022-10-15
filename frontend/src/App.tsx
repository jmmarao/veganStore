import CustomerList from "./components/Customers/List";
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
