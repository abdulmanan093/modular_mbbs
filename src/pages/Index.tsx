import { motion } from "framer-motion";
import {
  BookOpen,
  FileText,
  Smartphone,
  Shield,
  Download,
  FolderOpen,
  Zap,
  Star,
  Quote,
  MessageCircle,
  AppWindow,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import logo from "@/assets/logo-icon.png";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6 },
  }),
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

const features = [
  {
    icon: BookOpen,
    title: "Structured Curriculum",
    desc: "Notes organized by year → block → subject → chapter for easy navigation.",
  },
  {
    icon: FileText,
    title: "High Quality PDFs",
    desc: "Clean, well-prepared notes designed for exam preparation.",
  },
  {
    icon: Smartphone,
    title: "Fast Mobile Access",
    desc: "Access notes instantly on your phone through the mobile app.",
  },
  {
    icon: Shield,
    title: "Secure Access",
    desc: "Only authorized students can access the notes securely.",
  },
];

const steps = [
  {
    icon: Download,
    title: "Download the App",
    desc: "Get the Modular MBBS app on your Android phone.",
  },
  {
    icon: AppWindow,
    title: "Browse All Content",
    desc: "Explore notes for all 5 MBBS years, blocks, subjects & chapters.",
  },
  {
    icon: FolderOpen,
    title: "Open & Study Notes",
    desc: "View high-quality PDFs instantly, anytime, anywhere.",
  },
  {
    icon: MessageCircle,
    title: "Contact Us",
    desc: "Need help or have questions? Reach out to us directly.",
  },
];

const testimonials = [
  {
    name: "Ahmed Khan",
    year: "Year 3",
    text: "MedNotes helped me revise entire anatomy before exams quickly. The organized structure saved me hours!",
  },
  {
    name: "Sara Ali",
    year: "Year 2",
    text: "Finally a platform that understands modular MBBS curriculum. All notes in one place!",
  },
  {
    name: "Usman Tariq",
    year: "Year 4",
    text: "The PDF quality is excellent. I use it daily for my clinical rotations preparation.",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-muted via-background to-background" />
        <div className="absolute top-10 right-10 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[100px] animate-pulse-glow" />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-accent/5 blur-[80px]" />
        <div className="absolute top-1/2 left-1/3 w-40 h-40 rounded-full bg-primary/3 blur-[60px]" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, type: "spring" }}
            >
              <img
                src={logo}
                alt="Modular MBBS"
                className="h-20 w-20 mx-auto object-contain mb-4 logo-glow"
              />
            </motion.div>
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-foreground glow-text"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Your Complete <span className="gradient-text">MBBS Notes</span>{" "}
              Library
            </motion.h1>
            <motion.p
              className="text-lg text-muted-foreground max-w-xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.6 }}
            >
              Access organized medical notes for every MBBS year, subject, and
              chapter in one place. Study smarter, not harder.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <Button
                size="lg"
                className="gradient-primary border-0 text-base px-8 shadow-lg glow-teal gap-2"
                onClick={() => window.location.href = "https://github.com/abdulmanan093/modular_mbbs/releases/download/v1.0.0/modular_mbbs.apk"}
              >
                <Download className="h-5 w-5" /> Download App
              </Button>
              <a href="#contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-base px-8 gap-2 border-border hover:border-primary/50 hover:bg-primary/5"
                >
                  <MessageCircle className="h-4 w-4" /> Contact Us
                </Button>
              </a>
            </motion.div>

            <motion.div
              className="pt-6 text-sm text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <a
                href="https://wa.me/923106078374"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 hover:text-primary transition-colors"
                aria-label="WhatsApp contact +923106078374"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp: +923106078374
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-foreground"
            >
              Why Students Love <span className="gradient-text">MedNotes</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-3 text-muted-foreground max-w-lg mx-auto"
            >
              Everything you need to ace your exams, organized the way your
              curriculum is structured.
            </motion.p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="group bg-card rounded-xl p-6 border border-border hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
              >
                <div className="h-12 w-12 rounded-lg gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform glow-teal">
                  <f.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">
                  {f.title}
                </h3>
                <p className="text-sm text-muted-foreground">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-foreground"
            >
              How It <span className="gradient-text">Works</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-3 text-muted-foreground"
            >
              Get started in 4 simple steps
            </motion.p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {steps.map((s, i) => (
              <motion.div
                key={s.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={scaleIn}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                className="text-center relative"
              >
                <div className="h-16 w-16 rounded-full gradient-primary flex items-center justify-center mx-auto mb-4 shadow-lg glow-teal">
                  <s.icon className="h-7 w-7 text-primary-foreground" />
                </div>
                <div
                  className="absolute top-7 left-1/2 w-full h-0.5 bg-border hidden lg:block -z-10"
                  style={{ display: i === 3 ? "none" : undefined }}
                />
                <span className="text-xs font-bold text-primary uppercase tracking-wider">
                  Step {i + 1}
                </span>
                <h3 className="font-semibold text-foreground mt-1">
                  {s.title}
                </h3>
                <p className="text-sm text-muted-foreground mt-1">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum Preview */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-foreground"
            >
              Explore the <span className="gradient-text">Curriculum</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-3 text-muted-foreground"
            >
              Structured content for all 5 MBBS years
            </motion.p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 max-w-3xl mx-auto">
            {[1, 2, 3, 4, 5].map((year, i) => (
              <motion.div
                key={year}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={scaleIn}
                whileHover={{ scale: 1.08, y: -6 }}
                className="bg-card rounded-xl border border-border p-6 text-center cursor-pointer hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10 transition-all"
              >
                <div className="text-3xl font-extrabold gradient-text">
                  {year}
                </div>
                <div className="text-sm font-medium text-foreground mt-1">
                  Year {year}
                </div>
                <div className="text-xs text-muted-foreground mt-1">
                  {year === 1
                    ? "Foundation"
                    : year === 2
                      ? "Pre-Clinical"
                      : year === 3
                        ? "Para-Clinical"
                        : year === 4
                          ? "Clinical I"
                          : "Clinical II"}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-foreground"
            >
              What Students <span className="gradient-text">Say</span>
            </motion.h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                whileHover={{ y: -4 }}
                className="bg-card rounded-xl border border-border p-6 relative hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
              >
                <Quote className="h-8 w-8 text-primary/20 absolute top-4 right-4" />
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 rounded-full gradient-primary flex items-center justify-center text-primary-foreground font-bold text-sm">
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground text-sm">
                      {t.name}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {t.year}
                    </div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground italic">
                  "{t.text}"
                </p>
                <div className="flex gap-0.5 mt-3">
                  {[...Array(5)].map((_, j) => (
                    <Star
                      key={j}
                      className="h-3.5 w-3.5 text-yellow-500 fill-yellow-500"
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="gradient-primary rounded-2xl p-10 md:p-16 text-center text-primary-foreground relative overflow-hidden glow-teal"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,hsl(260_60%_60%/0.3),transparent)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,hsl(172_66%_50%/0.2),transparent)]" />
            <div className="relative z-10 space-y-5">
              <h2 className="text-3xl md:text-4xl font-bold">
                Start Studying Smarter Today
              </h2>
              <p className="opacity-90 max-w-md mx-auto">
                Download the app and access organized MBBS notes for all years,
                blocks, subjects and chapters.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <Button
                  size="lg"
                  className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 px-8 gap-2"
                  onClick={() => window.location.href = "https://github.com/abdulmanan093/modular_mbbs/releases/download/v1.0.0/modular_mbbs.apk"}
                >
                  <Download className="h-4 w-4" /> Download App
                </Button>
                <a href="#contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground px-8 gap-2"
                  >
                    <MessageCircle className="h-4 w-4" /> Contact Us
                  </Button>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
