
import React, { useState } from 'react';
import { useScrollAnimations } from '../hooks/useScrollAnimations';
import { useTextScramble } from '../hooks/useTextScramble';
import { useLazyImages, useImageHoverEffects, useVideoPreview } from '../hooks/useImageEffects';
import { useSmoothScroll } from '../hooks/useSmoothScroll';
import { useServiceHover } from '../hooks/useServiceHover';
import { useHeroVideoHover } from '../hooks/useHeroVideoHover';
import { useTimelineStrips } from '../hooks/useTimelineStrips';
import Header from '../components/Header';

export default function Home() {
  useScrollAnimations();
  useTextScramble();
  useLazyImages();
  useImageHoverEffects();
  useVideoPreview();
  useSmoothScroll();
  useServiceHover();
  useHeroVideoHover();
  useTimelineStrips();

  const [bgVideoSrc, setBgVideoSrc] = useState('/assets/videos/bg_hero.mp4');

  const handleVideoSelect = (videoPath) => {
    setBgVideoSrc(videoPath);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const [activeSlide, setActiveSlide] = useState(0);
  const slides = [
    { src: '/assets/images/thumb01.jpg', title: 'Studio Setup', desc: 'Behind the scenes workspace and lighting' },
    { src: '/assets/images/thumb02.jpg', title: 'Street Portrait', desc: 'High-contrast outdoor model study' },
    { src: '/assets/images/thumb03.jpg', title: 'Neon Moods', desc: 'Cyberpunk inspired color gel portraits' },
    { src: '/assets/images/thumb04.jpg', title: 'Emotive Textures', desc: 'Black and white shadow and line study' },
    { src: '/assets/images/thumb05.jpg', title: 'Still Life Study', desc: 'Classical Dutch Golden Age interpretation' },
    { src: '/assets/images/thumb06.jpg', title: 'Fine Art Portrait', desc: 'Chiaroscuro studio photography' }
  ];

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <>
      
    <img
      width="1920"
      height="1248"
      style={{ position: 'fixed', zIndex: '-1', bottom: '100%', right: '100%', opacity: '0' }}
      src="assets/images/website-image.webp"
      aria-hidden="true"
      alt="Website Image"
      role="Website Image"
    />
      <Header
        links={[
          {
            href: '/#about',
            label: 'ABOUT',
            extraClass: 'a-font-mono',
            dataAnime: true,
            dataNavigation: 'scroll',
            dataTarget: 'about',
          },
          {
            href: '/#works',
            label: 'WORKS',
            extraClass: 'a-font-mono',
            dataAnime: true,
            dataNavigation: 'scroll',
            dataTarget: 'works',
          },
          {
            href: '/#contact',
            label: 'CONTACT',
            extraClass: 'a-font-mono',
            dataAnime: true,
            dataNavigation: 'scroll',
            dataTarget: 'contact',
          },
        ]}
      />

    <div className="a-body-scroll-container">
      <div className="a-body-main-wrap">
        <section
          className="a-hero-section-wrapper a-section-wrapper container-fluid px-0 d-flex flex-column justify-content-between align-items-stretch position-relative"
          data-mouse="hero"
        >
          {/* ── Full-screen background video ── */}
          <div className="a-hero-bg-video-wrapper position-absolute" aria-hidden="true">
            <video
              key={bgVideoSrc}
              className="a-hero-bg-iframe"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
            >
              <source src={bgVideoSrc} type="video/mp4" />
            </video>
            <div className="a-hero-bg-overlay" />
          </div>
          {/* Hidden hover-preview video (keeps existing hover hook working) */}
          <video
            className="position-absolute a-hero-preview-video"
            aria-label="Hero preview video"
            style={{ display: 'none' }}
          ></video>
          <div>
            <h1 className="a-hero-title mb-0 text-center">
              Photographer & Visual Storyteller
            </h1>
            <h2 className="a-desc-sm text-center pt-2 pt-md-0">
              The personal portfolio of Faith ortega, a Ghana based<br />video
              life, culture, and emotion through my lens.
            </h2>
          </div>
          <div className="d-flex flex-column">
            <svg
              className="a-hero-name w-100"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1000 200"
              preserveAspectRatio="xMidYMid meet"
              role="img"
              aria-label="FAITH ORTEGA"
            >
              <text
                x="0"
                y="150"
                fontSize="150"
                textLength="1000"
                lengthAdjust="spacingAndGlyphs"
                dominantBaseline="central"
              >
                FAITH ORTEGA
              </text>
            </svg>
            <div
              className="a-timeline-wrapper position-relative d-flex flex-column"
            >
              <div
                className="d-flex align-items-center justify-content-between w-100 pb-1"
              >
                <p className="a-tag">00:00:00</p>
                <p className="a-tag">00:02:05</p>
              </div>
              <svg
                className="a-timeline-strips"
                width="10"
                height="24"
                viewBox="0 0 10 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              ></svg>
              <div
                className="a-timeline-content-container d-flex align-items-stretch pt-2"
              >
                {/* Timeline thumbnails — user provided photography images */}
                 <div
                  className="d-flex flex-column flex-fill a-timeline-item p-2"
                  data-time="00:21"
                  data-video="01.MP4"
                  data-mouse="link"
                  onClick={() => handleVideoSelect('/assets/videos/01.MP4')}
                >
                  <p className="mb-0 a-tag pb-2">001</p>
                  <video width="250" height="141" className="a-timeline-item-img" src="/assets/videos/01.MP4" autoPlay loop muted playsInline style={{ objectFit: "cover" }} />
                </div>
                <div
                  className="d-flex flex-column flex-fill a-timeline-item p-2"
                  data-time="00:30"
                  data-video="02.MP4"
                  data-mouse="link"
                  onClick={() => handleVideoSelect('/assets/videos/02.MP4')}
                >
                  <p className="mb-0 a-tag pb-2">002</p>
                  <video width="250" height="141" className="a-timeline-item-img" src="/assets/videos/02.MP4" autoPlay loop muted playsInline style={{ objectFit: "cover" }} />
                </div>
                <div
                  className="d-flex flex-column flex-fill a-timeline-item p-2"
                  data-time="00:15"
                  data-video="03.MP4"
                  data-mouse="link"
                  onClick={() => handleVideoSelect('/assets/videos/03.MP4')}
                >
                  <p className="mb-0 a-tag pb-2">003</p>
                  <video width="250" height="141" className="a-timeline-item-img" src="/assets/videos/03.MP4" autoPlay loop muted playsInline style={{ objectFit: "cover" }} />
                </div>
                <div
                  className="d-flex flex-column flex-fill a-timeline-item p-2"
                  data-time="00:16"
                  data-video="04.MP4"
                  data-mouse="link"
                  onClick={() => handleVideoSelect('/assets/videos/04.MP4')}
                >
                  <p className="mb-0 a-tag pb-2">004</p>
                  <video width="250" height="141" className="a-timeline-item-img" src="/assets/videos/04.MP4" autoPlay loop muted playsInline style={{ objectFit: "cover" }} />
                </div>
                <div
                  className="d-flex flex-column flex-fill a-timeline-item p-2"
                  data-time="00:21"
                  data-video="05.MP4"
                  data-mouse="link"
                  onClick={() => handleVideoSelect('/assets/videos/05.MP4')}
                >
                  <p className="mb-0 a-tag pb-2">005</p>
                  <video width="250" height="141" className="a-timeline-item-img" src="/assets/videos/05.MP4" autoPlay loop muted playsInline style={{ objectFit: "cover" }} />
                </div>
                <div
                  className="d-flex flex-column flex-fill a-timeline-item p-2"
                  data-time="00:22"
                  data-video="06.MP4"
                  data-mouse="link"
                  onClick={() => handleVideoSelect('/assets/videos/06.MP4')}
                >
                  <p className="mb-0 a-tag pb-2">006</p>
                  <video width="250" height="141" className="a-timeline-item-img" src="/assets/videos/06.MP4" autoPlay loop muted playsInline style={{ objectFit: "cover" }} />
                </div>
              </div>
              <div
                className="a-timeline-indicator position-absolute h-100 d-flex flex-column align-items-center"
              >
                <div className="a-timeline-indicator-head"></div>
                <div className="a-timeline-indicator-tail flex-fill"></div>
              </div>
            </div>
          </div>
        </section>
        <section
          className="container-fluid px-4 a-about-section-wrapper a-section-wrapper py-3 py-md-6 position-relative"
          data-role="section"
          data-section="about"
          id="about"
        >
          <div className="w-100 a-about-image-wrapper d-flex justify-content-end">
            <img
              width="1696"
              height="1881"
              className="a-about-image"
              src="/assets/images/faith-profile.png"
              alt="Faith ortega"
              style={{ objectFit: 'cover', objectPosition: 'top' }}
            />
          </div>
          <div
            className="a-about-content-wrapper container-fluid px-0 px-sm-4 h-100 d-flex flex-column"
          >
            <div className="flex-fill pt-sm-6">
              <h2
                className="a-tag pt-sm-6"
                data-anime="intersection"
                data-anime-initial="0"
                data-anime-final="1"
                data-anime-style="opacity"
              >
                (About)
              </h2>
              <h3
                className="a-section-title"
                data-anime="intersection"
                data-anime-initial="0"
                data-anime-final="1"
                data-anime-style="opacity"
              >
                I'm a Ghana based photographer and visual storyteller capturing
                visual storytelling.
              </h3>
            </div>
            <div className="flex-fill d-flex flex-column">
              <p
                className="a-desc-lg pt-3 a-about-desc"
                data-anime="intersection"
                data-anime-initial="0"
                data-anime-final="1"
                data-anime-style="opacity"
              >
                I've always been drawn to the art of freezing moments in time —
                the way light falls on a subject, the emotion in a glance, the
                energy of a scene unfolding. Growing up in Ghana, I found
                inspiration in the vibrant colours, rich culture, and raw beauty
                all around me.
                <br /><br />
                My work spans portrait photography, wedding films, commercial
                shoots, and documentary videography. I believe every project
                deserves a distinct visual identity — one that feels intentional,
                emotive, and built to endure.
                <br /><br />
                Based in Accra, Ghana, I work with individuals, brands, and
                organisations across Ghana and West Africa to create imagery that
                tells authentic, compelling stories — one frame at a time.
                <br />
              </p>
            </div>
          </div>
        </section>
        <section
          className="container-fluid px-4 a-works-section-wrapper a-section-wrapper"
          data-role="section"
          data-section="works"
          id="works"
        >
          <h2
            className="pt-6 a-tag"
            data-anime="intersection"
            data-anime-initial="0"
            data-anime-final="1"
            data-anime-style="opacity"
          >
            (Works)
          </h2>
          <div
            className="d-flex align-items-end w-100 justify-content-between gap-3 pb-3"
            data-anime="intersection"
            data-anime-initial="0"
            data-anime-final="1"
            data-anime-style="opacity"
          >
            <h3 className="a-section-title-lg d-none d-sm-block">
              Selected Projects
            </h3>
            <h3 className="a-section-title-lg d-sm-none">Selected<br />Projects</h3>
            <a
              className="pb-3 a-desc a-text-link a-font-mono"
              href="/works"
              data-navigation="page"
              data-target="works"
              >[<span data-anime="scramble" data-mouse="link">ALL WORKS</span
              >]</a
            >
          </div>
          <div className="a-projects-grid d-grid gap-4 h-100 py-4">
            <div className="w-100">
              <div className="a-product-card w-100">
                <div
                  className="w-100 d-flex align-items-end justify-content-between pb-2"
                >
                  <p
                    className="a-desc"
                    data-anime="intersection"
                    data-anime-initial="0"
                    data-anime-final="1"
                    data-anime-style="opacity"
                  >
                    001
                  </p>
                  <p
                    className="a-tag"
                    data-anime="intersection"
                    data-anime-initial="0"
                    data-anime-final="1"
                    data-anime-style="opacity"
                  >
                    00:00:21
                  </p>
                </div>
                <div className="position-relative d-flex a-works-image-wrapper">
                  <svg
                    className="a-work-hover-indicator position-absolute"
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0.5 24.5V0.5H24.5" stroke="black" />
                  </svg>
                  <svg
                    className="a-work-hover-indicator position-absolute"
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0 0.5H24V24.5" stroke="black" />
                  </svg>
                  <svg
                    className="a-work-hover-indicator position-absolute"
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0 24H24V0" stroke="black" />
                  </svg>
                  <svg
                    className="a-work-hover-indicator position-absolute"
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0.5 0V24H24.5" stroke="black" />
                  </svg>
                  <video width="1920" height="1080" className="w-100 a-canvas-image a-selected-works-img" src="/assets/videos/01.MP4" autoPlay loop muted playsInline data-mouse="video" data-video="01.MP4" onClick={() => handleVideoSelect('/assets/videos/01.MP4')} style={{ objectFit: "cover" }} />
                </div>
              </div>
            </div>
            <div className="w-100 d-flex justify-content-center">
              <div className="a-product-card w-60">
                <div
                  className="w-100 d-flex align-items-end justify-content-between pb-2"
                >
                  <p
                    className="a-desc"
                    data-anime="intersection"
                    data-anime-initial="0"
                    data-anime-final="1"
                    data-anime-style="opacity"
                  >
                    002
                  </p>
                  <p
                    className="a-tag"
                    data-anime="intersection"
                    data-anime-initial="0"
                    data-anime-final="1"
                    data-anime-style="opacity"
                  >
                    00:00:30
                  </p>
                </div>
                <div className="position-relative d-flex a-works-image-wrapper">
                  <svg
                    className="a-work-hover-indicator position-absolute"
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0.5 24.5V0.5H24.5" stroke="black" />
                  </svg>
                  <svg
                    className="a-work-hover-indicator position-absolute"
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0 0.5H24V24.5" stroke="black" />
                  </svg>
                  <svg
                    className="a-work-hover-indicator position-absolute"
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0 24H24V0" stroke="black" />
                  </svg>
                  <svg
                    className="a-work-hover-indicator position-absolute"
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0.5 0V24H24.5" stroke="black" />
                  </svg>
                  <video width="1920" height="1080" className="w-100 a-canvas-image a-selected-works-img" src="/assets/videos/02.MP4" autoPlay loop muted playsInline data-mouse="video" data-video="02.MP4" onClick={() => handleVideoSelect('/assets/videos/02.MP4')} style={{ objectFit: "cover" }} />
                </div>
              </div>
            </div>
          </div>
          <div className="w-100 d-flex justify-content-center">
            <div className="a-product-card w-50">
              <div
                className="w-100 d-flex align-items-end justify-content-between pb-2"
              >
                <p
                  className="a-desc"
                  data-anime="intersection"
                  data-anime-initial="0"
                  data-anime-final="1"
                  data-anime-style="opacity"
                >
                  003
                </p>
                <p
                  className="a-tag"
                  data-anime="intersection"
                  data-anime-initial="0"
                  data-anime-final="1"
                  data-anime-style="opacity"
                >
                  00:00:15
                </p>
              </div>
              <div className="position-relative d-flex a-works-image-wrapper">
                <svg
                  className="a-work-hover-indicator position-absolute"
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0.5 24.5V0.5H24.5" stroke="black" />
                </svg>
                <svg
                  className="a-work-hover-indicator position-absolute"
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0.5H24V24.5" stroke="black" />
                </svg>
                <svg
                  className="a-work-hover-indicator position-absolute"
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 24H24V0" stroke="black" />
                </svg>
                <svg
                  className="a-work-hover-indicator position-absolute"
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0.5 0V24H24.5" stroke="black" />
                </svg>
                <video width="1920" height="1080" className="w-100 a-canvas-image a-selected-works-img" src="/assets/videos/03.MP4" autoPlay loop muted playsInline data-mouse="video" data-video="03.MP4" onClick={() => handleVideoSelect('/assets/videos/03.MP4')} style={{ objectFit: "cover" }} />
              </div>
            </div>
          </div>
          <div className="a-projects-grid d-grid gap-4 h-100 py-4">
            <div className="w-100 d-flex justify-content-center">
              <div className="a-product-card w-60">
                <div
                  className="w-100 d-flex align-items-end justify-content-between pb-2"
                >
                  <p
                    className="a-desc"
                    data-anime="intersection"
                    data-anime-initial="0"
                    data-anime-final="1"
                    data-anime-style="opacity"
                  >
                    004
                  </p>
                  <p
                    className="a-tag"
                    data-anime="intersection"
                    data-anime-initial="0"
                    data-anime-final="1"
                    data-anime-style="opacity"
                  >
                    00:00:16
                  </p>
                </div>
                <div className="position-relative d-flex a-works-image-wrapper">
                  <svg
                    className="a-work-hover-indicator position-absolute"
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0.5 24.5V0.5H24.5" stroke="black" />
                  </svg>
                  <svg
                    className="a-work-hover-indicator position-absolute"
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0 0.5H24V24.5" stroke="black" />
                  </svg>
                  <svg
                    className="a-work-hover-indicator position-absolute"
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0 24H24V0" stroke="black" />
                  </svg>
                  <svg
                    className="a-work-hover-indicator position-absolute"
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0.5 0V24H24.5" stroke="black" />
                  </svg>
                  <video width="1920" height="1080" className="w-100 a-canvas-image a-selected-works-img" src="/assets/videos/04.MP4" autoPlay loop muted playsInline data-mouse="video" data-video="04.MP4" onClick={() => handleVideoSelect('/assets/videos/04.MP4')} style={{ objectFit: "cover" }} />
                </div>
              </div>
            </div>
            <div className="w-100 d-flex justify-content-center">
              <div className="a-product-card w-100">
                <div
                  className="w-100 d-flex align-items-end justify-content-between pb-2"
                >
                  <p
                    className="a-desc"
                    data-anime="intersection"
                    data-anime-initial="0"
                    data-anime-final="1"
                    data-anime-style="opacity"
                  >
                    005
                  </p>
                  <p
                    className="a-tag"
                    data-anime="intersection"
                    data-anime-initial="0"
                    data-anime-final="1"
                    data-anime-style="opacity"
                  >
                    00:00:21
                  </p>
                </div>
                <div className="position-relative d-flex a-works-image-wrapper">
                  <svg
                    className="a-work-hover-indicator position-absolute"
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0.5 24.5V0.5H24.5" stroke="black" />
                  </svg>
                  <svg
                    className="a-work-hover-indicator position-absolute"
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0 0.5H24V24.5" stroke="black" />
                  </svg>
                  <svg
                    className="a-work-hover-indicator position-absolute"
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0 24H24V0" stroke="black" />
                  </svg>
                  <svg
                    className="a-work-hover-indicator position-absolute"
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0.5 0V24H24.5" stroke="black" />
                  </svg>
                  <video width="1920" height="1080" className="w-100 a-canvas-image a-selected-works-img" src="/assets/videos/05.MP4" autoPlay loop muted playsInline data-mouse="video" data-video="05.MP4" onClick={() => handleVideoSelect('/assets/videos/05.MP4')} style={{ objectFit: "cover" }} />
                </div>
              </div>
            </div>
          </div>
          <div className="w-100 d-flex justify-content-center">
            <div className="a-product-card w-100">
              <div
                className="w-100 d-flex align-items-end justify-content-between pb-2"
              >
                <p
                  className="a-desc"
                  data-anime="intersection"
                  data-anime-initial="0"
                  data-anime-final="1"
                  data-anime-style="opacity"
                >
                  006
                </p>
                <p
                  className="a-tag"
                  data-anime="intersection"
                  data-anime-initial="0"
                  data-anime-final="1"
                  data-anime-style="opacity"
                >
                  00:00:22
                </p>
              </div>
              <div className="position-relative d-flex a-works-image-wrapper">
                <svg
                  className="a-work-hover-indicator position-absolute"
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0.5 24.5V0.5H24.5" stroke="black" />
                </svg>
                <svg
                  className="a-work-hover-indicator position-absolute"
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0.5H24V24.5" stroke="black" />
                </svg>
                <svg
                  className="a-work-hover-indicator position-absolute"
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 24H24V0" stroke="black" />
                </svg>
                <svg
                  className="a-work-hover-indicator position-absolute"
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0.5 0V24H24.5" stroke="black" />
                </svg>
                <video width="1920" height="1080" className="w-100 a-canvas-image a-selected-works-img" src="/assets/videos/06.MP4" autoPlay loop muted playsInline data-mouse="video" data-video="06.MP4" onClick={() => handleVideoSelect('/assets/videos/06.MP4')} style={{ objectFit: "cover" }} />
              </div>
            </div>
          </div>
        </section>
        <section className="container-fluid px-0 a-slideshow-section-wrapper a-section-wrapper overflow-hidden py-6">
          <div className="container py-4">
            <div className="d-flex justify-content-between align-items-end mb-5">
              <div>
                <h2
                  className="a-tag"
                  data-anime="intersection"
                  data-anime-initial="0"
                  data-anime-final="1"
                  data-anime-style="opacity"
                >
                  (Gallery)
                </h2>
                <h3
                  className="a-section-title-lg text-white"
                  data-anime="intersection"
                  data-anime-initial="0"
                  data-anime-final="1"
                  data-anime-style="opacity"
                >
                  Photography Reel
                </h3>
              </div>
              <div className="d-flex gap-3 mb-2">
                <button
                  onClick={prevSlide}
                  className="a-slideshow-btn"
                  data-mouse="link"
                  aria-label="Previous slide"
                >
                  ←
                </button>
                <button
                  onClick={nextSlide}
                  className="a-slideshow-btn"
                  data-mouse="link"
                  aria-label="Next slide"
                >
                  →
                </button>
              </div>
            </div>

            <div className="row align-items-center">
              <div className="col-lg-8 position-relative a-slideshow-image-container">
                {/* Asymmetric border overlays */}
                <svg className="a-work-hover-indicator position-absolute" width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ top: 0, left: 0, zIndex: 10 }}><path d="M0.5 24.5V0.5H24.5" stroke="white" opacity="0.3" /></svg>
                <svg className="a-work-hover-indicator position-absolute" width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ top: 0, right: 0, zIndex: 10 }}><path d="M0 0.5H24V24.5" stroke="white" opacity="0.3" /></svg>
                <svg className="a-work-hover-indicator position-absolute" width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ bottom: 0, right: 0, zIndex: 10 }}><path d="M0 24H24V0" stroke="white" opacity="0.3" /></svg>
                <svg className="a-work-hover-indicator position-absolute" width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ bottom: 0, left: 0, zIndex: 10 }}><path d="M0.5 0V24H24.5" stroke="white" opacity="0.3" /></svg>

                {slides.map((slide, idx) => (
                  <div
                    key={idx}
                    className={`a-slideshow-slide ${idx === activeSlide ? 'active' : ''}`}
                    style={{ position: 'absolute', inset: 0 }}
                  >
                    {/* Ambient glow blurred cover */}
                    <img
                      src={slide.src}
                      alt=""
                      className="w-100 h-100 position-absolute"
                      style={{ objectFit: 'cover', filter: 'blur(30px) brightness(0.35)', transform: 'scale(1.1)', pointerEvents: 'none' }}
                    />
                    {/* Crisp contain view */}
                    <img
                      src={slide.src}
                      alt={slide.title}
                      className="w-100 h-100 position-relative"
                      style={{ objectFit: 'contain', zIndex: 1 }}
                    />
                  </div>
                ))}
              </div>
              <div className="col-lg-4 ps-lg-5 mt-4 mt-lg-0 text-white">
                <div className="a-slideshow-info-box">
                  <p className="a-slideshow-number">0{activeSlide + 1} / 0{slides.length}</p>
                  <h4 className="a-slideshow-title">
                    {slides[activeSlide].title}
                  </h4>
                  <p className="a-slideshow-desc">
                    {slides[activeSlide].desc}
                  </p>
                </div>
                
                {/* Thumbnails Navigation Strip */}
                <div className="a-slideshow-thumb-strip">
                  {slides.map((slide, idx) => (
                    <div
                      key={idx}
                      onClick={() => setActiveSlide(idx)}
                      className={`a-slideshow-thumb-item ${idx === activeSlide ? 'active' : ''}`}
                      data-mouse="link"
                    >
                      <img src={slide.src} alt={slide.title} className="w-100 h-100" style={{ objectFit: 'cover' }} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className="container-fluid px-0 a-services-section-wrapper a-section-wrapper overflow-hidden"
        >
          <div className="w-100 mvh-100 d-flex justify-content-center flex-column">
            <div className="container">
              <h2
                className="a-tag pt-6"
                data-anime="intersection"
                data-anime-initial="0"
                data-anime-final="1"
                data-anime-style="opacity"
              >
                (Services)
              </h2>
              <h3
                className="a-section-title-lg pb-3"
                data-anime="intersection"
                data-anime-initial="0"
                data-anime-final="1"
                data-anime-style="opacity"
              >
                What I do
              </h3>
            </div>
            <div className="pt-6 w-100">
              <div
                className="container-fluid a-services-row-wrap position-relative overflow-hidden"
              >
                <div
                  className="d-grid align-items-center a-services-row py-3 container"
                >
                  <p
                    className="a-desc-lg"
                    data-anime="intersection"
                    data-anime-initial="0"
                    data-anime-final="1"
                    data-anime-style="opacity"
                  >
                    #01
                  </p>
                  <p
                    className="a-title-lg"
                    data-anime="intersection"
                    data-anime-initial="0"
                    data-anime-final="1"
                    data-anime-style="opacity"
                  >
                    Video Editing
                  </p>
                </div>
              </div>
              <div
                className="container-fluid a-services-row-wrap position-relative overflow-hidden"
              >
                <div
                  className="d-grid align-items-center a-services-row py-3 container"
                >
                  <p
                    className="a-desc-lg"
                    data-anime="intersection"
                    data-anime-initial="0"
                    data-anime-final="1"
                    data-anime-style="opacity"
                  >
                    #02
                  </p>
                  <p
                    className="a-title-lg"
                    data-anime="intersection"
                    data-anime-initial="0"
                    data-anime-final="1"
                    data-anime-style="opacity"
                  >
                    Photo Editing
                  </p>
                </div>
              </div>
              <div
                className="container-fluid a-services-row-wrap position-relative overflow-hidden"
              >
                <div
                  className="d-grid align-items-center a-services-row py-3 container"
                >
                  <p
                    className="a-desc-lg"
                    data-anime="intersection"
                    data-anime-initial="0"
                    data-anime-final="1"
                    data-anime-style="opacity"
                  >
                    #03
                  </p>
                  <p
                    className="a-title-lg"
                    data-anime="intersection"
                    data-anime-initial="0"
                    data-anime-final="1"
                    data-anime-style="opacity"
                  >
                    Photography
                  </p>
                </div>
              </div>
              <div
                className="container-fluid a-services-row-wrap position-relative overflow-hidden"
              >
                <div
                  className="d-grid align-items-center a-services-row py-3 container"
                >
                  <p
                    className="a-desc-lg"
                    data-anime="intersection"
                    data-anime-initial="0"
                    data-anime-final="1"
                    data-anime-style="opacity"
                  >
                    #04
                  </p>
                  <p
                    className="a-title-lg"
                    data-anime="intersection"
                    data-anime-initial="0"
                    data-anime-final="1"
                    data-anime-style="opacity"
                  >
                    Videography
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className="container px-4 a-contact-section-wrapper a-section-wrapper overflow-hidden"
          data-role="section"
          data-section="contact"
          id="contact"
        >
          <div className="d-flex flex-column justify-content-center w-100 vh-100">
            <h2
              className="a-tag"
              data-anime="intersection"
              data-anime-initial="0"
              data-anime-final="1"
              data-anime-style="opacity"
            >
              (Contact)
            </h2>
            <p
              className="a-desc-lg pb-4 a-contact-desc"
              data-anime="intersection"
              data-anime-initial="0"
              data-anime-final="1"
              data-anime-style="opacity"
            >
              Let's work together. If you have an idea, a project, or simply
              want to talk about visuals and editing, feel free to reach out.
              You can email me directly or drop a hi through other channels.
            </p>
            <div
              className="d-flex d-sm-none align-items-center justify-content-between pb-4 pt-5 a-socials-container gap-3"
              data-anime="intersection"
              data-anime-initial="0"
              data-anime-final="1"
              data-anime-style="opacity"
            >
              <a
                href="#"
                target="_blank"
                rel="noreferrer noopener"
                className="a-desc-sm a-text-link a-font-mono"
                data-anime="scramble"
                data-mouse="link"
                >INSTAGRAM</a
              >
              <a
                href="https://www.linkedin.com/in/faith-ugwo"
                target="_blank"
                rel="noreferrer noopener"
                className="a-desc-sm a-text-link a-font-mono"
                data-anime="scramble"
                data-mouse="link"
                >LINKEDIN</a
              >
            </div>
            <a
              href="mailto:faithtega14@gmail.com?subject=Video%20Editing%20Query"
              target="_blank"
              rel="noreferrer noopener"
              className="pb-3"
              data-anime="intersection"
              data-anime-initial="0"
              data-anime-final="1"
              data-anime-style="opacity"
              data-mouse="link"
              ><svg
                className="a-hero-name w-100"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 800 200"
                preserveAspectRatio="xMidYMid meet"
                role="img"
                aria-label="Faith ortega Mail"
              >
                <text
                  x="0"
                  y="100"
                  fontSize="140"
                  textLength="800"
                  lengthAdjust="spacingAndGlyphs"
                  dominantBaseline="middle"
                >
                  faithtega14@gmail.com
                </text>
              </svg></a
            >
            <div
              className="d-flex align-items-center justify-content-between pt-4 a-socials-container gap-3"
              data-anime="intersection"
              data-anime-initial="0"
              data-anime-final="1"
              data-anime-style="opacity"
            >
              <a
                href="#"
                target="_blank"
                rel="noreferrer noopener"
                className="a-desc-sm a-text-link a-font-mono d-none d-sm-block"
                data-anime="scramble"
                data-mouse="link"
                >INSTAGRAM</a
              >
              <a
                href="tel:+233505686927"
                target="_blank"
                rel="noreferrer noopener"
                className="a-desc-sm a-text-link a-font-mono"
                >(+<span
                  data-anime="scramble"
                  data-mouse="link"
                  data-chars="0123456789"
                  >233 50 568 6927</span
                >)</a
              >
              <a
                href="tel:+233535781655"
                target="_blank"
                rel="noreferrer noopener"
                className="a-desc-sm a-text-link a-font-mono"
                >(+<span
                  data-anime="scramble"
                  data-mouse="link"
                  data-chars="0123456789"
                  >233 53 578 1655</span
                >)</a
              >
              <a
                href="https://www.linkedin.com/in/faith-ugwo"
                target="_blank"
                rel="noreferrer noopener"
                className="a-desc-sm a-text-link a-font-mono d-none d-sm-block"
                data-anime="scramble"
                data-mouse="link"
                >LINKEDIN</a
              >
            </div>
          </div>
        </section>
        <footer
          className="container-fluid px-0 a-footer-section-wrapper a-section-wrapper overflow-hidden position-relative d-flex"
        >
          <img
            width="2048"
            height="2001"
            src="/assets/images/footerImage.png"
            className="w-100 vh-100 a-footer-image a-canvas-image"
            alt="Faith ortega"
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
          <div
            className="position-absolute w-100 h-100 d-flex align-items-stretch justify-content-between flex-column a-footer-content"
          >
            <div aria-hidden="true"><div className="py-6"></div></div>
            <div
              className="d-flex d-md-none px-4 align-items-center justify-content-between py-4 a-socials-container gap-3"
              data-anime="intersection"
              data-anime-initial="0"
              data-anime-final="1"
              data-anime-style="opacity"
            >
              <a
                href="#"
                target="_blank"
                rel="noreferrer noopener"
                className="a-desc-sm a-text-link a-font-mono"
                data-anime="scramble"
                data-mouse="link"
                >INSTAGRAM</a
              >
              <a
                href="https://www.linkedin.com/in/faith-ugwo"
                target="_blank"
                rel="noreferrer noopener"
                className="a-desc-sm a-text-link a-font-mono"
                data-anime="scramble"
                data-mouse="link"
                >LINKEDIN</a
              >
              <a
                href="mailto:faithtega14@gmail.com?subject=Video%20Editing%20Query"
                target="_blank"
                rel="noreferrer noopener"
                className="a-desc-sm a-text-link a-font-mono"
                data-anime="scramble"
                data-mouse="link"
                >MAIL</a
              >
              <a
                href="tel:+233505686927"
                target="_blank"
                rel="noreferrer noopener"
                className="a-desc-sm a-text-link a-font-mono"
                data-anime="scramble"
                data-mouse="link"
                >PHONE</a
              >
            </div>
            <div
              className="px-4 pb-4"
              data-anime="intersection"
              data-anime-initial="0"
              data-anime-final="1"
              data-anime-style="opacity"
            >
              <svg
                className="a-hero-name w-100"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1000 200"
                preserveAspectRatio="xMidYMid meet"
                role="img"
                aria-label="Hero text"
              >
                <text
                  x="0"
                  y="150"
                  fontSize="150"
                  textLength="1000"
                  lengthAdjust="spacingAndGlyphs"
                  dominantBaseline="central"
                >
                  FAITH ORTEGA
                </text>
              </svg>
              <div
                className="d-none d-md-flex align-items-center justify-content-between py-4 a-socials-container gap-3"
                data-anime="intersection"
                data-anime-initial="0"
                data-anime-final="1"
                data-anime-style="opacity"
              >
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="a-desc-sm a-text-link a-font-mono"
                  data-anime="scramble"
                  data-mouse="link"
                  >INSTAGRAM</a
                >
                <a
                  href="https://www.linkedin.com/in/faith-ugwo"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="a-desc-sm a-text-link a-font-mono"
                  data-anime="scramble"
                  data-mouse="link"
                  >LINKEDIN</a
                >
                <a
                  href="mailto:faithtega14@gmail.com?subject=Video%20Editing%20Query"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="a-desc-sm a-text-link a-font-mono"
                  data-anime="scramble"
                  data-mouse="link"
                  >MAIL</a
                >
                <a
                  href="tel:+233505686927"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="a-desc-sm a-text-link a-font-mono"
                  data-anime="scramble"
                  data-mouse="link"
                  >PHONE</a
                >
              </div>
              <div
                className="d-none d-md-flex align-items-center justify-content-between"
              >
                <p className="a-desc-sm a-footer-time-display text-uppercase">
                  (Accra, Ghana)
                </p>
                <p className="a-desc-sm">
                  Photographer & Visual Storyteller
                </p>
                <p className="a-desc-sm a-rights-text">
                  (2026 © All rights reserved)
                </p>
              </div>
              <p className="a-desc-sm pb-4 d-md-none">
                Photographer & Visual Storyteller
              </p>
              <div
                className="d-md-none d-flex align-items-center justify-content-between"
              >
                <p className="a-desc-sm a-footer-time-display text-uppercase">
                  (Accra, Ghana)
                </p>
                <p className="a-desc-sm a-rights-text">
                  (2026 © All rights reserved)
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
    <div
      className="position-fixed a-preview-wrapper a-preview-hidden vw-100 vh-100"
    >
      <div
        className="a-preview-contaner position-relative d-flex vw-100 vh-100 align-items-center"
      >
        <video
          src="index.html"
          className="a-preview-video-container"
          playsinline
        ></video
        ><img
          width="1920"
          height="1080"
          src="index.html"
          alt="preview"
          className="a-preview-image-container position-absolute w-100"
        />
        <div className="a-preview-loader position-absolute"></div>
        <div
          className="a-controls-wrapper position-absolute container-fluid px-4 h-100 d-flex flex-column align-items-center justify-content-between a-pointer-none"
        >
          <div className="d-flex w-100 d-flex justify-content-end py-4 gap-3">
            <p
              className="a-desc-lg a-preview-close-btn a-font-mono a-pointer-all"
              data-anime="scramble"
              data-mouse="link"
            >
              CLOSE
            </p>
          </div>
          <div className="container-fluid px-0 py-4">
            <div className="d-flex align-items-end justify-content-between">
              <p className="a-section-title-lg a-preview-title">001</p>
              <div className="d-flex gap-3 pb-4">
                <div
                  className="a-icon-btn a-preview-play-btn d-flex align-items-center justify-content-center a-pointer-all"
                  data-mouse="link"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M28.5125 15.15L10.525 4.15C10.3736 4.05659 10.2 4.00528 10.0221 4.00134C9.84424 3.99741 9.66854 4.041 9.51314 4.12762C9.35774 4.21424 9.22826 4.34075 9.13805 4.4941C9.04785 4.64745 9.0002 4.82208 9 5V27C9.0002 27.1779 9.04785 27.3525 9.13805 27.5059C9.22826 27.6592 9.35774 27.7858 9.51314 27.8724C9.66854 27.959 9.84424 28.0026 10.0221 27.9986C10.2 27.9947 10.3736 27.9434 10.525 27.85L28.5125 16.85C28.6602 16.7627 28.7826 16.6383 28.8676 16.4893C28.9526 16.3402 28.9974 16.1716 28.9974 16C28.9974 15.8284 28.9526 15.6598 28.8676 15.5107C28.7826 15.3617 28.6602 15.2373 28.5125 15.15V15.15Z"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div
                  className="a-icon-btn a-preview-mute-btn d-flex align-items-center justify-content-center a-pointer-all"
                  data-mouse="link"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M27.3625 9.6375C28.1993 10.4723 28.8632 11.464 29.3162 12.5558C29.7692 13.6476 30.0023 14.818 30.0023 16C30.0023 17.182 29.7692 18.3524 29.3162 19.4442C28.8632 20.536 28.1993 21.5277 27.3625 22.3625"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10 21H4C3.73478 21 3.48043 20.8946 3.29289 20.7071C3.10536 20.5196 3 20.2652 3 20V12C3 11.7348 3.10536 11.4804 3.29289 11.2929C3.48043 11.1054 3.73478 11 4 11H10L19 4V28L10 21Z"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10 11V21"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M23.825 13.175C24.1968 13.5455 24.4919 13.9857 24.6933 14.4705C24.8946 14.9553 24.9983 15.4751 24.9983 16C24.9983 16.5249 24.8946 17.0447 24.6933 17.5295C24.4919 18.0143 24.1968 18.4545 23.825 18.825"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div
              className="w-100 a-progress-wrapper position-relative a-preview-progress-wrapper a-pointer-all"
            >
              <div
                className="position-absolute a-progress-indicator position-absolute h-100 a-preview-progress-indicator"
              ></div>
            </div>
            <div className="d-flex align-items-center justify-content-between pt-2">
              <p className="a-desc-sm a-preview-current-time">00:00:00</p>
              <p className="a-desc-sm a-preview-duration-time">00:00:00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    </>
  );
}
