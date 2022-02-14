interface ButtonProps {
  title: string;
  link: string;
  type: "primary" | "secondary";
}

const defaultProps: ButtonProps = {
  title: "button",
  link: "acmucsd.com",
  type: "primary",
};

const Button: React.FC<ButtonProps> = ({ link, title, type }) => {
  return (
    <a href={link} className={`button ${type}`}>
      <div>{title}</div>
    </a>
  );
};
Button.defaultProps = defaultProps;
export default Button;
