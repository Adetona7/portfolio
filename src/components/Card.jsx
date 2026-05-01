
const Card = ({ title, description, image, tags, link }) => {
  return (
    <div className="group bg-white rounded-sm shadow-sm overflow-hidden border border-gray-800 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
      {/* Image */}
      {image && (
        <div className="relative overflow-hidden h-48">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      )}

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors font-mono">
          {title}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-3 italic">
          {/* {description} */}
        </p>

        {/* Tags */}
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full hover:bg-blue-200 shadow-sm transition-colors font-mono text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Link */}
        {link && (
          <a
            href={link}
            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors group-hover:underline font-mono"
          >
            View Project
            {/* <svg className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg> */}
          </a>
          
        )}
      </div>
    </div>
  )
}

export default Card
