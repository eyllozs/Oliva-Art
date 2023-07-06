import React from "react";
import tattoo from "../images/tattoo.jpeg";

export default function Services() {
  return (
    <>
      <div className="heading">ART PROJECTS</div>
      <div className="arts">
        <div className="art-container">
          <div className="row">
            <div className="col-md-4 py-3">
              <div className="card">
                <img
                  src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/9097bc147262039.62beef1131fe8.jpg"
                  alt=""
                />
                <div className="card-body">
                  <h5 className="card-title">Disturbance </h5>
                  <p className="card-text">Made by Sezer İlgün</p>
                </div>
              </div>
            </div>

            <div id="oculus" className="col-md-4 py-3">
              <div className="card">
                <img
                  src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/6f6b82147258599.62bee3629a462.jpg"
                  alt=""
                />
                <div className="card-body">
                  <h5 className="card-title">Genesis </h5>
                  <p className="card-text">Made by Sezer İlgün</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 py-3">
              <div className="card">
                <img
                  src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/0a4164147257631.62bedfeed06f1.jpg"
                  alt=""
                />
                <div className="card-body">
                  <h5 className="card-title">Ikarus</h5>
                  <p className="card-text">Made by Sezer İlgün</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="art-container">
          <div className="row">
            <div className="col-md-4 py-3">
              <div className="card">
                <img
                  src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/143fa698125607.5ed5458e2a521.jpg"
                  alt=""
                />
                <div className="card-body">
                  <h5 className="card-title">Reinterpretations </h5>
                  <p className="card-text">Made by Sezer İlgün</p>
                </div>
              </div>
            </div>

            <div id="oculus" className="col-md-4 py-3">
              <div className="card">
                <img
                  src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/471501147262549.62bef0e3e9634.png"
                  alt=""
                />
                <div className="card-body">
                  <h5 className="card-title">Deterioration </h5>
                  <p className="card-text">Made by Sezer İlgün</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 py-3">
              <div className="card">
                <img
                  src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/3925d9147258599.62bee3629aa22.jpg"
                  alt=""
                />
                <div className="card-body">
                  <h5 className="card-title">Loudha</h5>
                  <p className="card-text">Made by Sezer İlgün</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br /> <br /> <br />
        <div className="heading">OUR SERVICES</div>
        <div className="art-container">
          <div className="row">
            <div className="col-md-4 py-3">
              <div className="card">
                <img
                  src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/8562dd147262039.62beef11317cc.jpg"
                  alt=""
                />
                <div className="card-body">
                  <h5 className="card-title">Digital Art</h5>
                  <p className="card-text">
                    Contact for detailed digital drawings.
                  </p>
                </div>
              </div>
            </div>

            <div id="oculus" className="col-md-4 py-3">
              <div className="card">
                <img
                  src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/a5fcc5147260227.62bee8f4dbf44.jpg"
                  alt=""
                />
                <div className="card-body">
                  <h5 className="card-title">Designed Products </h5>
                  <p className="card-text">
                    Contact for t-shirt and painting products.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 py-3">
              <div className="card">
                <img src={tattoo} alt="" />
                <div className="card-body">
                  <h5 className="card-title">Tattoos</h5>
                  <p className="card-text">
                    Contact for a tattoo design appointment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
