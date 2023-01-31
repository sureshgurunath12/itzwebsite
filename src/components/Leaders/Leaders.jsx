import React from "react";
import ReactReadMoreReadLess from "react-read-more-read-less";


import "../../components/Leaders/Leaders.css";

function Leaders({ handler }) {
  const Leadership_heading = cdnURL + "assets/images/Leadership_heading-min.png";
  const Dummy1 = cdnURL + "assets/images/Gopal-min.jpeg";
  const Dummy2 = cdnURL + "assets/images/Kali-min.jpeg";
  const Dummy3 = cdnURL + "assets/images/Siva-min.jpeg";

  return (
    <div className="container-fluid bg-img">
      <div className="container">
        <div className="row">
        <section class="leadership-section">
          <br/><br/><br/><br/><br/><br/>

        <div className="leadership-container">
        <div className="container">
          <div className="leadership-img">
            <img
              src={Leadership_heading}
              width={352}
              height={90}
              alt="travel_suitcase"
            />
          </div>
          <div className="leadership">
            <div className="leadership1">
              <div className="picture">
                <img src={Dummy1} />
              </div>
              <div className="name">V.M.K. Gopal</div>
              <div className="posting">CEO & President</div>
              <div className="description">
                <ReactReadMoreReadLess
                  charLimit={195}
                  readMoreText={"Read more"}
                  readLessText={"Read less"}
                  readMoreClassName="read-more-less--more"
                  readLessClassName="read-more-less--less"
                >
                A versatile professional with a proven know-how of technological and management expertise is the brain behind iTechnowiZ Solutions Pvt Ltd (iTZ). He holds a Bachelor’s degree in Electrical Engineering, Masters in Computer Science from the University of South Florida and Executive MBA from Virginia Tech. He spearheads all the verticals in iTZ, managing and directing the team towards the growth trajectory. His responsibility as a CEO & President extends across all the practices in the organization, from accounts, administration, technology, strategy, research & development, business development, compliance, etc. He is instrumental in managing the strategic partnership with Konami Gaming Inc and is accountable for the organizational EBITDA to perform as intended. His guidance as a mentor steers the organization towards growth, and profitability whilst maintaining credibility. With an eccentric mix of technology and management, Gopal laterally visualizes everything and derives futuristic patterns which help the organization maintain its position. He has over 25 years of experience in the IT industry in different vital roles viz consultant, senior management professional etc., strategizing IT applications in various streams responsible for implementations and business decisions.              </ReactReadMoreReadLess>
              </div>
            </div>
            <div className="leadership2">
              <div className="picture">
                <img src={Dummy2} />
              </div>
              <div className="name">Kaliyappan</div>
              <div className="posting">Director - Technology</div>
              <div className="description">
              <ReactReadMoreReadLess
                  charLimit={200}
                  readMoreText={"Read more"}
                  readLessText={"Read less"}
                  readMoreClassName="read-more-less--more"
                  readLessClassName="read-more-less--less"
                >
                  As a Director of Technology, Kaliyappan leverages the whole gamut of technology from planning, architecture, design & development of engineering R&D needs of Konami Gaming Inc in Mobile App Development, Oracle Database EBR, and Golden Gate Replication, Reporting Solutions, etc. Establishing a good rapport with his team of technical professionals, he is responsible for streamlining the project needs with innovative product solutions, process improvement, and resource optimization. With his expertise in Casino Management Product Solutions in Table Management, Patron Tracking, and Online Game Servers, he can tangentially connect dots deriving resourceful advantages attracting newbies, retaining patrons, and pulling long-time ‘no-shows.’ With all these on one side, he ensures quality and customer satisfaction in all he does. He holds Bachelor’s degree in Mechanical Engineering from Bharathidasan University. He is a seasoned expert with microservices architecture-based software solutions CI/CD with hands-on experience in Inventory Management and Document Management Domain Solutions.               </ReactReadMoreReadLess>
              </div>
            </div>
            <div className="leadership3">
              <div className="picture">
                <img src={Dummy3} />
              </div>
              <div className="name">Sivasankar</div>
              <div className="posting">Director Quality Assurance</div>
              <div className="description">
              <ReactReadMoreReadLess
                  charLimit={190}
                  readMoreText={"Read more"}
                  readLessText={"Read less"}
                  readMoreClassName="read-more-less--more"
                  readLessClassName="read-more-less--less"
                >
                  A dynamic, goal-oriented gaming enthusiast backed with 20 years of experience in various demanding roles, Sivasankar takes the reins of the Quality at iTechnowiZ Solutions Pvt Ltd. As a kingpin in the organization, he directs all activities concerning quality with a solid strategic vision. As Quality is the bedrock of any discipline, being a passionate tester, he ensures conformity to standards/regulations apropos of gaming laws across geographies in which the organization operates. With a proven track record of inspiring, managing, and mentoring QA teams in diverse locations, Sivasankar applies avant-garde techniques to show software in its true colors across product lines and releases, effectively churning out the best from the resources. With a profound knowledge of high-level architecture & Gaming Protocols having strong know-how of Client-Server, Web, Mainframes, Distributed Systems, Network Protocols & Communications, Sivasankar spearheads the team and brings innovation right off the bat in every walk of quality release. Interestingly he holds a Bachelor's Degree in Civil Engineering from Madurai Kamaraj University.
                </ReactReadMoreReadLess>
              </div>
            </div>
          </div>
        </div>
      </div>
      </section>
        </div>
      </div>
    </div>

        
  );
}

export default Leaders;
