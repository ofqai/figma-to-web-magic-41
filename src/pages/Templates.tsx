import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Templates = () => {
  const templates = Array(12).fill(null).map((_, i) => ({
    title: i % 4 === 0 ? "متجر أزياء عصري" : i % 4 === 1 ? "موقع شركة احترافي" : i % 4 === 2 ? "مطعم وكافيه" : "محفظة شخصية",
    image: i % 4 === 0 ? "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80" : 
           i % 4 === 1 ? "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80" : 
           i % 4 === 2 ? "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80" : 
           "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80"
  }));

  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <Header />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">قوالب OFQAI الجاهزة</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">اختر من مجموعة واسعة من القوالب الاحترافية المصممة حصرياً لكل مجال</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {templates.map((template, i) => (
              <Card key={i} className="group overflow-hidden hover:border-primary transition-all">
                <img src={template.image} alt={template.title} className="w-full aspect-video object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-4">{template.title}</h3>
                  <Button className="w-full group">
                    اختيار هذا القالب
                    <ArrowRight className="mr-2 w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Templates;
