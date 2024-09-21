import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, BarChart2, Eye, Shield, Zap, Lock } from "lucide-react";
import { Card, CardContent } from "../ui/card";

export default function Hero() {
  const [email, setEmail] = useState("");
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const particles: { x: number; y: number; vx: number; vy: number }[] = [];
    for (let i = 0; i < 100; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
      });
    }

    function animate() {
      if (ctx && canvas) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "rgba(59, 130, 246, 0.5)";
        ctx.strokeStyle = "rgba(59, 130, 246, 0.8)";

        particles.forEach((p, i) => {
          p.x += p.vx;
          p.y += p.vy;

          if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
          if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

          ctx.beginPath();
          ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
          ctx.fill();

          for (let j = i + 1; j < particles.length; j++) {
            const p2 = particles[j];
            const dx = p.x - p2.x;
            const dy = p.y - p2.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < 100) {
              ctx.beginPath();
              ctx.moveTo(p.x, p.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.stroke();
            }
          }
        });
      }
      requestAnimationFrame(animate);
    }

    animate();
  }, []);

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const features = [
    {
      icon: <Eye className="h-6 w-6" />,
      title: "Real-time Monitoring",
      description: "Continuously analyze transactions for suspicious activity",
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Instant Alerts",
      description: "Receive immediate notifications on potential fraud cases",
    },
    {
      icon: <BarChart2 className="h-6 w-6" />,
      title: "Advanced Analytics",
      description: "Gain insights with comprehensive fraud trend analysis",
    },
    {
      icon: <Lock className="h-6 w-6" />,
      title: "Secure & Compliant",
      description: "Meet industry standards for data protection and privacy",
    },
  ];

  return (
    <section className="min-h-screen bg-gray-900 text-white  px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      <div className="mx-auto  items-center justify-between relative z-10">
        <header className="container mx-auto px-4 py-8 z-10">
          <nav className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Shield className="h-8 w-8 text-blue-500" />
              <span className="text-2xl font-bold">Clarity</span>
            </div>
            <div className="space-x-4">
              <Button variant="ghost" onClick={() => handleScroll("features")}>
                Features
              </Button>
              <Button variant="ghost" onClick={() => handleScroll("contact")}>
                Contact
              </Button>
              <Button className="!bg-blue-500 text-white">Get Started</Button>
            </div>
          </nav>
        </header>
        <div className="justify-between mx-28 gap-20">
          <div className="flex items-center justify-between">
            <div className=" w-1/2">
              <motion.h1
                className="text-5xl font-bold mb-4"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Protect Your Transactions from Fraud
              </motion.h1>
              <motion.p
                className="text-xl mb-8"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Advanced AI-Powered Fraud Detection to Secure Your Transactions.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-96 mb-6  h-12 text-gray-900"
                />
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLScbJbcGnt1-wFQ9hVh58GuAPSbRpLyq_kISZ92CFNOjziStSA/viewform?usp=sf_link"
                  target="_blank"
                >
                  <Button className="h-12 bg-blue-500 text-white  text-md w-96">
                    Get Demo
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </motion.div>
            </div>
            <img src="shield.png" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-gray-800 border-gray-700">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="bg-blue-500 text-white p-2 rounded-full">
                        {feature.icon}
                      </div>
                      <h3 className="text-lg font-semibold text-white">
                        {feature.title}
                      </h3>
                    </div>
                    <p className="text-gray-400">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
