import { makeStyles } from "@mui/styles";
import Link from "next/link";

const useStyles = makeStyles((theme) => {
  return {
    header: {
      width: "100%",
      height: "3rem",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      background: "transparent",
      padding: "0 55%",
      "& ul": {
        listStyle: "none",
        margin: 0,
        padding: 0,
        display: "flex",
        alignItems: "baseline",
      },
      "& li": {
        marginLeft: "3rem",
      },
      "& a": {
        textDecoration: "none",
        fontSize: "1rem",
        color: "white",
        "&:hover": {
          color: "#1BA098",
        },
        "&:active": {
          color: "#1BA098",
        },
      },
    },
  };
});

function NavigationBar() {
  const classes = useStyles();
  return (
    <header className={classes.header}>
      <div>
        <nav>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/experience">Experience</Link>
            </li>
            <li>
              <Link href="/projects">Projects</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
export default NavigationBar;
