import React, { Component } from 'react';
import './style.css';

class Filter extends Component {
    render() {
        return (
            <div className="filter">
                <div>
                    <label>Кешбек&nbsp;
                    <input
                        type="checkbox"
                        name="cashback"
                        onChange={ event => this.props.onChange( event.target.name, event.target.checked  ) }
                        checked={this.props.filter.cashback}
                    />
                    </label>
                </div>
                <div>
                    <label>Бесплатное обслуживание&nbsp;
                        <input
                            type="checkbox"
                            name="freeprice"
                            onChange={event => this.props.onChange(event.target.name, event.target.checked)}
                            checked={this.props.filter.freeprice}
                        />
                    </label>
                </div>
                <div>
                    <label>Цена&nbsp;
                    <input
                        type="text"
                        name="price"
                        onChange={event => this.props.onChange(event.target.name, event.target.value)}
                        value={this.props.filter.price}
                    />
                    </label>
                </div>
            </div>
        )
    }
}

export default Filter;