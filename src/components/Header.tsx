import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-primary">
            OFQAI
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-foreground hover:text-primary transition-colors">
              الرئيسية
            </Link>
            <Link to="/subscriptions" className="text-foreground hover:text-primary transition-colors">
              الاشتراكات
            </Link>
            <Link to="/how-it-works" className="text-foreground hover:text-primary transition-colors">
              كيف يعمل
            </Link>
            <Link to="/templates" className="text-foreground hover:text-primary transition-colors">
              القوالب
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" className="hidden md:inline-flex">
              تسجيل الدخول
            </Button>
            <Button size="sm">
              تسجيل
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
