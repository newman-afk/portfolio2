import {
  techNotes,
  youtubeClone,
  mobile,
  imageResizer,
  portfolio3d,
} from "./assets/img";

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
    {
      title: "3D Portfolio",
      description: "Experience immersive 3D on my website with ThreeJS.",
      imgUrl: portfolio3d,
      tools: ["React", "Tailwind CSS", "ThreeJs"],
      github: "https://github.com/newman-afk/3d-portfolio.git",
      demo: "https://rust-3d-portfolio.netlify.app/",
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
    {
      title: "Image Resizer",
      description: "Your go-to desktop app for quickly resizing images.",
      imgUrl: imageResizer,
      tools: ["Electron"],
      github: "https://github.com/newman-afk/electron.git",
      demo: "https://github.com/newman-afk/electron#readme",
    },
  ],
};
