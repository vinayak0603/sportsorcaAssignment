import { FaFacebookF, FaXTwitter, FaInstagram } from 'react-icons/fa6';


const TopBar = () => {
  return (
    <div className="w-full bg-black text-white px-4 py-3 flex items-center justify-between">
      {/* Social Icons */}
      <div className="flex space-x-3">
        {[FaFacebookF, FaXTwitter, FaInstagram].map((Icon, index) => (
          <div
            key={index}
            className="w-9 h-9 flex items-center justify-center rounded-full bg-[#1e1e1e] hover:text-blue-500 hover:border hover:border-blue-500"
          >
            <Icon size={16} />
          </div>
        ))}
      </div>

      {/* Logo */}
      <div className="flex items-center space-x-2">
        <img src={'./src/assets/logo.png'} alt="SportsOrca Logo" className="h-20" />
      </div>

      {/* Subscribe Button */}
      <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
        SUBSCRIBE NOW
      </button>
    </div>
  );
};

export default TopBar;
