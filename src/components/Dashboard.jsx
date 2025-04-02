import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, BarChart, PieChart, ExternalLink } from "lucide-react";

const Dashboard = () => {
  const stats = [
    {
      title: "Total Flights",
      value: "24",
      description: "Total number of drone flights",
      icon: <LineChart className="h-6 w-6" />,
      color: "text-blue-500"
    },
    {
      title: "Data Points",
      value: "1,234",
      description: "Total data points collected",
      icon: <BarChart className="h-6 w-6" />,
      color: "text-green-500"
    },
    {
      title: "Accuracy Rate",
      value: "98.5%",
      description: "Prediction accuracy rate",
      icon: <PieChart className="h-6 w-6" />,
      color: "text-purple-500"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
      
      {/* Weather Details Link */}
      <Card className="mb-8 hover:shadow-lg transition-shadow">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>Weather Details</span>
            <ExternalLink className="h-4 w-4 text-muted-foreground" />
          </CardTitle>
        </CardHeader>
        <CardContent>
          <a 
            href="https://weather-detail-two.vercel.app/" 
                      className="text-primary hover:text-primary/80 transition-colors"
          >
            View Detailed Weather Information →
          </a>
        </CardContent>
      </Card>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {stat.title}
              </CardTitle>
              <div className={`${stat.color}`}>
                {stat.icon}
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">
                {stat.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3].map((item) => (
                <div key={item} className="flex items-center space-x-4">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <div>
                    <p className="text-sm font-medium">Flight #{item}</p>
                    <p className="text-xs text-muted-foreground">
                      Completed with 98% accuracy
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* System Status */}
        <Card>
          <CardHeader>
            <CardTitle>System Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm">Drone Battery</span>
                <span className="text-sm font-medium">85%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Connection Status</span>
                <span className="text-sm font-medium text-green-500">Connected</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Last Update</span>
                <span className="text-sm font-medium">2 minutes ago</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;