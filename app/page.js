"use client";

import { useState } from "react";
import {
  AlarmClock,
  BarChart3,
  CheckCircle2,
  Download,
  Code2,
  Home,
  LockKeyhole,
  ShieldCheck,
  Smartphone,
  Sparkles,
  TimerReset,
  UploadCloud,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const repoUrl = "https://github.com/agupta07505/Tsuzuku";
const releaseUrl = "https://github.com/agupta07505/Tsuzuku/releases";

const featureGroups = [
  {
    icon: CheckCircle2,
    title: "Habit Tracking",
    text: "Create habits with descriptions, icons, colors, reminders, active lists, archived habits, and daily check-ins.",
  },
  {
    icon: Sparkles,
    title: "Streak Engine",
    text: "Track current streaks, best streaks, total completions, retroactive check-ins, and completion history from local logs.",
  },
  {
    icon: TimerReset,
    title: "Focus Mode",
    text: "Run timed focus sessions with completed and failed session history, phone-pickup discipline, allowed mistakes, and optional Do Not Disturb support.",
  },
  {
    icon: Home,
    title: "Minimal Launcher",
    text: "Use Tsuzuku as an optional Android home launcher with a clock, quotes, widgets, phone access, camera shortcut, and allowed-app controls.",
  },
  {
    icon: BarChart3,
    title: "Insights",
    text: "Review global stats, consistency score, weekly activity, top habits, yearly heatmaps, and per-habit calendars.",
  },
  {
    icon: UploadCloud,
    title: "Local Portability",
    text: "Export and restore habits, check-ins, focus sessions, and settings with user-initiated JSON backup files.",
  },
];

const privacyPoints = [
  "Core habit, focus, and launcher workflows work without a cloud account.",
  "Habit names and descriptions are encrypted before local storage.",
  "Reminders are scheduled locally with Android system APIs.",
  "Backup and restore are started by the user from local JSON files.",
  "The app is built to be ad-free and analytics-free.",
];

const screenshots = [
  ["/images/screenshots/01-home.jpg", "Home dashboard"],
  ["/images/screenshots/02-habits.jpg", "Habits screen"],
  ["/images/screenshots/07-focus.jpg", "Focus mode"],
  ["/images/screenshots/03-launcher.jpg", "Minimal launcher"],
  ["/images/screenshots/04-activate-launcher.jpg", "Launcher activation screen"],
  ["/images/screenshots/05-launcher-allowed-apps.jpg", "Launcher allowed apps"],
  ["/images/screenshots/06-launcher-focus-settings.jpg", "Launcher focus settings"],
  ["/images/screenshots/08-insights-overview.jpg", "Insights overview"],
  ["/images/screenshots/09-insights-heatmap.jpg", "Insights heatmap"],
  ["/images/screenshots/10-settings.jpg", "Settings screen"],
  ["/images/screenshots/11-settings-customization.jpg", "Settings customization"],
  ["/images/screenshots/12-about.jpg", "About screen"],
  ["/images/screenshots/13-about-links.jpg", "About and links"],
];

const roadmap = [
  ["Tsuzuku Habits", "Done", "Core habit creation, check-ins, streak tracking, reminders, insights, and backup."],
  ["Tsuzuku Focus", "Done", "Timed sessions, discipline tracking, focus history, and distraction controls."],
  ["Tsuzuku Launcher", "Done", "A minimal Android launcher for essential apps and lower-distraction phone use."],
  ["Tsuzuku Widgets", "In progress", "Home and launcher widgets for habits, streaks, focus sessions, quotes, and quick check-ins."],
  ["Tsuzuku AI Integration", "Planned", "Optional habit ideas, reflection prompts, summaries, and productivity guidance with privacy-first defaults."],
];

export default function HomePage() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % screenshots.length);
  };

  return (
    <main>
      <nav className="topbar" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="Tsuzuku home">
          <img src="/images/icons/tsuzuku.png" alt="Tsuzuku logo" />
          <span>Tsuzuku</span>
        </a>
        <div className="navlinks">
          <a href="#features">Features</a>
          <a href="#privacy">Privacy</a>
          <a href="#download">Download</a>
          <a href="#roadmap">Roadmap</a>
        </div>
      </nav>

      <section id="top" className="hero section-shell">
        <div className="hero-copy">
          <p className="eyebrow">Private Android productivity</p>
          <h1>Tsuzuku</h1>
          <p className="meaning">Tsuzuku means "to continue" or "to keep going".</p>
          <p className="hero-text">
            A private, offline-first Android habit tracker, focus timer, minimal launcher, and insights companion for people who want fewer distractions and steadier daily progress.
          </p>
          <div className="hero-actions">
            <a className="button primary" href={releaseUrl} target="_blank" rel="noreferrer">
              <Download size={18} />
              Download APK
            </a>
            <a className="button secondary" href={repoUrl} target="_blank" rel="noreferrer">
              <Code2 size={18} />
              View Source
            </a>
          </div>
        </div>
        <div className="hero-visual" aria-label="Tsuzuku app screenshots">
          <img className="phone phone-back" src="/images/screenshots/08-insights-overview.jpg" alt="Tsuzuku insights screen" />
          <img className="phone phone-front" src="/images/screenshots/01-home.jpg" alt="Tsuzuku home dashboard" />
        </div>
      </section>

      <section className="stats-strip" aria-label="App highlights">
        <div><strong>Offline-first</strong><span>No cloud account needed for core features</span></div>
        <div><strong>Android 7+</strong><span>Min SDK 24, target SDK 36</span></div>
        <div><strong>Open source</strong><span>MIT licensed Kotlin and Compose app</span></div>
      </section>

      <section id="features" className="section-shell feature-section">
        <div className="section-heading">
          <p className="eyebrow">Product</p>
          <h2>Everything in one calm loop</h2>
          <p>Plan habits, protect focus time, make the launcher quieter, and review progress without sending your daily life to a server.</p>
        </div>
        <div className="feature-grid">
          {featureGroups.map((feature) => {
            const Icon = feature.icon;
            return (
              <article className="feature-card" key={feature.title}>
                <Icon size={24} />
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="product-band">
        <div className="section-shell split">
          <div>
            <p className="eyebrow">Focus + launcher</p>
            <h2>Keep useful apps close and distractions further away</h2>
            <p>
              Tsuzuku Launcher can become the Android HOME experience when you choose it. It keeps essential shortcuts available, supports allowed apps, shows focus-friendly widgets, and can apply focus-environment settings while sessions are active.
            </p>
            <div className="mini-list">
              <span><Smartphone size={18} /> Phone and camera shortcuts</span>
              <span><ShieldCheck size={18} /> Allowed-app controls</span>
              <span><AlarmClock size={18} /> Local reminders and focus notifications</span>
            </div>
          </div>
          <div className="screen-pair">
            <img src="/images/screenshots/03-launcher.jpg" alt="Tsuzuku launcher screen" />
            <img src="/images/screenshots/05-launcher-allowed-apps.jpg" alt="Tsuzuku allowed apps screen" />
          </div>
        </div>
      </section>

      <section className="section-shell gallery-section" aria-label="Screenshots">
        <div className="section-heading compact">
          <p className="eyebrow">Screens</p>
          <h2>Built around real app surfaces</h2>
        </div>
        
        <div className="carousel-wrapper">
          <button className="carousel-arrow prev" onClick={handlePrev} aria-label="Previous screenshot">
            <ChevronLeft size={24} />
          </button>
          
          <div className="carousel-container">
            {screenshots.map(([src, alt], index) => {
              let position = "hidden";
              if (index === activeIndex) {
                position = "active";
              } else if (index === (activeIndex - 1 + screenshots.length) % screenshots.length) {
                position = "prev";
              } else if (index === (activeIndex - 2 + screenshots.length) % screenshots.length) {
                position = "far-prev";
              } else if (index === (activeIndex + 1) % screenshots.length) {
                position = "next";
              } else if (index === (activeIndex + 2) % screenshots.length) {
                position = "far-next";
              }
              
              return (
                <div 
                  className={`carousel-item ${position}`} 
                  key={src}
                  onClick={() => setActiveIndex(index)}
                >
                  <img src={src} alt={alt} />
                </div>
              );
            })}
          </div>
          
          <button className="carousel-arrow next" onClick={handleNext} aria-label="Next screenshot">
            <ChevronRight size={24} />
          </button>
        </div>
        
        <p className="carousel-caption">{screenshots[activeIndex][1]}</p>
      </section>

      <section id="privacy" className="privacy-section section-shell">
        <div className="privacy-copy">
          <p className="eyebrow">Privacy model</p>
          <h2>Your habits stay yours</h2>
          <p>
            Tsuzuku is designed around local-first use. It stores habit and focus data in the app's local Room database, schedules reminders on the device, and gives users control over backup files.
          </p>
        </div>
        <div className="privacy-list">
          {privacyPoints.map((point) => (
            <div className="privacy-item" key={point}>
              <LockKeyhole size={19} />
              <span>{point}</span>
            </div>
          ))}
        </div>
      </section>

      <section id="roadmap" className="section-shell roadmap-section">
        <div className="section-heading compact">
          <p className="eyebrow">Roadmap</p>
          <h2>A focused productivity ecosystem</h2>
        </div>
        <div className="roadmap-list">
          {roadmap.map(([name, status, detail]) => (
            <article className="roadmap-item" key={name}>
              <div>
                <h3>{name}</h3>
                <p>{detail}</p>
              </div>
              <span>{status}</span>
            </article>
          ))}
        </div>
      </section>

      <section id="download" className="download-band">
        <div className="section-shell download-inner">
          <div>
            <p className="eyebrow">Download</p>
            <h2>Get the latest signed APK from GitHub Releases</h2>
            <p>
              Tsuzuku is open source and distributed through the project release page. Development builds are available as GitHub Actions artifacts from the dev branch.
            </p>
          </div>
          <div className="download-actions">
            <a className="button primary" href={releaseUrl} target="_blank" rel="noreferrer">
              <Download size={18} />
              Releases
            </a>
            <a className="button secondary" href={`${repoUrl}/issues/new/choose`} target="_blank" rel="noreferrer">
              <Code2 size={18} />
              Feedback
            </a>
          </div>
        </div>
      </section>

      <footer className="footer section-shell">
        <div>
          <img src="/images/icons/tsuzuku.png" alt="" />
          <span>Tsuzuku</span>
        </div>
        <p>MIT licensed. Built by Animesh Gupta with Kotlin, Jetpack Compose, Material 3, Room, and DataStore.</p>
        <a href={`${repoUrl}/security/advisories/new`} target="_blank" rel="noreferrer">Report a security issue</a>
      </footer>
    </main>
  );
}
