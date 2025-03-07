import { projects } from "../utils/projects";
export default function MobileProjects() {

  return (
    <div className="relative xl:hidden flex flex-col gap-24">
      {projects &&
        projects.map((project) => (
          <div
            key={project.id}
            className="w-full max-w-xl mx-auto bg-white rounded-lg overflow-hidden shadow-md"
          >
            <div className="relative h-64 md:h-72 w-full">
              <img
                src={project.image || "/placeholder.svg"}
                alt={`Screenshot of ${project.name} project`}
                className="object-cover w-full h-full"
              />
            </div>

            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">{project.name}</h2>

              <div className="flex flex-wrap gap-2 mb-3">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="inline-block px-2 py-1 text-xs bg-gray-100 rounded-full"
                  >
                    {tech.replace("devicon-", "").replace("-plain", "")}
                  </span>
                ))}
              </div>

              <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                {project.description}
              </p>

              <div className="flex flex-col md:flex-row gap-2">
                {project.viewLink && (
                  <a
                    href={project.viewLink}
                    className="w-full py-2 bg-amber-500 text-center text-white font-medium rounded-md flex items-center justify-center"
                  >
                    Ver Projeto
                  </a>
                )}

                {project.codeLink && (
                  <a
                    href={project.codeLink}
                    className="w-full py-2 bg-black text-center text-white font-medium rounded-md flex items-center justify-center"
                  >
                    Ver Código
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}
