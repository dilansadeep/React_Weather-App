import React from "react";

function Finder(props) {

    const searchStyle = {

        backgroundColor: 'blueviolet'
    };
    
    const width = '50%';
    const height = '20px';

    return (
        <div class="container">
            <div class="row">
                <center>
                <div class="input-group search-box" style={{ width: width, height: height }}>
                    <input
                        type="search"
                        id="search_input"
                        class="form-control"
                        placeholder="Enter a city"
                        aria-label="Search"
                        aria-describedby="search-addon"
                    />
                    <button
                        type="button"
                        id="search_button"
                        style= {searchStyle}
                        class="btn"
                    >
                        Add City
                    </button>
                </div>
                </center>
            </div>
        </div>
    )
}

export default Finder;