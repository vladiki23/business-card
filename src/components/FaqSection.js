import React from 'react';
import './FaqSection.css';

const FaqSection = () => {
    return (
        <div className="container my-5">
            <h2 className="text-center mb-4">Frequently Asked Questions</h2>
            <div className="accordion" id="faqAccordion">
                {/* Вопрос 1 */}
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button
                            className="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                        >
                            Do you have the legal requirements?
                        </button>
                    </h2>
                    <div
                        id="collapseOne"
                        className="accordion-collapse collapse show"
                        aria-labelledby="headingOne"
                        data-bs-parent="#faqAccordion"
                    >
                        <div className="accordion-body">
                            Yes, I am a fully CAA licensed, commercially insured pilot in the UK and EU.
                        </div>
                    </div>
                </div>

                {/* Вопрос 2 */}
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                        >
                            Can you send me an accurate quote?
                        </button>
                    </h2>
                    <div
                        id="collapseTwo"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingTwo"
                        data-bs-parent="#faqAccordion"
                    >
                        <div className="accordion-body">
                            Yes, I will email a form requesting details about the site, the project and the time
                            and travel needed. After checking that the site is safe to fly from, I can give you an
                            accurate quote for my services.
                        </div>
                    </div>
                </div>

                {/* Вопрос 3 */}
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseThree"
                            aria-expanded="false"
                            aria-controls="collapseThree"
                        >
                            Do you have any conditions?
                        </button>
                    </h2>
                    <div
                        id="collapseThree"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingThree"
                        data-bs-parent="#faqAccordion"
                    >
                        <div className="accordion-body">
                            Only related to weather. If the job is booked with an outlook of good weather and the
                            weather suddenly turns bad, I can rebook. Drone can’t be used during the rain or snow.
                        </div>
                    </div>
                </div>

                {/* Вопрос 4 */}
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFour">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseFour"
                            aria-expanded="false"
                            aria-controls="collapseFour"
                        >
                            How long does a shoot take?
                        </button>
                    </h2>
                    <div
                        id="collapseFour"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingFour"
                        data-bs-parent="#faqAccordion"
                    >
                        <div className="accordion-body">
                            Drone operations will be fully planned and usually cover the necessary shots in 2-4
                            hours. But it always depends on the project. Time will be allowed for footage to be
                            reviewed in order to cover any remaining shots, or re-takes.
                        </div>
                    </div>
                </div>

                {/* Вопрос 5 */}
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFive">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseFive"
                            aria-expanded="false"
                            aria-controls="collapseFive"
                        >
                            Can you do the video editing?
                        </button>
                    </h2>
                    <div
                        id="collapseFive"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingFive"
                        data-bs-parent="#faqAccordion"
                    >
                        <div className="accordion-body">
                            As I am a seasoned video editor, I can edit and colour grade the video if necessary.
                            My rates will be tailored for your needs, from a basic hourly rate to a full-day rate
                            for a polished edit.
                        </div>
                    </div>
                </div>

                {/* Вопрос 6 */}
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingSix">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseSix"
                            aria-expanded="false"
                            aria-controls="collapseSix"
                        >
                            What equipment do I use?
                        </button>
                    </h2>
                    <div
                        id="collapseSix"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingSix"
                        data-bs-parent="#faqAccordion"
                    >
                        <div className="accordion-body">
                            I operate a DJI Mavic 3 Pro Cine which supports Apple ProRes 422 HQ, Apple ProRes
                            422, and Apple ProRes 422 LT. Apple ProRes is an industry standard high-quality video
                            codec.
                        </div>
                    </div>
                </div>

                {/* Вопрос 7 */}
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingSeven">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseSeven"
                            aria-expanded="false"
                            aria-controls="collapseSeven"
                        >
                            Can you film in Central London?
                        </button>
                    </h2>
                    <div
                        id="collapseSeven"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingSeven"
                        data-bs-parent="#faqAccordion"
                    >
                        <div className="accordion-body">
                            Yes, I have experience filming in Central London, including navigating its unique
                            regulatory requirements. Some areas require submitting a Non-Standard Flight (NSF)
                            application or obtaining permissions from authorities like the Metropolitan Police.
                            These processes can involve additional paperwork and time, which I am fully prepared
                            to handle to ensure smooth and compliant drone operations.
                        </div>
                    </div>
                </div>

                {/* Вопрос 8 */}
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingEight">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseEight"
                            aria-expanded="false"
                            aria-controls="collapseEight"
                        >
                            Do you shoot internationally?
                        </button>
                    </h2>
                    <div
                        id="collapseEight"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingEight"
                        data-bs-parent="#faqAccordion"
                    >
                        <div className="accordion-body">
                            Yes, I am able to travel where drone regulations and insurance can be covered by my
                            paperwork.
                        </div>
                    </div>
                </div>

                {/* Вопрос 9 */}
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingNine">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseNine"
                            aria-expanded="false"
                            aria-controls="collapseNine"
                        >
                            Can you film indoors?
                        </button>
                    </h2>
                    <div
                        id="collapseNine"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingNine"
                        data-bs-parent="#faqAccordion"
                    >
                        <div className="accordion-body">
                            Yes, it is possible where space is available to safely film indoors. This can include
                            conference rooms, warehouses, museums, and hotels. Please give as many details as you
                            can when you get in touch.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FaqSection;






