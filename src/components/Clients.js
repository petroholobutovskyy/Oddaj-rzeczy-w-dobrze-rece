import React from 'react'

export default function Clients() {

    const showList = () => {
        const clientList = document.querySelectorAll(".client-list-name")
        clientList.style.display = "active"
    }
    return (
        <div className="container">
            <div className="client-container">
            <h1>Komu pomagamy?</h1>
            <div className="buttons">
            <button>Fundacjom</button>
            <button>Organizacjom</button>
            <button>Lokalnym zbiorkom</button>
            </div>
            <div className="header-image"></div>
            <div className="client-list">
                <ul className="client-list-name hidden">Fundacjom
                    <li className="client-single-fondation">Lorem Ipsum</li>
                    <li className="client-single-fondation">Lorem Ipsum</li>
                    <li className="client-single-fondation">Lorem Ipsum</li>
                    <li className="client-single-fondation">Lorem Ipsum</li>
                    <li className="client-single-fondation">Lorem Ipsum</li>
                </ul>
                <ul className="client-list-name hidden"> Organizacjom
                    <li className="client-single-fondation">Lorem Ipsum</li>
                    <li className="client-single-fondation">Lorem Ipsum</li>
                    <li className="client-single-fondation">Lorem Ipsum</li>
                    <li className="client-single-fondation">Lorem Ipsum</li>
                    <li className="client-single-fondation">Lorem Ipsum</li>
                </ul>
                <ul className="client-list-name hidden"> Lokalnym zbirkom
                    <li className="client-single-fondation">Lorem Ipsum</li>
                    <li className="client-single-fondation">Lorem Ipsum</li>
                    <li className="client-single-fondation">Lorem Ipsum</li>
                    <li className="client-single-fondation">Lorem Ipsum</li>
                    <li className="client-single-fondation">Lorem Ipsum</li>
                </ul>
            </div>
            </div>
            
        </div>
    )
}
