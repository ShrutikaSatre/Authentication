import React, {useEffect, useState} from 'react'
import axios from 'axios';
import './Admin.css'
import Moment from 'react-moment'

function Admin(props) {

    const [data, setData] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
            const {data} = await axios.get("http://localhost:5000/feedback");
            setData(data);
        }
        fetchData();
    }, [])

    var mail = undefined;

    const names = [];
    const emails = [];
    const queries = [];
    const experiences = [];
    const messages = [];
    const dates = [];
    const unread = [];

    for(var i=0; i<(data.length); i++){
        names.push(data[i]['name']);
        emails.push(data[i]['email']);
        queries.push(data[i]['query']);
        experiences.push(data[i]['experience']);
        messages.push(data[i]['message']);
        dates.push(data[i]['date'])
        unread.push(data[i]['marked']);
    }

    for(var i=0; i<(data.length); i++){
    var mail = `mailto:${emails}`;
    }

    return (
        <div className="container-fluid">
            <h1 className="text-center latest-updates-heading">User Feedbackes</h1>
            <center><hr style={{width: "40%"}}/></center>
            <div className="row feedbackes-container ml-1 mr-1">
            {
                names[0] != null ?
                (<div className="col-lg-4 col-md-5 col-sm-12 mb-1 mt-2 rounded mx-auto border card feedbacks">
                    <div>
                        <div>
                            <div className="name mb-1 mt-2"><b>Name: </b>{names[0]}</div>
                            <div className="email mb-1 mt-2"><b>Email Address: </b>{emails[0]}</div>
                            {
                                queries[0] != null ?
                                (<div className="query mb-1 mt-2"><b>Query: </b>{queries[0]}</div>)
                                :<div></div>
                            }
                            <div className="experience mb-1 mt-2"><b>User Experience: </b>{experiences[0]}</div>
                            {
                                messages[0] != null ?
                                (<div className="mb-1 mt-2"><b>Message: </b>{messages[0]}</div>)
                                :<div></div>
                            }
                            <div className="date mb-3 mt-3"><small className="font-italic font-bold text-secondary"><Moment format="DD MMM YYYY">{dates[0]}</Moment>, <Moment format="hh:mm A">{dates[0]}</Moment></small></div>
                         <div>
                             <a className="btn btn-warning feedback_btn" href={`mailto:${emails[0]}`}>Send Mail</a>
                         </div>
                        </div>
                    </div>
                </div>):<div>Feedbackes are not avilabble</div>
            }
            {
                names[1] != null ?
                (<div className="col-lg-4 col-md-5 col-sm-12 mb-1 mt-2 rounded mx-auto border card feedbacks">
                    <div>
                        <div>
                            <div className="name mb-1 mt-2"><b>Name: </b>{names[1]}</div>
                            <div className="email mb-1 mt-2"><b>Email Address: </b>{emails[1]}</div>
                            {
                                queries[1] != null ?
                                (<div className="query mb-1 mt-2"><b>Query: </b>{queries[1]}</div>)
                                :<div></div>
                            }
                            <div className="experience mb-1 mt-2"><b>User Experience: </b>{experiences[1]}</div>
                            {
                                messages[1] != null ?
                                (<div className="mb-1 mt-2"><b>Message: </b>{messages[1]}</div>)
                                :<div></div>
                            }
                            <div className="date mb-3 mt-3"><small className="font-italic font-bold text-secondary"><Moment format="DD MMM YYYY">{dates[1]}</Moment>, <Moment format="hh:mm A">{dates[1]}</Moment></small></div>
                         <div>
                             <a className="btn btn-warning feedback_btn" href={`mailto:${emails[1]}`}>Send Mail</a>
                         </div>
                        </div>
                    </div>
                </div>):<div></div>
            }
            {
                names[2] != null ?
                (<div className="col-lg-4 col-md-5 col-sm-12 mb-1 mt-2 rounded mx-auto border card feedbacks">
                    <div>
                        <div>
                            <div className="name mb-1 mt-2"><b>Name: </b>{names[2]}</div>
                            <div className="email mb-1 mt-2"><b>Email Address: </b>{emails[2]}</div>
                            {
                                queries[2] != null ?
                                (<div className="query mb-1 mt-2"><b>Query: </b>{queries[2]}</div>)
                                :<div></div>
                            }
                            <div className="experience mb-1 mt-2"><b>User Experience: </b>{experiences[2]}</div>
                            {
                                messages[2] != null ?
                                (<div className="mb-1 mt-2"><b>Message: </b>{messages[2]}</div>)
                                :<div></div>
                            }
                            <div className="date mb-3 mt-3"><small className="font-italic font-bold text-secondary"><Moment format="DD MMM YYYY">{dates[2]}</Moment>, <Moment format="hh:mm A">{dates[2]}</Moment></small></div>
                         <div>
                             <a className="btn btn-warning feedback_btn" href={`mailto:${emails[2]}`}>Send Mail</a>
                         </div>
                        </div>
                    </div>
                </div>):<div></div>
            }
            {
                names[3] != null ?
                (<div className="col-lg-4 col-md-5 col-sm-12 mb-1 mt-2 rounded mx-auto border card feedbacks">
                    <div>
                        <div>
                            <div className="name mb-1 mt-2"><b>Name: </b>{names[3]}</div>
                            <div className="email mb-1 mt-2"><b>Email Address: </b>{emails[3]}</div>
                            {
                                queries[3] != null ?
                                (<div className="query mb-1 mt-2"><b>Query: </b>{queries[3]}</div>)
                                :<div></div>
                            }
                            <div className="experience mb-1 mt-2"><b>User Experience: </b>{experiences[3]}</div>
                            {
                                messages[3] != null ?
                                (<div className="mb-1 mt-2"><b>Message: </b>{messages[3]}</div>)
                                :<div></div>
                            }
                            <div className="date mb-3 mt-3"><small className="font-italic font-bold text-secondary"><Moment format="DD MMM YYYY">{dates[3]}</Moment>, <Moment format="hh:mm A">{dates[3]}</Moment></small></div>
                         <div>
                             <a className="btn btn-warning feedback_btn" href={`mailto:${emails[3]}`}>Send Mail</a>
                         </div>
                        </div>
                    </div>
                </div>):<div></div>
            }
            {
                names[4] != null ?
                (<div className="col-lg-4 col-md-5 col-sm-12 mb-1 mt-2 rounded mx-auto border card feedbacks">
                    <div>
                        <div>
                            <div className="name mb-1 mt-2"><b>Name: </b>{names[4]}</div>
                            <div className="email mb-1 mt-2"><b>Email Address: </b>{emails[4]}</div>
                            {
                                queries[4] != null ?
                                (<div className="query mb-1 mt-2"><b>Query: </b>{queries[4]}</div>)
                                :<div></div>
                            }
                            <div className="experience mb-1 mt-2"><b>User Experience: </b>{experiences[4]}</div>
                            {
                                messages[4] != null ?
                                (<div className="mb-1 mt-2"><b>Message: </b>{messages[4]}</div>)
                                :<div></div>
                            }
                            <div className="date mb-3 mt-3"><small className="font-italic font-bold text-secondary"><Moment format="DD MMM YYYY">{dates[4]}</Moment>, <Moment format="hh:mm A">{dates[4]}</Moment></small></div>
                         <div>
                             <a className="btn btn-warning feedback_btn" href={`mailto:${emails[4]}`}>Send Mail</a>
                         </div>
                        </div>
                    </div>
                </div>):<div></div>
            }
            {
                names[5] != null ?
                (<div className="col-lg-4 col-md-5 col-sm-12 mb-1 mt-2 rounded mx-auto border card feedbacks">
                    <div>
                        <div>
                            <div className="name mb-1 mt-2"><b>Name: </b>{names[5]}</div>
                            <div className="email mb-1 mt-2"><b>Email Address: </b>{emails[5]}</div>
                            {
                                queries[5] != null ?
                                (<div className="query mb-1 mt-2"><b>Query: </b>{queries[5]}</div>)
                                :<div></div>
                            }
                            <div className="experience mb-1 mt-2"><b>User Experience: </b>{experiences[5]}</div>
                            {
                                messages[5] != null ?
                                (<div className="mb-1 mt-2"><b>Message: </b>{messages[5]}</div>)
                                :<div></div>
                            }
                            <div className="date mb-3 mt-3"><small className="font-italic font-bold text-secondary"><Moment format="DD MMM YYYY">{dates[5]}</Moment>, <Moment format="hh:mm A">{dates[5]}</Moment></small></div>
                         <div>
                             <a className="btn btn-warning feedback_btn" href={`mailto:${emails[5]}`}>Send Mail</a>
                         </div>
                        </div>
                    </div>
                </div>):<div></div>
            }
            {
                names[6] != null ?
                (<div className="col-lg-4 col-md-5 col-sm-12 mb-1 mt-2 rounded mx-auto border card feedbacks">
                    <div>
                        <div>
                            <div className="name mb-1 mt-2"><b>Name: </b>{names[6]}</div>
                            <div className="email mb-1 mt-2"><b>Email Address: </b>{emails[6]}</div>
                            {
                                queries[6] != null ?
                                (<div className="query mb-1 mt-2"><b>Query: </b>{queries[6]}</div>)
                                :<div></div>
                            }
                            <div className="experience mb-1 mt-2"><b>User Experience: </b>{experiences[6]}</div>
                            {
                                messages[6] != null ?
                                (<div className="mb-1 mt-2"><b>Message: </b>{messages[6]}</div>)
                                :<div></div>
                            }
                            <div className="date mb-3 mt-3"><small className="font-italic font-bold text-secondary"><Moment format="DD MMM YYYY">{dates[6]}</Moment>, <Moment format="hh:mm A">{dates[6]}</Moment></small></div>
                         <div>
                             <a className="btn btn-warning feedback_btn" href={`mailto:${emails[6]}`}>Send Mail</a>
                         </div>
                        </div>
                    </div>
                </div>):<div></div>
            }
            {
                names[7] != null ?
                (<div className="col-lg-4 col-md-5 col-sm-12 mb-1 mt-2 rounded mx-auto border card feedbacks">
                    <div>
                        <div>
                            <div className="name mb-1 mt-2"><b>Name: </b>{names[7]}</div>
                            <div className="email mb-1 mt-2"><b>Email Address: </b>{emails[7]}</div>
                            {
                                queries[7] != null ?
                                (<div className="query mb-1 mt-2"><b>Query: </b>{queries[7]}</div>)
                                :<div></div>
                            }
                            <div className="experience mb-1 mt-2"><b>User Experience: </b>{experiences[7]}</div>
                            {
                                messages[7] != null ?
                                (<div className="mb-1 mt-2"><b>Message: </b>{messages[7]}</div>)
                                :<div></div>
                            }
                            <div className="date mb-3 mt-3"><small className="font-italic font-bold text-secondary"><Moment format="DD MMM YYYY">{dates[7]}</Moment>, <Moment format="hh:mm A">{dates[7]}</Moment></small></div>                         <div>
                             <a className="btn btn-warning feedback_btn" href={`mailto:${emails[7]}`}>Send Mail</a>
                         </div>
                        </div>
                    </div>
                </div>):<div></div>
            }
            {
                names[8] != null ?
                (<div className="col-lg-4 col-md-5 col-sm-12 mb-1 mt-2 rounded mx-auto border card feedbacks">
                    <div>
                        <div>
                            <div className="name mb-1 mt-2"><b>Name: </b>{names[8]}</div>
                            <div className="email mb-1 mt-2"><b>Email Address: </b>{emails[8]}</div>
                            {
                                queries[8] != null ?
                                (<div className="query mb-1 mt-2"><b>Query: </b>{queries[8]}</div>)
                                :<div></div>
                            }
                            <div className="experience mb-1 mt-2"><b>User Experience: </b>{experiences[8]}</div>
                            {
                                messages[8] != null ?
                                (<div className="mb-1 mt-2"><b>Message: </b>{messages[8]}</div>)
                                :<div></div>
                            }
                            <div className="date mb-3 mt-3"><small className="font-italic font-bold text-secondary"><Moment format="DD MMM YYYY">{dates[8]}</Moment>, <Moment format="hh:mm A">{dates[8]}</Moment></small></div>                         <div>
                             <a className="btn btn-warning feedback_btn" href={`mailto:${emails[8]}`}>Send Mail</a>
                         </div>
                        </div>
                    </div>
                </div>):<div></div>
            }
            {
                names[9] != null ?
                (<div className="col-lg-4 col-md-5 col-sm-12 mb-1 mt-2 rounded mx-auto border card feedbacks">
                    <div>
                        <div>
                            <div className="name mb-1 mt-2"><b>Name: </b>{names[9]}</div>
                            <div className="email mb-1 mt-2"><b>Email Address: </b>{emails[9]}</div>
                            {
                                queries[9] != null ?
                                (<div className="query mb-1 mt-2"><b>Query: </b>{queries[9]}</div>)
                                :<div></div>
                            }
                            <div className="experience mb-1 mt-2"><b>User Experience: </b>{experiences[9]}</div>
                            {
                                messages[9] != null ?
                                (<div className="mb-1 mt-2"><b>Message: </b>{messages[9]}</div>)
                                :<div></div>
                            }
                            <div className="date mb-3 mt-3"><small className="font-italic font-bold text-secondary"><Moment format="DD MMM YYYY">{dates[9]}</Moment>, <Moment format="hh:mm A">{dates[9]}</Moment></small></div>                         <div>
                             <a className="btn btn-warning feedback_btn" href={`mailto:${emails[9]}`}>Send Mail</a>
                         </div>
                        </div>
                    </div>
                </div>):<div></div>
            }
            {
                names[10] != null ?
                (<div className="col-lg-4 col-md-5 col-sm-12 mb-1 mt-2 rounded mx-auto border card feedbacks">
                    <div>
                        <div>
                            <div className="name mb-1 mt-2"><b>Name: </b>{names[10]}</div>
                            <div className="email mb-1 mt-2"><b>Email Address: </b>{emails[10]}</div>
                            {
                                queries[10] != null ?
                                (<div className="query mb-1 mt-2"><b>Query: </b>{queries[10]}</div>)
                                :<div></div>
                            }
                            <div className="experience mb-1 mt-2"><b>User Experience: </b>{experiences[10]}</div>
                            {
                                messages[10] != null ?
                                (<div className="mb-1 mt-2"><b>Message: </b>{messages[10]}</div>)
                                :<div></div>
                            }
                            <div className="date mb-3 mt-3"><small className="font-italic font-bold text-secondary"><Moment format="DD MMM YYYY">{dates[10]}</Moment>, <Moment format="hh:mm A">{dates[10]}</Moment></small></div>
                         <div>
                             <a className="btn btn-warning feedback_btn" href={`mailto:${emails[10]}`}>Send Mail</a>
                         </div>
                        </div>
                    </div>
                </div>):<div></div>
            }
            {
                names[11] != null ?
                (<div className="col-lg-4 col-md-5 col-sm-12 mb-1 mt-2 rounded mx-auto border card feedbacks">
                    <div>
                        <div>
                            <div className="name mb-1 mt-2"><b>Name: </b>{names[11]}</div>
                            <div className="email mb-1 mt-2"><b>Email Address: </b>{emails[11]}</div>
                            {
                                queries[11] != null ?
                                (<div className="query mb-1 mt-2"><b>Query: </b>{queries[11]}</div>)
                                :<div></div>
                            }
                            <div className="experience mb-1 mt-2"><b>User Experience: </b>{experiences[11]}</div>
                            {
                                messages[11] != null ?
                                (<div className="mb-1 mt-2"><b>Message: </b>{messages[11]}</div>)
                                :<div></div>
                            }
                            <div className="date mb-3 mt-3"><small className="font-italic font-bold text-secondary"><Moment format="DD MMM YYYY">{dates[11]}</Moment>, <Moment format="hh:mm A">{dates[11]}</Moment></small></div>
                         <div>
                             <a className="btn btn-warning feedback_btn" href={`mailto:${emails[11]}`}>Send Mail</a>
                         </div>
                        </div>
                    </div>
                </div>):<div></div>
            }
            {
                names[12] != null ?
                (<div className="col-lg-4 col-md-5 col-sm-12 mb-1 mt-2 rounded mx-auto border card feedbacks">
                    <div>
                        <div>
                            <div className="name mb-1 mt-2"><b>Name: </b>{names[12]}</div>
                            <div className="email mb-1 mt-2"><b>Email Address: </b>{emails[12]}</div>
                            {
                                queries[12] != null ?
                                (<div className="query mb-1 mt-2"><b>Query: </b>{queries[12]}</div>)
                                :<div></div>
                            }
                            <div className="experience mb-1 mt-2"><b>User Experience: </b>{experiences[12]}</div>
                            {
                                messages[12] != null ?
                                (<div className="mb-1 mt-2"><b>Message: </b>{messages[12]}</div>)
                                :<div></div>
                            }
                            <div className="date mb-3 mt-3"><small className="font-italic font-bold text-secondary"><Moment format="DD MMM YYYY">{dates[12]}</Moment>, <Moment format="hh:mm A">{dates[12]}</Moment></small></div>
                         <div>
                             <a className="btn btn-warning feedback_btn" href={`mailto:${emails[12]}`}>Send Mail</a>
                         </div>
                        </div>
                    </div>
                </div>):<div></div>
            }
            {
                names[13] != null ?
                (<div className="col-lg-4 col-md-5 col-sm-12 mb-1 mt-2 rounded mx-auto border card feedbacks">
                    <div>
                        <div>
                            <div className="name mb-1 mt-2"><b>Name: </b>{names[13]}</div>
                            <div className="email mb-1 mt-2"><b>Email Address: </b>{emails[13]}</div>
                            {
                                queries[13] != null ?
                                (<div className="query mb-1 mt-2"><b>Query: </b>{queries[13]}</div>)
                                :<div></div>
                            }
                            <div className="experience mb-1 mt-2"><b>User Experience: </b>{experiences[13]}</div>
                            {
                                messages[13] != null ?
                                (<div className="mb-1 mt-2"><b>Message: </b>{messages[13]}</div>)
                                :<div></div>
                            }
                            <div className="date mb-3 mt-3"><small className="font-italic font-bold text-secondary"><Moment format="DD MMM YYYY">{dates[13]}</Moment>, <Moment format="hh:mm A">{dates[13]}</Moment></small></div>
                         <div>
                             <a className="btn btn-warning feedback_btn" href={`mailto:${emails[13]}`}>Send Mail</a>
                         </div>
                        </div>
                    </div>
                </div>):<div></div>
            }
            {
                names[14] != null ?
                (<div className="col-lg-4 col-md-5 col-sm-12 mb-1 mt-2 rounded mx-auto border card feedbacks">
                    <div>
                        <div>
                            <div className="name mb-1 mt-2"><b>Name: </b>{names[14]}</div>
                            <div className="email mb-1 mt-2"><b>Email Address: </b>{emails[14]}</div>
                            {
                                queries[14] != null ?
                                (<div className="query mb-1 mt-2"><b>Query: </b>{queries[14]}</div>)
                                :<div></div>
                            }
                            <div className="experience mb-1 mt-2"><b>User Experience: </b>{experiences[14]}</div>
                            {
                                messages[14] != null ?
                                (<div className="mb-1 mt-2"><b>Message: </b>{messages[14]}</div>)
                                :<div></div>
                            }
                            <div className="date mb-3 mt-3"><small className="font-italic font-bold text-secondary"><Moment format="DD MMM YYYY">{dates[14]}</Moment>, <Moment format="hh:mm A">{dates[14]}</Moment></small></div>
                         <div>
                             <a className="btn btn-warning feedback_btn" href={`mailto:${emails[14]}`}>Send Mail</a>
                         </div>
                        </div>
                    </div>
                </div>):<div></div>
            }
            {
                names[15] != null ?
                (<div className="col-lg-4 col-md-5 col-sm-12 mb-1 mt-2 rounded mx-auto border card feedbacks">
                    <div>
                        <div>
                            <div className="name mb-1 mt-2"><b>Name: </b>{names[15]}</div>
                            <div className="email mb-1 mt-2"><b>Email Address: </b>{emails[15]}</div>
                            {
                                queries[15] != null ?
                                (<div className="query mb-1 mt-2"><b>Query: </b>{queries[15]}</div>)
                                :<div></div>
                            }
                            <div className="experience mb-1 mt-2"><b>User Experience: </b>{experiences[15]}</div>
                            {
                                messages[15] != null ?
                                (<div className="mb-1 mt-2"><b>Message: </b>{messages[15]}</div>)
                                :<div></div>
                            }
                            <div className="date mb-3 mt-3"><small className="font-italic font-bold text-secondary"><Moment format="DD MMM YYYY">{dates[15]}</Moment>, <Moment format="hh:mm A">{dates[15]}</Moment></small></div>
                         <div>
                             <a className="btn btn-warning feedback_btn" href={`mailto:${emails[15]}`}>Send Mail</a>
                         </div>
                        </div>
                    </div>
                </div>):<div></div>
            }
            {
                names[16] != null ?
                (<div className="col-lg-4 col-md-5 col-sm-12 mb-1 mt-2 rounded mx-auto border card feedbacks">
                    <div>
                        <div>
                            <div className="name mb-1 mt-2"><b>Name: </b>{names[16]}</div>
                            <div className="email mb-1 mt-2"><b>Email Address: </b>{emails[16]}</div>
                            {
                                queries[16] != null ?
                                (<div className="query mb-1 mt-2"><b>Query: </b>{queries[16]}</div>)
                                :<div></div>
                            }
                            <div className="experience mb-1 mt-2"><b>User Experience: </b>{experiences[16]}</div>
                            {
                                messages[16] != null ?
                                (<div className="mb-1 mt-2"><b>Message: </b>{messages[16]}</div>)
                                :<div></div>
                            }
                            <div className="date mb-3 mt-3"><small className="font-italic font-bold text-secondary"><Moment format="DD MMM YYYY">{dates[16]}</Moment>, <Moment format="hh:mm A">{dates[16]}</Moment></small></div>
                         <div>
                             <a className="btn btn-warning feedback_btn" href={`mailto:${emails[16]}`}>Send Mail</a>
                         </div>
                        </div>
                    </div>
                </div>):<div></div>
            }
            {
                names[17] != null ?
                (<div className="col-lg-4 col-md-5 col-sm-12 mb-1 mt-2 rounded mx-auto border card feedbacks">
                    <div>
                        <div>
                            <div className="name mb-1 mt-2"><b>Name: </b>{names[17]}</div>
                            <div className="email mb-1 mt-2"><b>Email Address: </b>{emails[17]}</div>
                            {
                                queries[17] != null ?
                                (<div className="query mb-1 mt-2"><b>Query: </b>{queries[17]}</div>)
                                :<div></div>
                            }
                            <div className="experience mb-1 mt-2"><b>User Experience: </b>{experiences[17]}</div>
                            {
                                messages[17] != null ?
                                (<div className="mb-1 mt-2"><b>Message: </b>{messages[17]}</div>)
                                :<div></div>
                            }
                            <div className="date mb-3 mt-3"><small className="font-italic font-bold text-secondary"><Moment format="DD MMM YYYY">{dates[17]}</Moment>, <Moment format="hh:mm A">{dates[17]}</Moment></small></div>
                         <div>
                             <a className="btn btn-warning feedback_btn" href={`mailto:${emails[17]}`}>Send Mail</a>
                         </div>
                        </div>
                    </div>
                </div>):<div></div>
            }
            {
                names[18] != null ?
                (<div className="col-lg-4 col-md-5 col-sm-12 mb-1 mt-2 rounded mx-auto border card feedbacks">
                    <div>
                        <div>
                            <div className="name mb-1 mt-2"><b>Name: </b>{names[18]}</div>
                            <div className="email mb-1 mt-2"><b>Email Address: </b>{emails[18]}</div>
                            {
                                queries[18] != null ?
                                (<div className="query mb-1 mt-2"><b>Query: </b>{queries[18]}</div>)
                                :<div></div>
                            }
                            <div className="experience mb-1 mt-2"><b>User Experience: </b>{experiences[18]}</div>
                            {
                                messages[18] != null ?
                                (<div className="mb-1 mt-2"><b>Message: </b>{messages[18]}</div>)
                                :<div></div>
                            }
                            <div className="date mb-3 mt-3"><small className="font-italic font-bold text-secondary"><Moment format="DD MMM YYYY">{dates[18]}</Moment>, <Moment format="hh:mm A">{dates[18]}</Moment></small></div>
                         <div>
                             <a className="btn btn-warning feedback_btn" href={`mailto:${emails[18]}`}>Send Mail</a>
                         </div>
                        </div>
                    </div>
                </div>):<div></div>
            }
            {
                names[19] != null ?
                (<div className="col-lg-4 col-md-5 col-sm-12 mb-1 mt-2 rounded mx-auto border card feedbacks">
                    <div>
                        <div>
                            <div className="name mb-1 mt-2"><b>Name: </b>{names[19]}</div>
                            <div className="email mb-1 mt-2"><b>Email Address: </b>{emails[19]}</div>
                            {
                                queries[19] != null ?
                                (<div className="query mb-1 mt-2"><b>Query: </b>{queries[19]}</div>)
                                :<div></div>
                            }
                            <div className="experience mb-1 mt-2"><b>User Experience: </b>{experiences[19]}</div>
                            {
                                messages[19] != null ?
                                (<div className="mb-1 mt-2"><b>Message: </b>{messages[19]}</div>)
                                :<div></div>
                            }
                            <div className="date mb-3 mt-3"><small className="font-italic font-bold text-secondary"><Moment format="DD MMM YYYY">{dates[19]}</Moment>, <Moment format="hh:mm A">{dates[19]}</Moment></small></div>
                         <div>
                             <a className="btn btn-warning feedback_btn" href={`mailto:${emails[19]}`}>Send Mail</a>
                         </div>
                        </div>
                    </div>
                </div>):<div></div>
            }
            {
                names[20] != null ?
                (<div className="col-lg-4 col-md-5 col-sm-12 mb-1 mt-2 rounded mx-auto border card feedbacks">
                    <div>
                        <div>
                            <div className="name mb-1 mt-2"><b>Name: </b>{names[20]}</div>
                            <div className="email mb-1 mt-2"><b>Email Address: </b>{emails[20]}</div>
                            {
                                queries[20] != null ?
                                (<div className="query mb-1 mt-2"><b>Query: </b>{queries[20]}</div>)
                                :<div></div>
                            }
                            <div className="experience mb-1 mt-2"><b>User Experience: </b>{experiences[20]}</div>
                            {
                                messages[20] != null ?
                                (<div className="mb-1 mt-2"><b>Message: </b>{messages[20]}</div>)
                                :<div></div>
                            }
                            <div className="date mb-3 mt-3"><small className="font-italic font-bold text-secondary"><Moment format="DD MMM YYYY">{dates[20]}</Moment>, <Moment format="hh:mm A">{dates[20]}</Moment></small></div>
                         <div>
                             <a className="btn btn-warning feedback_btn" href={`mailto:${emails[20]}`}>Send Mail</a>
                         </div>
                        </div>
                    </div>
                </div>):<div></div>
            }
                
            </div>
        </div>
    )
}

export default Admin

// {
//     data.map(feedback => 
//         <div className="mt-4">
//             <div class="feedback-container">
//                 <div className="col-lg-8 col-sm-12 col-md-5 container feedbacks">
//                     <div className="name"><b>Name: </b>{feedback.name}</div>
//                     <div className="email"><b>Email Address: </b>{feedback.email}</div>
//                     <div className="query"><b>Query: </b>{feedback.query}</div>
//                     <div className="experience"><b>User Experience: </b>{feedback.experience}</div>
//                     <div className="><b>Message: </b>{feedback.message}</div><br/>
//             
//                     <div>
//                         <a className="btn btn-warning feedback_btn" href={mail}>Send Mail</a>
//                     </div>
//                 </div>
                
//             </div>
//             <hr/>
//         </div>
//     )
// }