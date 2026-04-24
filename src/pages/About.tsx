import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Rocket, Handshake, CheckCircle, Eye, Target } from "lucide-react";
import officeImg from "@/assets/office.png";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
const stagger = { visible: { transition: { staggerChildren: 0.15 } } };

const About = () => {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <motion.div variants={fadeUp} initial="hidden" animate="visible">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">About Us</span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mt-2 mb-4">Our Story</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Born from a passion for technology and a desire to make premium IT solutions accessible to businesses in Nellore and beyond.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <h2 className="text-3xl font-bold text-foreground mb-6">How It All Started</h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                TechMindsIt Solutions was founded in 2026 with a simple mission: deliver world-class IT solutions at startup speed. Based in Nellore, Andhra Pradesh, we're a team of passionate developers, designers, and marketers.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                We believe that every business — whether a local shop or a growing startup — deserves modern, beautiful, and effective digital solutions. That's why we combine cutting-edge technology with personal attention.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "4", label: "Core Services" },
                  { value: "8+", label: "Internship Programs" },
                  { value: "10+", label: "Team Members" },
                  { value: "100%", label: "Dedication" },
                ].map(s => (
                  <div key={s.label} className="bg-background border border-border rounded-2xl p-4 text-center">
                    <div className="text-2xl font-bold text-primary">{s.value}</div>
                    <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <img src={officeImg} alt="Our office" className="rounded-3xl shadow-card w-full object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground">What We Offer</h2>
          </motion.div>
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "💻", title: "Web Development" },
              { icon: "📱", title: "App Development" },
              { icon: "📊", title: "Digital Marketing" },
              { icon: "🛠️", title: "CRM Products" },
            ].map((s, i) => (
              <motion.div key={i} variants={fadeUp} className="bg-card border border-border rounded-2xl p-6 text-center">
                <div className="text-4xl mb-3">{s.icon}</div>
                <h3 className="font-bold text-foreground">{s.title}</h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground">Core Values</h2>
          </motion.div>
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid md:grid-cols-3 gap-6">
            {[
              { icon: <Rocket size={24} />, title: "Innovation", desc: "We embrace new ideas and cutting-edge technology to solve problems." },
              { icon: <Handshake size={24} />, title: "Transparency", desc: "Open communication and honest collaboration with every client." },
              { icon: <CheckCircle size={24} />, title: "Quality First", desc: "No shortcuts — every line of code and pixel is crafted with care." },
            ].map((v, i) => (
              <motion.div key={i} variants={fadeUp} className="bg-background border border-border rounded-2xl p-6 text-center">
                <div className="w-12 h-12 rounded-xl gradient-primary text-primary-foreground flex items-center justify-center mx-auto mb-4">{v.icon}</div>
                <h3 className="font-bold text-foreground mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground">{v.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="border border-primary-foreground/10 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <Target size={24} className="text-primary" />
                <h3 className="text-xl font-bold text-primary-foreground">Our Mission</h3>
              </div>
              <p className="text-primary-foreground/70 leading-relaxed">
                To empower businesses with affordable, modern, and effective IT solutions — from web and mobile apps to CRM products and digital marketing — while nurturing the next generation of tech talent through our internship programs.
              </p>
            </motion.div>
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="border border-primary-foreground/10 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <Eye size={24} className="text-primary" />
                <h3 className="text-xl font-bold text-primary-foreground">Our Vision</h3>
              </div>
              <p className="text-primary-foreground/70 leading-relaxed">
                To become the most trusted IT partner for SMBs and startups in Andhra Pradesh, known for innovation, quality, and our commitment to building a thriving tech community in Nellore.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Let's Work Together</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 gradient-primary text-primary-foreground rounded-2xl font-semibold hover:opacity-90 transition-opacity">
                Get In Touch <ArrowRight size={18} />
              </Link>
              <Link to="/careers" className="inline-flex items-center gap-2 px-8 py-4 border border-border text-foreground rounded-2xl font-semibold hover:bg-secondary transition-colors">
                View Careers
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
