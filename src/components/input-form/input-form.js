import React, {Component} from 'react';
import { connect } from 'react-redux';
import { compose } from '../../utils'
import { bindActionCreators } from 'redux';

import { withWeatherstoreService } from '../hoc';
import { fetchWeather } from '../../actions';

import './input-form.css'


class InputForm extends Component{

    state = {
        label: ''
    };

    onLabelChange=(e)=>{
        this.setState({label: this.capitalize(e.target.value)})
    };

    capitalize = (s) => {
        return s && s[0].toUpperCase() + s.slice(1);
    };
    onSubmit = (e) => {
        if(this.state.label){
            this.props.fetchWeather(this.state.label);
            e.preventDefault();
            this.setState({label: ''});
        } else e.preventDefault();
    };

    render(){
        return(
            <form className="item-add-form d-flex"
                  onSubmit={this.onSubmit}>
                <input type="text"
                       className="form-control"
                       onChange={this.onLabelChange}
                       placeholder="Enter the name of the city"
                       value={this.state.label}/>
                <button className="btn btn-outline-secondary">
                    Show the weather
                </button>
            </form>
        )
    }

}

const mapStateToProps = ({ weather, loading, error }) => {
    return { weather, loading, error };
};

const mapDispatchToProps = (dispatch, { weatherstoreService }) => {
    return bindActionCreators({
        fetchWeather: fetchWeather(weatherstoreService)
    }, dispatch)
};

export default compose(
    withWeatherstoreService(),
    connect(mapStateToProps, mapDispatchToProps))(InputForm)