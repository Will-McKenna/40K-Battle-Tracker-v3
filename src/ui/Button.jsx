import { Link } from "react-router-dom";

const Button = ({ onClick, type, children, to, disabled = false }) => {
  const baseStyle =
    "rounded-full bg-hunyadiYellow font-semibold uppercase tracking-wide text-cosmicLatte";

  const styles = {
    primary: baseStyle + " px-4 py-3",
    secondary: baseStyle + "",
    small: "",
  };

  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );

  return (
    <button disabled={disabled} onClick={onClick} className={styles[type]}>
      {children}
    </button>
  );
};

export default Button;
