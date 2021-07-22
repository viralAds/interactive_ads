import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import logo from '../../../assets/icons/bb-logo-dark.png';
import { Button } from 'reactstrap';
import Quantity from './Quantity';

const Popup = (props) => {
    if(typeof window !== `undefined`) {
        AOS.init({
          once: false,
          mirror: false,
        });
    }

    const selectSize = (size) => {
        const ele = document.getElementsByClassName('size')
        Object.keys(ele).map((key) => {
                if(ele[key].innerHTML === size.toString()) {
                    document.getElementsByClassName('size')[key].className = "size active" 
                }
                else {
                    document.getElementsByClassName('size')[key].className = "size"
                }
                return 0;
          });
    }

    return (
        <div>
            <div className="product-desc"
                data-aos={"slide-up"} 
                data-aos-delay="100"
                data-aos-mirror='false'
                data-aos-duration="1000"
                data-aos-easing="ease-out">
                <div className="bb-logo-wrapper">
                    <img src={logo} alt="logo" />
                </div>
                <div className="specs">
                    <div className="cost">INR 2,595</div>
                <div className="colors">COLORS: Navy</div>
                </div>
                <div className="sizes">
                    <div className="size" onClick={() => selectSize(36)}>36</div>
                    <div className="size" onClick={() => selectSize(39)}>39</div>
                    <div className="size" onClick={() => selectSize(40)}>40</div>
                    <div className="size" onClick={() => selectSize(42)}>42</div>                        <div className="size" onClick={() => selectSize(44)}>44</div>
                    <div className="size" onClick={() => selectSize(46)}>46</div>
                </div>
                {props.showQuantity && 
                    <Quantity 
                        quantity={props.quantity}
                        setQuantity={props.setQuantity}
                    />
                }
                <div className="addToCart">
                    <Button style={{ marginTop: "1.5rem"}}>ADD TO CART</Button>  
                </div>
            </div>
        </div>
    )
}

export default Popup
