import React from "react";
//Como implementar estilo.
//Por ser um componente reutilizável, eu passo como parâmetro as propriedades
const HomeCard = (props) => (
  <div className="col-12 col-sm-4" style={{paddingTop: '7px'}}>
    <div className="card" style={{width: '18rem'}}>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" style={{paddingTop: '5px', width: '100px', height: '100px'}} className="card-img-top rounded mx-auto d-block" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">
          {props.text}
        </p>
        <button  className="btn btn-primary" onClick={props.action}>Go somewhere</button>
      </div>
    </div>
  </div>
);

export default HomeCard;
