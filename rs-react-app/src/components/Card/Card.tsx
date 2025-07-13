import { Component } from 'react';
import type { ApiResponseCharacter } from '../../services/apiService';
class Card extends Component<{ item: ApiResponseCharacter }> {
  render() {
    const { item } = this.props;
    return (
      <div className="card">
        <h4>{item.nickname}</h4>
        <div>
          <p className="card-text">
            Fullname:
            <span className="card-mean"> {item.fullName}</span>
          </p>
          <p className="card-text">
            HogwartsHouse:
            <span className="card-mean"> {item.hogwartsHouse}</span>
          </p>
          <img alt="portrets" src={item.image} className='card-img'></img>
        </div>
      </div>
    );
  }
}
export default Card;
