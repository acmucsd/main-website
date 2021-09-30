const axios = require("axios")
const CSV = require("csv-string")
const fs = require("fs")

const documentID =
  "2PACX-1vQwZzdPyMYxxJF-9FZMLxis3Raq3ZqhWO28kEFhbO6HYtPqV7YvcX8h0GYmr35Is9tCHjCwA06RkoRr"
const gID = "1961532449"
const URL = `https://docs.google.com/spreadsheets/d/e/${documentID}/pub?gid=${gID}&single=true&output=csv`

const Column = {
  Position: 0,
  Position_Special: 1,
  Name: 2,
  Email: 3,
  LinkedIn: 4,
  Website: 5,
  ImageID: 6,
}

const fetchBoardData = async () => {
  const response = await axios.get(URL)

  if (response.status !== 200) {
    console.error("Unable to fetch board csv from Google Drive.")
    return
  }

  const { data } = response

  const csv = CSV.parse(data)

  const board = []

  let division = "general"

  // Skip the title + header rows
  for (let i = 2; i < csv.length; i += 1) {
    const row = csv[i]

    // Skips members at large
    if (row[Column.Position] === "-----") {
      continue
    }

    // Skip unfilled positions
    if (row[Column.Name] === "N/A") {
      continue
    }

    // Handle divider rows
    if (row[Column.Name] === "") {
      switch (row[Column.Position]) {
        case "ACM AI":
          division = "ai"
          break
        case "ACM Cyber":
          division = "cyber"
          break
        case "ACM Design":
          division = "design"
          break
        case "ACM Innovate":
          division = "innovate"
          break
        case "ACM Hack":
          division = "hack"
          break
        default:
          break
      }

      continue
    }

    let Position_Special = ""
    if (row[Column.Position_Special] !== "-----") {
      Position_Special = row[Column.Position_Special]
    }

    let image_url = ""
    if (row[Column.ImageID] !== "") {
      image_url =
        "https://drive.google.com/uc?id=" + row[Column.ImageID]
    }

    let linkedin_url = row[Column.LinkedIn]
    if (
      linkedin_url &&
      !linkedin_url.includes("https://www.linkedin.com/in/")
    ) {
      linkedin_url = "https://www.linkedin.com/in/" + linkedin_url
    }

    board.push({
      name: row[Column.Name],
      org: division,
      title: row[Column.Position],
      specialization: Position_Special,
      profile_image: "",
      email: row[Column.Email],
      linkedin_link: linkedin_url,
      personal_link: row[Column.Website],
      profile_image: image_url,
    })
  }

  fs.writeFile("src/board-data.json", JSON.stringify(board, null, 2), err => {
    if (err) {
      console.error(err)
      return
    }

    console.log("File written successfully.")
  })
}

fetchBoardData()
