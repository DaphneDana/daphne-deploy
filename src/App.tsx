// App.tsx
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom'; // Added useParams to the main import
import Header from './components/Header';     
import Footer from './components/Footer';     
import ContactPage from './pages/ContactPage'; 
import BlogPage from './pages/BlogDetailPage'; // Make sure this points to your blog list component
import BlogDetailPage from './pages/BlogDetailPage';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage'; 
import ProjectDetailPage from './pages/ProjectDetailPage'; 
import LatestNewsPage from './pages/LatestNewsPage'; 
import NewsDetailPage from './pages/NewsDetailPage'; 
import MemberCompaniesPage from './pages/MemberCompaniesPage'; 
import MemberCompanyDetailPage from './pages/MemberCompanyDetailPage';
import CareersPage from './pages/CareersPage';
import CompanyProfilePage from './pages/CompanyProfilePage'; 
import AboutUsPage from './pages/AboutUsPage'; // <<--- IMPORT THE AboutUsPage

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
            
            {/* Latest News Routes */}
            <Route path="/latest-news" element={<LatestNewsPage />} />
            <Route path="/latest-news/:slug" element={<NewsDetailPage />} />

            {/* Projects Routes */}
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/projects/:id" element={<ProjectDetailPage />} />

            {/* Member Companies Routes */}
            <Route path="/member-companies" element={<MemberCompaniesPage />} />
            <Route path="/member-companies/:slug" element={<MemberCompanyDetailPage />} />

            {/* Careers Page Route */}
            <Route path="/careers" element={<CareersPage />} />

            {/* Company Profile Page Route */}
            <Route path="/company-profile/:slug" element={<CompanyProfilePage />} />
            <Route path="/company-profile" element={<CompanyProfilePage />} /> 

            {/* About Us Page Route - UPDATED */}
            <Route path="/about" element={<AboutUsPage />} /> {/* <<--- CORRECTED ROUTE */}


            {/* Placeholder Routes for Dynamic Content from Company Profile, etc. */}
            <Route 
              path="/achievements/:slug" 
              element={
                <div className="p-8 text-white bg-slate-900 min-h-screen flex items-center justify-center">
                  <h1 className="text-4xl">Achievement Detail: <span className="text-primary">{useParams().slug}</span></h1>
                  <p>Detailed content for this achievement will appear here.</p>
                </div>
              } 
            />
            <Route 
              path="/services/:slug" 
              element={
                <div className="p-8 text-white bg-slate-900 min-h-screen flex items-center justify-center">
                  <h1 className="text-4xl">Service Detail: <span className="text-primary">{useParams().slug}</span></h1>
                  <p>Detailed content for this service will appear here.</p>
                </div>
              } 
            />
            <Route 
              path="/milestones/:slug" 
              element={
                <div className="p-8 text-white bg-slate-900 min-h-screen flex items-center justify-center">
                  <h1 className="text-4xl">Milestone Detail: <span className="text-primary">{useParams().slug}</span></h1>
                  <p>Detailed content for this milestone will appear here.</p>
                </div>
              } 
            />
            <Route 
              path="/case-studies/:slug" 
              element={
                <div className="p-8 text-white bg-slate-900 min-h-screen flex items-center justify-center">
                  <h1 className="text-4xl">Case Study Detail: <span className="text-primary">{useParams().slug}</span></h1>
                  <p>Full case study content will appear here.</p>
                </div>
              } 
            />
            <Route 
              path="/case-studies" 
              element={
                <div className="p-8 text-white bg-slate-900 min-h-screen flex items-center justify-center">
                  <h1 className="text-4xl">All Case Studies</h1>
                  <p>A list of all case studies will appear here.</p>
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
                  <a href="/" className="mt-8 px-6 py-3 bg-primary hover:bg-primary-dark text-white rounded-lg transition-colors">
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