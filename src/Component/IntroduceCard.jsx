import React from "react";
import "./IntroduceCard.css"
import MyImage from "../image/introduce_myself_image.png"

function IntroduceCard() {
    return (
        <div>
            <div className="introduce_card">
                <ul>
                    <li>
                        <ul>
                            <li>최수혁</li>
                            <li>GDG on Campus Front-end 유닛장</li>
                        </ul>
                    </li>
                    <li>전화번호 ?</li>
                    <li>메일 ?</li>
                    <li>깃 주소 ?</li>
                </ul>
            </div>
        </div>
    )
}

export default IntroduceCard;