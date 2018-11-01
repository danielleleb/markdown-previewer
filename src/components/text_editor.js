import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {updateText} from '../actions/index';
import Placeholder from './placeholder';


class TextEditor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: Placeholder
        }
    }

    render() {
        return (
            <div>
                <textarea
                    onChange={(event) => this.handleChange(event.target.value)}
                    value={this.state.text}
                    type="text"
                    className="input"
                    id='editor'/>
            </div>
        )
    }

    handleChange(text) {
        this.setState({
            text
        });
        this.props.updateText(text);
    }
}

function mapPropsToState({text}) {
    return {
        text
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({updateText}, dispatch);
}



export default connect(mapPropsToState, mapDispatchToProps)(TextEditor);