import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {updateText} from '../redux/actions/index';

class TextEditor extends Component {

    handleChange = (event) => {
        const text = event.target.value;
        this.props.updateText(text);
    }

    render() {
        const { text } = this.props;

        return (
            <div>
                <textarea
                    onChange={this.handleChange}
                    value={text}
                    type="text"
                    className="input"
                    id='editor'/>
            </div>
        )
    }
}

function mapPropsToState({ text }) {
    return {
        text: text[0]
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({updateText}, dispatch);
}



export default connect(mapPropsToState, mapDispatchToProps)(TextEditor);