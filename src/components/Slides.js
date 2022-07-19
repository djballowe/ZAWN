import React from 'react'


export default function Slides(props) {
    
  return (
    <div className='slide-container'>
        <div className='main-image'>
            <img src={require(`../Images/Product Page/Tooth Brush/ToothBrush1.jpg`)} alt="" />
        </div>
        <div className='slide-images'>
            <img src={require(`../Images/Product Page/Tooth Brush/ToothBrush2.jpg`)} alt="" />
            <img src={require(`../Images/Product Page/Tooth Brush/ToothBrush7.jpg`)} alt="" />
            <img src={require(`../Images/Product Page/Tooth Brush/ToothBrush12.jpg`)} alt="" />
            <img src={require(`../Images/Product Page/Tooth Brush/ToothBrush13.jpg`)} alt="" />
        </div>
    </div>
  )
}
