import React from "react";
import ReactReadMoreReadLess from "react-read-more-read-less";
import "./Home.css";

function HomeContent() {
  const hero = cdnURL + "assets/images/Create_innovate_inspire-min.png";
  const Think_big = cdnURL + "assets/images/Think_big-min.png";
  const Leadership_heading = cdnURL + "assets/images/Leadership_heading-min.png";
  const Dummy1 = cdnURL + "assets/images/Gopal-min.jpeg";
  const Dummy2 = cdnURL + "assets/images/Kali-min.jpeg";
  const Dummy3 = cdnURL + "assets/images/Siva-min.jpeg";

  return (
    <div className="container-fluid bg-img">
      <div className="hero-container">
        <div className="container flex">
          <div className="hero-img d-none d-sm-block">
            <img src={hero} width={805} height={640} alt="travel_suitcase" />
          </div>
          <div className="hero-txt">
            <div className="hero-title">
              The one stop solution for all Casino Floor Operations.
              <br />
              <br />
            </div>
            <div className="hero-img d-block d-sm-none">
              <img src={hero} width={805} height={640} alt="travel_suitcase" />
            </div>
            <div className="hero-description">
              
              iTechnowiZ Solutions Private Limited is involved in developing
              products for the Casino Gaming industry and has been set up as an
              extension of Konami Gaming Inc headquartered in Las Vegas, Nevada,
              USA which is a group company of Konami Holdings Corporation,
              Japan. Konami Gaming Inc is involved in developing Casino games
              and Systems software for management of Casinos.
            </div>
          </div>
        </div>
      </div>
      <div className="think-big-container">
        <div className="container ">
          <div className="think-big-img">
            <img
              src={Think_big}
              width={1348}
              height={509}
              alt="travel_suitcase"
            />
          </div>
          <div className="think-big-txt">
            <ul>
              <li>Developing products for gaming industry</li>
              <li>Enterprise management system for operating casinos</li>
              <li>iTZ's in-depth understanding of the gaming industry</li>
            </ul>
          </div>
        </div>
      </div>

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
              <div className="posting">President & CEO</div>
              <div className="description">
                <ReactReadMoreReadLess
                  charLimit={200}
                  readMoreText={"Read more"}
                  readLessText={"Read less"}
                  readMoreClassName="read-more-less--more"
                  readLessClassName="read-more-less--less"
                >
                Gopal is the Founder Director of iTechnowiz Solutions Private Limited (iTZ) responsible for setting up and managing the iTZ team, strategizing the growth of iTZ and managing the strategic partnership with Konami Gaming Inc.  He has over twenty five years of proven technical and business experience in the IT industry. He has worked for leading consulting firms and has experience consulting for a number of investor-owned and municipal utilities in the US. He also has experience working as a senior Management Personnel in US Electric Utility companies, driving the adoption of technology, leading critical IT implementations and shaping the IT strategy. 
                Gopal has a Bachelor's degree in Electrical Engineering, Masters in Computer Science from University of South Florida and completed his Executive MBA from Virginia Tech. 
              </ReactReadMoreReadLess>
              </div>
            </div>
            <div className="leadership2">
              <div className="picture">
                <img src={Dummy2} />
              </div>
              <div className="name">Kaliappan</div>
              <div className="posting">Director Technology</div>
              <div className="description">
              <ReactReadMoreReadLess
                  charLimit={200}
                  readMoreText={"Read more"}
                  readLessText={"Read less"}
                  readMoreClassName="read-more-less--more"
                  readLessClassName="read-more-less--less"
                >
                  Joined at the inception of the company 04-Jan-2021 as Director-Technology, responsible for planning, architecture, design and development of engineering R & D needs of Konami Gaming Inc. in Mobile App Development, Oracle Database EBR and GoldenGate replication, Reporting solutions. Seasoned expert with microservices architecture based software solutions, CI/CD. Good experience in Casino Management Product solutions in Table Management, Patron Tracking and Online Game Server. Have experience in Inventory management, Document Management domain solutions.
                </ReactReadMoreReadLess>
              </div>
            </div>
            <div className="leadership3">
              <div className="picture">
                <img src={Dummy3} />
              </div>
              <div className="name">Siva</div>
              <div className="posting">Director Quality Assurance</div>
              <div className="description">
              <ReactReadMoreReadLess
                  charLimit={190}
                  readMoreText={"Read more"}
                  readLessText={"Read less"}
                  readMoreClassName="read-more-less--more"
                  readLessClassName="read-more-less--less"
                >
                  A dynamic, goal-oriented gaming enthusiast backed with 20 years of experience in various demanding roles, Sivasankar Balasundaram takes the reins of the Quality at iTechnowiZ Solutions Pvt Ltd. As a kingpin in the organization, he directs all activities concerning quality with a solid strategic vision. As Quality is the bedrock of any discipline, being a passionate tester, he ensures conformity to standards/regulations apropos of gaming laws across geographies in which the organization operates. With a proven track record of inspiring, managing, and mentoring QA teams in diverse locations, Balasundaram applies avant-garde techniques to show software in its true colors across product lines and releases, effectively churning out the best from the resources. With a profound knowledge of high-level architecture & Gaming Protocols having strong know-how of Client-Server, Web, Mainframes, Distributed Systems, Network Protocols & Communications, Balasundaram spearheads the team and brings innovation right off the bat in every walk of quality release. Interestingly he holds a Bachelor's Degree in Civil Engineering from Madurai Kamaraj University.
                </ReactReadMoreReadLess>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
}

export default HomeContent;
