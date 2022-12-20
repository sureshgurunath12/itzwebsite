import React from "react";
import { useParams } from "react-router-dom";
import Job1Page from "./Job1.js";
import JOBQA20221220 from "./JOBQA20221220.js";
import JOBUI202212201 from "./JOBUI202212201.js";
import JOBUI202212202 from "./JOBUI202212202.js";
import JOBJAVA202212201 from "./JOBJAVA202212201.js";
import JOBJAVA202212202 from "./JOBJAVA202212202.js";
import JOBPS202212201 from "./JOBPS202212201.js";
import JOBPS202212202 from "./JOBPS202212202.js";
import JOBDB202212201 from "./JOBDB202212201.js";

function Jobs() {
   const { jobid } = useParams(); 
   console.log("jobid >>>",jobid);
   switch (jobid) {
    case "JOBQA20221220":
        return  <JOBQA20221220 
                    JobId="JOBQA20221220"
                    JobTitle="QA - Test Automation Engineer"
                />
        break;
    case "JOBUI202212201":
        return  <JOBUI202212201
                    JobId="JOBUI202212201"
                    JobTitle="UI - UI/UX Developer - I"
                />
        break;
    case "JOBUI202212202":
        return  <JOBUI202212202
                    JobId="JOBUI202212202"
                    JobTitle="UI - UI/UX Developer - II"
                />
        break;
    case "JOBJAVA202212201":
        return  <JOBJAVA202212201
                    JobId="JOBJAVA202212201"
                    JobTitle="Java - Java Developer - I"
                />
        break;
    case "JOBJAVA202212202":
        return  <JOBJAVA202212202
                    JobId="JOBJAVA202212202"
                    JobTitle="Java - Java Developer - II"
                />
        break;
    case "JOBPS202212201":
        return  <JOBPS202212201
                    JobId="JOBPS202212201"
                    JobTitle="Java - Java Product Support - I"
                />
        break;
    case "JOBPS202212202":
        return  <JOBPS202212202
                    JobId="JOBPS202212201"
                    JobTitle="Java - Java Product Support - II"
                />
        break;
    case "JOBDB202212201":
        return  <JOBDB202212201
                    JobId="JOBDB202212201"
                    JobTitle="Database - Database Developer"
                />
        break;
    default :
        return  <Job1Page
                    JobId="JOBDB202212201"
                    JobTitle="Default Job"
                />
    };
   //return <Job1Page />;
}

export default Jobs;
