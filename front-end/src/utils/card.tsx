import { CastMember } from "../types/series";
import styles from "./card.module.css";
const Card: React.FC<CastMember> = ({ Name, Character, ID }) => {
  return (
    <div key={ID} className={styles.cardContainer}>
      <h1>{Name}</h1>
      <p>{Character}</p>
    </div>
  );
};

export default Card;
