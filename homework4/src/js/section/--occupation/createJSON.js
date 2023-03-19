import { randInt } from "../../helpers";

const data = {
  interior: [
    {
      title: "Interior 1",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde quibusdam numquam nobis amet impedit harum cupiditate.",
    },
    {
      title: "Interior 2",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde quibusdam numquam nobis amet impedit harum cupiditate.",
    },
    {
      title: "Interior 3",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde quibusdam numquam nobis amet impedit harum cupiditate.",
    },
  ],
  architecture: [
    {
      title: "Architecture 1",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde quibusdam numquam nobis amet impedit harum cupiditate.",
    },
    {
      title: "Architecture 2",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde quibusdam numquam nobis amet impedit harum cupiditate.",
    },
    {
      title: "Architecture 3",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde quibusdam numquam nobis amet impedit harum cupiditate.",
    },
    {
      title: "Architecture 4",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde quibusdam numquam nobis amet impedit harum cupiditate.",
    },
  ],
  planning: [
    {
      title: "Planning 1",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde quibusdam numquam nobis amet impedit harum cupiditate.",
    },
  ],
};

/**
 * Simulates a response from API (from 0,8s to 1,8s)
 * @returns {Promise} Resolved JSON data
 */
export const requestJSONData = function () {
  return new Promise((resolve, _) => {
    setTimeout(() => {
      resolve(JSON.stringify(data));
    }, randInt(800, 1800));
  });
};
