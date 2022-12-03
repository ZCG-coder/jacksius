import React from "react";
import "./Jacksius.sass";
import $ from "jquery";

export class Jacksius extends React.Component<any, any> {
    /**
     * Gets the temperature in Jacksius from MEGA.io
     * @private
     */

    private temperature: string = "";

    onResize() {
        $("#temperature").css({"font-size": `${($(window).height() || 100) / 3}px`});
    }

    render() {
        this.loadJacksius().then();

        $(window).on("resize", this.onResize);
        return <p id={"temperature"}>...</p>;
    }

    private async loadJacksius() {
        const xmlHttp = new XMLHttpRequest();
        let temperature: string = "";
        xmlHttp.onreadystatechange = () => {
            if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
                temperature = xmlHttp.responseText;
                $("#temperature").text(`${temperature}°J`);
                this.onResize();
            }
        };
        xmlHttp.open("GET", "https://pst.klgrth.io/paste/ystsq/download", true); // true for asynchronous
        xmlHttp.setRequestHeader("Access-Control-Allow-Origin", "https://pst.klgrth.io");
        xmlHttp.setRequestHeader("Vary", "Origin")
        xmlHttp.send(null);
    }
}
