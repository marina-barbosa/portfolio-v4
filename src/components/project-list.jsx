import { useTranslation } from "react-i18next";
import MobileProjects from "./mobile-projects";
import { ProjectsScrollTrigger } from "./projects-scroll-trigger";
export const ProjectList = () => {
  const { t } = useTranslation();
  const projects = [
    {
      id: 1,
      name: t("project-list.sprawl.name"),
      image: "/sprawl.png",
      technologies: [
        "devicon-javascript-plain",
        "devicon-nodejs-plain-wordmark",
        "devicon-express-original",
        "devicon-postgresql-plain-wordmark",
        "devicon-react-original-wordmark",
        "devicon-tailwindcss-original",
      ],
      description: t("project-list.sprawl.description"),
      viewLink: null,
      codeLink: null,
    },
    {
      id: 2,
      name: t("project-list.refood.name"),
      image: "/refood.jpeg",
      technologies: [
        "devicon-java-plain-wordmark",
        "devicon-spring-original-wordmark",
        "devicon-firebase-plain-wordmark",
        "devicon-postgresql-plain-wordmark",
        "devicon-react-original-wordmark",
        "devicon-tailwindcss-original",
      ],
      description: t("project-list.refood.description"),
      viewLink: null,
      codeLink: "https://github.com/IReFoodI/Front-end",
    },
    {
      id: 5,
      name: t("project-list.ntt_movie_data.name"),
      image: "/ntt-movie-data.png",
      technologies: [
        "devicon-angularjs-plain",
        "devicon-bootstrap-plain-wordmark",
        "devicon-css3-plain-wordmark",
        "devicon-html5-plain-wordmark",
        "devicon-firebase-plain-wordmark",
      ],
      description: t("project-list.ntt_movie_data.description"),
      viewLink: "https://nttmoviedata.netlify.app/",
      codeLink: "https://github.com/marina-barbosa/ntt-movie-data",
    },
  ];
  return (
    <>
      <MobileProjects data={projects} />
      <ProjectsScrollTrigger data={projects} />
    </>
  );
};
