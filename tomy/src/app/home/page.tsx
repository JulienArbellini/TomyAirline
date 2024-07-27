"use client";

import React, { useState } from 'react';

const items = [
  'AUTOPLAY', 'SAFETY', 'MOVIE', 'TOMY ISLAND',
  'WEBCAM', 'MUSIC', 'METEO', 'COCKPIT VIEW',
  'JOURNEY MAP', 'WINDOW VIEW', 'RELAXATION', 'VIDEO GAME',
  'COMIC', 'SHOPPING', 'CONNECT', 'ABOUT'
];

const Home = () => {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const handleItemClick = (item: string) => {
    setSelectedItem(item);
  };

  const handleCloseModal = () => {
    setSelectedItem(null);
  };

  return (
    <div className="h-screen bg-cover bg-[url('/images/bg.jpeg')] p-5 flex justify-center items-center">
      <div className="grid grid-cols-4 gap-4">
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-black text-white flex justify-center items-center w-32 h-32 cursor-pointer"
            onClick={() => handleItemClick(item)}
          >
            {item}
          </div>
        ))}
      </div>
      {selectedItem && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 relative w-3/4 h-3/4">
            <button className="absolute top-4 right-4 text-black" onClick={handleCloseModal}>X</button>
            <div className="flex">
              <div className="w-1/2 bg-blue-500 h-full relative">
                <div className="absolute top-4 left-4">
                  <button className="text-white text-2xl font-bold" onClick={handleCloseModal}>X</button>
                </div>
                <div className="absolute bottom-4 left-4 bg-black p-2">
                  <svg width="24" height="24" viewBox="0 0 24 24">
                    <polygon points="5,3 19,12 5,21" fill="white" />
                  </svg>
                </div>
              </div>
              <div className="w-1/2 p-4">
                <h2 className="text-2xl font-bold">{selectedItem}</h2>
                <p>FILM DESCRIPTION</p>
              </div>
            </div>
            <div className="absolute bottom-4 right-4 flex space-x-4">
              <button className="text-black">&larr;</button>
              <button className="text-black">&rarr;</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
