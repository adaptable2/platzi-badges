import React from 'react';
import { Link } from 'react-router-dom';
import './styles/page_404.css';
import gifAstro from '../images/astronauta.gif';

function NotFound() {
  return (
    <React.Fragment>
      <div className="container-fluid d-flex justify-content-center Home page_404">
        <div className="w-100 row justify-content-center align-items-center">
        <div className="col-md-6 text-center img-astronauta">
          <img src={gifAstro} alt="Error 404" className="img-fluid"/>
        </div>
        <div className="col-md-6 text-center text-md-left">
          <h1>404</h1>
          <h3>La pagina que buscas no esta disponible por alguna de las siguientes razones</h3>
          <ol className="mt-3">
            <li><span>El vinculo que conduce a esta pagina es incorrecto o denmasiado antiguo.</span></li>
            <li><span>Has llegado hasta aquí por medio de un marcador vinculado a una paginá que ha cambiado de ubicación.</span></li>
          </ol> 
          <Link to="/" className="btn btn-primary my-3">Volver al Home</Link>
        </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default NotFound;
