import React from "react";

// TODO: Remove inline styles

const Finder = () => {
  const searchStyle = {
    backgroundColor: "blueviolet",
  };

  const width = "50%";
  const height = "20px";

  return (
    <div className="container">
      <div className="row">
        <center>
          <div
            className="input-group search-box"
            style={{ width: width, height: height }}
          >
            <input
              type="search"
              id="search_input"
              className="form-control"
              placeholder="Enter a city"
              aria-label="Search"
              aria-describedby="search-addon"
            />
            <button
              type="button"
              id="search_button"
              style={searchStyle}
              className="btn text-light"
            >
              Add City
            </button>
          </div>
        </center>
      </div>
    </div>
  );
};

export default Finder;
