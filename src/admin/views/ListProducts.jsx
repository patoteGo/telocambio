import React from 'react'

export default function ListProducts() {
  return (
    <div className="ListProducts">
      <div className="container">
        <div className="row my-5">
          <div className="col-12">
            <h2 className="text-center">Tus Productos</h2>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">id</th>
                  <th scope="col">Imagen</th>
                  <th scope="col">Titulo</th>
                  <th scope="col">Porque lo cambias</th>
                  <th scope="col">Ofrecido</th>
                  <th scope="col">Mensajes</th>
                  <th scope="col">Editar</th>
                  <th scope="col">Borrar</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>1</th>
                  <td>
                    <img
                      style={{ width: '40px' }}
                      src="/img/logo.png"
                      alt="logo"
                    />
                  </td>
                  <th>Licuadora</th>
                  <td>Por una tostadora</td>
                  <td>
                    <button className="btn btn-sm btn-info">Ofrecido</button>
                  </td>
                  <td>
                    <button className="btn btn-sm btn-warning">Mensajes</button>
                  </td>
                  <td>
                    <button className="btn btn-sm btn-secondary">EDITAR</button>
                  </td>
                  <td>
                    <button className="btn btn-sm btn-danger">BORRAR</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
