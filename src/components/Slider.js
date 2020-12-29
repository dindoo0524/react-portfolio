import React, { useState, useEffect, useRef } from "react";
import './Slider.css';
import banner1 from '../images/main-banner-1.jpg';
import banner2 from '../images/main-banner-2.jpg';
import banner3 from '../images/main-banner-3.jpg';
import banner4 from '../images/main-banner-4.jpg';
import styled from "styled-components";

const Slide = styled.div`
  background-image: url("${props => props.img}");
  background-size:cover;
`

const PagerContainer = styled.div`
  position: absolute;
  bottom:20px;
  left: 0;
  text-align : center;
  width:100%;

  & span{
    display:inline-block;
    width:15px;
    height:15px;
    background-color : #999;
    opacity:0.5;
    border-radius:50%;
    font-size:0;
    text-indent:-9999px;
    margin: 10px;
  }

  & span.active {
    background-color : #fff;
    opacity : 1;
  }
`

const CarouselComponent = ({slideItem}) =>{
  return (
    <Slide className="slide" img={slideItem.img} >
        <div className="slide-text">
          <h3 className="f-40">{slideItem.label1}</h3>
          <h3 className="f-40">{slideItem.label2}</h3>
          <p className="f-28">{slideItem.detail}</p>
        </div>
    </Slide>
  )
}


const TOTAL_SLIDES = 3; // 전체 슬라이드수 보다 1작은 수

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slideRef = useRef(null);
    const [activePage, setActivePage] = useState(1);
    
    const pagerMenu = [
      {id: 1, text : "1"},
      {id: 2, text : "2"},
      {id: 3, text : "3"},
      {id: 4, text : "4"},
    ];
    
    const Pager = (() => {
      return(
        <PagerContainer>
          {
            pagerMenu.map((item, index) =>{
                return <span key={index} className={activePage === item.id ? 'active' : ''} onClick={() => {setActivePage(item.id); setCurrentSlide(index)}}>{item.text}</span>
            })
          }
        </PagerContainer>
      )
    }) 

    const slideItem = [
      {num : 1, label1 : '', label2 : '', detail : '', img : banner1 },
      {num : 2, label1 : '완주반이 받은 사랑', label2 : '묻고 떠블로 쏜다!', detail : '37만원 상당 쿠폰 100% 당첨', img : banner2},
      {num : 3, label1 : '부담없이 시작하는', label2 : 'B2B 구독 서비스', detail : '이젠 임직원 교육도 온라인으로 편하게!', img : banner3},
      {num : 4, label1 : '부담없는 1주1권 외국어', label2 : '가벼운 학습지', detail : '학습지 최대 84% 할인!', img : banner4}
    ]
    const slideContent = slideItem.map((slideItem, index)=> <CarouselComponent slideItem={slideItem} key={index} />);
    
    useEffect(() => {
        slideRef.current.style.transition = "all 0.5s ease-in-out";
        slideRef.current.style.transform = `translateX(-${currentSlide}00%)`; // 백틱을 사용하여 슬라이드로 이동하는 애니메이션을 만듭니다.
        setActivePage(currentSlide+1);
      }, [currentSlide]);
    
    setInterval(() => {
      
    }, 4000);

    useEffect(() => {
      const interval = setInterval(() => {
        if (currentSlide >= TOTAL_SLIDES) { // 더 이상 넘어갈 슬라이드가 없으면 슬라이드를 초기화합니다.
          setCurrentSlide(0);
      } else {
          setCurrentSlide(currentSlide + 1);
      }
      }, 4000);
      return () => clearInterval(interval);
    }, );

    return(
      <div className="slider-container-wrap">
        <div className="slider-container" ref={slideRef}>
            {slideContent}
        </div>
        <Pager />
      </div>
    )
}

export default Slider;
