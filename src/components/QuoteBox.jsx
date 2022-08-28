import React from 'react';
import { useState } from 'react'
import BoxButton from './BoxButton';
import Phrases from '../Phrases.json'

const QuoteBox = ({ Colors }) => {

    let [Index, setIndex] = useState(0)
    let [colorIndex, setColorIndex] = useState(0)

    const randomPhrase = () => {
        const randomIndex = Math.floor(Math.random() * Phrases.length)
        const randomColor = Math.floor(Math.random() * Colors.length)
        setIndex(randomIndex)
        setColorIndex(randomColor)
    }
    document.body.style.background = Colors[colorIndex]
    return (
        <div>
            <div className = "box">
                <h1 className = "quote" style = {{ color: Colors[colorIndex] }}> <small>"</small> { Phrases[Index].quote }</h1>
                <h3 className="author" style={{ color: Colors[colorIndex] }}>{Phrases[Index].author}</h3>
                <BoxButton rPhrase = {randomPhrase} buttonColor = { Colors[colorIndex] }/>
            </div>
        </div>
    );
};

export default QuoteBox;