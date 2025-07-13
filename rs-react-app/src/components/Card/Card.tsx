import { Component } from 'react';
import type { ApiResponseCharacter } from '../../services/apiService';
class Card extends Component<{ item: ApiResponseCharacter }> {
  render() {
    const { item } = this.props;
    return (
      <div className="card">
        <h4>{item.nickname}</h4>
        <div>
          <p>
            Fullname
            <span>{item.fullName}</span>
          </p>
          <p>
            HogwartsHouse
            <span>{item.hogwartsHouse}</span>
          </p>
          <img alt="portrets" src={item.image}></img>
        </div>
      </div>
    );
  }
}
export default Card;
