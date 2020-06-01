import React from "react";
import PROJECTS from "../data/projects";
import { fireEvent } from "@testing-library/dom";

// class Project extends Component {

//     render() {
//         const {title, description, link, image} = this.props.project;

//         return (
//             <div style={{display: 'inline-block', width:300, margin:10}}>
//                 <h3>{title}</h3>
//                 <img src={image} alt='Profile' style={{width:200, height:120}}/>
//                 <p>{description}</p>
//                 <a href={link}>{link}</a>
//             </div>
//         );
//     }
// }

const Project = props => {
    const {title, description, link, image} = props.project;
    return (
        <div style={{display: 'inline-block', width:300, margin:10}}>
            <h3>{title}</h3>
            <img src={image} alt='Profile' style={{width:200, height:120}}/>
            <p>{description}</p>
            <a href={link}>{link}</a>
        </div>
    );
}

const Projects = () => (
    <div>
        <h1>Highlighted Projects</h1>
        <div>
            {
                PROJECTS.map(PROJECT => (
                    <Project key={PROJECT.id} project={PROJECT} />
                ))
            }
        </div>
    </div>
)


// class Projects extends Component {
  
//     render() {
//         return(
//             <div>
//                 <h1>Highlighted Projects</h1>
//                 {/* <div>
//                     <div>{PROJECTS[0].title}</div>>
//                     <div>{PROJECTS[1].title}</div>>
//                     <div>{PROJECTS[2].title}</div>>
//                 </div> 
                
//                 below code is kind of replacement of ArrayList.stream()

//                 */}
//                 <div>
//                     {
//                         PROJECTS.map(PROJECT => {
//                             return (
//                                 <Project key={PROJECT.id} project={PROJECT} />
//                             );
//                         })
//                     }
//                 </div>
//             </div>
//         )
//     }
// }

export default Projects;
