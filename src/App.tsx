import React from "react";
import "./App.css";
import MonacoEditor from "react-monaco-editor";

function App() {
    return (
        <div className="App">
            <MonacoEditor
                width="600"
                height="300"
                language="json"
                theme="vs"
                options={{
                    selectOnLineNumbers: true,
                }}
            />
        </div>
    );
}

export default App;
