import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Results from "./pages/Results";
import CaseStudyNordicLifting from "./pages/CaseStudyNordicLifting";
import CaseStudyCollagen from "./pages/CaseStudyCollagen";
import CaseStudySkincareSerum from "./pages/CaseStudySkincareSerum";
import CaseStudyFunctionalSnack from "./pages/CaseStudyFunctionalSnack";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import { BrandingBadge } from "./components/BrandingBadge";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/results" element={<Results />} />
            <Route path="/case-studies/nordic-lifting" element={<CaseStudyNordicLifting />} />
            <Route path="/case-studies/collagen-brand" element={<CaseStudyCollagen />} />
            <Route path="/case-studies/skincare-serum" element={<CaseStudySkincareSerum />} />
            <Route path="/case-studies/functional-snack" element={<CaseStudyFunctionalSnack />} />
            <Route path="/about" element={<About />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
        <BrandingBadge />
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
