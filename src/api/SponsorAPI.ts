import { SponsorProps } from "src/types";

import {
  GoogleSpreadsheet,
  GoogleSpreadsheetWorksheet,
  ServiceAccountCredentials,
} from "google-spreadsheet";

export const getSponsorsData = async () => {
  const { SPONSOR_SPREADSHEET_ID, GOOGLE_SERVICE_ACC_EMAIL, GOOGLE_SERVICE_KEY_PRIVATE } =
    process.env;

  const doc = new GoogleSpreadsheet(SPONSOR_SPREADSHEET_ID);

  const credentials: ServiceAccountCredentials = {
    client_email: GOOGLE_SERVICE_ACC_EMAIL,
    private_key: GOOGLE_SERVICE_KEY_PRIVATE,
  };

  await doc.useServiceAccountAuth(credentials);
  await doc.loadInfo();

  // Fetches from first worksheet in spreadsheet. When a new year is created, it will automatically switch to filling sponsor data from there.

  // Load the spreadsheet at index 0, when the board data for a new year is added as a worksheet, it will automatically select from there instead
  const sponsorSheet: GoogleSpreadsheetWorksheet = doc.sheetsByIndex[0];

  // Headers should be in the second row after the first row with title "ACM Board 20XX-20XX"
  await sponsorSheet.loadHeaderRow(2);
  const rows = await sponsorSheet.getRows();

  // Map through array of rows, each one is an object with column headers as keys
  const sponsors = rows
    .map(row => {
      const boardMemberData: SponsorProps = {
        name: row["Name"],
        url: row["Website"],
        logo: row["Logo"],
      };
      return boardMemberData;
    })
    .filter(sponsor => sponsor.logo);

  return sponsors;
};
