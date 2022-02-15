import React from "react"

export default class Modal extends React.Component{
    render() {
        return <div className={this.props.show ? "showModal" : "hideModal"}>
            <section className="mainModal">
                <h1 className="closeWindow" onClick={this.props.hideModal}>X</h1>
                <h1>{this.props.authorData.id}</h1>
                <p>Author registered: {this.props.authorData.createdAt}</p>
                <p>Karma: {this.props.authorData.karma}</p>
                <p>Number of interactions: {this.props.authorData.submittedInteractions}</p>
            </section>
        </div>
    }
}