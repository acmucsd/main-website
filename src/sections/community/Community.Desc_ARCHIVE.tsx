// import { useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import AILogo from "public/assets/logos/acm-ai.svg";
// import CyberLogo from "public/assets/logos/acm-cyber.svg";
// import HackLogo from "public/assets/logos/acm-hack.svg";
// import DesignLogo from "public/assets/logos/acm-design.svg"
// import { Url } from "url";

// interface CommunitiesDescProps {
//   verticalLayout?: boolean;
//   colLayout?: boolean;

//   community: string;
//   logo: string;
//   description: string;
//   homeLink?: Url | null;
//   instagram?: Url;
//   discord?: Url;
// }

// const defaultProps: CommunitiesDescProps = {
//   verticalLayout: false,
//   colLayout: false,

//   community: "ACM General",
//   logo: AILogo.src,
//   description: "ACM's Main Branch",
//   homeLink: null,
//   instagram: null,
//   discord: null,
// };

// const CommunitiesDesc: React.FC<CommunitiesDescProps> = ({
//   verticalLayout,
//   colLayout,
//   community,
//   logo,
//   description,
//   homeLink,
//   instagram,
//   discord,
// }) => {
//   const [hasBeenVisible, setHasBeenVisible] = useState(true);
//   const communityIdentifier = community.replace("ACM", "").trim();
  
//   if (colLayout) {
//     return (
//       <div className="colWrapper">
//         <div
//           className={
//             verticalLayout ? "communitiesGrid vertical" : "communitiesGrid"
//           }
//         >
//           <Link href={`/communities#${communityIdentifier}`}>
//             <a
//               className={`communitiesGrid__community ${hasBeenVisible ? `${communityIdentifier}--visible` : ""
//                 }`}
//             >
//               <img src={logo} alt={community} />
//               <div className="communitiesGrid__community__label">
//                 <h3>
//                   <span>ACM</span> {communityIdentifier}
//                 </h3>
//                 <p>Artificial Intelligence</p>
//               </div>
//             </a>
//           </Link>
          
//         </div>
//       </div>
//     );
//   }
// };

// CommunitiesDesc.defaultProps = defaultProps;
// export default CommunitiesDesc;
