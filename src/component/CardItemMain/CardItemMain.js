import React, {Component} from 'react';
import { Button ,Card } from 'reactstrap';


class CardItemMain extends Component{
    render(){
        return(
            <React.Fragment>
            <div className="card">
  <img className="card-img-top" src="..." alt="Card image cap" />
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
</React.Fragment>
        );
    }
}

export default CardItemMain;