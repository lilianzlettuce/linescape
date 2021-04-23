import Layer from './Layer.js'
import Saved from './Saved.js'

export default function LayerList(props) {
    if (props.tab === 1) {
        return (
            <div className="layers-container">
                {props.layers.map(layer => (
                    <Layer key={"layer" + layer.number} number={layer.number} name={layer.name} deleteLayer={props.deleteLayer} saveLayer={props.saveLayer} updateLayer={props.updateLayer} reloadLength={props.reloadLength} path={layer.path} />
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