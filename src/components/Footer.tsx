import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl font-bold text-primary">OFQAI</span>
              <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                <div className="w-6 h-6 rounded bg-primary"></div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
              منصة الذكاء الاصطناعي الرائدة لإنشاء المحتوى وتحسين الأعمال. نساعدك على تحقيق أهدافك بسهولة وفعالية.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook className="w-5 h-5 text-primary hover:text-white transition-colors" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary transition-colors">
                <Twitter className="w-5 h-5 text-primary hover:text-white transition-colors" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram className="w-5 h-5 text-primary hover:text-white transition-colors" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary transition-colors">
                <Linkedin className="w-5 h-5 text-primary hover:text-white transition-colors" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">روابط سريعة</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/" className="hover:text-primary transition-colors">الرئيسية</Link></li>
              <li><Link to="/how-it-works" className="hover:text-primary transition-colors">كيف يعمل</Link></li>
              <li><Link to="/subscriptions" className="hover:text-primary transition-colors">الأسعار</Link></li>
              <li><a href="#" className="hover:text-primary transition-colors">عن المنصة</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">المساعدة والدعم</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">سياسة الخصوصية</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">شروط الاستخدام</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">سياسة الاسترداد</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">اتفاقية الخدمة</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">تواصل معنا</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <span>support@ofqai.com</span>
              </li>
              <li className="flex items-center gap-2">
                <span>+962 12 345 6789</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>© 2025 OFQAI. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
