import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SingleDog from "./pages/SingleDog";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="background-container">
        <div className="background-overlay"></div>
        <div className="min-h-screen flex flex-col content-container">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/:name" element={<SingleDog />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;



// import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import SingleDog from "./pages/SingleDog";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/:name" element={<SingleDog />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;
