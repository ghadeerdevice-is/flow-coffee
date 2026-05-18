const About = () => {
  return (
    <main className="pt-20">
      {/* About Hero */}
      <section className="py-20 bg-white px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          {/* Image */}
          <div className="flex-shrink-0">
            <img
              src="/1.jpg"
              alt="About Flow Coffee"
              className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full  "
            />
          </div>

          {/* Text */}
          <div className="max-w-xl">
            <h2 className="text-4xl  font-bold text-gray-800 mb-2">About FLOW</h2>
            <div className="w-16 h-1 bg-[#00563B] rounded mb-6" />
            <p className="text-gray-600 text-lg leading-relaxed text-justify">
              FLOW IS A SIMPLE SPACE WHERE YOU CAN SIP — RELAX — FLOW. THERE'S
              NO RUSH HERE. JUST YOU, YOUR COFFEE, AND THE SOUND OF EVERYTHING
              SLOWING DOWN.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16  px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">Our Values</h2>
          <div className="w-16 h-1 bg-[#00563B] mx-auto rounded mb-12" />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            {[
              { icon: "❤︎", title: "Community", text: "A space for everyone — to gather, relax, and connect." },
{ icon: "☕︎", title: "Quality", text: "We source only the finest beans and freshest ingredients for every cup." },
              { icon: "༄", title: "Calm", text: "A peaceful atmosphere where time slows down and every sip matters." },
               
             
            ].map((val, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 shadow hover:shadow-lg transition-shadow">
                <div className="text-5xl mb-4">{val.icon}</div>
                <h3 className="text-xl font-semibold text-[#00563B] mb-2">{val.title}</h3>
                <p className="text-gray-500 leading-relaxed">{val.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      
    </main>
  );
};

export default About;
