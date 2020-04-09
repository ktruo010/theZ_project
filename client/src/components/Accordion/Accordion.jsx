import React, { useState, useRef } from "react";
import IconCarrierDefault from '../../assets/IconCarrierDefault'
import RequestButton from '../Buttons/RequestButton/RequestButton'
import IconStarGold from '../../assets/IconStarGold'
import IconFeaturesLocalAgent from '../../assets/IconFeaturesLocalAgent'
import IconFeaturesMobile from '../../assets/IconFeaturesMobile'
import IconFeaturesImmediateCoverage from '../../assets/IconFeaturesImmediateCoverage'
import IconFeaturesAutomaticPayment from '../../assets/IconFeaturesAutomaticPayment'
import IconFeaturesOnlineIdCards from '../../assets/IconFeaturesOnlineIdCards'
import IconFeaturesBuyOnline from '../../assets/IconFeaturesBuyOnline'
import IconFeatures247Support from '../../assets/IconFeatures247Support'
import IconFeaturesNewCarReplacement from '../../assets/IconFeaturesNewCarReplacement'
import IconFeaturesLowDownPayment from '../../assets/IconFeaturesLowDownPayment'
import IconFeaturesRideshare from '../../assets/IconFeaturesRideshare'
import IconFeaturesPaperless from '../../assets/IconFeaturesPaperless'
import IconBoltWhite from '../../assets/IconBoltWhite'
import IconArrowDown from '../../assets/IconArrowDown'
import IconChevronDown from '../../assets/IconChevronDown'


const Accordion = ({ type, rate, features, detail_body, tagline, features_html, stars, tag, name, action }) => {
    // States
    const [setActive, setActiveState] = useState("");
    const [setHeight, setHeightState] = useState("0px");
    const [setRotate, setRotateState] = useState("accordion__footer_rotate");

    const content = useRef(null);

    // Used to toggle the length of the accordion
    const toggleAccordion = _ => {
        setActiveState(setActive === "" ? "active" : "");
        setHeightState(setActive === "active" ? "0px" : `${content.current.scrollHeight}px`);
        setRotateState(setRotate === "accordion__footer_rotate" ? "" : "accordion__footer_rotate")
    }

    // render the button color, text and icon for offer types
    const renderButton = _ => {
        if (type === 3) {
            return <RequestButton text="Buy now" icon={<IconBoltWhite />} color='rgb(255, 136, 0)' type={type} link={action.link} />
        } else if (type === 0 || type === 1) {
        } else {
            return
        }
    }

    const renderRate = _ => {
        return rate ? "$" + Math.floor(rate) + "/mo" : <RequestButton text="Get Quote" icon={<IconArrowDown />} type={type} link={action.link} />
    }

    const renderStars = _ => {
        let starSet = []
        for (let i = 0; i < stars; i++) {
            starSet.push(<IconStarGold key={i} />)
        }
        return starSet
    }

    // renders the icon for the different features in the different offers
    const renderFeatureIcons = _ => {
        if (features) {
            return Object.keys(features).map((s, i) => {
                switch (features[s]["icon"]) {
                    case 'IconFeaturesLocalAgent':
                        return <IconFeaturesLocalAgent width="25px" key={i} />
                    case 'IconFeaturesMobile':
                        return <IconFeaturesMobile width="25px" key={i} />
                    case 'IconFeaturesImmediateCoverage':
                        return <IconFeaturesImmediateCoverage width="25px" key={i} />
                    case 'IconFeaturesAutomaticPayment':
                        return <IconFeaturesAutomaticPayment width="25px" key={i} />
                    case 'IconFeaturesOnlineIdCards':
                        return <IconFeaturesOnlineIdCards width="25px" key={i} />
                    case 'IconFeaturesBuyOnline':
                        return <IconFeaturesBuyOnline width="25px" key={i} />
                    case 'IconFeatures247Support':
                        return <IconFeatures247Support width="25px" key={i} />
                    case 'IconFeaturesNewCarReplacement':
                        return <IconFeaturesNewCarReplacement width="25px" key={i} />
                    case 'IconFeaturesLowDownPayment':
                        return <IconFeaturesLowDownPayment width="25px" key={i} />
                    case 'IconFeaturesRideshare':
                        return <IconFeaturesRideshare width="25px" key={i} />
                    case 'IconFeaturesPaperless':
                        return <IconFeaturesPaperless width="25px" key={i} />
                }
            })
        }
    }

    // render the detail portion of the accordion
    const renderDetailBody = _ => {
        return detail_body ? detail_body : tagline
    }

    // renders the features bullet points
    const renderFeatures = _ => {
        if (features) {
            return Object.keys(features).map((s, i) => {
                return <li key={i}>{features[s]["name"]}</li>
            })
        } else if (features_html) {
            return <div dangerouslySetInnerHTML={{ __html: features_html[0].slice(4, features_html[0].length - 5) }} />
        }
    }

    return (
        <div className={`accordion ${setActive}`}>
            <div className="accordion__header">
                <div className="accordion__header_col1">
                    <IconCarrierDefault />
                </div>
                <div className="accordion__header_col2">
                    <div className="accordion__header_col2_row1">{name}</div>
                    <div className="accordion__header_col2_row2">
                        {renderStars()}
                        <div className="accordion__header_col2_row2-icons">
                            {renderFeatureIcons()}
                        </div>
                    </div>
                </div>
                <div className="accordion__header_col3">
                    <div className="accordion__header_col3_row1-col1">{tag}</div>
                    <div className="accordion__header_col3_row1-col2">{renderRate()}</div>
                    <div className="accordion__header_col3_row2-col1">
                        {renderButton()}
                    </div>
                    <div className="accordion__header_col3_row2-col2"></div>
                </div>

            </div>
            <div ref={content} style={{ maxHeight: `${setHeight}` }} className="accordion__content">
                <div className="accordion__details">
                    <div className="accordion__details_col1">
                        <div className="accordion__details_col1_row1-col1">Features</div>
                        <div className="accordion__details_col1_row2-col1">
                            <ul>
                                {renderFeatures()}
                            </ul>
                        </div>
                    </div>
                    <div className="accordion__details_col2">
                        <div className="accordion__details_col2_row1">
                            Why {name}?
            </div>
                        <div className="accordion__details_col2_row2">
                            {renderDetailBody()}
                        </div>
                    </div>
                </div>
            </div>
            <div className="accordion__footer" onClick={toggleAccordion}>
                <div className={`${setRotate}`}>
                    <IconChevronDown />
                </div>
            </div>
        </div>

    )
}

export default Accordion;