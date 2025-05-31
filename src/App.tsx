// App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';     
import Footer from './components/Footer';     
import ContactPage from './pages/ContactPage'; 
// Assuming BlogPage is your blog listing and BlogDetailPage is the individual blog post
import BlogPage from './pages/BlogDetailPage'; // Make sure this is the listing page, not detail
import BlogDetailPage from './pages/BlogDetailPage';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage'; 
import ProjectDetailPage from './pages/ProjectDetailPage'; 
import LatestNewsPage from './pages/LatestNewsPage'; 
import NewsDetailPage from './pages/NewsDetailPage'; 
import MemberCompaniesPage from './pages/MemberCompaniesPage'; 
import MemberCompanyDetailPage from './pages/MemberCompanyDetailPage';
import CareersPage from './pages/CareersPage'; // <<--- IMPORT THE CAREERS PAGE

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-dark-bg">
        <Header />
        <main className="flex-grow w-full">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contact" element={<ContactPage />} />
            
            {/* Blog Routes */}
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:id" element={<BlogDetailPage />} />
            
            {/* Latest News Routes - Removed duplicate route */}
            <Route path="/latest-news" element={<LatestNewsPage />} />
            <Route path="/latest-news/:slug" element={<NewsDetailPage />} />

            {/* Projects Routes */}
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/projects/:id" element={<ProjectDetailPage />} /> {/* Assuming :id for projects */}

            {/* Member Companies Routes */}
            <Route path="/member-companies" element={<MemberCompaniesPage />} />
            <Route path="/member-companies/:slug" element={<MemberCompanyDetailPage />} />

            {/* Careers Page Route - ADDED */}
            <Route path="/careers" element={<CareersPage />} />

            {/* About Page (Placeholder) */}
            <Route 
              path="/about" 
              element={
                <div className="p-8 text-white bg-slate-900 min-h-screen flex items-center justify-center">
                  <h1 className="text-4xl">About Page Coming Soon</h1>
                </div>
              } 
            />
            
            {/* 404 Not Found Route */}
            <Route 
              path="*" 
              element={
                <div className="p-8 text-white bg-slate-900 min-h-screen flex flex-col items-center justify-center">
                  <h1 className="text-6xl font-bold mb-4">404</h1>
                  <p className="text-2xl">Page Not Found</p>
                  <a href="/" className="mt-8 px-6 py-3 bg-primary hover:bg-primary-dark text-white rounded-lg transition-colors"> {/* Using primary color from theme */}
                    Go to Homepage
                  </a>
                </div>
              }
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;