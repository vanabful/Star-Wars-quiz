import React from 'react';
import {FormGroup, Radio} from 'react-bootstrap';

const Question = (props) => {

    const { question, index, store, handleChange } = props;

    return(
        <div className="f-question">
            <div className="f-question__question">
                <div className="f-question__question__number"> 
                    <label>{index+1}</label>
                </div>
                <div className="f-question__question__text">
                    <h3>{question.question}</h3>
                    {Object.keys(store).filter(key => key === question.input_name && store[key].checked === false && store.error === true ).length > 0 
                        ? <label className="f-question__question__text__error">You have to select one answer </label> 
                        : <label>Select one</label> }
                </div>
            </div>
            <div className="f-question__answers">
                <FormGroup>
                    { question.anwsers.map((answer, index) => {
                        return ( 
                            <Radio 
                                name={question.input_name} 
                                key={index} 
                                onChange={handleChange} 
                                value={answer.value}
                            > 
                            {answer.label} 
                            </Radio>);
                        })
                    }
                </FormGroup>
            </div>
        </div>
    );
}

export default Question;