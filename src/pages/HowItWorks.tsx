import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Rocket, Wand2, Sparkles, Zap } from "lucide-react";

const HowItWorks = () => {
  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <Header />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">كيف يعمل OFQAI؟</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">أربع خطوات بسيطة لإنشاء موقعك أو متجرك الإلكتروني الاحترافي</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {[
              { icon: Rocket, number: "01", title: "اختر طريقة الإدخال", desc: "استيراد من Figma أو ابدأ من الصفر" },
              { icon: Wand2, number: "02", title: "الذكاء الاصطناعي يبني لك نسخة أولية جاهزة", desc: "يقوم النظام بتحليل وتصميم موقعك تلقائياً" },
              { icon: Sparkles, number: "03", title: "عدل عليها بسهولة عبر AI Studio", desc: "استخدم واجهة التحرير المتقدمة للتخصيص" },
              { icon: Zap, number: "04", title: "أنشئ موقعك مع AI Agent", desc: "اطلب أي تعديل بكلمات بسيطة" }
            ].map((step, i) => (
              <Card key={i} className="p-6 text-center hover:border-primary transition-colors">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-5xl font-bold text-primary/20 mb-2">{step.number}</div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HowItWorks;
