import { BoardMemberProps } from "src/types";

import {
  GoogleSpreadsheet,
  GoogleSpreadsheetWorksheet,
  ServiceAccountCredentials,
} from "google-spreadsheet";

// Take raw data from row, if its blank do nothing
// Otherwise, consistently format as a LinkedIn profile url (some people may provide only the username portion on the spreadsheet)
const formatLinkedIn = (val: string): string => {
  if (!val) return null;
  return val.includes("https://www.linkedin.com/in/") ? val : `https://www.linkedin.com/in/${val}`;
};

export const getBoardData = async () => {
  const { BOARD_SPREADSHEET_ID, GOOGLE_SERVICE_ACC_EMAIL, GOOGLE_SERVICE_KEY_PRIVATE } =
    process.env;

  const doc = new GoogleSpreadsheet(BOARD_SPREADSHEET_ID);

  const credentials: ServiceAccountCredentials = {
    client_email: GOOGLE_SERVICE_ACC_EMAIL,
    private_key: GOOGLE_SERVICE_KEY_PRIVATE,
  };

  await doc.useServiceAccountAuth(credentials);
  await doc.loadInfo();

  // Fetches from first worksheet in spreadsheet. When a new year is created, it will automatically switch to filling board data from there.

  // Load the spreadsheet at index 0, when the board data for a new year is added as a worksheet, it will automatically select from there instead
  const boardSheet: GoogleSpreadsheetWorksheet = doc.sheetsByIndex[0];

  // Headers should be in the second row after the first row with title "ACM Board 20XX-20XX"
  await boardSheet.loadHeaderRow(2);
  const rows = await boardSheet.getRows();

  // Map through array of rows, each one is an object with column headers as keys
  const boardMembers = rows
    .map(row => {
      const boardMemberData: BoardMemberProps = {
        name: row["Name"],
        org: row["Team"]?.toLowerCase(),
        title: row["Position"],
        profile_image: row["Profile Picture"],
        email: row["ACM Email"] || null,
        personal_link: row["Website"] || null,
        linkedin_link: formatLinkedIn(row["LinkedIn"] || null),
      };
      return boardMemberData;
    })
    .filter(user => user.name) // name is required
    .filter(user => user.org && user.org !== "members at large") // valid suborg is required
    .filter(user => user.title) // position title is required
    .filter(user => user.profile_image); // image url is required

  return boardMembers;
};
