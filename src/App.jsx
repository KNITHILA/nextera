// src/App.jsx

import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const location = useLocation();

  // Spotlight effect
  useEffect(() => {
    const spotlight = document.querySelector('.spotlight');
    const handleMouseMove = (e) => {
      requestAnimationFrame(() => {
        spotlight.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Reveal on scroll effect, optimized to re-run on page navigation
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => observer.observe(el));
    
    return () => revealElements.forEach(el => observer.unobserve(el));
  }, [location.pathname]); // This dependency makes the effect re-run when the URL changes

  return (
    <>
      <div className="spotlight" aria-hidden="true"></div>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;