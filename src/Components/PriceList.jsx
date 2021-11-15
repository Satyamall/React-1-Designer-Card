
import Style from "./Card.module.css";

function PriceList(){
    return (
        <div className={Style.text1}>
            <h1>$17.90</h1>
            <p className={Style.price}>$22.90</p>
            <div className={Style.order}>ORDER</div>
        </div>
    )
}

export default PriceList;