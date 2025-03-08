/* eslint-disable react/prop-types */
// import { projects } from "../utils/projects";
import { ButtonCosmic } from "./button-cosmic";
import { useTranslation } from "react-i18next";
export default function MobileProjects({data}) {
  const { t } = useTranslation();

  return (
    <section className="point-2 relative xl:hidden flex flex-col gap-24 px-3">
      {data &&
        data.map((project) => (
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
                  <i key={index} className={`${tech} colored text-3xl`} />
                ))}
              </div>

              <p className="text-sm text-gray-600 mb-4">
                {project.description}
              </p>

              <div className="flex flex-col md:flex-row gap-2">
                {project.viewLink && (
                  <span className="open-mask-ball">
                    <ButtonCosmic
                      fullWidth="true"
                      pink="true"
                      href={project.viewLink}
                    >
                      {t("viewLive")}
                    </ButtonCosmic>
                  </span>
                )}

                {project.codeLink && (
                  <span className="open-mask-ball">
                    <ButtonCosmic fullWidth="true" href={project.codeLink}>
                      {t("viewCode")}
                    </ButtonCosmic>
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
    </section>
  );
}
