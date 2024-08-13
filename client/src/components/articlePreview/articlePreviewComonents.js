import React, { useState} from 'react';
import styled from 'styled-components';

export const BulletBlockWrapper = styled.div`
display: flex;
/*justify-content: center;*/ // This centers the wrapper
`;

export const BulletList = styled.div`
text-align: left;
width: 600px;
padding-left: 30px;

@media(max - width: 768px) {
    width: auto; // Adjust width for mobile
    padding-left: 10px; // Reduce padding for mobile
    padding-right: 10px; // Add padding to the right if needed
}
`;

export const PreviewRadioOption = ({ option, selectedOption, onOptionChange }) => {
    const isCorrect = selectedOption === option.option && option.isCorrect;
    const isIncorrect = selectedOption === option.option && option.isCorrect === false;
    const isUnknown = selectedOption === option.option && option.isCorrect === null;

    return (
        <div className='option-container'>
            <input
                type="radio"
                name="option"
                value={option.option}
                checked={selectedOption === option.option}
                onChange={() => onOptionChange(option.option)}
            />
            <label>{option.option}</label>
            {isCorrect && <p className="correct-option"><span className="em">Correct!</span> {option.explanation}</p>}
            {isIncorrect && <p className="incorrect-option"><span className="em">Incorrect.</span> {option.explanation}</p>}
            {isUnknown && <p className="unknown-option">{option.explanation}</p>}
        </div>
    );
};

export const PreviewQuestion = ({ question }) => {
    const [selectedOption, setSelectedOption] = useState(null);
    const [isAnswered, setIsAnswered] = useState(false);

    const handleOptionChange = (option) => {
        setSelectedOption(option);
        setIsAnswered(true);
    };

    return (
        <div>
            <p className="questionText">{question.question}</p>
            <hr style={{ border: 'none', width: '70%', height: '1px', backgroundColor: 'silver', margin: '5px 0 20px 0', borderTop: '1px dashed #86BFFF' }} />
            <BulletBlockWrapper>
                <BulletList>
                    {question.options.map((option, index) => (
                        <PreviewRadioOption
                            key={index}
                            option={option}
                            selectedOption={selectedOption}
                            onOptionChange={handleOptionChange}
                        />
                    ))}
                </BulletList>
            </BulletBlockWrapper>
            {/*{isAnswered && <p>You selected: {selectedOption}</p>}*/}
        </div>
    );
};

export const PreviewAssessment = ({ labelText, questions }) => {
    if (!questions || questions.length === 0) {
        return null;
    }

    return (
        <div id="WhatYouLearned" className=".questions-container">
            <div className="questions-content">
                <div id="contentAssessments">
                    <div className="center-block text-center" id="ImproveMedExBox">
                        <span id="ImproveMedExHeader">
                            <i id="ImproveMedExIcon" className="fa fa-graduation-cap"></i>
                            See what you learned!
                        </span>
                    </div>
                    <div className="questions">
                        {questions.map((question, index) => <PreviewQuestion key={index} question={question} />)}
                    </div>
                </div>
            </div>
        </div>
    );
};
