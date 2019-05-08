import React from 'react';

class Form extends React.Component {
    render() {
        return (
            <div className="item">
                <p>Введите город на английском:</p>
                <form className="getCityName" onSubmit={this.props.weatherMethod}>
                    <input type="text" name="city" placeholder="Город" />
                    <button>Показать</button>
                </form>
            </div>
        );
    }
}

export default Form;
