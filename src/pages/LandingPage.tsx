import { useState, useRef, useEffect } from 'react';
import { Navbar, Hero, About, Services, Gallery, Testimonials, Contact, Footer } from '../sections';
import IntroScreen from '../components/IntroScreen';

const FADE_START_S  = 72;   // seconds into track when fade begins
const FADE_DURATION = 6000; // ms

const LandingPage = () => {
  const audioRef       = useRef<HTMLAudioElement>(null);
  const fadingRef      = useRef(false);
  const [playing,       setPlaying]       = useState(false);
  const [currentTime,   setCurrentTime]   = useState(0);
  const [duration,      setDuration]      = useState(0);
  const [introVisible,  setIntroVisible]  = useState(true);
  const [introComplete, setIntroComplete] = useState(false);

  const startFadeOut = () => {
    const a = audioRef.current;
    if (!a) return;
    const startVol = a.volume;
    const t0 = Date.now();
    const tick = () => {
      const progress = Math.min((Date.now() - t0) / FADE_DURATION, 1);
      a.volume = startVol * (1 - progress);
      if (progress < 1) {
        requestAnimationFrame(tick);
      } else {
        a.pause();
        a.volume = 1;
        setPlaying(false);
      }
    };
    requestAnimationFrame(tick);
  };

  const handleTimeUpdate = () => {
    const time = audioRef.current?.currentTime ?? 0;
    setCurrentTime(time);
    if (time >= FADE_START_S && !fadingRef.current) {
      fadingRef.current = true;
      startFadeOut();
    }
  };

  useEffect(() => {
    document.body.style.overflow = introVisible ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [introVisible]);

  const togglePlay = () => {
    const a = audioRef.current;
    if (!a) return;
    if (playing) { a.pause(); setPlaying(false); }
    else { a.play().then(() => setPlaying(true)).catch(() => {}); }
  };

  return (
    <>
      {/* Single audio element shared between IntroScreen and Navbar */}
      <audio
        ref={audioRef}
        src="/music/track.mp3"
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={() => setDuration(audioRef.current?.duration ?? 0)}
        onEnded={() => setPlaying(false)}
        preload="auto"
      />

      {introVisible && (
        <IntroScreen
          audioRef={audioRef}
          onPlay={() => setPlaying(true)}
          onReveal={() => setIntroComplete(true)}
          onDone={() => setIntroVisible(false)}
        />
      )}

      <Navbar
        audioRef={audioRef}
        playing={playing}
        onToggle={togglePlay}
        currentTime={currentTime}
        duration={duration}
      />

      <main>
        <Hero introComplete={introComplete} />
        <About />
        <Services />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default LandingPage;
