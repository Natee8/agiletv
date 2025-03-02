import TextP from "../../utils/textReuse";
import styles from "./expand.module.css";
const Expand: React.FC = () => {
  return (
    <div className={styles.container}>
      <img src="../../assets/images/favIcon.svg" alt="imagem" />
      <div className={styles.view}>
        <div></div>
      </div>
      <TextP text="sinopses: fiuhiodjwiojwdoijwdaoiwdahie5ttt454554tudwahiowdahoiwdahowidahoiwdahwadoi" />
    </div>
  );
};
export default Expand;
