import AllBoardSelected from "public/assets/board-filters/all-board-selected.svg";
import AllBoardEmpty from "public/assets/board-filters/all-board-empty.svg";

import AISelected from "public/assets/board-filters/ai-selected.svg";
import AIEmpty from "public/assets/board-filters/ai-empty.svg";

import GeneralSelected from "public/assets/board-filters/general-selected.svg";
import GeneralEmpty from "public/assets/board-filters/general-empty.svg";

import CyberSelected from "public/assets/board-filters/cyber-selected.svg";
import CyberEmpty from "public/assets/board-filters/cyber-empty.svg";

import HackSelected from "public/assets/board-filters/hack-selected.svg";
import HackEmpty from "public/assets/board-filters/hack-empty.svg";

import InnovateSelected from "public/assets/board-filters/innovate-selected.svg";
import InnovateEmpty from "public/assets/board-filters/innovate-empty.svg";

const BoardFilters = ({ activeFilters, setActiveFilters }) => {
  return (
    <div className="about__board__filters">
      <p>Filter:</p>
      {activeFilters.length == 0 ? (
        <img
          alt="all board is now selected"
          src={AllBoardSelected.src}
          onClick={() => setActiveFilters([])}
        />
      ) : (
        <img
          alt="all board is no longer selected"
          src={AllBoardEmpty.src}
          onClick={() => setActiveFilters([])}
        />
      )}

      {activeFilters.includes("general") ? (
        <img
          alt="general is now selected"
          src={GeneralSelected.src}
          onClick={() =>
            setActiveFilters(activeFilters.filter((e) => e !== "general"))
          }
        />
      ) : (
        <img
          alt="general is not selected"
          src={GeneralEmpty.src}
          onClick={() => setActiveFilters(["general"])}
        />
      )}
      <br />
      {activeFilters.includes("ai") ? (
        <img
          alt="ai is now selected"
          src={AISelected.src}
          onClick={() => {
            setActiveFilters(activeFilters.filter((e) => e !== "ai"));
          }}
        />
      ) : (
        <img
          alt="ai is not selected"
          src={AIEmpty.src}
          onClick={() => setActiveFilters(["ai"])}
        />
      )}
      {activeFilters.includes("cyber") ? (
        <img
          alt="cyber is now selected"
          src={CyberSelected.src}
          onClick={() => {
            setActiveFilters(activeFilters.filter((e) => e !== "cyber"));
          }}
        />
      ) : (
        <img
          alt="cyber is not selected"
          src={CyberEmpty.src}
          onClick={() => setActiveFilters(["cyber"])}
        />
      )}
      {activeFilters.includes("hack") ? (
        <img
          src={HackSelected.src}
          alt="hack is selected"
          onClick={() => {
            setActiveFilters(activeFilters.filter((e) => e !== "hack"));
          }}
        />
      ) : (
        <img
          alt="hack is not selected"
          src={HackEmpty.src}
          onClick={() => setActiveFilters(["hack"])}
        />
      )}
      {activeFilters.includes("innovate") ? (
        <img
          src={InnovateSelected.src}
          alt="innovate is selected"
          onClick={() => {
            setActiveFilters(activeFilters.filter((e) => e !== "innovate"));
          }}
        />
      ) : (
        <img
          alt="innovate is not selected"
          src={InnovateEmpty.src}
          onClick={() => setActiveFilters(["innovate"])}
        />
      )}
    </div>
  );
};

export default BoardFilters;
