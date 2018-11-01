import React, {Component} from 'react';
import {connect} from 'react-redux';
import marked from 'marked';


class TextDisplay extends Component {
    render() {
        return (
            <div className="text-display" id="preview" dangerouslySetInnerHTML={{__html: marked(this.props.text[0], {breaks: true})}}>
            </div>
        )
    }
}

function mapPropsToState({text}) {
    return {
        text
    }
}

export default connect(mapPropsToState, null)(TextDisplay);