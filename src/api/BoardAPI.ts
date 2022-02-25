const get = (valueObj) => valueObj?.v ?? "";

const getName = (userData) => get(userData[2]);

const getOrg = (userData) => {
  if (get(userData[0]).toLowerCase() === "members at large") return "";
  return get(userData[0]).toLowerCase();
};

const getTitle = (userData) => {
  if (!get(userData[1]) || get(userData[0] === "-----")) return "";
  return get(userData[1]);
};

const getSpecialization = (userData) => {
  if (!get(userData[3]) || get(userData[3]) === "-----") return "";
  return get(userData[3]);
};

const getImage = (userData) => get(userData[22]);

const getACMEmail = (userData) => get(userData[9]);

const getUCSDEmail = (userData) => get(userData[10]);

const getLinkedIn = (userData) => {
  return get(userData[13]).includes("https://www.linkedin.com/in/")
    ? get(userData[13])
    : `https://www.linkedin.com/in/${get(userData[13])}`;
};

const getWebsite = (userData) => get(userData[14]);

export const getBoardData = async () => {
  const url = process.env.SPREADSHEET_URL;

  const rawData: { c: { v: any }[] }[] = await fetch(url) // This is the type thats given cant change
    .then((res) => res.text())
    .then((res) => JSON.parse(res.substring(47).slice(0, -2))?.table?.rows); // strip weird data header
  return rawData
    .map((row) => row.c) // Map row object to row data array
    .map((userData) => ({
      name: getName(userData),
      org: getOrg(userData),
      title: getTitle(userData),
      specialization: getSpecialization(userData),
      profile_image: getImage(userData),
      email: getUCSDEmail(userData),
      linkedin_link: getLinkedIn(userData),
      personal_link: getWebsite(userData),
    }))
    .filter((user) => user.name !== "") // Filter out missing rows
    .filter((user) => user.org !== ""); // Filter out members at large
};
