import React , {Component} from 'react';
import { NavLink } from 'react-router-dom';

export default class Card extends Component {
  render() {

    const {img, cardTitle, cardText, listItem1, listItem2, listItem3, cardLink1, cardLink2} = this.props;

    return (
      <>
        <div className='col-md-4 col-10 mx-auto gy-5'>
          <div className="card border-0" style={{width: '18rem'}}>
            <img src={img} className="card-img-top img-fluid" style={{maxWidth: '400px'}} alt="base"/>
            <div className="card-body">
              <h5 className="card-title">{cardTitle}</h5>
              <p className="card-text">{cardText}</p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">{listItem1}</li>
              <li className="list-group-item">{listItem2}</li>
              <li className="list-group-item">{listItem3}</li>
            </ul>
            <div className="card-body row-cols-sm-1">
              <NavLink to={cardLink1} className="my-3 btn btn-outline-info">Card link</NavLink>
              <NavLink to={cardLink2} className="my-3 btn btn-outline-info">Another link</NavLink>
            </div>
          </div>
        </div>
      </>
    );
  }

}
