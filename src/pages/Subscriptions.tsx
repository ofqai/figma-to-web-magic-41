import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";

const Subscriptions = () => {
  const plans = [
    { name: "مجاني", price: "9", features: ["إنشاء موقع واحد", "قوالب أساسية محدودة", "تجربة شخصيات المنصة", "استجابة مجانية على الطلب الفوري", "دعم المجتمع", "بدون إعلانات"] },
    { name: "احترافي", price: "39", popular: true, features: ["مواقع ومتاجر غير محدودة", "جميع القوالب والتصاميم", "أتمتة بالذكاء الاصطناعي", "AI Studio استخدام", "ربط النطاق المخصص", "تحليلات متقدمة", "دفع غير أولية", "تصدير الكود", "معلومات متكاملة"] },
    { name: "مؤسسي", price: "149", features: ["للشركات الكبيرة للمؤسسات", "جميع مميزات الاحترافية", "كل مميزات الخطة الاحترافية", "فريق غير محدودة", "24/7 دعم مخصص", "API مخصص", "خوادم مخصصة", "تتبع احترافية يومية"] }
  ];

  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <Header />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">خطط تناسب الجميع</h1>
            <p className="text-muted-foreground">اختر الخطة المناسبة لاحتياجاتك وابدأ إنشاء مواقعك الاحترافية اليوم</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {plans.map((plan, i) => (
              <Card key={i} className={`p-8 relative ${plan.popular ? 'border-primary shadow-lg shadow-primary/20' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                    <Star className="w-4 h-4 fill-current" />
                    الأفضل قيمة
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">${plan.price}</span>
                  <span className="text-muted-foreground">/شهرياً</span>
                </div>
                <Button className="w-full mb-6" variant={plan.popular ? "default" : "outline"}>
                  {i === 2 ? "ابدأ مجاناً" : "اشترك الآن"}
                </Button>
                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Subscriptions;
