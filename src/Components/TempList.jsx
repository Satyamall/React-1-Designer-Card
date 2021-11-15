
import Style from "./Card.module.css";

function TempList(){
    return (
        <div className={Style.text1}>
            <p className={Style.textTemp}>270 Cal</p>
            <p className={Style.textTemp}>P/F/C: 18/4/41</p>
            <p className={Style.textTemp}>42.4 °C</p>
        </div>
    )
}

export default TempList;