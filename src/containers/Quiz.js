import React, {Component} from 'react';
import FontAwesome from 'react-fontawesome';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { resetValues } from '../redux/actions'
import { bindActionCreators } from 'redux';

import QuizForm from './QuizForm';
import QuizResult from '../components/QuizResult';

class Quiz extends Component {

    constructor(props) {
        super(props);
        this.resetValues = this.resetValues.bind(this);
    }

    componentDidUpdate() {
        if(this.props.formResult.submitted)
            window.scrollTo(0,0);
    }


    resetValues = (value) => {
        this.props.actions.resetValues();
    }

    render() {
        return (
            <div className="f-quiz">
                <div className="f-quiz__back-button">
                    <Link to="/">
                        <Button bsStyle="link" className="f-quiz__back-button__button">
                            <FontAwesome name="arrow-left" className="f-quiz__back-button__button__icon"/>
                            Home
                        </Button>
                    </Link>
                </div>
                <QuizForm />
                
                {this.props.formResult.submitted ? 
                    <QuizResult message={this.props.formResult.message} 
                                title={this.props.formResult.title}
                                color={this.props.formResult.color}
                                image={this.props.formResult.image} 
                                resetValues={this.resetValues} /> 
                : null}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
      formResult: state.form.form_result    
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(
        {
            resetValues
        },
        dispatch
        )
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Quiz); 