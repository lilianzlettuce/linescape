import React from 'react'
import './index.css';

class Saved extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            
        }
        this.copyCoords = this.copyCoords.bind(this)
        this.copyLength = this.copyLength.bind(this)
        this.animate = this.animate.bind(this)
        this.deanimate = this.deanimate.bind(this)
    }

    render() {
        return (
            <div id={"saved" + this.props.number} className="layer saveLayer">
                <div className="btn-box">
                    <h2 className="longer-h2">{this.props.name}</h2>
                    <div className="btn-box2">
                        <button className="show" id={"ani" + this.props.number} onClick={this.animate}>Show</button>
                    <button className="genNew" id={"ani" + this.props.number} onClick={this.deanimate}>Hide</button>
                    </div>
                </div>
    
                <div className="length-container">
                    <div className="length-heading">
                        <h3>Stroke Length</h3>
                        <button className="copyLength copy" onClick={this.copyLength} id={"clBtn" + this.props.number}><i className="far fa-copy"></i></button>
                        <h3 className="h3-margin-left">SVG Coordinates</h3>
                        <button className="copyCoords copy" onClick={this.copyCoords} id={"ccBtn" + this.props.number}><i className="fas fa-copy"></i></button>
                    </div>
                </div>
    
                <div className="coords-container">
                    <div className="coords-heading">
                        <input readOnly value={this.props.length} className="small-input" id={"CL" + this.props.number} />
                        <input readOnly value={this.props.path} className="small-input" id={"CC" + this.props.number} />
                    </div>
                </div>

                <svg className="canvas" id="canvas2" width="600" height="600">
                    <path id={"p" + this.props.number} className="draw saved-path" stroke={this.props.color} strokeLinecap="round" strokeWidth={this.props.strokeWidth} fill="transparent" d={this.props.path} />
                </svg>
            </div>
        )
    }

    animate() {
        let path = document.querySelector('#p' + this.props.number)
        path.style.opacity = '100%'
        if (!this.props.isScribble) {
            path.style.strokeDasharray = this.props.length
            path.style.strokeDashoffset = this.props.length
            path.style.transition = ''
            setTimeout(() => {
                path.style.transition = `stroke-dashoffset ${this.props.animTime}s linear`
                path.style.strokeDashoffset = 0
            }, 100);
            setTimeout(() => {
                path.style.transition = ''
            }, this.props.animTime * 1000);
        } else {
            path.style.strokeDasharray = this.props.length / 13
            path.style.strokeDashoffset = this.props.length
            path.style.animation = `scribble ${this.props.animTime * 6}s linear infinite alternate`
        }
    }

    deanimate() {
        let path = document.querySelector('#p' + this.props.number)
        if (!this.props.isScribble) {
            path.style.transition = ''
            setTimeout(() => {
                path.style.transition = `stroke-dashoffset ${this.props.animTime}s linear`
                path.style.strokeDashoffset = this.props.length
            }, 100);
            setTimeout(() => {
                path.style.transition = ''
            }, this.props.animTime * 1000);
        } else {
            path.style.opacity = '0%'
        }
    }

    //copy path coords
    copyCoords() {
        document.querySelector("#CC" + this.props.number).select()
        document.execCommand("copy")
    }

    //copy path length
    copyLength() {
        document.querySelector("#CL" + this.props.number).select()
        document.execCommand("copy")
    }

}

export default Saved