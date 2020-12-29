import React from 'react';
import './CardComponent.css';
import styled from "styled-components";
import { faGlobe } from "@fortawesome/free-solid-svg-icons"
import { faAppStore, faGooglePlay } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const CardImage = styled.div`
  background-image: url("/portfolio/images/${props => props.img}");
  background-size:cover;
  /* width : 90%; */
  height : 125px;
  border-radius : 10px;
  /* background-color : #999; */
`

const CardItemBox = (props) => {
    const link = "/fastcampus";
    console.log(props.img);
    if(props.id === ""){
        return (
            <li className="card-item"></li>
        )
    }
    return (
        <li className="card-item">
            <a href={link}>
            <CardImage img={props.img} />
            <div className="txt-container">
                <span className="category-txt">{props.category[0]}</span>
                <span className="category-txt">{props.category[1]}</span>
                {props.category[2] === "" ? null :
                <span className="category-txt">{props.category[2]}</span>    
                }
                <h6 className="f-14 title">{props.title}</h6>
                <p className="f-12 text">{props.description}</p>
                <FontAwesomeIcon icon={faGlobe} color="#999" className="icon icon-web"/>
                <FontAwesomeIcon icon={faAppStore} color="#999" className="icon icon-appstore"/>
                <FontAwesomeIcon icon={faGooglePlay} color="#999" className="icon icon-googleplay" />
            </div>
            </a>
        </li>
    )
}

const CardComponent = (props) => {
    const contentData = props.contentData
    const cardItemData = contentData.cardItem;
    const CardListItem = cardItemData.map((cardItem, index)=> <CardItemBox key={index} id={cardItem.id} img={cardItem.thumnail} category={cardItem.category} title={cardItem.title} description={cardItem.description} />);
    return(
        <div className="card-component">
            <h3 className="card-component-title">{contentData.title}</h3>
            <ul className="card-item-container">
            {CardListItem}
            </ul>
        </div>
    )
}


export default CardComponent;
