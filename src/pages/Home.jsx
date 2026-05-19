
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main>
      {/* Hero Section */}
      <section
  className="h-64 md:h-screen bg-cover bg-center flex items-center justify-center relative"
  style={{ backgroundImage: "url('/Ready.png')" }}
>
     
       
      </section>

      {/* Welcome Section */}
      <section className="py-20 bg-white text-center px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
          Welcome to Flow
        </h2>
      <div>
        <div className="w-20 h-1 bg-[#00563B] mx-auto rounded mb-10" />
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-8">
          {["12.jpg", "10.jpg", "6.jpg", "7.jpg", "11.jpg", "90.jpeg"].map((img, i) => (
            <div key={i} className="overflow-hidden rounded-xl shadow">
              <img
                src={`/${img}`}
                alt={`Gallery ${i + 1}`}
                className="w-full hover:scale-110 transition-transform duration-500 cursor-pointer"
              />
            </div>
          ))}
        </div>
      </div>
        <div className="mt-10 flex flex-wrap justify-center gap-6">
          <Link to="/about" className="border-2 border-[#00563B] text-[#00563B] hover:bg-[#00563B] hover:text-white px-6 py-3 rounded-full font-semibold transition-all duration-300">
            About Us
          </Link>
          <Link to="/menu" className="bg-[#00563B] text-white hover:bg-black px-6 py-3 rounded-full font-semibold transition-all duration-300">
           Menu
          </Link>
        </div>
      </section>

     
    </main>
  );
};

export default Home;