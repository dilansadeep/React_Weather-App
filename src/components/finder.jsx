import React from "react";

function Finder(props) {

    const searchStyle = {

        backgroundColor: 'blueviolet'
    };
    
    return (
        <div class="container">
            <div class="row">
                <div class="input-group search-box">
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
            </div>
        </div>
    )
}

export default Finder;