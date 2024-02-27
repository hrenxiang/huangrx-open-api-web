import React, { useEffect } from 'react';

const useIntersectionObserver = (ref: React.RefObject<HTMLElement>, className: string, selector?: string) => {
  useEffect(() => {
    const currentSectionRef = ref.current;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        if (selector) {
          currentSectionRef?.querySelector(selector)?.classList.add(className);
        } else {
          currentSectionRef?.classList.add(className);
        }
      } else {
        if (selector) {
          currentSectionRef?.querySelector(selector)?.classList.remove(className);
        } else {
          currentSectionRef?.classList.remove(className);
        }
      }
    });

    if (currentSectionRef) {
      observer.observe(currentSectionRef);
    }

    return () => {
      if (currentSectionRef) {
        observer.unobserve(currentSectionRef);
      }
    };
  }, [ref, className, selector]);
};

export default useIntersectionObserver;
