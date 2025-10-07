import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, BarChart3, TrendingUp, PieChart, Clock, Users, Activity, Zap, Shield, Globe } from "lucide-react";

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
        <section className="relative overflow-hidden py-20 md:py-32 min-h-[90vh] flex items-center">
          {/* Animated Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-purple-500/10 to-background">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="text-center lg:text-right space-y-8 animate-fade-in">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium backdrop-blur-sm border border-primary/20">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                  </span>
                  <span>Fully Responsive Template</span>
                </div>
                
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
                  <span className="bg-gradient-to-br from-foreground via-foreground/90 to-foreground/70 bg-clip-text text-transparent">
                    Analytics for
                  </span>
                  <br />
                  <span className="bg-gradient-to-br from-primary via-purple-500 to-primary bg-clip-text text-transparent">
                    developers
                  </span>
                </h1>
                
                <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground leading-relaxed">
                  Easy to install. Unlimited power.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-end items-center pt-4">
                  <Button size="lg" className="group text-lg px-10 py-6 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-primary/50">
                    Get started
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button size="lg" variant="outline" className="text-lg px-10 py-6 hover:scale-105 transition-all duration-300">
                    Book Demo
                  </Button>
                </div>

                {/* Trust Badges */}
                <div className="flex items-center justify-center lg:justify-end gap-6 flex-wrap pt-8">
                  <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Trusted By</span>
                  <div className="flex gap-4">
                    {["LOGO", "LEGGIPSUM"].map((logo, i) => (
                      <div key={i} className="px-8 py-3 bg-card/50 backdrop-blur-sm rounded-lg border border-border hover:border-primary/50 transition-all duration-300 hover:scale-105">
                        <span className="text-base font-bold">{logo}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Dashboard Preview */}
              <div className="relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <div className="absolute -inset-8 bg-gradient-to-r from-primary/30 to-purple-500/30 rounded-3xl blur-3xl animate-pulse"></div>
                
                <Card className="relative p-6 md:p-8 bg-card/90 backdrop-blur-xl border-primary/30 shadow-2xl hover:shadow-primary/30 transition-all duration-500">
                  {/* Stats Cards */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {stats.map((stat, i) => (
                      <Card 
                        key={i} 
                        className="p-4 bg-background/60 backdrop-blur border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105 group"
                        style={{ animationDelay: `${i * 0.1}s` }}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <div className="text-xs text-muted-foreground font-medium">{stat.label}</div>
                          <Activity className="w-3 h-3 text-primary opacity-50 group-hover:opacity-100 transition-opacity" />
                        </div>
                        <div className="text-3xl font-bold mb-1 bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent">
                          {stat.value}
                        </div>
                        <div className="text-xs text-green-500 font-semibold flex items-center gap-1">
                          <TrendingUp className="w-3 h-3" />
                          {stat.change}
                        </div>
                      </Card>
                    ))}
                  </div>

                  {/* Chart Placeholder */}
                  <div className="relative h-56 bg-gradient-to-br from-primary/10 to-purple-500/10 rounded-xl p-6 border border-border/50 overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent"></div>
                    <div className="absolute inset-0 flex items-end justify-around p-6 gap-2">
                      {[40, 70, 45, 80, 55, 90, 60, 75].map((height, i) => (
                        <div
                          key={i}
                          className="flex-1 bg-gradient-to-t from-primary to-primary/50 rounded-t-lg transition-all duration-500 hover:scale-110 hover:from-purple-500 hover:to-purple-500/50 cursor-pointer group-hover:animate-pulse"
                          style={{ 
                            height: `${height}%`,
                            animationDelay: `${i * 0.1}s`
                          }}
                        ></div>
                      ))}
                    </div>
                  </div>

                  {/* Mini Stats */}
                  <div className="grid grid-cols-3 gap-3 mt-6">
                    {[
                      { label: "Views", value: "25K", icon: Activity },
                      { label: "Clicks", value: "500", icon: BarChart3 },
                      { label: "Rate", value: "98%", icon: TrendingUp }
                    ].map((item, i) => (
                      <div 
                        key={i} 
                        className="text-center p-3 rounded-lg bg-background/40 backdrop-blur hover:bg-background/60 transition-all duration-300 hover:scale-105 group"
                      >
                        <item.icon className="w-4 h-4 mx-auto mb-2 text-primary opacity-70 group-hover:opacity-100 transition-opacity" />
                        <div className="text-lg font-bold">{item.value}</div>
                        <div className="text-xs text-muted-foreground">{item.label}</div>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Bar Section */}
        <section className="py-12 bg-card/30 backdrop-blur border-y border-border/50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: "10M+", label: "API Calls/Day", icon: Zap },
                { value: "99.9%", label: "Uptime", icon: Shield },
                { value: "50+", label: "Countries", icon: Globe },
                { value: "24/7", label: "Support", icon: Clock }
              ].map((stat, i) => (
                <div key={i} className="text-center space-y-2 animate-fade-in hover:scale-105 transition-transform duration-300" style={{ animationDelay: `${i * 0.1}s` }}>
                  <stat.icon className="w-8 h-8 mx-auto text-primary mb-3" />
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-gradient-to-b from-card/30 to-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Trusted by developers worldwide
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Join thousands of teams building better products
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                { name: "Sarah Johnson", role: "Lead Developer", company: "TechCorp", quote: "The best analytics platform we've ever used. Real-time insights that actually matter." },
                { name: "Michael Chen", role: "CTO", company: "StartupXYZ", quote: "Incredible performance and ease of use. Our entire team adopted it in days." },
                { name: "Emma Davis", role: "Product Manager", company: "InnovateLab", quote: "Game-changing analytics. We can finally make data-driven decisions with confidence." }
              ].map((testimonial, i) => (
                <Card 
                  key={i} 
                  className="p-6 bg-card/50 backdrop-blur border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 animate-fade-in"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <div className="space-y-4">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="w-4 h-4 text-yellow-500">★</div>
                      ))}
                    </div>
                    <p className="text-muted-foreground italic">"{testimonial.quote}"</p>
                    <div className="pt-4 border-t border-border">
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role} at {testimonial.company}</div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-32 bg-gradient-to-br from-primary/20 via-purple-500/10 to-background relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.15),transparent_70%)]"></div>
          <div className="absolute inset-0 bg-grid-white/5"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <Card className="p-12 md:p-20 text-center bg-card/90 backdrop-blur-xl border-primary/30 max-w-4xl mx-auto shadow-2xl animate-fade-in">
              <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                Start your journey
              </div>
              
              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent">
                  Sign up for
                </span>
                <br />
                <span className="bg-gradient-to-br from-primary to-purple-500 bg-clip-text text-transparent">
                  free today
                </span>
              </h2>
              
              <p className="text-muted-foreground text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
                Start building better products with powerful analytics. No credit card required.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="group text-lg px-12 py-7 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-primary/50">
                  Get started
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-12 py-7 hover:scale-105 transition-all duration-300">
                  Book Demo
                </Button>
              </div>

              <div className="mt-10 text-sm text-muted-foreground">
                Join 10,000+ developers already using OFQAI
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