import { FaPhone, FaEnvelope, FaGlobe } from "react-icons/fa";

const ContactItem = ({ icon, label, value }) => {
  return (
    <div className="flex items-center gap-4">
      <div className="flex items-center justify-center">
        <span className="text-lg text-gray-800">{icon}</span>
      </div>
      <div>
        <p className="text-sm uppercase tracking-wider text-gray-500">{label}</p>
        <p className="font-medium text-gray-800">{value}</p>
      </div>
    </div>
  );
};

export default ContactItem;