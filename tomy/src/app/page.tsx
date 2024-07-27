"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export default function Home() {
  const [showButton, setShowButton] = useState(false);
  const [showAnnouncement, setShowAnnouncement] = useState(false);

  useEffect(() => {
    // Step 1: Fade in the button (0-1 seconds)
    const fadeInTimer = setTimeout(() => {
      setShowButton(true);
    }, 100); // Short delay to ensure CSS transition applies

    // Step 2: Keep the button visible (1-4 seconds)
    const fadeOutTimer = setTimeout(() => {
      setShowButton(false);
    }, 4000); // Wait 4 seconds before starting to fade out

    // Step 3: Show the announcement (6-7 seconds)
    const showAnnouncementTimer = setTimeout(() => {
      setShowAnnouncement(true);
    }, 6000); // Wait 6 seconds (5 seconds for button + 1 second idle)

    return () => {
      clearTimeout(fadeInTimer);
      clearTimeout(fadeOutTimer);
      clearTimeout(showAnnouncementTimer);
    };
  }, []);

  return (
    <div className="relative w-screen h-screen bg-cover bg-[url('/images/bg.jpeg')]">
      <div className="flex flex-col justify-center items-center h-full w-full">
        <AnimatePresence>
          {showButton && (
            <motion.a
              href="/about"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              key="button"
            >
              <Image
                src="/images/button.png"
                alt="Button Image"
                width={610}
                height={150}
              />
            </motion.a>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {showAnnouncement && (
            <motion.div
              className="w-[588px] h-[88px] flex justify-center items-center bg-slate-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              key="announcement"
            >
              <div className="bg-black text-white p-2 rounded-lg h-full w-full text-6xl flex justify-center items-center">
                <p>ANNONCEMENT</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <a
          href="/about"
          className="absolute bottom-10 right-10 bg-black text-white p-2 rounded"
        >
          Skip Intro
        </a>
      </div>
    </div>
  );
}
