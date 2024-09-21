"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "How does your machine learning system detect fraud?",
    answer:
      "Our system uses advanced machine learning algorithms to analyze transaction data and identify patterns associated with fraudulent activity. It constantly learns and adapts to new behaviors, making it highly effective at flagging anomalies in real time.",
  },
  {
    question: "How does your solution reduce false positives?",
    answer:
      "We continuously train our models with vast amounts of data, enabling them to distinguish between legitimate and suspicious transactions more accurately. Additionally, the system uses contextual data to make more informed decisions, reducing false positives and ensuring a smooth customer experience.",
  },

  {
    question: "How does your system handle new types of fraud?",
    answer:
      "Our machine learning models are designed to evolve over time. As new fraud patterns emerge, the system learns and adapts by incorporating this new data, ensuring that you are always protected against the latest threats.",
  },

  {
    question: "How do you ensure the security of sensitive data?",
    answer:
      "We follow industry best practices for data security, including encryption, data anonymization, and strict access controls. Our platform complies with regulations such as PCI-DSS and GDPR to ensure the highest level of security and privacy.",
  },
  {
    question: "Can your system integrate with my current platform?",
    answer:
      "Yes, our solution is designed to integrate seamlessly with existing systems through APIs. Whether you’re using a custom platform or off-the-shelf payment gateways, we ensure compatibility and ease of integration.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16  text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <Card
              key={index}
              className={`bg-gray-800 text-white border-gray-700 overflow-hidden transition-all duration-300 ${
                openIndex === index ? "ring-2 ring-blue-500" : ""
              }`}
            >
              <CardHeader
                className="cursor-pointer"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <CardTitle className="flex justify-between items-center text-lg">
                  {faq.question}
                  {openIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-blue-500" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-blue-500" />
                  )}
                </CardTitle>
              </CardHeader>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <CardContent className="pt-0">
                      <p className="text-gray-300">{faq.answer}</p>
                    </CardContent>
                  </motion.div>
                )}
              </AnimatePresence>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
