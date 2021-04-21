import React from 'react'
import './index.css';

class Layer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hideClicked: false,
        }
        this.hideLayer = this.hideLayer.bind(this)
        this.copyCoords = this.copyCoords.bind(this)
        this.copyLength = this.copyLength.bind(this)
    }

    render() {
        return (
            <div id={"layer" + this.props.number} className="layer">
                <div className="btn-box btn-box-top">
                    <button className="reset" id={"resetBtn" + this.props.number} >Reset</button>
                    <button className="hide" id={"hideBtn" + this.props.number} onClick={this.hideLayer}>Hide</button>
                    <button className="save" id={"saveLayerBtn" + this.props.number} onClick={() => { this.props.saveLayer(this.props.number) }}>Save</button>
                    <button className="remove" id={"removeBtn" + this.props.number} onClick={() => { this.props.deleteLayer(this.props.number) }}>Remove</button>
                </div>
                <div className="btn-box">
                    <input className="h2-input" defaultValue={this.props.name} type="text" onChange={(e) => {this.props.changeName(e, this.props.number)} } />
                    <div className="btn-box2">
                        <button className="genNew" id={"genNewBtn" + this.props.number}>New Scribble</button>
                    </div>
                </div>
    
                <input type="text" id={"color-input" + this.props.number} placeholder="Color" />
                <input type="number" id={"strokeWidth-input" + this.props.number} placeholder="Stroke width" />
                <input type="number" id={"animation-input" + this.props.number} placeholder="Animation Speed" />
                <input type="number" id={"size-input" + this.props.number} placeholder="Scribble size" />
    
                <div className="length-container">
                    <div className="length-heading">
                        <h3>Stroke Length</h3>
                        <button className="copyLength" onClick={this.copyLength} id={"copyLengthBtn" + this.props.number}><i className="far fa-copy"></i></button>
                    </div>
                    <input readOnly type = "number" id={"strokeLength" + this.props.number} className="length-input" />
                </div>
    
                <div className="coords-container">
                    <div className="coords-heading">
                        <h3>SVG Coordinates</h3>
                        <button className="copyCoords" onClick={this.copyCoords} id={"copyCoordsBtn" + this.props.number}><i className="fas fa-copy"></i></button>
                    </div>
                    <textarea id={"text-display" + this.props.number} name="paragraph_text" cols="50" rows="10" ></textarea>
                </div>
            </div>
        )
    }

    hideLayer() {
        if (!this.state.hideClicked) {
            document.querySelector('#path' + this.props.number).style.opacity = '0%'
            document.querySelector("#hideBtn" + this.props.number).style.backgroundColor = 'rgb(92, 92, 92)'
            document.querySelector("#hideBtn" + this.props.number).style.color = 'white'
            this.setState({ hideClicked: true })
        } else {
            document.querySelector('#path' + this.props.number).style.opacity = '100%'
            document.querySelector("#hideBtn" + this.props.number).style.backgroundColor = 'white'
            document.querySelector("#hideBtn" + this.props.number).style.color = 'rgb(92, 92, 92)'
            this.setState({ hideClicked: false })
        }
    }

    //copy path coords
    copyCoords() {
        document.querySelector("#text-display" + this.props.number).select()
        document.execCommand("copy")
    }

    //copy path length
    copyLength() {
        document.querySelector("#strokeLength" + this.props.number).select()
        document.execCommand("copy")
    }

}

export default Layer