import { useState } from "react";

const Contact = () => {
  const [feedback, setFeedback] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (feedback.trim()) {
      setSubmitted(true);
      setFeedback("");
    }
  };

  return (
    <main className="pt-20 pb-20 min-h-screen bg-white">
      <section className="px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 pt-12 pb-2 uppercase">
          Contact
        </h2>
        <div className="w-20 h-1 bg-[#00563B] mx-auto rounded mb-14" />

        <div className="flex flex-col md:flex-row gap-12 items-start justify-between">
          {/* Contact Info */}
          <div className="flex-1">
            <h3 className="text-2xl font-semibold text-[#00563B] mb-6">Get In Touch</h3>
            <ul className="space-y-5 text-gray-700 text-base">
              <li className="flex items-center gap-4">
                <span className="text-2xl">𖡡</span>
                <span>Tyre, Center Morad</span>
              </li>
              <li className="flex items-center gap-4">
                <span className="text-2xl">🕻</span>
                <span>+961 79 077 903</span>
              </li>
              <li className="flex items-center gap-4">
                <span className="text-2xl">◔</span>
                <span>Monday – Sunday: 8:00 AM – 1:00 PM</span>
              </li>
              <li className="flex items-center gap-4">
                <span className="text-2xl">🔎︎</span>
                <span>
                  Instagram:{" "}
                  <span className="text-[#00563B] font-semibold">flow.coffee.lb</span>
                </span>
              </li>
            </ul>
          </div>

          {/* Feedback Form */}
          <div className="flex-1 w-full">
            <h3 className="text-2xl font-semibold text-[#00563B] mb-6">Send Feedback</h3>
            {submitted ? (
              <div className="bg-green-50 border border-[#00563B] text-[#00563B] rounded-xl p-6 text-center font-semibold text-lg">
                 Thank you for your feedback!
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <textarea
                  placeholder="Your feedback"
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  rows={5}
                  className="border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#00563B] transition resize-vertical"
                />
                <button
                  type="submit"
                  className="bg-[#00563B] text-white font-semibold py-3 rounded-full hover:bg-black transition-all duration-300"
                >
                  Send
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
