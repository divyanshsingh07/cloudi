import { Button } from "@/components/ui/button";
import { X, Cloud, Thermometer, Wind, Leaf, Cpu, Camera, AlertTriangle, Target, Database, Globe } from "lucide-react";

const InfoModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-background rounded-lg shadow-xl w-full max-w-4xl relative max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-background border-b p-4 flex items-center justify-between z-10">
          <div className="flex items-center gap-2">
            <Cloud className="h-6 w-6 text-blue-500" />
            <h2 className="text-2xl font-semibold">Climate Change Monitoring Drone</h2>
          </div>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={onClose} 
            className="hover:bg-accent rounded-full"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-8">
          {/* Introduction */}
          <section>
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Globe className="h-5 w-5 text-blue-500" />
              Introduction
            </h3>
            <p className="text-muted-foreground">
              Climate change is one of the most pressing global challenges, and real-time environmental monitoring is crucial in mitigating its impact. Our Climate Change Monitoring Drone is an innovative, AI-powered solution designed to detect early signs of forest fires, assess air quality, and monitor environmental changes with precision.
            </p>
          </section>

          {/* Key Features */}
          <section>
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Target className="h-5 w-5 text-blue-500" />
              Key Features & Capabilities
            </h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-medium mb-2 flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-red-500" />
                  1. Detecting and Preventing Forest Fires 🔥
                </h4>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Thermal Imaging: Identifies heat signatures from smoldering vegetation</li>
                  <li>Smoke Detection: AI-powered image processing for early smoke recognition</li>
                  <li>Real-time Alerts: Instant notifications to authorities</li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-medium mb-2 flex items-center gap-2">
                  <Wind className="h-5 w-5 text-green-500" />
                  2. Air Quality Monitoring 🌬️
                </h4>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Gas Sensors (BME680): Measures CO2, NOx, and particulate matter</li>
                  <li>Pollution Source Identification: YOLO object detection</li>
                  <li>Data Visualization: Interactive 3D webpage using Three.js</li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-medium mb-2 flex items-center gap-2">
                  <Leaf className="h-5 w-5 text-emerald-500" />
                  3. Environmental & Climate Data Collection 🌱
                </h4>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Temperature & Humidity Tracking</li>
                  <li>Soil Moisture Analysis</li>
                  <li>Vegetation Health Monitoring</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Technology */}
          <section>
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Cpu className="h-5 w-5 text-blue-500" />
              Technology Behind the Drone
            </h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-medium mb-2 flex items-center gap-2">
                  <Database className="h-5 w-5 text-purple-500" />
                  1. Software Components 💻
                </h4>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Image Processing: Python 3.13, OpenCV 4.9.0, and YOLO</li>
                  <li>Machine Learning: Numpy, Pandas, and AI models</li>
                  <li>Web-Based Data Visualization: HTML, CSS, JavaScript, and Three.js</li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-medium mb-2 flex items-center gap-2">
                  <Camera className="h-5 w-5 text-orange-500" />
                  2. Hardware Components 🛠️
                </h4>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Raspberry Pi 4: Central processor</li>
                  <li>BME680 Sensor: Environmental measurements</li>
                  <li>High-Resolution Camera: Aerial imagery</li>
                  <li>GPS Module: Navigation and mapping</li>
                </ul>
              </div>
            </div>
          </section>

          {/* How It Works */}
          <section>
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Target className="h-5 w-5 text-blue-500" />
              How It Works ⚙️
            </h3>
            <div className="space-y-4 text-muted-foreground">
              <p>1. <strong>Autonomous Flight & Navigation</strong> 🚁</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Pre-programmed flight paths using GPS guidance</li>
                <li>Obstacle avoidance technology</li>
              </ul>

              <p>2. <strong>Data Collection & Processing</strong> 📊</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Real-time environmental data capture</li>
                <li>Machine learning model processing</li>
                <li>Web-based dashboard transmission</li>
              </ul>

              <p>3. <strong>Early Warning & Alerts</strong> ⚡</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Instant anomaly detection alerts</li>
                <li>Authority notification system</li>
              </ul>
            </div>
          </section>

          {/* Why This Matters */}
          <section>
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Globe className="h-5 w-5 text-blue-500" />
              Why This Matters? 🌍
            </h3>
            <div className="space-y-4 text-muted-foreground">
              <p>With increasing forest fires, rising temperatures, and worsening air quality, proactive monitoring is essential. Our Climate Change Monitoring Drone provides:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>✅ Faster Disaster Response – Early detection reduces impact</li>
                <li>✅ Accurate Environmental Data – Real-time monitoring for research</li>
                <li>✅ Sustainable Solutions – AI-driven insights for policy-making</li>
              </ul>
            </div>
          </section>

          {/* Call to Action */}
          <section className="text-center py-4">
            <p className="text-lg font-medium mb-2">🌍 Together, we can make a difference!</p>
            <p className="text-muted-foreground">
              We believe technology can drive positive environmental change. If you're passionate about climate action and innovation, explore how you can contribute to or support this project.
            </p>
          </section>
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 bg-background border-t p-4 flex justify-end">
          <Button variant="outline" onClick={onClose}>Close</Button>
        </div>
      </div>
    </div>
  );
};

export default InfoModal; 