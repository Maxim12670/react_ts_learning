import styles from "./MainPage.module.scss";
import { ContentContainer } from "../../shared/ui";
import { NavMenu } from "../../widgets";
import { Outlet } from "react-router";

const MainPage = () => {
  return (
    <ContentContainer>
      <div className={styles.wrapper}>
        <NavMenu />
        <div className={styles.wrapper__outlet}>
          <Outlet />
        </div>
      </div>
    </ContentContainer>
  );
};

export default MainPage;
