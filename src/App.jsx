import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
// FIX: Mengubah menjadi Named Import agar sesuai dengan cara ekspor di file sumber
import { NotFound } from "./pages/NotFound"; 
import  ProjectDetailPage from "./components/ProjectDetailPage"; 

import { Toaster } from "./components/ui/toaster"; // Menggunakan path relatif
import { ProjectsSection } from "./components/ProjectsSection"; // Contoh import

function App() {
  return (
    <>
      <Toaster />
      <BrowserRouter>
        <Routes>
          {/* Rute Beranda */}
          <Route path="/" element={<Home />} />
          
          {/* Rute Detail Proyek - Wajib menggunakan parameter dinamis :id */}
          <Route path="/projects/:id" element={<ProjectDetailPage />} /> 

          {/* Rute Fallback 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
