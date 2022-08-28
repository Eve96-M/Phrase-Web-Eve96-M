import React from 'react';

const BoxButton = ({rPhrase, buttonColor}) => {
    
    return (
        <div className = 'button-Container'>
            <button className="random-Phrase" style={{ backgroundColor: buttonColor}} onClick={rPhrase}>&#62;</button>
        </div>
    );
};

export default BoxButton;