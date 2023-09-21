import React from "react";
import styled from "styled-components";

const LoaderContainer = styled.div`
    width: 7rem;
    height: 2.5rem;
    display: inline-block;
    overflow: hidden;
    background: transparent;
`;

const LoaderDiv = styled.div`
    width: 80%;
    height: 80%;
    position: relative;
    transform: translateZ(0) scale(1);
    backface-visibility: hidden;
    transform-origin: 0 0;

    & > div {
        position: absolute;
        width: 2rem;
        height: 2rem;
        border-radius: 50%;
        top: 0;
        left: 0;
        box-sizing: content-box;
    }

    & > div:nth-child(1) {
        background: #350078;
        animation: ball-animate 1s linear infinite;
        animation-delay: -0.5s;
    }
    & > div:nth-child(2) {
        background: #ebb700;
        animation: ball-animate 1s linear infinite;
        animation-delay: 0s;
    }

    @keyframes ball-animate-o {
        0% {
            opacity: 1;
            transform: translate(0 0);
        }
        49.99% {
            opacity: 1;
            transform: translate(10rem, 0);
        }
        50% {
            opacity: 0;
            transform: translate(10rem, 0);
        }
        100% {
            opacity: 0;
            transform: translate(0, 0);
        }
    }
    @keyframes ball-animate {
        0% {
            transform: translate(0, 0);
        }
        50% {
            transform: translate(5rem, 0);
        }
        100% {
            transform: translate(0, 0);
        }
    }
`;

export default function LoaderFS() {
    return (
        <div className="flex flex-row justify-center items-center h-[100%] w-full backdrop-blur-[8px] absolute top-0 left-0">
            <LoaderContainer>
                <LoaderDiv>
                    <div></div>
                    <div></div>
                </LoaderDiv>
            </LoaderContainer>
        </div>
    );
}
