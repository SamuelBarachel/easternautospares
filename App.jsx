import React from 'react';

// Simplified Component Sections
const Header = () => (
  <header style={styles.header}>
    <div style={styles.container}>
      <h1 style={styles.logo}>Eastern Autoparts</h1>
      <nav>
        <ul style={styles.navList}>
          <li><a href="#parts" style={styles.navLink}>Our Parts</a></li>
          <li><a href="#about" style={styles.navLink}>About</a></li>
          <li><a href="#contact" style={styles.navLink}>Contact</a></li>
        </ul>
      </nav>
    </div>
  </header>
);

const Hero = () => (
  <section style={styles.hero}>
    <h2>Affordable & Reliable Auto Parts</h2>
    <p>Specializing in Japanese imported components for Toyota, Honda, Mazda, and Nissan.</p>
    <a href="https://wa.me/16038170479" style={styles.ctaButton}>Order via WhatsApp</a>
  </section>
);

const PartsSection = () => {
  const models = ["Toyota Corolla", "Honda Fit", "Mazda Demio", "Nissan AD Van", "Toyota Wish", "Toyota Hiace"];
  return (
    <section id="parts" style={styles.container}>
      <h3 style={styles.sectionTitle}>Parts for Major Models</h3>
      <div style={styles.grid}>
        {models.map(model => (
          <div key={model} style={styles.card}>{model}</div>
        ))}
      </div>
    </section>
  );
};

const Footer = () => (
  <footer id="contact" style={styles.footer}>
    <p><strong>Samuel Takwirira, Director</strong></p>
    <p>Chipinge, Manicaland Province, Zimbabwe</p>
    <p>WhatsApp: +16038170479 | Email: info@easternautoparts.com</p>
    <p style={{marginTop: '20px', fontSize: '0.8rem'}}>© 2026 Eastern Autoparts. All Rights Reserved.</p>
  </footer>
);

export default function App() {
  return (
    <div style={styles.body}>
      <Header />
      <Hero />
      <PartsSection />
      <Footer />
    </div>
  );
}

// Inline Styles for simplicity
const styles = {
  body: { fontFamily: 'Arial, sans-serif', color: '#333', margin: 0, lineHeight: '1.6' },
  container: { maxWidth: '1100px', margin: '0 auto', padding: '0 20px' },
  header: { background: '#fff', borderBottom: '2px solid #eee', padding: '15px 0', position: 'sticky', top: 0, zIndex: 100 },
  logo: { color: '#d32f2f', margin: 0, fontSize: '1.5rem' },
  navList: { listStyle: 'none', display: 'flex', gap: '20px', padding: 0 },
  navLink: { textDecoration: 'none', color: '#333', fontWeight: 'bold' },
  hero: { background: '#f4f4f4', padding: '60px 20px', textAlign: 'center' },
  ctaButton: { background: '#25D366', color: '#fff', padding: '12px 25px', textDecoration: 'none', borderRadius: '5px', display: 'inline-block', marginTop: '15px' },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px', margin: '40px 0' },
  card: { background: '#fff', padding: '20px', border: '1px solid #ddd', textAlign: 'center', borderRadius: '8px', fontWeight: 'bold' },
  sectionTitle: { textAlign: 'center', fontSize: '2rem' },
  footer: { background: '#333', color: '#fff', padding: '40px 20px', textAlign: 'center' }
};
