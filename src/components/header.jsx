import React from 'react'

export const header = () => {
    return (
        <div className="card-header">
            <h8>INGREDIENTES</h8>
            <h1>Nombre del plato</h1>
            <Link to="/" className="lection">
              Seleccionar todo |
            </Link>
            <Link to="/" className="lection">
              Deseleccionar todo
            </Link>
          </div>
    )
}
