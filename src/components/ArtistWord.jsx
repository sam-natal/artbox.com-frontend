import React from "react";

function ArtistWord(){
    return(
        <div class="artist-dv">
        <div class="artist-word">
          <diV class="row">
            <div class="col-lg-5 col-sm-12">
              <img
                class="a"
                src={require("../resources/d-removebg-preview.png")}
                style={{ width: "100%" }}
              />
            </div>
            <div class="col-lg-7 col-sm-12">
              <p>
                <i class="bi bi-quote"></i>
                <br />
                There is only one valuable thing in art: the thing you cannot
                explain.
                <br />
                ―Georges Braque
              </p>
              <p>
                <i class="bi bi-quote"></i>
                <br />
                Painting is poetry that is seen rather than felt, and poetry is
                painting that is felt rather than seen.
                <br />― Leonardo da Vinci
              </p>
            </div>
          </diV>
        </div>
      </div>
    )
}

export default ArtistWord;