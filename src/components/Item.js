function Item(props){

     
      return(
            <div>
                  <div>{props.date}</div>
                  <h2>{props.title}</h2>

                  <div> {props.amount}</div>

            </div>
      )
}

export default Item;