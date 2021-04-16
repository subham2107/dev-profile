import React from 'react';
import DevForm from './DevForm';
import './DevInfoInput.css';
import PureModal from 'react-pure-modal';
import 'react-pure-modal/dist/react-pure-modal.min.css';

function FormPopup(props) {
    const isClicked = props.isClicked;
    if (isClicked) {
        return <DevForm />;
    }
    return <div></div>;
}

class DevInfoInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isClicked: false };
    }

    handleClick = () => {
        this.setState({ isClicked: true });
    };

    render() {
        const isClicked = this.state.isClicked;
        let button;
        if (isClicked === false) {
            button = (
                <button className="devInfoInputBtn" onClick={this.handleClick}>
                    Add developer info
                </button>
            );
        }
        return (
            <div className="devInfoInputContainer">
                <div>
                    <FormPopup isClicked={isClicked} />
                    {button}
                </div>
            </div>
        );
    }
}

export default DevInfoInput;
