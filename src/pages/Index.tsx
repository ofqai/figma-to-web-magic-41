import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, BarChart3, TrendingUp, PieChart, Clock, Users, Activity, Zap, Shield, Globe, Code, Sparkles, Brain, MessageSquare, Star } from "lucide-react";

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
    <div className="min-h-screen bg-gradient-to-b from-[#0a0d2e] via-[#1a1d4a] to-[#0a0d2e]" dir="rtl">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 md:py-32 min-h-[90vh] flex items-center">
          {/* Animated Background with circles */}
          <div className="absolute inset-0">
            <div className="absolute top-20 right-[10%] w-64 h-64 bg-purple-600/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-32 left-[15%] w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 right-[20%] w-48 h-48 bg-purple-500/30 rounded-full blur-2xl"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center space-y-8 max-w-4xl mx-auto animate-fade-in">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 text-blue-300 text-sm font-medium backdrop-blur-sm border border-blue-500/20">
                <Sparkles className="w-4 h-4" />
                <span>منصة قوية لتتبع الأداء باحترافية</span>
              </div>
              
              {/* Main Heading */}
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-white">
                اصنع موقعك أو متجرك الإلكتروني في
                <br />
                دقائق للذكاء الاصطناعي باستخدام
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  OFQAI
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
                من منصة متكاملة تعتمد على الذكاء الاصطناعي لإنشاء المواقع والمتاجر من
                <br />
                إنتاج مواقع ومتاجر إلكترونية بمميزات قابلة لإدارة ملتبي
              </p>
              
              {/* Feature Badges */}
              <div className="flex flex-wrap gap-4 justify-center items-center pt-4">
                <div className="flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
                  <Zap className="w-4 h-4 text-blue-400" />
                  <span className="text-sm text-gray-300">تصميم سريع ومباشر</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
                  <Shield className="w-4 h-4 text-purple-400" />
                  <span className="text-sm text-gray-300">استضافة مجانية دائمة</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
                  <Code className="w-4 h-4 text-pink-400" />
                  <span className="text-sm text-gray-300">البرمجة بدون كتابة أكواد</span>
                </div>
              </div>
              
              <Button size="lg" className="text-lg px-12 py-7 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white border-0 shadow-2xl shadow-blue-500/50 hover:scale-105 transition-all duration-300">
                ابدأ الآن مجانا
              </Button>
            </div>

            {/* Dashboard Preview Cards */}
            <div className="mt-20 grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {/* Card 1 */}
              <Card className="p-6 bg-gradient-to-br from-purple-900/40 to-purple-800/20 backdrop-blur-xl border-purple-500/30 rounded-2xl">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <Button size="sm" className="bg-purple-600 hover:bg-purple-500 text-xs">
                      ANALYTICS
                    </Button>
                  </div>
                  <div className="text-center py-8">
                    <h3 className="text-3xl font-bold text-white mb-2">Analytics for</h3>
                    <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                      developers
                    </h3>
                    <p className="text-sm text-gray-400 mt-2">Easy to install. Unlimited power.</p>
                    <div className="flex gap-2 justify-center mt-4">
                      <Button size="sm" className="bg-blue-600 text-xs">ANALYTICS</Button>
                      <Button size="sm" variant="outline" className="text-xs border-white/20 text-white">DASHBOARD</Button>
                    </div>
                  </div>
                  <div className="grid grid-cols-4 gap-2 text-center">
                    {[
                      { icon: BarChart3, label: "SOOD" },
                      { icon: Users, label: "8 accounts" },
                      { icon: Activity, label: "2,490" },
                      { icon: Globe, label: "45" }
                    ].map((item, i) => (
                      <div key={i} className="p-2 bg-black/30 rounded-lg">
                        <item.icon className="w-4 h-4 mx-auto text-purple-400 mb-1" />
                        <div className="text-xs text-gray-400">{item.label}</div>
                      </div>
                    ))}
                  </div>
                  <div className="h-32 bg-black/30 rounded-lg flex items-end gap-1 p-4">
                    {[30, 60, 40, 80, 50, 70, 45, 85, 55].map((h, i) => (
                      <div key={i} className="flex-1 bg-gradient-to-t from-purple-600 to-blue-500 rounded-t" style={{ height: `${h}%` }}></div>
                    ))}
                  </div>
                </div>
              </Card>

              {/* Card 2 */}
              <div className="space-y-6">
                <Card className="p-6 bg-gradient-to-br from-blue-900/40 to-blue-800/20 backdrop-blur-xl border-blue-500/30 rounded-2xl">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-white font-bold">Analytics for</span>
                    <Button size="sm" className="bg-purple-600 hover:bg-purple-500 text-xs rotate-90">
                      ANALYTICS
                    </Button>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-black/30 rounded-lg">
                      <span className="text-gray-400 text-sm">Dashboard</span>
                      <Activity className="w-4 h-4 text-blue-400" />
                    </div>
                    <div className="flex items-center justify-between p-3 bg-black/30 rounded-lg">
                      <span className="text-gray-400 text-sm">Analytics</span>
                      <BarChart3 className="w-4 h-4 text-purple-400" />
                    </div>
                    <div className="flex items-center justify-between p-3 bg-black/30 rounded-lg">
                      <span className="text-gray-400 text-sm">Reports</span>
                      <PieChart className="w-4 h-4 text-pink-400" />
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-gradient-to-br from-purple-900/40 to-pink-800/20 backdrop-blur-xl border-purple-500/30 rounded-2xl">
                  <h3 className="text-2xl font-bold text-white mb-2">Analytics for</h3>
                  <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-4">
                    developers
                  </h3>
                  <p className="text-sm text-gray-400 mb-4">Easy to install. Unlimited power.</p>
                  <div className="flex gap-2 mb-4">
                    <Button size="sm" className="bg-purple-600 text-xs">ANALYTICS</Button>
                    <Button size="sm" variant="outline" className="text-xs border-white/20 text-white">DASHBOARD</Button>
                  </div>
                  <div className="grid grid-cols-4 gap-2">
                    {[BarChart3, Users, Activity, Globe].map((Icon, i) => (
                      <div key={i} className="aspect-square bg-black/30 rounded-lg flex items-center justify-center">
                        <Icon className="w-5 h-5 text-purple-400" />
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                مميزات المنصة
              </h2>
              <p className="text-gray-400 text-lg">
                تمتع بنا من أدوات احترافية لبناء مشاريعك بسهولة التوسع اليها
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {[
                {
                  icon: Brain,
                  title: "ذكاء اصطناعي متقدم",
                  description: "تعلم ننا من اسعتت مواقع مذكرة عمرانية من خلال كلمات مستخدم من اي مكان"
                },
                {
                  icon: Code,
                  title: "كود نظيف ومنظم",
                  description: "مولد نصوص بالعربية فابل لي XML.CSS, JS في شكل منتظم وسريعة"
                },
                {
                  icon: Zap,
                  title: "حرر الرجب والأوفلاين",
                  description: "وتبلتح وإنها برسرعة اعلى مؤتى يصدر الدعم سرعة"
                },
                {
                  icon: PieChart,
                  title: "تصميم متجاوب",
                  description: "كانت مع مع كل الأخطاء دون عناء وتجاربا متنوعة بدون عتابة"
                },
                {
                  icon: Shield,
                  title: "مصادر متنوعة",
                  description: "نتاج مدروس مع النوجيه الجيم وملبياة بيئاته الإنتاج"
                },
                {
                  icon: Globe,
                  title: "دعم لغات متعددة",
                  description: "تخدخ من تلقاء خاويم بكل بسإقة دبرجة ابين الداعاً"
                }
              ].map((feature, i) => (
                <Card 
                  key={i} 
                  className="p-6 bg-gradient-to-br from-purple-900/20 to-blue-900/20 backdrop-blur-xl border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600/30 to-blue-600/30 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <feature.icon className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                      <p className="text-sm text-gray-400 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {[
                { value: "25K+", label: "تحفة رادط", icon: Users },
                { value: "10K+", label: "مشروع", icon: Globe },
                { value: "500+", label: "عميل", icon: Activity },
                { value: "99%", label: "نسبة الرضا", icon: Star }
              ].map((stat, i) => (
                <div key={i} className="text-center space-y-3 group hover:scale-105 transition-transform duration-300">
                  <stat.icon className="w-12 h-12 mx-auto text-blue-400 mb-3" />
                  <div className="text-4xl md:text-5xl font-bold text-white">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Features Section */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-600/10 to-purple-600/10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16 space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 text-blue-300 text-sm font-medium backdrop-blur-sm border border-blue-500/20">
                <Sparkles className="w-4 h-4" />
                <span>الذكاء الاصطناعي</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                قوة الذكاء الاصطناعي ✨
              </h2>
              <p className="text-gray-400 text-lg">
                أدوات مدعومة بالذكاء الاصطناعي لإضافة محتوى ذكائي يتفهم المستقبل
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                {
                  icon: MessageSquare,
                  title: "روبوتات الدردشة",
                  description: "أنشئ محادثات AI للإجابة على أسئلة عملائك وتخصيص تجربتهم"
                },
                {
                  icon: Brain,
                  title: "أسعار ذكية",
                  description: "استفد من توصيات الأسعار وشيفرات ذكية قابلة للإستخدام"
                },
                {
                  icon: Sparkles,
                  title: "تحليلات تلقائية",
                  description: "اجعل الذكاء الاصطناعي يعمل من أجلك باستمرار لوحات نقوش احترافية"
                }
              ].map((feature, i) => (
                <Card 
                  key={i}
                  className="p-8 bg-gradient-to-br from-blue-900/20 to-purple-900/20 backdrop-blur-xl border-blue-500/20 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 text-center group"
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-blue-600/30 to-purple-600/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <feature.icon className="w-8 h-8 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                ماذا يقول عملاؤنا
              </h2>
              <p className="text-gray-400 text-lg">
                آراء عملائنا تتحدث عما نقدمه من قيمة لمشاريعهم
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                { name: "أحمد السعيد", role: "مؤسس شركة", quote: "في الواقع، كان تجربة خيطية لتصميم بالأكواد. تصاميم احترافية بدون معرفة بالإكواد!" },
                { name: "فاطمة الخولي", role: "مديرة التسويق", quote: "منصة مثالية قم بالاختيار الأذكى لتحليل الربيع. اشتريت وأحببتها بعد يوم واحد!" },
                { name: "محمد الامير", role: "مطور", quote: "سريع، سهل، وذكي. تحصل على موقع حقيقي خلال دقائق بدون خبرة تقنية!" }
              ].map((testimonial, i) => (
                <Card 
                  key={i} 
                  className="p-6 bg-gradient-to-br from-purple-900/20 to-blue-900/20 backdrop-blur-xl border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 hover:scale-105"
                >
                  <div className="space-y-4">
                    <div className="flex gap-1 justify-center">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-300 text-center leading-relaxed">"{testimonial.quote}"</p>
                    <div className="pt-4 border-t border-white/10 text-center">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center mx-auto mb-2">
                        <Users className="w-6 h-6 text-white" />
                      </div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-sm text-gray-400">{testimonial.role}</div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-purple-600/20 to-blue-600/20"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-3xl mx-auto space-y-8">
              <h2 className="text-4xl md:text-6xl font-bold text-white">
                مستعد لإنشاء موقعك الأول؟
              </h2>
              
              <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
                انضم لآلاف المستخدمين الذين بدؤوا تجربة OFQAI وأنشاوا مواقع ومتاجر برمجية
              </p>
              
              <Button size="lg" className="text-lg px-12 py-7 bg-white text-purple-900 hover:bg-gray-100 border-0 shadow-2xl hover:scale-105 transition-all duration-300">
                ابدأ الآن مجانا
              </Button>

              <div className="text-sm text-gray-400 pt-4">
                لا حاجة لبطاقة ائتمان • ابدأ الآن مجانا
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;