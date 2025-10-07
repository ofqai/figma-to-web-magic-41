import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, BarChart3, TrendingUp, PieChart, Clock, Users } from "lucide-react";

const Index = () => {
  const features = [
    {
      icon: BarChart3,
      title: "Dashboard",
      description: "Comprehensive analytics dashboard"
    },
    {
      icon: TrendingUp,
      title: "Graphs",
      description: "Beautiful data visualizations"
    },
    {
      icon: PieChart,
      title: "Reports",
      description: "Detailed performance reports"
    },
    {
      icon: Clock,
      title: "Real-time",
      description: "Live data monitoring"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Team collaboration tools"
    }
  ];

  const stats = [
    { label: "Ad Click", value: "36K", change: "+4K" },
    { label: "Revenue", value: "$21K", change: "+$2K" },
    { label: "CTR", value: "0.1%", change: "+0.4%" },
    { label: "Impressions", value: "36K", change: "+5K" }
  ];

  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 md:py-32">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-purple-500/10 to-background"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="text-center lg:text-right">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                  </span>
                  <span>Fully Responsive Template</span>
                </div>
                
                <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text">
                  Analytics for developers
                </h1>
                
                <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                  Easy to install. Unlimited power.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-end items-center mb-12">
                  <Button size="lg" className="group text-lg px-8">
                    Get started
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button size="lg" variant="outline" className="text-lg px-8">
                    Book Demo
                  </Button>
                </div>

                {/* Trust Badges */}
                <div className="flex items-center justify-center lg:justify-end gap-6 flex-wrap">
                  <span className="text-sm font-medium text-muted-foreground">TRUSTED BY</span>
                  <div className="flex gap-4">
                    {["LOGO", "LEGGIPSUM"].map((logo, i) => (
                      <div key={i} className="px-6 py-3 bg-card/50 backdrop-blur rounded-lg border border-border">
                        <span className="text-sm font-bold">{logo}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Dashboard Preview */}
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-3xl blur-3xl"></div>
                
                <Card className="relative p-8 bg-card/80 backdrop-blur-xl border-primary/20">
                  {/* Stats Cards */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {stats.map((stat, i) => (
                      <Card key={i} className="p-4 bg-background/50 backdrop-blur border-border/50">
                        <div className="text-xs text-muted-foreground mb-1">{stat.label}</div>
                        <div className="text-2xl font-bold mb-1">{stat.value}</div>
                        <div className="text-xs text-green-500">{stat.change}</div>
                      </Card>
                    ))}
                  </div>

                  {/* Chart Placeholder */}
                  <div className="relative h-48 bg-gradient-to-br from-primary/10 to-purple-500/10 rounded-xl p-6 border border-border/50">
                    <div className="absolute inset-0 flex items-end justify-around p-6">
                      {[40, 70, 45, 80, 55, 90, 60].map((height, i) => (
                        <div
                          key={i}
                          className="w-8 bg-gradient-to-t from-primary to-primary/50 rounded-t-lg transition-all hover:scale-105"
                          style={{ height: `${height}%` }}
                        ></div>
                      ))}
                    </div>
                  </div>

                  {/* Mini Stats */}
                  <div className="grid grid-cols-3 gap-2 mt-4">
                    {[
                      { label: "Views", value: "25K" },
                      { label: "Clicks", value: "500" },
                      { label: "Rate", value: "98%" }
                    ].map((item, i) => (
                      <div key={i} className="text-center p-2 rounded-lg bg-background/30">
                        <div className="text-sm font-bold">{item.value}</div>
                        <div className="text-xs text-muted-foreground">{item.label}</div>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-card/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Everything you need
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Powerful analytics tools designed for modern developers
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
              {features.map((feature, index) => (
                <Card 
                  key={index} 
                  className="p-6 text-center hover:border-primary transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20 bg-card/50 backdrop-blur"
                >
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-purple-500/20 flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-primary/10 via-purple-500/5 to-background relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/5"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <Card className="p-12 md:p-16 text-center bg-card/80 backdrop-blur-xl border-primary/20 max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Sign up for free
              </h2>
              <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto">
                Start building better products with powerful analytics today
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="group text-lg px-10">
                  Get started
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-10">
                  Book Demo
                </Button>
              </div>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;