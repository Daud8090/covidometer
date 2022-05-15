import React from "react";

function News(props) {
  return (
    <>
        <div role="grid" className="cardcontainer">
        <div role="row" class="card">
            <div class="card-header">
               <strong>{props.title}</strong>
            </div>
            <div class="card-body">
                <img src={props.image} alt="image"/>
                <p class="card-text"></p>
                <h5 >content:  </h5>
                <p class="card-text deaths">{props.content}</p>
                <h5 >publish at: </h5>
                <p class="card-text recovered">{props.publish}</p>
             
            </div>

        </div>
    </div>
    </>
  );
}
export default News;
