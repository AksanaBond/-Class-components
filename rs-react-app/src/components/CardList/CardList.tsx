import { Component } from 'react';
import type { ApiResponseCharacter } from '../../services/apiService';
import Card from '../Card/Card';
interface CardListProps {
  items: ApiResponseCharacter[];
}
class CardList extends Component<CardListProps> {
  render() {
    return (
      <div className="card-list">
        {this.props.items.map((item) => (
          <Card key={item.index} item={item} />
        ))}
      </div>
    );
  }
}
export default CardList;
