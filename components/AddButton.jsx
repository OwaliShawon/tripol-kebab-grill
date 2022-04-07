import styles from "../styles/Add.module.css";

const AddButton = ({ setClose }) => {
  return (
    <div className={styles.containerAddButton}>
      <div onClick={() => setClose(false)} className={styles.mainAddButton}>
        Add New Kebab
      </div>
    </div>
  );
};

export default AddButton;
