// src/AppRouter.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import type { FC } from "react";

import Layout from "./layout/Layout";
import LandingPage from "./pages/Landing/LandingPage";
import AboutPage from "./pages/About/AboutPage";
import ContactPage from "./pages/Contact/ContactPage";
import CoursesPage from "./pages/Courses/CoursesPage";
import CourseDetailPage from "./pages/Courses/CourseDetailPage";
import BlogPage from "./pages/Blog/BlogPage";
import NotFoundPage from "./pages/NotFound/NotFoundPage";
import BlogDetailPage from "./pages/Blog/BlogDetailPage";
import GalleryPage from "./pages/Gallery/GalleryPage";
import TutorialsPage from "./pages/Tutorials/TutorialsPage";
import FAQPage from "./pages/FAQ/FAQPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicy/PrivacyPolicyPage";
import SupportPage from "./pages/Support/SupportPage";
import EventsPage from "./pages/Events/EventsPage";
import MyLearning from "./pages/MyLearning/MyLearning";
import InfinioEdCredits from "./pages/InfinioEdCredits/InfinioEdCredits";
import Messages from "./pages/Messages/Messages";
import MyCart from "./pages/MyCart/MyCart";
import Notifications from "./pages/Notifications/Notifications";
import PaymentMethods from "./pages/PaymentMethods/PaymentMethods";
import PurchaseHistory from "./pages/PurchaseHistory/PurchaseHistory";
import Subscriptions from "./pages/Subscriptions/Subscriptions";
import Teach from "./pages/Teach/Teach";
import UserProfile from "./pages/UserProfile/UserProfile";
import Wishlist from "./pages/Wishlist/Wishlist";

const AppRouter: FC = () => {
  return (
    <Router>
      <Routes>
        {/* Layout wrapper for Navbar + Footer */}
        <Route element={<Layout />}>
          {/* Landing Page */}
          <Route path="/" element={<LandingPage />} />

          {/* About Page */}
          <Route path="/about" element={<AboutPage />} />

          {/* Contact Page */}
          <Route path="/contact" element={<ContactPage />} />

          {/* Courses List */}
          <Route path="/courses" element={<CoursesPage />} />

          {/* Course Detail (dynamic) */}
          <Route path="/courses/:id" element={<CourseDetailPage />} />

          {/* Blog List */}
          <Route path="/blog" element={<BlogPage />} />

          {/* Blog Detail (dynamic) */}
          <Route path="/blog/:id" element={<BlogDetailPage />} />

          {/* Gallery Page */}
          <Route path="/gallery" element={<GalleryPage />} />

          {/* Events Page */}
          <Route path="/events" element={<EventsPage />} />

          <Route path="/userprofile" element={<UserProfile />} />
          <Route path="/my-learning" element={<MyLearning />} />
          <Route path="/my-cart" element={<MyCart />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/teach" element={<Teach />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/payment-methods" element={<PaymentMethods />} />
          <Route path="/subscriptions" element={<Subscriptions />} />
          <Route path="/purchase-history" element={<PurchaseHistory />} />
          <Route path="/infinioed-credits" element={<InfinioEdCredits />} />

          <Route path="/tutorials" element={<TutorialsPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/support" element={<SupportPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />

          {/* 404 fallback */}
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
