import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

class Home extends React.Component {
    render() {
        return(
            <div className="h-home">
                <div className="h-home__begin-quiz">
                    <h1 className="h-home__begin-quiz__title">May the force be with you</h1>
                    <Link to={"/quiz"} className="h-home__begin-quiz__link">
                        <Button bsStyle="primary" bsSize="large" className="h-home__begin-quiz__link__start-button">
                            Start
                        </Button>
                    </Link>
                </div>
            </div>
        );
    }
}

export default Home;