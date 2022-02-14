import AllBoardSelected from "public/assets/board-filters/all-board-selected.svg";
import AllBoardEmpty from "public/assets/board-filters/all-board-empty.svg";

import { ORGS } from "src/utils/constants";

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

      {ORGS.map((org) =>
        activeFilters.includes(org) ? (
          <img
            key={`${org}-selected`}
            src={`/assets/board-filters/${org}-selected.svg`}
            alt={`${org} selected`}
            onClick={() =>
              setActiveFilters(activeFilters.filter((e) => e !== org))
            }
          />
        ) : (
          <img
            key={`${org}-unselected`}
            src={`/assets/board-filters/${org}-empty.svg`}
            alt={`${org} unselected`}
            onClick={() => setActiveFilters([org])}
          />
        )
      )}
    </div>
  );
};

export default BoardFilters;
