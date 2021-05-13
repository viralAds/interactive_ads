import React, { useEffect } from 'react'
import AddCircleSharpIcon from '@material-ui/icons/AddCircleSharp';
import RemoveCircleRoundedIcon from '@material-ui/icons/RemoveCircleRounded';

const Quantity = (props) => {
    
    useEffect(() => {
        if(props.quantity <= 0) {
            alert("Invalid value")
            props.setQuantity(1)
            return 0;
        }
    }, [props])

    const increment = () => {
        props.setQuantity(props.quantity + 1)
    }

    const decrement = () => {
        props.setQuantity(props.quantity - 1)
    }

    const handleChange = (event) => {
        props.setQuantity(parseInt(event.target.value))
    }

    return (
        <div>
            <div className="quantity">
                <span style={{ float: "left"}}>Quantity  :</span>                        
                <RemoveCircleRoundedIcon 
                    onClick={() => decrement()}
                    id="decrement" 
                />
                <input type="number" value={props.quantity} onChange={(e) => handleChange(e)} />
                <AddCircleSharpIcon 
                    id="increment"
                    onClick={() => increment()}
                />
            </div>
        </div>
    )
}

export default Quantity
