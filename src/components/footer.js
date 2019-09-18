import React from "react";
import "../style/footer.css";
class Footer extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="conainer_footer">
                <p>Contact us - igor.zd.43@gmail.com</p>
            </div>
        );
    }
}
export default Footer;