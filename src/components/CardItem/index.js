import React, { Component } from 'react';
import './style.css';

class CardItem extends Component {
    render() {
        return (
            <div className="card-list__item">
                <div className="card-list__title">{this.props.name}</div>
                <div className="card-list__price">Цена: {this.props.price}</div>
                <div className="card-list__price">Бесплатное обслуживание: {this.props.freeprice}</div>
                <div className="card-list__price">Кешбек: {this.props.cashback}</div>
                <div className="card-list__price">Размер кешбека: {this.props.cashback_value}%</div>
            </div>
        )
    }
}

export default CardItem;