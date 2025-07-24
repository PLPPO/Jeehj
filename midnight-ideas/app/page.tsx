import Header from './components/Header';
import Intro from './components/Intro';
import About from './components/About';
import Socials from './components/Socials';
import Contact from './components/Contact';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Intro />
        <About />
        <Socials />
        <Contact />
      </main>
    </>
  );
}
