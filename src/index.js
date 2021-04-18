import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import LoginPage from './LoginPage.js'
import Layer from './Layer.js'
import Saved from './Saved.js'

class Main extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            tab: 1,
            layers: [
                {
                  name: '',
                  number: 1,
                  path: '',
                }
            ],
            paths: [
                {
                    number: '',
                    d: ''
                }
            ],
            currentPath: '',
            numLayers: 1,
            saved: [
                {
                    name: 'among Us!',
                    path: 'M 180 233 Q 206 145, 294 178 Q 335 194, 368 232 Q 389 253, 429 286 Q 449 303, 418 332 Q 404 345, 350 302 Q 320 332, 299 331 Q 311 330, 323 325 Q 344 346, 359 360 Q 371 374, 348 394 Q 336 406, 283 372 Q 237 334, 211 298 Q 266 271, 280 237 Q 264 217, 222 226 Q 194 235, 195 273 Q 195 292, 211 298 Q 198 291, 194 274 Q 178 256, 181 231 Q 190 183, 234 171 Q 266 168, 296 180 Q 350 147, 391 189 Q 401 204, 398 218 Q 398 235, 387 248 Q 342 209, 320 191 Q 299 181, 291 176 Q 215 177, 245 76 Q 209 141, 206 139 Q 194 145, 179 79 Q 174 152, 177 155 Q 176 172, 130 115 Q 154 181, 167 198 Q 185 177, 206 161 Q 221 150, 242 155 Q 225 176, 167 198',
                    length: '2260.47705078125',
                    strokeWidth: '2',
                    color: 'orange',
                    number: 99,
                    isScribble: false,
                    animTime: 5,
                },
                {
                    name: 'Large-ish Scribble',
                    path: 'M 450 300 Q 455 305, 445 300 T 450 300 T 455 305 T 450 300 T 449.75 300.25 T 449.5 299.5 T 449.25 299.25 T 451 301 T 451.25 301.25 T 448.5 301.5 T 448.25 301.75 T 448 302 T 447.75 302.25 T 452.5 297.5 T 447.25 302.75 T 453 303 T 453.25 303.25 T 453.5 296.5 T 453.75 303.75 T 446 296 T 454.25 295.75 T 454.5 295.5 T 445.25 295.25 T 455 305 T 455.25 305.25 T 455.5 305.5 T 444.25 305.75 T 456 306 T 443.75 306.25 T 443.5 293.5 T 456.75 293.25 T 457 293 T 457.25 292.75 T 442.5 307.5 T 442.25 307.75 T 442 292 T 441.75 308.25 T 441.5 291.5 T 441.25 308.75 T 459 309 T 459.25 290.75 T 459.5 309.5 T 459.75 309.75 T 440 310 T 439.75 289.75 T 460.5 310.5 T 460.75 310.75 T 439 311 T 461.25 288.75 T 461.5 311.5 T 438.25 311.75 T 462 312 T 437.75 312.25 T 462.5 287.5 T 462.75 287.25 T 463 287 T 463.25 313.25 T 463.5 286.5 T 463.75 313.75 T 436 286 T 464.25 314.25 T 435.5 285.5 T 435.25 285.25 T 465 285 T 434.75 315.25 T 434.5 284.5 T 465.75 284.25 T 434 284 T 466.25 316.25 T 433.5 316.5 T 466.75 316.75 T 467 317 T 432.75 317.25 T 432.5 317.5 T 432.25 317.75 T 468 282 T 431.75 281.75 T 468.5 318.5 T 431.25 281.25 T 469 319 T 469.25 280.75 T 430.5 280.5 T 469.75 280.25 T 430 320 T 429.75 320.25 T 429.5 320.5 T 470.75 320.75 T 429 321 T 471.25 278.75 T 471.5 321.5 T 428.25 278.25 T 472 322 T 427.75 277.75 T 427.5 322.5 T 472.75 277.25 T 427 323 T 473.25 276.75 T 473.5 276.5 T 473.75 323.75 T 426 276 T 425.75 324.25 T 425.5 275.5 T 425.25 275.25 T 425 325 T 475.25 274.75 T 424.5 274.5 T 475.75 325.75 T 424 326 T 476.25 326.25 T 476.5 273.5 T 423.25 273.25 T 477 273 T 422.75 272.75 T 477.5 272.5 T 477.75 272.25 T 422 272 T 478.25 328.25 T 478.5 271.5 T 478.75 328.75 T 421 329 T 479.25 270.75 T 420.5 270.5 T 479.75 270.25 T 480 270 T 419.75 330.25 T 480.5 269.5 T 419.25 330.75 T 481 331 T 418.75 331.25 T 418.5 331.5 T 418.25 331.75 T 482 332 T 482.25 332.25 T 417.5 332.5 T 482.75 332.75 T 417 267 T 416.75 266.75 T 483.5 333.5 T 416.25 266.25 T 416 334 T 415.75 265.75 T 415.5 265.5 T 415.25 334.75 T 415 335 T 485.25 264.75 T 414.5 264.5 T 485.75 264.25 T 414 336 T 413.75 336.25 T 486.5 336.5 T 413.25 336.75 T 413 263 T 487.25 337.25 T 487.5 262.5 ',
                    length: '30393.787109375',
                    strokeWidth: '2',
                    color: 'black',
                    number: 98,
                    isScribble: true,
                    animTime: 3,
                },
                {
                    name: 'Wolf',
                    path: 'M 506 470 Q 413 343, 475 290  Q 532 253, 482 218    Q 471 208, 498 211  Q 515 212, 524 199  Q 525 190, 546 192  Q 551 192, 566 163    Q 575 168, 576 179  Q 576 199, 574 199  Q 587 195, 588 186  Q 589 182, 594 190  Q 595 194, 591 201      Q 581 213, 566 233  Q 549 254, 564 296  Q 590 350, 551 426  Q 543 448, 568 500    Q 485 264, 306 500              Q 303 438, 331 401  Q 354 361, 349 342  Q 341 320, 313 330    Q 294 341, 269 345  Q 228 347, 208 324      Q 272 431, 344 333  Q 367 308, 388 302  Q 418 295, 433 325  Q 440 351, 398 406  Q 374 446, 362 451 Q 364 477, 382 491 ',
                    length: '1989.8394775390625',
                    strokeWidth: '1',
                    color: 'black',
                    number: 97,
                    isScribble: false,
                    animTime: 3,
                },
                {
                    name: 'lettuce',
                    path: 'M 351 270 Q 333 153, 390 232  Q 506 113, 429 242  Q 522 220, 439 271  Q 571 303, 413 304      Q 399 542, 239 477  Q 225 468, 217 500  Q 215 517, 186 489      Q 148 454, 167 448  Q 179 445, 188 438  Q 194 432, 172 402  Q 147 367, 161 340  Q 182 300, 252 277    Q 308 264, 351 270  Q 275 340, 254 396    Q 411 305, 410 304  Q 254 416, 225 439  Q 246 336, 344 270         ',
                    length: '2107.392578125',
                    strokeWidth: '6',
                    color: 'lightgreen',
                    number: 96,
                    isScribble: false,
                    animTime: 6,
                },
                {
                    name: 'S',
                    path: 'M 374 182 Q 415 183, 415 181  Q 415 140, 385 118      Q 353 100, 318 117    Q 287 136, 284 179  Q 286 231, 340 245  Q 386 253, 379 289  Q 373 311, 335 300  Q 313 293, 314 264  Q 285 261, 281 263  Q 281 328, 336 339  Q 374 339, 393 328  Q 418 304, 410 254    Q 401 211, 347 203  Q 324 197, 323 176      Q 323 163, 334 150  Q 344 141, 360 144  Q 373 147, 375 161  Q 376 182, 374 182 ',
                    length: '2107.392578125',
                    strokeWidth: '1',
                    color: 'black',
                    number: 95,
                    isScribble: false,
                    animTime: 6,
                }
            ],
            numSaved: 0,
        }
        this.saveLayer = this.saveLayer.bind(this)
        this.addLayer = this.addLayer.bind(this)
        this.canvasClicked = this.canvasClicked.bind(this)
        this.toLayers = this.toLayers.bind(this)
        this.toSaved = this.toSaved.bind(this)
        this.deleteLayer = this.deleteLayer.bind(this)
        this.changeName = this.changeName.bind(this)
    }

    render() {
        return (
            <div>
                {/* <LoginPage /> */}
                <svg className="canvas" id="canvas1" onClick={this.canvasClicked} width="700" height="500">
                    {this.state.layers.map(layer => (
                        <Path key={"path" + layer.number} number={layer.number} color="black" strokeWidth="2" d={layer.path} />
                    ))}
                </svg>
                <div id="section">
                    <div id="filler">
                        <div id="heading">
                            <button id="addLayerBtn" onClick={this.addLayer}>Add Layer</button>
                            <button id="selectBtn">Select Newest</button>
                            <button className="animate" id="animateBtn">Animate</button>
                        </div>
                    </div>
                    <div className="right-column">
                        <div id="col-header">
                            <div id="tab-container">
                                <button onClick={this.toLayers} className="tab clicked" id="layers-tab">Layers</button>
                                <button onClick={this.toSaved} className="tab" id="saved-tab">Saved</button>
                            </div>
                        </div>
                        <LayerList tab={this.state.tab} layers={this.state.layers} saved={this.state.saved} deleteLayer={this.deleteLayer} changeName={this.changeName} />
                    </div>
                </div>
            </div>
        )
    }

    saveLayer() {

    }

    toLayers() {
        this.setState( {tab: 1} )
    }

    toSaved() {
        this.setState( {tab: 2} )
    }

    canvasClicked() {
        this.setState({ currentPath: document.querySelector(`#path${this.state.numLayers}`).getAttribute('d') })
    }

    addLayer() {
        const oldLayer = {
          name: this.state.layers[this.state.numLayers].name,
          number: this.state.numLayers,
          path: document.querySelector(`#path${this.state.numLayers}`).getAttribute('d'),
        }
        const newLayer = {
          name: `Layer #${this.state.numLayers + 1}`,
          number: this.state.numLayers + 1,
          path: '',
        }

        this.state.layers.pop()
        this.setState(state => ({
            layers: state.layers.concat(oldLayer).concat(newLayer),
            numLayers: state.numLayers + 1,
            currentPath: ''
        }))
        console.log(this.state.layers)
    }

    deleteLayer(num) {
        let half1 = this.state.layers.slice(0, num - 1)
        let half2 = this.state.layers.slice(num)
        if (num === this.state.numLayers) {
          this.setState({ currentPath: '' })
        }
        this.setState(state => ({
            layers: half1.concat(half2),
            numLayers: state.numLayers - 1,
        }))
    }

    changeName(e, num) {
      let half1 = this.state.layers.slice(0, num - 1)
      let half2 = this.state.layers.slice(num)
      const newLayer = {
        name: e.target.value,
        number: this.state.layers[num - 1].number,
        path: this.state.layers[num - 1].path,
      }
      this.setState({ layers: half1.concat(newLayer).concat(half2) });
    }
}

function Path(props) {
    return (
        <path id={"path" + props.number} className="draw" stroke={props.color} strokeLinecap="round" strokeWidth={props.strokeWidth} fill="transparent" d={props.d} />
    )
}

function LayerList(props) {
    if (props.tab === 1) {
        return (
            <div className="layers-container">
                {props.layers.map(layer => (
                    <Layer key={"layer" + layer.number} number={layer.number} deleteLayer={props.deleteLayer} changeName={props.changeName} />
                ))}
            </div>
        )
    } else {
        return (
            <div className="layers-container">
                {props.saved.map(thing => (
                    <Saved key={"saved" + thing.number} number={thing.number} name={thing.name} path={thing.path} strokeWidth={thing.strokeWidth} length={thing.length} color={thing.color} isScribble={thing.isScribble} animTime={thing.animTime} />
                ))}
            </div>
        )
    }
}


ReactDOM.render(<Main/>, document.querySelector('#root'))