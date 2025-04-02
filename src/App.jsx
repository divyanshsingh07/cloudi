import './App.css'
import { Providers } from './components/providers'
import { Button } from '@/components/ui/button'
import Navbar from './components/Navbar'
import { motion } from "framer-motion"
import { useState } from "react";
import InfoModal from './components/InfoModal';

function App() {
  const [currentView, setCurrentView] = useState("home");
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);

  const handleNavigation = (view) => {
    if (view === "dashboard") {
      window.location.href = "https://weather-detail-two.vercel.app/";
    } else {
      setCurrentView(view);
    }
  };

  return (
    <Providers>
      <div className="min-h-screen bg-background text-foreground">
        <Navbar onNavigate={handleNavigation} />
        
        {/* Hero Section with Drone */}
        <div className="relative pt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 lg:pt-32">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left side - Drone Image */}
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1473968512647-3e447244af8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    alt="Drone in flight"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
              </motion.div>

              {/* Right side - Content */}
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="text-left"
              >
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                  Advanced Weather Prediction
                  <span className="block text-blue-600 dark:text-blue-400 mt-2">Using Drone Technology</span>
                </h1>
                <p className="mt-6 text-lg text-muted-foreground">
                  Our cutting-edge drone system revolutionizes weather monitoring and natural disaster prediction through advanced AI and real-time data collection.
                </p>
                
                {/* Feature List */}
                <div className="mt-8 space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <h3 className="text-lg font-medium">Real-time Monitoring</h3>
                      <p className="mt-1 text-muted-foreground">Continuous data collection and analysis for accurate weather predictions</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <h3 className="text-lg font-medium">Early Warning System</h3>
                      <p className="mt-1 text-muted-foreground">Predict natural disasters with advanced AI algorithms</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <h3 className="text-lg font-medium">High-Precision Data</h3>
                      <p className="mt-1 text-muted-foreground">Collect detailed atmospheric data for accurate predictions</p>
                    </div>
                  </div>
                </div>

                <div className="mt-10 flex gap-x-6">
                  <Button 
                    size="lg" 
                    className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
                    onClick={() => setIsInfoModalOpen(true)}
                  >
                    Learn More
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Info Modal */}
        <InfoModal 
          isOpen={isInfoModalOpen} 
          onClose={() => setIsInfoModalOpen(false)} 
        />
      </div>
    </Providers>
  )
}

export default App
