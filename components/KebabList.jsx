import styles from "../styles/KebabList.module.css";
import KebabCard from "./KebabCard";

const KebabList = ({ kebabList }) => {
    console.log(kebabList);
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>THE BEST KEBAB IN TOWN</h1>
            <p className={styles.desc}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut blandit arcu
                in pretium molestie. Interdum et malesuada fames acme. Lorem ipsum dolor
                sit amet, consectetur adipiscing elit.
            </p>
            <div className={styles.wrapper}>
                {
                    kebabList.map((kebab) => (
                        <KebabCard key={kebab._id} kebab={kebab} />
                    ))
                }
            </div>
        </div>
    );
};

export default KebabList;