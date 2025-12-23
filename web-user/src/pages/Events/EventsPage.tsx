// src/pages/Events/EventsPage.tsx
import type { FC } from "react";
import HeroSection from "./HeroSection";
import UpcomingEventsSection from "./UpcomingEventsSection";
import WorkshopsSection from "./WorkshopsSection";
import WebinarsSection from "./WebinarsSection";
import PastEventsSection from "./PastEventsSection";

const EventsPage: FC = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300 rounded-md">
      {/* Hero / Intro */}
      <HeroSection
        title="Join Our Events"
        subtitle="Webinars, Workshops, Hackathons, and Bootcamps for everyone."
      />

      {/* Upcoming Events */}
      <UpcomingEventsSection />

      {/* Workshops */}
      <WorkshopsSection />

      {/* Webinars */}
      <WebinarsSection />

      {/* Past Events / Gallery */}
      <PastEventsSection />

    </div>
  );
};

export default EventsPage;
