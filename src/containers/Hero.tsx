import { motion } from 'framer-motion';
import { Button, Wrapper } from '../components';
import useWindowWidth from '../hooks/use-window-width';
import { getBreakpointsWidth } from '../utils/helper';
import { heroSection } from '../utils/portfolio';
import { slideUp } from '../animations';

const Hero = () => {
  const { cta, subtitle, title, tagline, description, specialText } =
    heroSection;

  const windowWidth = useWindowWidth();
  const md = getBreakpointsWidth('md');
  const DEFAULT_ANIMATION_DELAY = windowWidth <= md ? 0.9 : 1.7;

  const getAnimationDelay = (i: number, increment = 0.15) =>
    DEFAULT_ANIMATION_DELAY + increment * i;

   const handleButtonClick = () => {
    if (cta) {
      const link = document.createElement('a');
      link.href = cta.url;
      link.setAttribute('download', ''); // Set the download attribute to trigger download
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <Wrapper
      id="hero"
      className="min-h-screen h-full flex flex-col justify-center gap-6 xs:gap-7 mt-12 xs:mt-0"
    >
      <motion.p
        variants={slideUp({ delay: getAnimationDelay(0) })}
        initial="hidden"
        animate="show"
        className="text-sm md:text-base text-accent font-mono"
      >
        {subtitle}
      </motion.p>

      <div className="text-4xl md:text-7xl font-bold tracking-tighter max-w-5xl">
        <motion.h1
          variants={slideUp({ delay: getAnimationDelay(1) })}
          initial="hidden"
          animate="show"
          className="text-slate-900 dark:text-slate-200 capitalize mb-2 leading-[1.1]"
        >
          {title}
        </motion.h1>
        <motion.h1
          variants={slideUp({ delay: getAnimationDelay(2) })}
          initial="hidden"
          animate="show"
          className="leading-[1.2]"
        >
          {tagline}
        </motion.h1>
      </div>

      <motion.p
        variants={slideUp({ delay: getAnimationDelay(3) })}
        initial="hidden"
        animate="show"
        className="max-w-xl text-base md:text-lg"
      >
        {description}
      </motion.p>

      <motion.p
        variants={slideUp({ delay: getAnimationDelay(4) })}
        initial="hidden"
        animate="show"
        className="text-xs md:text-sm font-mono text-accent"
      >
        {specialText}
      </motion.p>

      {cta && (
        <div
          style={{ display: 'inline-block' }}
          className={`mt-3 xs:mt-5 md:mt-8 ${
            cta.hideInDesktop ? 'md:hidden' : ''
          }`}
          onClick={handleButtonClick}
        >
        <Button
          size="lg"
          type="link"
          variants={slideUp({ delay: getAnimationDelay(5) })}
          initial="hidden"
          animate="show"
          href={cta?.url ?? '#'}
          className={`mt-5 xs:mt-8 md:mt-10 ${
            cta.hideInDesktop ? 'md:hidden' : ''
          }`}
          sameTab={cta?.sameTab}
          
        >
          {cta.title}
        </Button>
      </div>
      )}
    </Wrapper>
  );
};

export default Hero;
