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
        this.genScrib = this.genScrib.bind(this)
    }

    componentDidMount() {
        //bring back coord display
        let num = this.props.number
        let path = document.querySelector(`#path${num}`)
        document.querySelector(`#text-display${num}`).value = this.props.path
        document.querySelector(`#strokeLength${num}`).value = path.getTotalLength()

        let inputArr = ['name', 'color', 'strokeWidth', 'animation', 'size']
        for (let i = 0; i < inputArr.length; i++) {
            eval("document.querySelector(`#${inputArr[i]}-input${num}`).value = this.props." + inputArr[i])
        }
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
                    <input className="h2-input" id={"name-input" + this.props.number} defaultValue={this.props.name} type="text" onChange={(e) => {this.props.updateLayer(e, this.props.number, 'name')}} />
                    <div className="btn-box2">
                        <button className="genNew" id={"genNewBtn" + this.props.number} onClick={this.genScrib}>New Scribble</button>
                    </div>
                </div>
    
                <input type="text" id={"color-input" + this.props.number} placeholder="Color" onChange={(e) => {this.props.updateLayer(e, this.props.number, 'color')}} />
                <input type="number" id={"strokeWidth-input" + this.props.number} placeholder="Stroke width" onChange={(e) => {this.props.updateLayer(e, this.props.number, 'strokeWidth')}} />
                <input type="number" id={"animation-input" + this.props.number} placeholder="Animation Speed" onChange={(e) => {this.props.updateLayer(e, this.props.number, 'animTime')}} />
                <input type="number" id={"size-input" + this.props.number} placeholder="Scribble size" />
    
                <div className="length-container">
                    <div className="length-heading">
                        <h3>Stroke Length</h3>
                        <button className="copyLength copy" onClick={this.copyLength} id={"copyLengthBtn" + this.props.number}><i className="far fa-copy"></i></button>
                        <button className="reload copy" onClick={(e) => {this.props.updateLayer(e, this.props.number, 'length')}} id={"reloadBtn" + this.props.number}><i className="fas fa-redo-alt"></i></button>
                    </div>
                    <input readOnly type = "number" id={"strokeLength" + this.props.number} onChange={(e) => {this.props.updateLayer(e, this.props.number, 'length')}} className="length-input" />
                </div>
    
                <div className="coords-container">
                    <div className="coords-heading">
                        <h3>SVG Coordinates</h3>
                        <button className="copyCoords copy" onClick={this.copyCoords} id={"copyCoordsBtn" + this.props.number}><i className="fas fa-copy"></i></button>
                    </div>
                    <textarea id={"text-display" + this.props.number} onChange={(e) => {this.props.updateLayer(e, this.props.number, 'path')}} ></textarea>
                </div>
            </div>
        )
    }

    genScrib(e) {
        let path = document.querySelector(`#path${this.props.number}`)
        let size = document.querySelector(`#size-input${this.props.number}`).value
        path.style.strokeDasharray = ''
        path.style.strokeDashoffset = ''
        path.style.animation = ''
        let scribbleSize = 100
        if (size !== '') {
            scribbleSize = size
        }
        createScribble('#path' + this.props.number, 450, 300, 1, scribbleSize, 4, 4)
        let d = path.getAttribute('d')
        document.querySelector(`#text-display${this.props.number}`).value = d

        this.props.updateLayer(e, this.props.number, 'length')
        this.props.updateLayer(e, this.props.number, 'isScribble')
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

//scribble creator
function createScribble(id, startX, startY, density, size, width, height) {
    let d = `M ${startX} ${startY} Q ${startX + 5} ${startY + 5}, ${startX - 5} ${startY} `
    for (let i = 0; i < density; i++) {
        d += `T ${startX} ${startY} T ${startX + 5} ${startY + 5} `
        for (let j = 0; j <= size; j++) {
            let r = Math.floor(Math.random() * 2)
            let r2 = Math.floor(Math.random() * 2)
            let rangeX = j / width
            let rangeY = j / height
            let randomX
            let randomY

            if (r % 2 === 0) {
                randomX = startX + rangeX
            } else {
                randomX = startX - rangeX
            }
            if (r2 % 2 === 0) {
                randomY = startY + rangeY
            } else {
                randomY = startY - rangeY
            }

            d += `T ${randomX} ${randomY} `
        }
    }
    document.querySelector(id).setAttribute('d', d)
}

export default Layer