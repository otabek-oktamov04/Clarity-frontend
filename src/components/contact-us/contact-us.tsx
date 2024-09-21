import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Shield, Lock, DollarSign, Users } from "lucide-react";

const benefits = [
  { icon: <Shield className="h-6 w-6" />, text: "Advanced Fraud Detection" },
  { icon: <Lock className="h-6 w-6" />, text: "Enhanced Security Measures" },
  {
    icon: <DollarSign className="h-6 w-6" />,
    text: "Protect Financial Assets",
  },
  { icon: <Users className="h-6 w-6" />, text: "Build Customer Trust" },
];

export default function ContactUs() {
  const [email, setEmail] = useState("");
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="p-16 bg-gradient-to-br  text-white overflow-hidden">
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Ready to Secure Your Bank?
          </h2>
          <p className="text-xl md:text-2xl text-gray-300">
            Get started with Clarity today and protect your customers' assets
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row justify-center items-center mb-12 space-y-4 md:space-y-0 md:space-x-4">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full md:w-64 bg-white text-gray-900"
          />
          <a
            target="_blank"
            href="https://docs.google.com/forms/d/e/1FAIpQLScbJbcGnt1-wFQ9hVh58GuAPSbRpLyq_kISZ92CFNOjziStSA/viewform?usp=sf_link"
          >
            <Button
              size="lg"
              className="w-full md:w-auto bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold transition-all duration-300 transform hover:scale-105"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              Request a Demo
              <motion.div
                className="ml-2 inline-block"
                animate={{ x: isHovered ? 5 : 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
              >
                →
              </motion.div>
            </Button>
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800 bg-opacity-50 rounded-lg p-4"
            >
              <div className="flex justify-center mb-2">{benefit.icon}</div>
              <p className="text-sm">{benefit.text}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="absolute top-0 left-0 w-full h-full pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {[...Array(20)].map((_, index) => (
            <motion.div
              key={index}
              className="absolute bg-blue-500 rounded-full opacity-10"
              style={{
                width: Math.random() * 20 + 10,
                height: Math.random() * 20 + 10,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
