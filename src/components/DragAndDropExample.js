import React from "react";

const DragAndDropExample = () => {
    return (
        <div className="drag-and-drop-example">
            <h1>Drag and Drop</h1>
            <iframe
                className="demo-frame"
                title="DragDropIframe"
                src="https://jqueryui.com/resources/demos/droppable/default.html"
                style={{
                    width: "100%",
                    height: "500px",
                    border: "1px solid #ccc",
                }}
                frameBorder="0"
            ></iframe>
        </div>
    );
};

export default DragAndDropExample;
