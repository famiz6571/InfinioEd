// src/pages/Contact/ContactPage.tsx
import type { FC } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactPage: FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* Hero */}
      <section className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
        <p className="text-gray-700 dark:text-gray-300 text-lg max-w-2xl mx-auto">
          Have questions or need support? Reach out and we’ll get back to you as
          soon as possible.
        </p>
      </section>

      {/* Contact Form */}
      <section className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-8 mb-12 transition-colors duration-300">
        <form className="grid gap-6">
          <div className="grid md:grid-cols-2 gap-4">
            <Input type="text" placeholder="Your Name" required />
            <Input type="email" placeholder="Your Email" required />
          </div>
          <Input type="text" placeholder="Subject" required />
          <Textarea placeholder="Your Message" rows={6} required />
          <Button type="submit" className="w-full md:w-auto px-8 py-3">
            Send Message
          </Button>
        </form>
      </section>

      {/* Company Info */}
      <section className="text-center">
        <h2 className="text-2xl font-semibold mb-4">Our Office</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-2">
          INIFINOED HQ, 123 Learning St, Knowledge City, EduState
        </p>
        <p className="text-gray-700 dark:text-gray-300 mb-2">
          Email: support@inifinoed.com
        </p>
        <p className="text-gray-700 dark:text-gray-300">
          Phone: +971 50 123 4567
        </p>
      </section>
    </div>
  );
};

export default ContactPage;
