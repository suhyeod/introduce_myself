import React, {useEffect} from "react";
import "./IntroduceCard.css"
import GDGocimage from "../image/Google_for_Developers_logomark_color.png"



function IntroduceCard() {
    const my_information = [
        {
            name: "최수혁",
            position: "GDG on Campus Front-end 유닛장",
            Phone_Number: "010-1234-1234",
            E_mail: "suhyeok00@naver.com",
            git: "깃 주소 ?"
        }
    ]

    const my_information_list = [];

    useEffect(() => {})
    return (
        <div>
            <div className="introduce_card">
                <div className="introduce_card_side_bar"></div>
                <ul className="introduce_card_main">
                    <li>
                        <ul className="introduce_card_main_title">
                            {
                                my_information.map((info, index) => (
                                    <li key={index}>
                                        <h1>{info.name}</h1>
                                        {info.position}
                                    </li>
                                ))
                            }
                        </ul>
                    </li>
                    <li className="introduce_card_main_body">
                        <ul>
                            {
                                my_information.map((info, index) => (
                                    <li key={index}>
                                        <p>📞 {info.Phone_Number}</p>
                                        <p>📧 {info.E_mail}</p>
                                        <p>💻 {info.git}</p>
                                    </li>
                                ))
                            }
                        </ul>
                    </li>
                    <li className="GDGocimage">
                        <img src= {GDGocimage} alt="GDGocimage" />
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default IntroduceCard;