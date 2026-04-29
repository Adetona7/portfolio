import Navbar from './components/Navbar'
import Carousel from './components/Carousel'
import Card from './components/Card'

const App = () => {
  const carouselItems = [
    {
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200',
      title: 'Full Stack Developer',
      description: 'Building modern web applications with React, Node.js, and more'
    },
    {
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200',
      title: 'Creative Designer',
      description: 'Crafting beautiful and intuitive user experiences'
    },
    {
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200',
      title: 'Problem Solver',
      description: 'Turning complex challenges into elegant solutions'
    }
  ]

  const projectCards = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-featured online shopping platform with cart, checkout, and payment integration. Built with React and Node.js.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600',
      tags: ['React', 'Node.js', 'MongoDB'],
      link: '#'
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates and team features. Includes drag-and-drop functionality.',
      image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600',
      tags: ['Vue.js', 'Firebase', 'Tailwind'],
      link: '#'
    },
    {
      title: 'Weather Dashboard',
      description: 'A beautiful weather dashboard with location-based forecasts, interactive maps, and historical data visualization.',
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600',
      tags: ['React', 'API', 'Chart.js'],
      link: '#'
    },
    {
      title: 'Social Media App',
      description: 'A modern social media platform with posts, comments, likes, and real-time messaging. Features a clean, responsive design.',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600',
      tags: ['React', 'Redux', 'Socket.io'],
      link: '#'
    },
    {
      title: 'Portfolio Website',
      description: 'A stunning portfolio website showcasing projects and skills with smooth animations and interactive elements.',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600',
      tags: ['React', 'Framer Motion', 'Tailwind'],
      link: '#'
    },
    {
      title: 'Fitness Tracker',
      description: 'A comprehensive fitness tracking app with workout plans, progress tracking, and nutrition logging.',
      image: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=600',
      tags: ['React Native', 'Firebase', 'Expo'],
      link: '#'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section with Carousel */}
      <section className="pt-16">
        <Carousel items={carouselItems} autoPlay={true} interval={5000} />
      </section>

      {/* Projects Section with Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Check out some of my recent work and personal projects
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectCards.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              description={card.description}
              image={card.image}
              tags={card.tags}
              link={card.link}
            />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">© {new Date().getFullYear()} Portfolio.</p>
        </div>
      </footer>
    </div>
  )
}

export default App