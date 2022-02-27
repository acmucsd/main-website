import { BoardMemberProps } from "src/types";

const formatLinkedIn = val => {
  return val.includes("https://www.linkedin.com/in/") ? val : `https://www.linkedin.com/in/${val}`;
};

export const getBoardData = async () => {
  const url = process.env.SPREADSHEET_URL;

  const data: BoardMemberProps[] = await fetch(url)
    .then(res => res.text())
    .then(res => JSON.parse(res.substring(47).slice(0, -2))) // only get object
    .then(res => {
      const cols = res.table.cols.map((col, idx) => {
        return { idx, label: col.label };
      });
      const colMap = {};
      cols.forEach(colHeader => {
        colMap[colHeader.label.toLowerCase()] = colHeader.idx;
      });
      colMap["team"] = 0; // Team shall always be the first column

      const rows = res.table.rows
        .map(row => row.c)
        .map(row => {
          const get = label => row[colMap[label.toLowerCase()]]?.v ?? ""; // helper function for repetitive task
          const userData: BoardMemberProps = {
            name: get("Name"), // use spreadsheet column headers to find data
            org: get("Team").toLowerCase(),
            title: get("Position"),
            email: get("ACM Email"),
            profile_image: get("Profile Picture"),
            personal_link: get("Website"),
            linkedin_link: formatLinkedIn(get("LinkedIn")),
          };
          return userData;
        })
        .filter(user => user.name) // don't include anyone missing a name
        .filter(user => user.org && user.org !== "members at large"); // only show users in an actual org (not members at large)

      return rows;
    });
  console.log(data);

  return data;
};
