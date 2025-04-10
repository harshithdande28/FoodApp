export default function FoodItem({food}){
    return <div key={food.id}>
        <h1>{food.title}</h1>
        <img src={food.image} alt="img"/>
        <button>View recipe</button>
    </div>
}