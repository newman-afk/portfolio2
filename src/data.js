import { techNotes, youtubeClone, mobile } from "./assets/img";

export const projects = {
  fullStack: [
    {
      title: "TechNotes",
      description:
        "Your one-stop-shop for small company employee note management and a robust authentication system.",
      imgUrl: techNotes,
      tools: ["MERN Stack"],
      github: "https://github.com/newman-afk/techNotes-frontend.git",
      demo: "https://fuhuahu-technotes.onrender.com/",
    },
  ],
  frontEnd: [
    {
      title: "YouTube Clone",
      description:
        "Personalize your YouTube experience with our customizable website.",
      imgUrl: youtubeClone,
      tools: ["React", "Material-UI"],
      github: "https://github.com/newman-afk/YouTube-clone.git",
      demo: "https://fuhuahu-youtube-clone.netlify.app/",
    },
  ],
  mobile: [
    {
      title: "ProNef",
      description:
        "Experience seamless mobile browsing with our React Native app",
      imgUrl: mobile,
      tools: ["React-Native"],
      github: "https://github.com/newman-afk/react-native-first.git",
      demo: "https://fuhuahu-react-native-taste.netlify.app/",
    },
  ],
};
