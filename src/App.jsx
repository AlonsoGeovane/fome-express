import { BrowserRouter, Route, Routes } from "react-router-dom"
import { HomePage } from "./pages/Home"
import { AboutPage } from "./pages/About"
import { ContactsPage } from "./pages/Contacts"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sobre" element={<AboutPage />} />
        <Route path="/contato" element={<ContactsPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App