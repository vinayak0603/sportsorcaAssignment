import { FaFacebookF, FaXTwitter, FaInstagram } from 'react-icons/fa6';

const TopBar = () => {
  return (
    <div className="w-full bg-black text-white px-4 py-3 flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0">
      {/* Social Icons */}
      <div className="flex space-x-3">
        {[FaFacebookF, FaXTwitter, FaInstagram].map((Icon, index) => (
          <div
            key={index}
            className="w-9 h-9 flex items-center justify-center rounded-full bg-[#1e1e1e] hover:text-blue-500 hover:border hover:border-blue-500 transition"
          >
            <Icon size={16} />
          </div>
        ))}
      </div>

      {/* Logo */}
      <div className="flex items-center justify-center">
        <img
          src={'https://res.cloudinary.com/dkoqcp1g9/image/upload/v1748495222/SportsOrca-Logo_cp4woj.png'}
          alt="SportsOrca Logo"
          className="h-16 sm:h-20"
        />
      </div>

      {/* Subscribe Button */}
      <div className="flex justify-center md:justify-end">
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
          SUBSCRIBE NOW
        </button>
      </div>
    </div>
  );
};

export default TopBar;
