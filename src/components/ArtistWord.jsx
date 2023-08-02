import React from "react";

function ArtistWord(){
    return(
        <div className="artist-dv">
        <div className="artist-word">
          <div className="row">
            <div className="col-lg-5 col-sm-12">
              <img
                className="a"
                src={require("../resources/d-removebg-preview.png")}
                style={{ width: "100%" }}
                alt=''
              />
            </div>
            <div className="col-lg-7 col-sm-12">
              <p>
                <i className="bi bi-quote"></i>
                <br />
                There is only one valuable thing in art: the thing you cannot
                explain.
                <br />
                ―Georges Braque
              </p>
              <p>
                <i className="bi bi-quote"></i>
                <br />
                Painting is poetry that is seen rather than felt, and poetry is
                painting that is felt rather than seen.
                <br />― Leonardo da Vinci
              </p>
            </div>
          </div>
        </div>
      </div>
    )
}

export default ArtistWord;