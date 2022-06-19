import styles from "../styles/components/SearchTopBar.module.css";
import CloseButton from "./CloseButton";

type SearchTopBarProps = {
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
};
const SearchTopBar = (props: SearchTopBarProps) => {
  return (
    <div className={styles.searchTopBar}>
      <div className={styles.container}>
        <div
          className={styles.closebutton}
          onClick={() => props.setShow(false)}
        >
          <CloseButton />
        </div>
        <div className={styles.inputt}>
          <div className={styles.searchIcon}></div>
          <input
            className={styles.searchInput}
            type="text"
            placeholder="Search Products..."
          />

          <div className={styles.line}></div>
        </div>
      </div>
      <div className={styles.overlay}></div>
    </div>
  );
};

export default SearchTopBar;
