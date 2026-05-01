import ContactItem from "./ContactItem";
import { FaPhone, FaEnvelope, FaGlobe } from "react-icons/fa";

const PhoneMockup = () => {
  return (
    <div className="relative mx-auto w-60 transform rotate-[4deg] transition-transform hover:rotate-[-1deg] font-mono">
      {/* Phone Frame */}
      <div className="rounded-[3rem] border-7 border-gray-700 bg-white shadow-2xl">
        {/* Phone Screen */}
        <div className="rounded-[2rem] bg-white p-8">
          <h3 className="mb-6 text-center text-lg font-semibold text-gray-800">
            Contact Info
          </h3>
          <div className="space-y-6">
            <ContactItem
              icon={<FaPhone />}
              label="Phone"
              value="+234 907 191 4338"
            />
           <br/>
            <ContactItem
              icon={<FaEnvelope />} 
              label="Email"
              value="adetonabukum.com"
            />
            <br/>
            <ContactItem
              icon={<FaGlobe />}
              label="Website"
              value="www.bukums.com"
            />
            
          </div>
        </div>
      </div>
      {/* Home Indicator */}
      <div className="mx-auto mt-4 w-24 rounded-full bg-gray-300 py-1" />
    </div>
  );
};

export default PhoneMockup;