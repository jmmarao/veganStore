import { ToastContainer } from 'react-toastify';
import AppRoutes from './AppRouters';
import Header from "./components/Header";

import LoginPage from "./components/LoginPage";


function App() {
  return (
    <>
      <Header />
      <main>
        <section>
          <div>
            <AppRoutes />
          </div>
        </section>
      </main>
    </>
  )
}

export default App;