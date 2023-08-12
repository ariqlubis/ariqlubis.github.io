import React from "react";
import parser from "html-react-parser";

export default function PageDetailDescriptions({ data }) {
    return (
        <main>
            <h4 className="text-center">Deskripsi</h4>
            <div className="text-center">{parser(data.description)}</div>
        </main>
    );
}
