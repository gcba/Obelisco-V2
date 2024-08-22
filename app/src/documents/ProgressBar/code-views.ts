export const PROGRESSBAR_TYPES =
  `
    <div className="progress">
        <div
            className="progress-bar bg-info"
            role="progressbar"
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{width: '25%'}}
        ></div>
    </div>
    
    <br/>
    
    <div className="progress">
        <div
            className="progress-bar bg-info"
            role="progressbar"
            aria-valuenow="50"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{width: '50%'}}
        ></div>
    </div>
    
    <br />        
    
    <div className="progress">
        <div
            className="progress-bar bg-info"
            role="progressbar"
            aria-valuenow="100"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{width: '100%'}}
        ></div>
    </div>
    
    <br />

    <div className="progress">
        <div
            className="progress-bar bg-success"
            role="progressbar"
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{width: '25%'}}
        ></div>
    </div>
    
    <br />

    <div className="progress">
        <div
            className="progress-bar bg-success"
            role="progressbar"
            aria-valuenow="50"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{width: '50%'}}
        ></div>
    </div>

    <br />
    
    <div className="progress">
        <div
            className="progress-bar bg-success"
            role="progressbar"
            aria-valuenow="100"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{width: '100%'}}
        ></div>
    </div>
`;

export const SPINNER_SIZES =
  `
    <p className="steps">Descripción</p>
    <div className="progress">
        <div
            className="progress-bar bg-info"
            role="progressbar"
            aria-valuenow={50}
            aria-valuemin={0}
            aria-valuemax={100}
            style={{width: '50%'}}
        ></div>
    </div>
    
    <br/>
    
    <p className="steps">Descripción</p>
    <div className="progress">
        <div
            className="progress-bar bg-info"
            role="progressbar"
            aria-valuenow={100}
            aria-valuemin={0}
            aria-valuemax={100}
            style={{width: '100%'}}
        ></div>
    </div>
    
    <br />

    <p className="steps">Descripción</p>
    <div className="progress">
        <div
            className="progress-bar bg-success"
            role="progressbar"
            aria-valuenow={50}
            aria-valuemin={0}
            aria-valuemax={100}
            style={{width: '50%'}}
        ></div>
    </div>
    
    <br/>
    
    <p className="steps">Descripción</p>
    <div className="progress">
        <div
            className="progress-bar bg-success"
            role="progressbar"
            aria-valuenow={100}
            aria-valuemin={0}
            aria-valuemax={100}
            style={{width: '100%'}}
        ></div>
    </div>
`;

export const SPINNER_BLOCK =
  `
    <div className="col-4 col-md-2 mx-auto">
        <div className="spinner-block text-primary" role="status">
            <span className="sr-only">Cargando...</span>
        </div>
    </div>
`;