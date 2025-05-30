// App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';     
import Footer from './components/Footer';     
import ContactPage from './pages/ContactPage'; 
// Assuming BlogPage is your blog listing and BlogDetailPage is the individual blog post
import BlogPage from './pages/BlogDetailPage'; // Corrected based on typical naming
import BlogDetailPage from './pages/BlogDetailPage';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage'; // Added projects import
import ProjectDetailPage from './pages/ProjectDetailPage'; // Added project detail import
import LatestNewsPage from './pages/LatestNewsPage'; // Import the new page
import NewsDetailPage from './pages/NewsDetailPage'; // Placeholder for the future detail page
import MemberCompaniesPage from './pages/MemberCompaniesPage'; // Added member companies main page
 import MemberCompanyDetailPage from './pages/MemberCompanyDetailPage'; // Added member company detail import

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-dark-bg"> {/* Added bg-dark-bg for global consistency */}
        <Header />
        <main className="flex-grow w-full">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contact" element={<ContactPage />} />
            
            {/* Blog Routes */}
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:id" element={<BlogDetailPage />} /> {/* :id or :slug depending on your blog setup */}
            
            {/* Latest News Routes */}
            <Route path="/latest-news" element={<LatestNewsPage />} />
            <Route path="/latest-news" element={<LatestNewsPage />} />
            <Route 
              path="/latest-news/:slug" 
              element={<NewsDetailPage />} // <<-- USE THE ACTUAL COMPONENT HERE
            />

            {/* Projects Routes */}
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/projects/:id" element={<ProjectDetailPage />} />

            {/* Member Companies Routes - UPDATED */}
            <Route path="/member-companies" element={<MemberCompaniesPage />} />
            <Route path="/member-companies/:slug" element={<MemberCompanyDetailPage />} />

            {/* Placeholder Routes from your example */}
            <Route 
              path="/about" 
              element={
                <div className="p-8 text-white bg-slate-900 min-h-screen flex items-center justify-center">
                  <h1 className="text-4xl">About Page Coming Soon</h1>
                </div>
              } 
            />
            
            {/* Optional: Add a 404 Not Found Route at the end */}
            <Route 
              path="*" 
              element={
                <div className="p-8 text-white bg-slate-900 min-h-screen flex flex-col items-center justify-center">
                  <h1 className="text-6xl font-bold mb-4">404</h1>
                  <p className="text-2xl">Page Not Found</p>
                  <a href="/" className="mt-8 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
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

