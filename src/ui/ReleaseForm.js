import React from 'react';
//componente stateless
//estou passando o nome de uma função dentro de Releases, para assim chamar uma função de fora deste componente.
const ReleaseForm = ({submitHandler}) => {
    let _releaseName, _releaseDate;
    //como houve a desconstrução da função, passo os dados como json
    const handleSubmitDentroDoCompoennte = (e) => {
        console.log('ReleaseForm -> handleSubmit');
        submitHandler(e, {
          name: _releaseName.value,
          date: _releaseDate.value
        }
      );
    }

    return (
        <form onSubmit={handleSubmitDentroDoCompoennte} className="form-inline">
        <label className="sr-only" for="inlineFormInputName2">Release Name</label>
        <input type="text" ref={input => _releaseName = input} className="form-control mb-2 mr-sm-2" id="inlineFormInputName2" placeholder="Set the Name"/>
      
        <label className="sr-only" for="inlineFormInputGroupUsername2">Release Date</label>
        <div className="input-group mb-2 mr-sm-2">
          <div className="input-group-prepend">
            <div className="input-group-text">@</div>
          </div>
          <input type="text" ref={input => _releaseDate = input} className="form-control" id="inlineFormInputGroupUsername2" placeholder="Set the Date"/>
        </div>
      
        <button type="submit" className="btn btn-primary mb-2">Save</button>
      </form>
    )
};

export default ReleaseForm;