
import { Stats } from './../components/Stats';
import { useEffect } from 'react';

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="pt-20">
      <Stats />
    </main>
  );
}
