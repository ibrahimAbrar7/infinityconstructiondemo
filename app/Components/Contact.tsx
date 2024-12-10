import React from "react";

const Contact = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto">
        {/* Heading above the child divs */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Contact Us</h2>
        </div>

        <div className="flex flex-wrap justify-between items-stretch">
          {/* Left Child: Contact Form */}
          <div className="w-full md:w-1/2 p-4 flex flex-col">
            <form className="bg-white p-6 rounded shadow-lg flex flex-col flex-grow">
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-900">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  className="w-full p-3 border border-gray-300 rounded-md"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-900">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  className="w-full p-3 border border-gray-300 rounded-md"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-900">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Enter the subject"
                  className="w-full p-3 border border-gray-300 rounded-md"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-medium text-gray-900">Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Write your message here"
                  rows={4}
                  className="w-full p-3 border border-gray-300 rounded-md"
                />
              </div>
              <div className="text-center mt-auto">
                <button type="submit" className="bg-orange-500 text-white px-8 py-3 rounded-md hover:bg-pink-400">
                  Submit Form
                </button>
              </div>
            </form>
          </div>

          {/* Right Child: Map */}
          <div className="w-full md:w-1/2 p-4 flex flex-col">
            <div className="bg-white p-6 rounded shadow-lg flex-grow">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3028.041599887116!2d-73.93899172483792!3d40.62896454269628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c244aaa43c4da5%3A0x3b380d0d01b04789!2s1809%20Albany%20Ave%2C%20Brooklyn%2C%20NY%2011210%2C%20USA!5e0!3m2!1sen!2sin!4v1733764949819!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                title="Our Location"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
