import Link from "next/link";

interface ButtonProps {
  title: string;
  link: string;
  type: "primary" | "secondary";
  internalLink?: boolean;
}

const defaultProps: ButtonProps = {
  title: "button",
  link: "acmucsd.com",
  type: "primary",
  internalLink: false
};

const Button: React.FC<ButtonProps> = ({ link, title, type, internalLink }) => {
  if (internalLink) {
    return <Link href={link}>
      <a className={`button ${type}`}>
        <div>{title}</div>
      </a>
    </Link>
  } else {
    return <a href={link} className={`button ${type}`}>
      <div>{title}</div>
    </a>
  }
};
Button.defaultProps = defaultProps;
export default Button;
