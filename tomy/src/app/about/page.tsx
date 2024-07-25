// src/app/about.tsx
import React from 'react';
import Layout from '../layout';

const About = () => {
  return (
    <Layout>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">À propos</h1>
        <p>Bienvenue sur la page À propos.</p>
      </div>
    </Layout>
  );
};

export default About;
