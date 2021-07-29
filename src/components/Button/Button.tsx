import React from "react"
import "./style.less"

interface ButtonProps {
  title: string
  link: string
  type: string
}

const defaultProps: Props = {
  title: "button",
  link: "acmucsd.com",
  type: "primary",
}

const Button: React.FC<ButtonProps> = ({ link, title, type }) => {
  if (type === "primary" || type === "secondary") {
    return (
      <a href={link} className={"button " + type}>
        <div>{title}</div>
      </a>
    )
  } else {
    return (
      <a href={link} className="button primary">
        <div>{title}</div>
      </a>
    )
  }
}
Button.defaultProps = defaultProps
export default Button
