// src/pages/HomePage.tsx
import { Link } from 'react-router-dom';
import { ArrowRight, Brain, Zap, Target } from 'lucide-react';

const HomePage = () => {
  return (
    <div className="bg-slate-900 text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #3b82f6 0%, transparent 50%), 
                             radial-gradient(circle at 75% 75%, #06b6d4 0%, transparent 50%)`,
          }} />
        </div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Transforming Business with{' '}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              AI & ML
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            LLP pioneers cutting-edge artificial intelligence and machine learning solutions 
            that empower businesses to innovate and lead in the digital age.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            
            <Link
              to="/blog"
              className="inline-flex items-center px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-xl border border-slate-600 transition-all duration-300 hover:scale-105"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose LLP?</h2>
            <p className="text-xl text-gray-300">
              We deliver cutting-edge AI solutions that drive real business results
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6">
                <Brain className="h-8 w-8 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Advanced AI Technology</h3>
              <p className="text-gray-300 leading-relaxed">
                Leverage state-of-the-art machine learning algorithms and neural networks 
                to solve complex business challenges.
              </p>
            </div>
            
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-cyan-500/10 rounded-xl flex items-center justify-center mb-6">
                <Zap className="h-8 w-8 text-cyan-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Rapid Implementation</h3>
              <p className="text-gray-300 leading-relaxed">
                Our agile development process ensures quick deployment and immediate 
                impact on your business operations.
              </p>
            </div>
            
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-purple-500/10 rounded-xl flex items-center justify-center mb-6">
                <Target className="h-8 w-8 text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Tailored Solutions</h3>
              <p className="text-gray-300 leading-relaxed">
                Custom AI solutions designed specifically for your industry needs 
                and business objectives.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;