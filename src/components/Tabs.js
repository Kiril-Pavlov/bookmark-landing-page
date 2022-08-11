import { useState } from "react";
import "../components/Tabs.css"
import tab1Img from "../assets/illustration-features-tab-1.svg"
import tab2Img from "../assets/illustration-features-tab-2.svg"
import tab3Img from "../assets/illustration-features-tab-3.svg"

function Tabs() {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <div className="container">
            <div className="bloc-tabs">
                <button
                    className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(1)}
                >
                    Simple Bookmarking
                </button>
                <button
                    className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(2)}
                >
                    Speedy Searching
                </button>
                <button
                    className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(3)}
                >
                    Easy Sharing
                </button>
            </div>

            <div className="content-tabs">
                <div
                    className={toggleState === 1 ? "content  active-content" : "content"}
                >
                  <div className="image-template">  <img src={tab1Img} alt="Tab1 img" /> </div> 
                    <div className="tab-inside-content">
                        <h2 className="tab-title">Bookmark in one click</h2>
                        <p className="tab-paragraph">
                            Organize your bookmarks however you like.
                            Our simple drag-and-drop interface gives you complete control
                            over how you manage your favourite sites.
                        </p>
                        <div className="button-div">  <button className="button-more-info">More info</button> </div> 
                    </div>
                </div>

                <div
                    className={toggleState === 2 ? "content  active-content" : "content"}
                >
                  <div className="image-template">  <img src={tab2Img} alt="Tab2 img" />  </div>
                    <div className="tab-inside-content">
                        <h2 className="tab-title">Intelligent search</h2>
                        <p className="tab-paragraph">
                            Our powerful search feature will help you find saved sites in no time at all.
                            No need to trawl through all of your bookmarks.
                        </p>
                        <div className="button-div">  <button className="button-more-info">More info</button> </div> 
                    </div>
                </div>

                <div
                    className={toggleState === 3 ? "content  active-content" : "content"}
                >
                   <div className="image-template">   <img src={tab3Img} alt="Tab3 img" /> </div>
                    <div className="tab-inside-content">
                        <h2 className="tab-title">Share your bookmarks</h2>
                        <p className="tab-paragraph">
                            Easily share your bookmarks and collections with others.
                            Create a shareable link that you can send at the click of a button.
                        </p>
                      <div className="button-div">  <button className="button-more-info">More info</button> </div> 
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Tabs;