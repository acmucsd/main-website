import React, { useState, useEffect } from "react"
import { EventsArray, EventObject, getAllEvents } from "../../api/EventsAPI"
import { isURL, getAbsoluteURL, getDateTime } from "../../utils"
import "./styles.less"

const HomeEvents: React.FC = () => {
  const [events, setEvents] = useState<EventsArray>()
  const [dragging, toggleDragging] = useState(false)

  const updateEvents = async (): Promise<void> => {
    const eventsArray: EventsArray | undefined = await getAllEvents()
    if (eventsArray === undefined) {
      setEvents(new Array<EventObject>())
    }
    setEvents([])
  }

  useEffect(() => {
    if (!events) {
      updateEvents()
    }
  }, [events])

  const handleMove = (e: any) => {
    if (!dragging) {
      return
    }
    const em = parseFloat(
      window.getComputedStyle(
        document.getElementsByClassName("home__events__grid__container")[0]
      ).fontSize
    )
    const isTouch = e.movementX === ""
    let deltaX = 0
    if (isTouch) {
      deltaX = e.touches[0].clientX
    } else {
      //e.preventDefault();
      deltaX = -1 * e.movementX
    }
    const firstEvent = document.getElementsByClassName(
      "event"
    )[0] as HTMLElement
    const cardWidth = em * 20
    const minMargin = events ? em - events.length * 20 * em : cardWidth
    const oldmargin = parseFloat(window.getComputedStyle(firstEvent).marginLeft)
    const newmargin = oldmargin - deltaX
    if (newmargin >= minMargin && newmargin <= em) {
      firstEvent.style.marginLeft = `${oldmargin - deltaX}px`
    }
  }

  const handleMoveStart = () => {
    toggleDragging(true)
  }

  const handleMoveEnd = () => {
    toggleDragging(false)
  }

  return (
    <section className="home__events">
      <div className="home__events__grid">
        <div className="home__events__grid__header">
          <h1>Events</h1>
          <p>
            ACM at UCSD hosts 120+ events for our diverse array of students.
          </p>
        </div>
      </div>
      <div
        className="home__events__grid__container"
        onMouseDown={handleMoveStart}
        onMouseMove={handleMove}
        onMouseUp={handleMoveEnd}
        onMouseLeave={handleMoveEnd}
        onTouchStart={handleMoveStart}
        onTouchMove={handleMove}
        onTouchCancel={handleMoveEnd}
        onTouchEnd={handleMoveEnd}
        onDragStart={() => false}
        //ref={sliderRef}
        role="menuitem"
        tabIndex={0}
      >
        {events && events.length > 0 ? (
          events.map((value, index) => {
            const timing = getDateTime(value)
            return (
              <div className="home__events__grid__container__event" key={index}>
                <img src={value.cover} alt={value.title} />
                <h2>
                  <span>{timing.date}</span>
                  {timing.time}
                </h2>
                {isURL(value.location.trim()) ? (
                  <a
                    className="link"
                    href={getAbsoluteURL(value.location.trim())}
                  >
                    <h3>{value.location}</h3>
                  </a>
                ) : (
                  <h3>{value.location}</h3>
                )}
              </div>
            )
          })
        ) : (
          <div className="home__events__grid__container__event--default">
            <p>
              No events this week. <br /> Check back later!
            </p>
          </div>
        )}
        <div aria-hidden="true" className="event end" />
      </div>
    </section>
  )
}

export default HomeEvents
