import Styles from "./fooditem.module.css";
export default function FoodItem({ food }) {
  return (
    <div className={Styles.itemcontainer} key={food.id}>
      <img className={Styles.itemimage} src={food.image} alt="img" />
      <div className={Styles.itemcontent}>
        <p className={Styles.itemname}>{food.title}</p>
      </div>
      <div className={Styles.buttoncontainer}>
        <button className={Styles.itembutton}>View recipe</button>
      </div>
    </div>
  );
}
