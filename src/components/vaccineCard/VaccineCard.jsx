import './VaccineCard.css'

function VaccineCard(props) {
// console.log(prop)
    return (<div role="grid" className="cardcontainer">
        <div role="row" class="card">
            <div class="card-header">
               <strong> {props.name}</strong>
            </div>
            <div class="card-body">
                <p class="card-text">{props.founder}</p>
                <p class="card-text success">{props.approvedBy}</p>
                <p class="card-text success">{props.trials}</p>
                <p>approval Source :<a href={props.sources}>{props.approvalSource}</a></p>
            </div>

        </div>
    </div>
    )
}
export default VaccineCard;