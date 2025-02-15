import React from "react";
import "./IntroduceCard.css"
import MyImage from "../image/introduce_myself_image.png"

function IntroduceCard() {
    return (
        <div>
            <div className="introduce_card">
                <div className="introduce_card_side_bar"></div>
                <ul className="introduce_card_main">
                    <li>
                        <ul className="introduce_card_main_title">
                            <li>
                                <h1>최수혁</h1>
                            </li>
                            <li>GDG on Campus Front-end 유닛장</li>
                        </ul>
                    </li>
                    <li className="introduce_card_main_body">
                        <ul>
                            <li>전화번호 ?</li>
                            <li>메일 ?</li>
                            <li>깃 주소 ?</li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default IntroduceCard;