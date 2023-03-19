// Note: can be improved with local storage
// Note: loader?
// Note: last items from data array (not first)!!!

import { requestJSONData } from "./createJSON";
// path to icons (simulates usage of your own icons despite from API)
import interiorIcon from "../../../assets/section/--occupation/inter-des-icon.png";
import architectureIcon from "../../../assets/section/--occupation/arhit-icon.png";
import planningIcon from "../../../assets/section/--occupation/planning-icon.png";

// to perform event delegation
const btnWrapper = document.querySelector(".btn-wrapper");
// all the buttons inside the wrapper
const btns = btnWrapper.querySelectorAll(".button");
// elemet that contains all the rendered cards
const cardsEl = document.querySelector(".cards");
// array to define the filter by index of pressed button
const FILTERS = ["all", "interior", "architecture", "planning"];
// obj to quickly get the icon path by a filter key
const ICONS_SET = {
  interior: interiorIcon,
  architecture: architectureIcon,
  planning: planningIcon,
};

// helps to make the button unactive
let currActiveButtonIndex = 0;

/**
 * Renders btn by getting the index of new pressed button,
 * also applies logic if same button pressed (Sets to "ALL" filter)
 * @param {Number} nextActiveIndex
 * @returns {undefined}
 */
const renderBtns = function (nextActiveIndex) {
  if (nextActiveIndex === currActiveButtonIndex) {
    btns[nextActiveIndex].classList.remove("button--rounded-active");
    btns[0].classList.add("button--rounded-active");
    currActiveButtonIndex = 0;
    return;
  }

  btns[nextActiveIndex].classList.add("button--rounded-active");
  btns[currActiveButtonIndex].classList.remove("button--rounded-active");
  currActiveButtonIndex = nextActiveIndex;
};

/**
 * Processing data from JSON (fake API request)
 * @param {String} filter
 * @returns {Array}
 * Array[Object]
 * where object contains:
 * data: data of certain item,
 * filter: filter for rendering(to calculate a css class)
 * icon: path to icon file (for image tag)
 */
const processData = async function (filter) {
  const response = await requestJSONData();
  const data = JSON.parse(response);

  const interiorDataLength = data.interior.length;
  const architectureDataLength = data.architecture.length;
  const planningDataLength = data.planning.length;

  if (filter === "all") {
    return [
      {
        data: data.interior[interiorDataLength - 1],
        filter: "interior",
        icon: interiorIcon,
      },
      {
        data: data.architecture[architectureDataLength - 1],
        filter: "architecture",
        icon: architectureIcon,
      },
      {
        data: data.planning[planningDataLength - 1],
        filter: "planing",
        icon: planningIcon,
      },
    ];
  }

  return data[filter].map((data) => {
    return { data, filter, icon: ICONS_SET[filter] };
  });
};

/**
 * Renders the given array of objects (returned from processData func)
 * @param {Array} processedData
 */
const renderProcessedData = function (processedData) {
  cardsEl.innerHTML = "";

  const htmlStrings = processedData.map((item) => {
    const data = item.data;
    const filter = item.filter;
    const icon = item.icon;

    return `
    <figure class="card card--${filter}">
        <img src="${icon}" alt="interior design icon">
        <h4 class="card__title">${data.title}</h4>
        <span class="card__text">
            ${data.info}
        </span>
    </figure>
    `;
  });

  htmlStrings.forEach((html) => {
    cardsEl.insertAdjacentHTML("beforeend", html);
  });
};

const filterEventHandler = async (e) => {
  if (!e.target.closest(".button")) return;

  const nextActiveIndex = Number(e.target.dataset["index"]);
  renderBtns(nextActiveIndex);
  const filter = FILTERS[currActiveButtonIndex];
  const processedData = await processData(filter);
  renderProcessedData(processedData);
};

btnWrapper.addEventListener("click", filterEventHandler);

// first loading without user interaction
(async () => {
  renderProcessedData(await processData("all"));
})();
