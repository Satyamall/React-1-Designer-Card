
import Style from "./Card.module.css";

function HeaderList(){
    return (
        <div className={Style.text1}>
           <h1>Tortellini</h1>
           <div>
               <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXku53ivf6FVIPEZMm6q9pzs1cBsiIsNTcrQ&usqp=CAU" alt="" />
               <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOeV52JVcjmKl7DkJLsDpJj-IX5mfyWkQynQ&usqp=CAU" alt="" />
               <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHZHwG53y4KOLsoJgq_DhAyilmSk8f335Zsg&usqp=CAU" alt="" />
           </div>
        </div>
    )
}

export default HeaderList;