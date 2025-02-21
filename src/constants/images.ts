import radialGradient from "../assets/images/Vector.png";
import cable from "../assets/images/cable.png";
import citationsy from "../assets/images/citationsy.png";
import miminum from "../assets/images/minimun.png";
import packfleet from "../assets/images/packfleet.png";
import rebank from "../assets/images/rebank.png";
import hypermile from "../assets/images/hypermile.png";
import trainedBYImg from "../assets/images/trainedBYImg.png";
import channelsIMg from "../assets/images/channelsImg.png";
import nocodeImg from "../assets/images/nocodeImg.png";
import NetConfIcon from "../assets/images/NetConfIcon.png";
export const images = {
  image: {
    radialGradient,
    cable,
    miminum,
    packfleet,
    rebank,
    hypermile,
    citationsy,
    trainedBYImg,
    channelsIMg,
    nocodeImg,
    NetConfIcon,
  },
} as const;

export type ImageAssets = typeof images;
