
import React from 'react';
import { useScrollAnimations } from '../hooks/useScrollAnimations';
import { useTextScramble } from '../hooks/useTextScramble';
import { useLazyImages, useImageHoverEffects, useVideoPreview } from '../hooks/useImageEffects';

export default function Works() {
  useScrollAnimations();
  useTextScramble();
  useLazyImages();
  useImageHoverEffects();
  useVideoPreview();

  return (
    <>
      
    <header className="position-fixed a-header-wrapper vw-100 px-0">
      <ul
        className="container-fluid d-flex align-items-center justify-content-between a-header-size px-4"
      >
        <li className="a-nav-link-wrapper">
          <a
            href="/"
            className="a-nav-link a-text-link a-nav-logo-link"
            data-mouse="link"
            >FAITH</a
          >
        </li>
        <li className="a-nav-link-wrapper">
          <a
            href="/"
            className="a-nav-link a-nav-scroll-link a-text-link a-font-mono"
            data-anime="scramble"
            data-mouse="link"
            data-target="about"
            >HOME</a
          >
        </li>
      </ul>
    </header>
    <div className="a-body-scroll-container">
      <div className="a-body-main-wrap">
        <section
          className="a-all-works-section-wrapper a-section-wrapper container-fluid px-0 overflow-hidden"
        >
          <div
            className="d-flex flex-column justify-content-between align-items-stretch vh-100"
          >
            <div
              className="px-4 a-pt-header d-flex align-items-end justify-content-start justify-content-md-between"
            >
              <div>
                <p className="a-desc-lg pb-1">FAITH ORTEGA</p>
                <p className="a-desc-sm">
                  Cinematic Video Editor & Visual Narrator
                </p>
              </div>
              <p className="a-tag a-mouse-position-tag d-none d-md-block">
                [ X:200, Y:200 ]
              </p>
            </div>
            <div className="overflow-hidden position-relative">
              <div className="d-flex align-items-center gap-3 pb-6">
                <video width="1920" height="1080" className="a-works-preview-video" src={"/assets/videos/" + "01.MP4"} autoPlay loop muted playsInline data-mouse="video" data-video="01.MP4" style={{ objectFit: "cover" }} />
                <video width="1920" height="1080" className="a-works-preview-video" src={"/assets/videos/" + "02.MP4"} autoPlay loop muted playsInline data-mouse="video" data-video="02.MP4" style={{ objectFit: "cover" }} />
                <video width="1920" height="1080" className="a-works-preview-video" src={"/assets/videos/" + "03.MOV"} autoPlay loop muted playsInline data-mouse="video" data-video="03.MOV" style={{ objectFit: "cover" }} />
                <video width="1920" height="1080" className="a-works-preview-video" src={"/assets/videos/" + "04.MOV"} autoPlay loop muted playsInline data-mouse="video" data-video="04.MOV" style={{ objectFit: "cover" }} />
                <video width="1920" height="1080" className="a-works-preview-video" src={"/assets/videos/" + "05.MOV"} autoPlay loop muted playsInline data-mouse="video" data-video="05.MOV" style={{ objectFit: "cover" }} />
                <video width="1920" height="1080" className="a-works-preview-video" src={"/assets/videos/" + "06.MP4"} autoPlay loop muted playsInline data-mouse="video" data-video="06.MP4" style={{ objectFit: "cover" }} />
                <video width="1920" height="1080" className="a-works-preview-video" src={"/assets/videos/" + "07.MOV"} autoPlay loop muted playsInline data-mouse="video" data-video="07.MOV" style={{ objectFit: "cover" }} />
              </div>
            </div>
            <div className="d-flex align-items-stretch py-4 flex-column px-4">
              <div
                className="d-flex align-items-center justify-content-between a-socials-container"
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
                  href="tel:+233535781655"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="a-desc-sm a-text-link a-font-mono"
                  data-anime="scramble"
                  data-mouse="link"
                  >PHONE</a
                >
              </div>
              <div
                className="d-flex align-items-center justify-content-between pt-3"
              >
                <p className="a-desc-sm a-footer-time-display text-uppercase">
                  (Accra, Ghana 03:00:20 AM)
                </p>
                <p className="a-desc-sm a-rights-text">
                  (2026 © All rights reserved)
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
    <div
      className="position-fixed a-preview-wrapper a-preview-hidden vw-100 vh-100"
    >
      <div
        className="a-preview-contaner position-relative d-flex vw-100 vh-100 align-items-center"
      >
        <video
          src="works.html"
          className="a-preview-video-container"
          playsinline
        ></video
        ><img
          width="1920"
          height="1080"
          src="works.html"
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
