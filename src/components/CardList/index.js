import React, { Component } from 'react';
import data from '../../data.js';
import './style.css';
import CardItem from '../CardItem';

class CardList extends Component {
    render() {
        var filter = this.props.filter;

        const dataFilter = function (dataArr, filterArr) {
            let data = dataArr;
            if (filterArr.cashback) {
                data = data.filter(i => i.cashback);
            }
            if (filterArr.freeprice) {
                data = data.filter(i => i.freeprice);
            }
            if (filterArr.price !== '' && filterArr.price > 0) {
                data = data.filter(i => (i.price <= filterArr.price))
            }

            return data;
        };

        var filteredData = dataFilter(data, filter);

        const dataList = filteredData.map((item, index) => {
            return (
                <CardItem key={index} name={item.name} price={item.price} freeprice={item.freeprice ? 'Да' : 'Нет'} cashback={item.cashback ? 'Да' : 'Нет'} cashback_value={item.cashback_value} />
            )
        });
        return (
            <div className="card-list">
                {dataList}
            </div>
        )
    }
}

export default CardList;