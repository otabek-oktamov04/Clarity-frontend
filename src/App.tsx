"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";

export default function Component() {
  const [timeLeft, setTimeLeft] = useState("");
  const [percentage, setPercentage] = useState(100);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const midnight = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate() + 1
      );
      const diff = midnight.getTime() - now.getTime();

      const totalSecondsInDay = 24 * 60 * 60;
      const secondsLeft = Math.floor(diff / 1000);
      const newPercentage = (secondsLeft / totalSecondsInDay) * 100;

      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      const formattedTime = `${hours.toString().padStart(2, "0")}:${minutes
        .toString()
        .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

      setTimeLeft(formattedTime);
      setPercentage(newPercentage);
    }, 1000);

    return () => clearInterval(timer);
  }, []); // Use an empty dependency array to run only once

  // useEffect to update document title when timeLeft changes
  useEffect(() => {
    const title = document.querySelector("#title");
    if (title) {
      title.textContent = timeLeft;
    }
  }, [timeLeft]); // Only runs when timeLeft updates

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <Card className="w-full max-w-md mx-4 bg-black border-none">
        <CardContent>
          <div className="relative w-64 h-64 mx-auto">
            <svg className="w-full h-full" viewBox="0 0 100 100">
              <circle
                cx="50"
                cy="50"
                r="45"
                fill="none"
                stroke="#333"
                strokeWidth="10"
              />
              <circle
                cx="50"
                cy="50"
                r="45"
                fill="none"
                stroke="white"
                strokeWidth="10"
                strokeDasharray={`${2 * Math.PI * 45}`}
                strokeDashoffset={`${
                  2 * Math.PI * 45 * (1 - percentage / 100)
                }`}
                transform="rotate(-90 50 50)"
              />
            </svg>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
              <div className="text-4xl font-bold text-white">{timeLeft}</div>
              <div className="text-sm text-gray-400">Until Next Day</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
