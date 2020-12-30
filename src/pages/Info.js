import React from 'react';
import './Info.css';
import styled from "styled-components";
import { faAngleLeft, faGlobe } from "@fortawesome/free-solid-svg-icons"
import { faAppStore, faGithub, faGooglePlay } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import workData from '../data/workData.json';
import toyData from '../data/toyData.json';

const Thumb = styled.div`
  background-image: url("/images/${props => props.img}");
  background-size:cover;
  background-position : center;
  height : 165px;
  border-radius : 10px;
  /* background-color : #999; */
  display : flex;
  flex : 1;
  align-self: center;
`

const TopContainer = styled.div`
  flex-direction : row;
  flex : 1;
  display : flex;
  padding : 50px 0;
`

const RightContent = styled.div`
  flex : 2;
  margin-left : 100px;
  /* background-color : #ddd; */
`

const Info = ({match}) => {

  const id = match.params.id;
  const type = match.params.type;
  console.log(type);

  const open_link = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  }

  let item = [];
  if(type === "work"){
      item = workData.cardItem;
  }else{
      item = toyData.cardItem;
  }
  let filterItem = item.filter(function (x) { return x.id == id })[0];
  console.log(filterItem);

  const { title, description, person, thumbnail, img, category, url } = filterItem;

  return (
    <main>
        <section className="content-section">

          <div className="">
            <FontAwesomeIcon icon={faAngleLeft} color="#999" className="icon icon-left" onClick={()=> window.location.href="/"}/>
          </div>
          <div className="info-container">
          <TopContainer>
            <Thumb img={thumbnail} />
            <RightContent>
              
              <h2>{title}</h2>
              <hr />
              <p className="info-label">카테고리</p>
              <div className="info-category">
                <span className="category-txt">{category[0]}</span>
                <span className="category-txt">{category[1]}</span>
                {category[2] === "" ? null :
                <span className="category-txt">{category[2]}</span>    
                }
              </div>
              <p className="info-label">설명</p>
              <p className="info-text">{description}</p>
              <p className="info-label">참여인원</p>
              <p className="info-text">{person + "명"}</p>
              <p className="info-label">링크</p>
              <div className="icon-container">
                  {url.link ? 
                  <FontAwesomeIcon icon={faGlobe} color="#999" className="icon icon-web" onClick={()=>open_link(url.link)}/>
                  : null}
                  {url.ios ? 
                  <FontAwesomeIcon icon={faAppStore} color="#999" className="icon icon-appstore" onClick={()=>open_link(url.ios)}/>
                  : null}
                  {url.android ? 
                  <FontAwesomeIcon icon={faGooglePlay} color="#999" className="icon icon-googleplay" onClick={()=>open_link(url.android)}/>
                  : null}
                  {url.github ? 
                  <FontAwesomeIcon icon={faGithub} color="#999" className="icon icon-github" onClick={()=>open_link(url.github)}/>
                  : null}
              </div>
            </RightContent>
          </TopContainer>
          <h2>프로젝트 이미지</h2>
          <div className="info-img-container">
          {
            img.map((item, index) => {
              return(
                <div>
                  <img src={"/images/"+item} alt="관련 이미지" className="info-img"/>
                </div>
              )
              
            })
          }
          </div>
          </div>
        </section>
    </main>
  )
}

export default Info;
