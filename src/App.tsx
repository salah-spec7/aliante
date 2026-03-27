import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ErrorBoundary } from './components/ErrorBoundary';
import Index from './pages/Index';
import ServicesPage from './pages/ServicesPage';
import FounderPage from './pages/FounderPage';
import ContactPage from './pages/ContactPage';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <div className="min-h-screen bg-background text-foreground">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/founder" element={<FounderPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </ErrorBoundary>
  );
}