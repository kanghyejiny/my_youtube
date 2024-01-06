import { DiApple } from "react-icons/di";
import { MdOndemandVideo } from "react-icons/md";
import { MdRecommend } from "react-icons/md";
import { IoLogoReact } from "react-icons/io5";
import { IoLogoJavascript } from "react-icons/io5";
import { IoLogoVue } from "react-icons/io5";
import { IoServer } from "react-icons/io5";

import { AiFillGithub } from "react-icons/ai";
import { AiOutlineCodepen } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";

export const headerMenus = [
  {
      title: "코딩애플",
      icon: <DiApple />,
      src: "/"
  },
  {
      title: "추천 영상",
      icon: <MdOndemandVideo />,
      src: "/today"
  },
  {
      title: "추천 개발자",
      icon: <MdRecommend />,
      src: "/developer"
  },
  {
      title: "React",
      icon: <IoLogoReact />,
      src: "/reactb"
  },
  {
      title: "JavaScript",
      icon: <IoLogoJavascript />,
      src: "/jsb"
  },
  {
      title: "Vue",
      icon: <IoLogoVue />,
      src: "/vue"
  },
  {
      title: "웹서버 개발",
      icon: <IoServer />,
      src: "/webserver"
  },
];

export const searchKeyword = [
  {
      title: "codingapple",
      src: "/search/codingapple"
  },
  {
      title: "HTML",
      src: "/search/html"
  },
  {
      title: "CSS",
      src: "/search/css"
  },
  {
      title: "JavaScript",
      src: "/search/javascript"
  },
  {
      title: "React.js",
      src: "/search/react.js"
  },
  {
      title: "Vue.js",
      src: "/search/vue.js"
  },
  {
      title: "Next.js",
      src: "/search/next.js"
  },
  {
      title: "Node.js",
      src: "/search/node.js"
  },
  {
      title: "SQL",
      src: "/search/sql"
  },
  {
      title: "portfolio",
      src: "/search/React Portfolio"
  },
  {
      title: "music",
      src: "/search/NewJeans"
  }
];

export const snsLink = [
  {
      title: "github",
      url: "https://github.com/kanghyejiny",
      icon: <AiFillGithub />
  },
  {
      title: "youtube",
      url: "#none",
      icon: <AiFillYoutube />
  },
  {
      title: "codepen",
      url: "#none",
      icon: <AiOutlineCodepen />
  },
  {
      title: "instagram",
      url: "#none",
      icon: <AiOutlineInstagram />
  },
]