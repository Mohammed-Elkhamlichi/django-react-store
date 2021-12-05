import React from "react";
import ReactDom from "react-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css.map";

const Index = () => {
    return (
        <React.Fragment>
            <div
                style={{
                    background: "cyan",
                    boxShadow: "0.5px 0.5px black",
                    margin: "10px auto",
                    width: "500px",
                    height: "500px",
                }}
            >
                <button
                    style={{
                        padding: "10px 20px",
                        backgroundColor: "green",
                        fontWeight: "bold",
                        color: "white",
                        border: "none",
                        borderRadius: "0px 20px 0px 20px",
                    }}
                >
                    Dev By Mohammed Elkhamlichi
                </button>
            </div>
        </React.Fragment>
    );
};

ReactDom.render(<Index />, document.getElementById("root"));
