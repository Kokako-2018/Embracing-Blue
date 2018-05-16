import React from 'react'
import { connect } from 'react-redux'
import { Router, Route, Link } from 'react-router-dom'

export default class OurStories extends React.Component {

    render() {
        return (
            <div>

                <div className="section">
                    <p id='paras' className="is-size-3"><b>Developers With Purpose</b></p> <br /><br />
                    <h3>
                        While our journey together learning to code at Enspiral Dev Academy has been arduous at times, when the moment came to chose our final projects, we were hungry to take on a challenge.  As a group, we started with the desire to develop something visually and structurally impressive. We soon found we shared the desire to make something meaningful as well, and aspired to help people with our new skill sets.  <br /> <br />

                        One member of our group, Mark, pitched an idea that moved us deeply, highlighting an urgent need and a clear way we could help.<br /> <br />

                        With the fire service now attending ambulance-related calls, Mark and his crew at the Fire Service have seen a dramatic increase in the frequency of mental-health related incidents. Mark has seen these crises become the majority of his job. Within the last 5 months, he’s attended 5 house fires and 24 suicides. <br /> <br />

                        The room fell quiet with heavy emotion as Mark shared the weight of this silent tragedy. <br /> <br />
                    </h3>
                </div>

                <div className="section">
                    <div className="testimonial-quote group">
                        <div className="quote-container">
                            <blockquote>
                                <p>We were so young, I remember how tiny she was. We didn’t even have a clue at that time, that people can even do that kind of thing. I’m nearly 43 now and I’ll never forget how quickly she was gone. </p>
                            </blockquote>
                        </div>
                    </div>
                </div>




                <div className="section">
                    <h3>
                        “It’s still such a taboo in New Zealand,” Mark said, “and it affects us all.”<br /> <br />

                        Mark’s career as a firefighter has impacted him deeply, and unfortunately he is not alone. <br /> <br />

                        Priya lost her best friend at 16 to suicide. Sam remembers the trauma of losing a young classmate at school. Theta’s lost a handful of friends, and is impacted by annual losses across the queer community. Many of us have had family members who struggled with mental health, and all of us have friends who’ve struggled at one point. Indeed, none of us have been spared the impacts of this crisis. While we all carry it’s scars, we also all carry hope for a better way, and a responsibility to speak out and change the taboo. <br /> <br />

                        The stigmas around mental health only serve to further isolate, incriminate, and vilify those who most need support. In delivering Embracing Blue, we’ve crafted not only a beautiful, responsive website; we’ve also created a responsible website with crucial information to share and better shape our understanding of public health and the role we’re all to play in it.<br /> <br />

                        We are developers with purpose, and we approve of this message! <br /> <br />
                    </h3>

                    <div className="section">
                        <div className="testimonial-quote group">
                            <div className="quote-container">
                                <blockquote>
                                    <p>I wonder often about what could have happened instead if they’d been able to talk to someone about what they were feeling, rather than feel like taking their lives were the only option.  </p>
                                </blockquote>
                            </div>
                        </div>
                    </div>


                    <p id='paras' className="is-size-4"><center>If you or someone you know is in immediate need of mental health support, call Lifeline NZ at</center><br /> </p>

                    <p id='paras' className="is-size-3"><center><b>0800 543 354</b></center></p> <br />

                    <p id='paras' className="is-size-4"><center>#EndTheStigma #MentalHealthNZ #JustTalkAboutIt </center>
                    </p>

                </div>
            </div>
        )
    }
}