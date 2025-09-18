import { FaShareSquare, FaDownload, FaArrowLeft } from "react-icons/fa";
import Certificate from "../assets/images/Certificate.png";
import Nft from "../assets/images/Nft.png";

const Certification = () => {
  return (
    <div className="min-h-screen bg-[#1D1751] text-white px-20 py-10 flex flex-col space-y-10">
      {/* Back Button */}
      <button className="flex items-center space-x-4">
        <FaArrowLeft className="text-xl" />
        <span className="text-xl">Certification</span>
      </button>

      <div className="grid grid-cols-2 gap-10">

        {/* left div  */}
        <div className="flex flex-col justify-between space-y-5">
          {/* Completion Card */}
          <div className="bg-[#4b5563] px-4 py-8 flex items-center space-x-4">
            {/* replace with user details  */}
            <div className="w-15 h-15 rounded-full bg-gradient-to-r from-purple-600 to-lime-400"></div>
            <div>
              <h2 className="font-semibold">Completed by Youruiguy</h2>
              <p className="text-sm">
                June 17 2025 &nbsp; | &nbsp; Grade achieved: 89%
              </p>
            </div>
          </div>

          {/* NFT Section */}
          <div className="flex-1">
            <h3 className="text-lg font-semibold mb-4">
              You have also received an NFT
            </h3>

            <div className="flex space-x-5">
              <img
                src={Nft}
                alt="NFT Reward"
                className="w-50 h-50 object-cover"
              />
              {/* replace with dynamic data */}
              <div className="flex flex-col justify-end">
                <p className="font-semibold">Futuristic</p>
                <p className="text-sm text-gray-300">NFT UID: #123242</p>
                <p className="text-sm text-gray-300">Creator: Ascendix</p>
                <p className="text-sm text-gray-300">ETH Ecosystem</p>
              </div>
            </div>

            {/* NFT Buttons */}
            <div className="mt-6 flex space-x-4">
              <button className="flex items-center space-x-2 border border-[#B6E63A] px-6 py-2 text-sm">
                <FaShareSquare /> <span>Share NFT</span>
              </button>
              <button className="flex items-center space-x-2 bg-[#B6E63A] px-6 py-2 text-sm">
                <FaDownload /> <span>Download NFT</span>
              </button>
            </div>
          </div>
        </div>

        {/* right div  */}
        <div className="flex flex-col justify-between">
          {/* Certificate Preview */}
          <div className="w-full h-96 flex items-center justify-center">
            <img
              src={Certificate}
              alt="Certificate"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Certificate Buttons */}
          <div className="mt-6 flex space-x-4">
            <button className="flex items-center space-x-2 border border-[#B6E63A] px-6 py-2 text-sm">
              <FaShareSquare /> <span>Share Certificate</span>
            </button>
            <button className="flex items-center space-x-2 bg-[#B6E63A] px-6 py-2 text-sm">
              <FaDownload /> <span>Download Certificate</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certification;
