import React from "react";
import ReactDom from "react-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css.map";
import styles from "./IndexStyle";

const Index = () => {
    return (
        <React.Fragment>
            <div style={styles.dev}>
                <button style={styles.button}>
                    Dev By Mohammed Elkhamlichi
                </button>
            </div>
        </React.Fragment>
    );
};

ReactDom.render(<Index />, document.getElementById("root"));
