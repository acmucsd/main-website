import React, { useState, useEffect } from "react"
import "./style.less"
import BoardCard from "../BoardCard"
import LeftArrow from "../../assets/left-arrow.svg"

import RightArrow from "../../assets/right-arrow.svg"

interface BoardGridProps {
  members_list: Array
  isMobile: boolean
}
const generateCurrentPage = (members_list, page) => {
  const per_page = 8
  const current_page = members_list.slice(
    page * per_page,
    (page + 1) * per_page
  )
  // console.log(current_page)
  // console.log(page)
  // console.log("indices " + page * per_page + ", " + (page + 1) * per_page)
  return (
    <div className="BoardGrid_grid">
      {current_page.map(member => {
        return <BoardCard boardmember={member} />
      })}
    </div>
  )
}
const BoardGrid: React.FC<BoardGridProps> = ({ members_list, isMobile }) => {
  const [page, setPage] = useState(0)
  const [currentPage, setCurrentPage] = useState()
  const maxPage = Math.ceil(members_list.length / 8 - 1)

  useEffect(() => {
    setPage(0)
    setCurrentPage(generateCurrentPage(members_list, page))
  }, [])
  useEffect(() => {
    if (page > Math.ceil(members_list.length / 8 - 1)) {
      setPage(Math.ceil(members_list.length / 8 - 1))
    }
    setCurrentPage(generateCurrentPage(members_list, page))
  }, [page, members_list])
  return (
    <div className="BoardGrid">
      <div className="BoardGrid_arrowContainer">
        {page != 0 && (
          <img
            src={LeftArrow}
            onClick={() => setPage(page >= 1 ? page - 1 : 0)}
          />
        )}
      </div>
      {currentPage}
      <div className="BoardGrid_arrowContainer">
        {page != maxPage && (
          <img
            src={RightArrow}
            onClick={() => setPage(page < maxPage ? page + 1 : maxPage)}
          />
        )}
      </div>
    </div>
  )
}

export default BoardGrid
