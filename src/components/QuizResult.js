import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';

const QuizResult = (props) => {

    const { message, title, color, image, resetValues } = props;

    const background = {
        backgroundColor: color + ',0.8)'
    }

    const buttonColor = {
        backgroundColor: color + ',1)'
    }

    return (

        <div className="r-result" style={background}>
            <div className="r-result__card">
                <div className="r-result__card__image">
                    <img src={require('../assets/' + image + '-image.png')} alt={title}/>
                </div>
                <div className="r-result__card__response">
                    <h4>{title}</h4>
                    <p className="r-result__card__response__text">{message}</p>
                    <Link to='/' className="r-result__card__response__close">
                        <Button onClick={resetValues} style={buttonColor} className="r-result__card__response__close__button">
                            Done
                        </Button>
                    </Link>
                </div>
                <Link to='/' className="r-result__card__exit">
                    <FontAwesome name="times" onClick={resetValues} className="r-result__card__exit__icon"/>
                </Link>
            </div>
        </div>
    );
}

export default QuizResult;