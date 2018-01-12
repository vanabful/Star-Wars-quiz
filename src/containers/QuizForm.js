import React from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getResult, showError, saveChange, sendFormData } from '../redux/actions/form';
import { getQuestions } from '../redux/actions/questions';

import Question from '../components/Question';


class QuizForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            colors: {
                blue: 'rgba(0, 56, 121',
                yellow: 'rgba(185, 173, 21',
                red: 'rgba(190, 32, 32'
            },
            images: {
                jedi: 'jedi',
                middle: 'middle',
                sith: 'sith'
            }
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleAnswerChanged = this.handleAnswerChanged.bind(this);
    }

    componentDidMount() {
        this.props.actions.getQuestions();
    }

    handleAnswerChanged = (event) => {
        this.props.actions.saveChange(event.target.value, event.target.name);
    }

    handleSubmit = (event) => {
        event.preventDefault();

        if(!validateForm(this.props.data)) {
            this.props.actions.sendFormData(this.props.data, this.state.colors, this.state.images);
        }
        else {
            this.props.actions.showError(true);
        }
     
    }

    render(){

        return(
            <form onSubmit={this.handleSubmit} className="f-form">
                { this.props.questions.map((question, index) => {
                    return (
                        <Question 
                            key={index} 
                            question={question} 
                            index={index} 
                            store={this.props.data}
                            handleChange={this.handleAnswerChanged}
                        />
                    )})
                }           
                <Button type="submit" className="f-form__submit-button">Submit</Button>
            </form>
        );
    }
};

function validateForm (form) {
    const errorItems = Object.keys(form).filter(error => form[error].checked === false);
    return errorItems.length > 0 ? true : false
}

function mapStateToProps (state) { 
    return { data: state.form, questions: state.questions.questions };
};

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(
        {
            getResult,
            showError,
            saveChange,
            sendFormData,
            getQuestions
        },
        dispatch
        )
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(QuizForm);
