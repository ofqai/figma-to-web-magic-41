import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, Sparkles, Zap, Shield, Layers } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const templates = [
    {
      title: "متجر أزياء عصري",
      description: "متجر إلكتروني أنيق للأزياء والموضة مع نظام دفع متكامل وعرض منتجات احترافي",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
      features: ["عرض سريع", "دفع آمن", "تتبع الشحنات"]
    },
    {
      title: "موقع شركة احترافي",
      description: "موقع احترافي للشركات والخدمات مع صفحات متعددة وتصميم يعكس هوية العلامة التجارية",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      features: ["سهولة التخصيص", "فريق العمل", "نموذج التواصل"]
    },
    {
      title: "مطعم وكافيه",
      description: "موقع جذاب للمطاعم مع قائمة الطعام التفاعلية ونظام الحجوزات والطلبات الأونلاين",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
      features: ["قائمة الطعام", "نظام الحجز", "طلب التوصيل"]
    },
    {
      title: "محفظة شخصية",
      description: "موقع شخصي لعرض الأعمال والمشاريع مع معرض صور ونماذج الاتصال الاحترافية",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
      features: ["معرض الأعمال", "السيرة الذاتية", "نماذج التواصل"]
    }
  ];

  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 md:py-32">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4" />
                <span>قالب قابل للتخصيص بالكامل</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                ابدأ إنشاء موقعك الآن
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                اختر الطريقة التي تناسبك لبدء إنشاء موقعك أو متجرك الإلكتروني
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                <Button size="lg" className="group">
                  ابدأ مجاناً
                  <ArrowRight className="mr-2 w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                </Button>
                <Button size="lg" variant="outline">
                  مشاهدة العرض التوضيحي
                </Button>
              </div>

              {/* Trust Logos */}
              <div className="flex items-center justify-center gap-8 flex-wrap opacity-60">
                <span className="text-sm font-medium">موثوق به من قبل</span>
                {["LOGO", "LEGGIPSUM"].map((logo, i) => (
                  <div key={i} className="px-6 py-2 bg-card rounded-lg">
                    <span className="text-sm font-semibold">{logo}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-card/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                أو ابدأ بقالب جاهز
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                اختر من مجموعة قوالبنا الجاهزة المصممة حصرياً لكل مجال
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {templates.map((template, index) => (
                <Card key={index} className="group overflow-hidden border-border hover:border-primary transition-all duration-300">
                  <div className="relative overflow-hidden aspect-[4/3]">
                    <img 
                      src={template.image} 
                      alt={template.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{template.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                      {template.description}
                    </p>
                    
                    <div className="space-y-2 mb-4">
                      <p className="text-xs font-semibold text-primary">المميزات المضمنة:</p>
                      <ul className="text-xs text-muted-foreground space-y-1">
                        {template.features.map((feature, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <Button variant="outline" className="w-full group">
                      اختيار هذا القالب
                      <ArrowRight className="mr-2 w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link to="/templates">
                <Button variant="ghost" className="group">
                  عرض جميع القوالب
                  <ArrowRight className="mr-2 w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Why OFQAI Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                لماذا OFQAI؟
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                الحل الأمثل لإنشاء مواقع ومتاجر إلكترونية احترافية
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Zap,
                  title: "سهولة الاستخدام",
                  description: "لا تحتاج لخبرة في البرمجة أو التصميم والإنتاج يبدأ بدقائق معدودة"
                },
                {
                  icon: Layers,
                  title: "تقنية متقدمة",
                  description: "نظام قائم على تقنيات متقدمة يوفر صور عالية الجودة"
                },
                {
                  icon: Shield,
                  title: "مرونة كاملة",
                  description: "يمكنك دائماً التعديل والتحسين بسهولة كما تريد"
                },
                {
                  icon: Sparkles,
                  title: "دعم عربي",
                  description: "دعم كامل للغة العربية مع تخصيص كامل لمحتواك"
                }
              ].map((feature, index) => (
                <Card key={index} className="p-6 hover:border-primary transition-colors">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-background">
          <div className="container mx-auto px-4">
            <Card className="p-8 md:p-12 text-center bg-card/80 backdrop-blur border-primary/20">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                جاهز للبدء؟
              </h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                ابدأ إنشاء موقعك الآن مجاناً واستمتع بكل المميزات
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="group">
                  ابدأ مجاناً الآن
                  <ArrowRight className="mr-2 w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                </Button>
                <Link to="/subscriptions">
                  <Button size="lg" variant="outline">
                    عرض الخطط والأسعار
                  </Button>
                </Link>
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
