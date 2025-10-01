import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Breadcrumbs from "./components/Breadcrumbs";
import ScrollToTop from "./components/ScrollToTop";
import SkipLink from "./components/SkipLink";
import Index from "./pages/Index";
import Village from "./pages/Village";
import Culture from "./pages/Culture";
import Tourisme from "./pages/Tourisme";
import Services from "./pages/Services";
import Environnement from "./pages/Environnement";
import Actualites from "./pages/Actualites";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <SkipLink />
        <div className="flex flex-col min-h-screen">
          <Navigation />
          <Breadcrumbs />
          <main id="main-content" className="flex-1">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/village" element={<Village />} />
              <Route path="/culture" element={<Culture />} />
              <Route path="/tourisme" element={<Tourisme />} />
              <Route path="/services" element={<Services />} />
              <Route path="/environnement" element={<Environnement />} />
              <Route path="/actualites" element={<Actualites />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
          <ScrollToTop />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
