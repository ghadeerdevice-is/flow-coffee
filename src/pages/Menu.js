const menuItems = [
  { name: "Croissant", price: "120,000 LBP", img: "Croissant.png" },
  { name: "Brownies", price: "150,000 LBP", img: "brownie.png" },
  { name: "Tiramisu", price: "250,000 LBP", img: "ter.png" },
  { name: "Cookies", price: "130,000 LBP", img: "cookie.png" },
  { name: "Hot Matcha Latte", price: "290,000 LBP", img: "hot.png" },
  { name: "Tea", price: "100,000 LBP", img: "tea.png" },
  { name: "Cappuccino", price: "150,000 LBP", img: "Cup.png" },
  { name: "Café Latte", price: "200,000 LBP", img: "cafe-late.png" },
  { name: "Turkish Coffee", price: "200,000 LBP", img: "t1.png" },
  { name: "Cortado", price: "150,000 LBP", img: "Cortado.png" },
  { name: "Hot Chocolate", price: "200,000 LBP", img: "hot-c.PNG" },
  { name: "Americano", price: "150,000 LBP", img: "am.PNG" },
  { name: "Oreo Milk Shake", price: "350,000 LBP", img: "milk-Photoroom.png" },
  { name: "Iced Mocha", price: "290,000 LBP", img: "moc.PNG" },
  { name: "Ice Tea Peach", price: "300,000 LBP", img: "peach.PNG" },
  { name: "Mango Smoothie", price: "350,000 LBP", img: "mang.PNG" },
];

const Menu = () => {
  return (
    <main className="pt-20 pb-20 bg-white min-h-screen">
      <section className="px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 pt-12 pb-2 uppercase">
          FLOW Menu
        </h2>
        <div className="w-20 h-1 bg-[#00563B] mx-auto rounded mb-12" />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {menuItems.map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center border border-gray-200 rounded-xl shadow hover:shadow-lg transition-shadow duration-300 overflow-hidden bg-white"
            >
              <img
                src={`/${item.img}`}
                alt={item.name}
                className="w-[170px] h-[170px] object-cover rounded-t-xl"
              />
              <div className="p-4 flex flex-col items-center gap-2 flex-1 justify-between w-full">
                <div>
                  <h3 className="text-base font-semibold text-gray-800">{item.name}</h3>
                  <p className="text-gray-500 text-sm mt-1">{item.price}</p>
                </div>
                <button
  onClick={() => alert(`${item.name} added to order! `)}
  className="mt-3 w-full border-2 border-[#00563B] bg-[#00563B] text-white font-medium py-2 rounded-full hover:bg-white hover:text-gray-800 transition-all duration-300"
>
  Order Now
</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Menu;
