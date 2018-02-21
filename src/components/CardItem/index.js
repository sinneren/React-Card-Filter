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
                <div className="card-list__price">Бесплатное снятие: {this.props.withdrawl}</div>
                <div className="card-list__price">Бесплатный межбанк: {this.props.c2c}</div>
                <div className="card-list__price">Процент на остаток: {this.props.balance}</div>
                {this.props.description.length > 0 &&
                    <div>
                        <hr />
                        <div className="card-list__price">Подробнее</div>
                        <article>{this.props.description}</article>
                    </div>
                }
            </div>
        )
    }
}

export default CardItem;