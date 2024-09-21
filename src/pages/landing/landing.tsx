import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import {
  CheckCircle,
  DollarSign,
  Percent,
  Zap as ZapIcon,
  Cpu,
  Database,
  ShieldCheck,
  ChevronRight,
} from "lucide-react";
import ContactUs from "@/components/contact-us/contact-us";
import Hero from "@/components/hero/hero";
import FAQSection from "@/components/faq/faq";

export default function LandingPage() {
  const [activeReason, setActiveReason] = useState(0);
  const [activeStep, setActiveStep] = useState(1);

  const reasons = [
    {
      icon: <CheckCircle className="h-8 w-8 text-green-500" />,
      title: "Unmatched Accuracy",
      description: "99.9% accuracy in fraud detection",
      stat: "99.9%",
    },
    {
      icon: <ZapIcon className="h-8 w-8 text-yellow-500" />,
      title: "Reduced False Positives",
      description: "Reduce false positives by up to 80%",
      stat: "80%",
    },
    {
      icon: <DollarSign className="h-8 w-8 text-blue-500" />,
      title: "Significant Savings",
      description: "Save millions in potential fraud losses",
      stat: "$1M+",
    },
    {
      icon: <Percent className="h-8 w-8 text-purple-500" />,
      title: "Seamless Integration",
      description: "Integrates with 100% of banking systems",
      stat: "100%",
    },
  ];

  const steps = [
    {
      icon: <Database className="h-12 w-12 text-blue-500" />,
      title: "Transaction Data",
      description:
        "Securely collect and process financial transaction data in real-time.",
      details: [
        "Encrypt sensitive information",
        "Aggregate data from multiple sources",
        "Normalize data for consistent analysis",
      ],
    },
    {
      icon: <Cpu className="h-12 w-12 text-green-500" />,
      title: "AI Analysis",
      description:
        "Apply advanced machine learning algorithms to detect patterns and anomalies.",
      details: [
        "Use neural networks for pattern recognition",
        "Implement ensemble methods for robust predictions",
        "Continuously update models with new data",
      ],
    },
    {
      icon: <ShieldCheck className="h-12 w-12 text-yellow-500" />,
      title: "Fraud Detection",
      description:
        "Identify potential fraud cases and trigger appropriate actions.",
      details: [
        "Generate real-time fraud alerts",
        "Provide risk scores for each transaction",
        "Integrate with existing security systems",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <main className="container mx-auto">
        <Hero />
        <section className="py-16  px-28">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-white">
              How Clarity Works
            </h2>
            <div className="flex flex-col lg:flex-row justify-center items-center lg:items-center space-y-8 lg:space-y-0 lg:space-x-4">
              {steps.map((step, index) => (
                <>
                  <motion.div
                    key={index}
                    className="w-full lg:w-1/3 "
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                  >
                    <Card
                      className={`h-full cursor-pointer transition-all duration-300 ${
                        activeStep === index
                          ? "bg-gray-800 border-blue-500"
                          : "bg-gray-800 border-gray-700"
                      }`}
                    >
                      <CardContent className="p-6 flex flex-col h-full">
                        <div className="flex items-center mb-4">
                          {step.icon}
                          <h3 className="text-xl font-semibold flex items-center justify-between w-full ml-4 text-white">
                            {step.title}
                          </h3>
                        </div>
                        <p className="text-gray-300 mb-4 flex-grow">
                          {step.description}
                        </p>

                        <motion.ul
                          className="text-sm text-gray-400 list-disc list-inside"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.3 }}
                        >
                          {step.details.map((detail, detailIndex) => (
                            <li key={detailIndex} className="mb-2">
                              {detail}
                            </li>
                          ))}
                        </motion.ul>
                      </CardContent>
                    </Card>
                  </motion.div>
                  {index !== 2 && <ChevronRight />}
                </>
              ))}
            </div>
            <div className="flex justify-center mt-8">
              {steps.map((_, index) => (
                <motion.div
                  key={index}
                  className={`w-3 h-3 rounded-full mx-1 ${
                    activeStep === index ? "bg-blue-500" : "bg-gray-600"
                  }`}
                  animate={{ scale: activeStep === index ? 1.2 : 1 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => setActiveStep(index)}
                />
              ))}
            </div>
          </div>
        </section>

        <div id="features" className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Why Choose Clarity?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-800 rounded-lg p-8">
              {reasons.map((reason, index) => (
                <motion.div
                  key={index}
                  className={`flex items-center space-x-4 mb-4 p-4 rounded-lg cursor-pointer transition-colors ${
                    activeReason === index ? "bg-blue-500" : "hover:bg-gray-700"
                  }`}
                  onHoverStart={() => setActiveReason(index)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {reason.icon}
                  <div>
                    <h3 className="font-semibold">{reason.title}</h3>
                    <p className="text-sm text-gray-300">
                      {reason.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="bg-gray-800 rounded-lg p-8 flex items-center justify-center">
              <motion.div
                key={activeReason}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <div className="text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-500">
                  {reasons[activeReason].stat}
                </div>
                <p className="text-xl">{reasons[activeReason].description}</p>
              </motion.div>
            </div>
          </div>
        </div>
      </main>
      <FAQSection />
      <div className="contact">
        <ContactUs />
      </div>

      <footer className="bg-gray-900 py-8 ">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>&copy; 2024 Clarity. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
