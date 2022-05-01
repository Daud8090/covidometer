import './Card.css'

function Card(props) {
// console.log(props)
    return (<div role="grid" className="cardcontainer">
        <div role="row" class="card">
            <div class="card-header">
               <strong> {props.name}</strong>
            </div>
            <div class="card-body">
                <h5 class="card-title">total cases: </h5>
                <p class="card-text">{props.total_cases}</p>
                <h5 class="card-title deaths">total deaths: </h5>
                <p class="card-text deaths">{props.total_deaths}</p>
                <h5 class="card-title recovered">total recovered: </h5>
                <p class="card-text recovered">{props.total_recovered}</p>
                <h5 class="card-title active">active cases: </h5>
                <p class="card-text ">{props.active_cases}</p>
                {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
            </div>

        </div>
    </div>
    )
}
export default Card;