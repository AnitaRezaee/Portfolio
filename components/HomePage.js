import { makeStyles } from "@mui/styles";
import Image from "next/image";
import home from "../Images/home-background.jpg";

const useStyles = makeStyles((theme) => ({
  homePage: {
    background: "#051622",
  },
}));

function HomePage() {
  const classes = useStyles();
  return (
    <div className={classes.homePage}>
      {/* <Image src={home} alt="home background" height={1000} max-width="100%" /> */}
    </div>
  );
}

export default HomePage;
