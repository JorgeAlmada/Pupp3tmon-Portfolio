import React from "react";

function App() {
  const projects = [
    {
      id: 1,
      title: "Kart Racing Game",
      videoId: "iPvXMSstERg",
      description: "A kart racing game implementation where players can select parts to build their custom kart. Features track logic that plays the selected track with the chosen kart configuration. Kart selections are sent through the teleport service and stored in a datastore for persistence.",
      technologies: ["Lua", "Roblox", "Datastore", "Teleport Service"],
    },
    {
      id: 2,
      title: "Crafting System",
      videoId: "gGkyR9YI0fU",
      description: "A comprehensive resource gathering and crafting system. Players can gather resources, craft tools, and create crafting parts that can be placed on the map. Features an inventory window that tracks all collected resources, which are saved to a datastore for persistence across sessions.",
      technologies: ["Lua", "Roblox", "UI/UX", "Datastore"],
    },
    {
      id: 3,
      title: "Fishing Minigame",
      videoId: "4MIwb5ZCFYU",
      description: "A fishing minigame implemented entirely with UI, inspired by the Stardew Valley fishing minigame. Features engaging gameplay mechanics and smooth user interface interactions.",
      technologies: ["Lua", "Roblox", "UI"],
    },
    {
      id: 4,
      title: "Combat Mechanics",
      videoId: "a_hjXGWHrps",
      description: "A small project displaying combat mechanics. This is an early prototype showcasing basic combat functionality. Currently incomplete and in early development stages.",
      technologies: ["Lua", "Roblox", "Animations"],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-700">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-white">Pupp3tmon's Portfolio</h1>
            <div className="flex gap-4">
              <a href="#about" className="text-gray-300 hover:text-white transition-colors">
                About
              </a>
              <a href="#projects" className="text-gray-300 hover:text-white transition-colors">
                Projects
              </a>
              <a href="#contact" className="text-gray-300 hover:text-white transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* About Section */}
      <section id="about" className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center">
            About Me
          </h2>
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-white/20 shadow-2xl">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden bg-gradient-to-br from-blue-400 to-purple-500 shadow-lg border-4 border-white/20">
                <img
                  src="/Frog_Chrono.png"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 text-gray-200 space-y-4">
                <p className="text-lg leading-relaxed">
                  Hi, I'm Pupp3tmon! <br /> I'm a software engineer with over 7 years of experience, currently working as a senior software engineer. 
                  My primary expertise lies in JavaScript, though I've also worked with Java, C#, and PHP. I have extensive 
                  experience with modern frontend frameworks like React and Angular.
                </p>
                <p className="text-lg leading-relaxed">
                  I'm well-versed in cloud technologies and DevOps tools including AWS, Kubernetes, Docker, and Datadog. 
                  Recently, I've started exploring Roblox development, learning Lua, animations, and game mechanics. 
                  While I'm a beginner in the Roblox ecosystem, I'm bringing my years of software engineering experience 
                  to create engaging game experiences. <br />
                  Even though I'm a beginner in the Roblox ecosystem, i have a strong foundation in software engineering,
                  and I'm confident that I can deliver whatever you need.
                </p>
                <div className="flex flex-wrap gap-2 mt-6">
                  <span className="px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-400/30">
                    JavaScript
                  </span>
                  <span className="px-4 py-2 bg-purple-500/20 text-purple-300 rounded-full text-sm border border-purple-400/30">
                    Lua
                  </span>
                  <span className="px-4 py-2 bg-green-500/20 text-green-300 rounded-full text-sm border border-green-400/30">
                    Roblox
                  </span>
                  <span className="px-4 py-2 bg-pink-500/20 text-pink-300 rounded-full text-sm border border-pink-400/30">
                    React
                  </span>
                  <span className="px-4 py-2 bg-yellow-500/20 text-yellow-300 rounded-full text-sm border border-yellow-400/30">
                    AWS
                  </span>
                  <span className="px-4 py-2 bg-cyan-500/20 text-cyan-300 rounded-full text-sm border border-cyan-400/30">
                    Kubernetes
                  </span>
                  <span className="px-4 py-2 bg-orange-500/20 text-orange-300 rounded-full text-sm border border-orange-400/30">
                    Docker
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
            My Roblox Projects
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-white/10 backdrop-blur-md rounded-xl overflow-hidden border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:border-white/40"
              >
                {/* Video Player */}
                <div className="relative w-full aspect-video bg-black rounded-t-xl overflow-hidden">
                  <iframe
                    src={`https://www.youtube.com/embed/${project.videoId}`}
                    title={project.title}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                
                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-white/10 text-gray-300 rounded-md text-sm border border-white/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
            Get In Touch
          </h2>
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-white/20 shadow-2xl">
            <div className="space-y-6">
              <p className="text-gray-200 text-center text-lg mb-8">
                Feel free to reach out if you'd like to collaborate or just say hello!
              </p>
              
              {/* Email Contact */}
              <a
                href="mailto:pupp3tmon@gmail.com"
                className="flex items-center justify-center gap-3 w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span>pupp3tmon@gmail.com</span>
              </a>

              {/* Discord Contact */}
              <button
                onClick={() => {
                  navigator.clipboard.writeText("dtdblaziken");
                  alert("Discord username copied to clipboard: dtdblaziken");
                }}
                className="flex items-center justify-center gap-3 w-full bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63-.99-1.22-1.5-1.5a.076.076 0 0 1-.041-.07v-.09c0-.05.015-.09.043-.116.616-.44 1.23-.9 1.791-1.406a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.56.506 1.175.965 1.792 1.406.028.026.043.067.043.116v.09a.076.076 0 0 1-.042.07c-.51.28-1.038.87-1.5 1.5a.077.077 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                </svg>
                <span>dtdblaziken</span>
                <span className="text-sm opacity-75">(Click to copy)</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-700 bg-gray-900/50 backdrop-blur-md py-8">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>&copy; 2025 Pupp3tmon's Portfolio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
