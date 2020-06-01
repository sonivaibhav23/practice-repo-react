import React from 'react';
import SOCIAL_PROFILES from '../data/socialProfiles';

// class SocialProfile extends Component {
//     render() {

//         console.log(this.props);

//         const {link, image} = this.props.socialProfile;

//         return(
//             <span>
//                 <a href={link}>
//                     <img src={image} alt='social-profile' style={{width:35, height:35, margin:10}}/>
//                 </a>
//             </span>
//         );
//     }
// }

const SocialProfile = props => {
    const {link, image} = props.socialProfile;
    return(
        <span>
            <a href={link}>
                <img src={image} alt='social-profile' style={{width:35, height:35, margin:10}}/>
            </a>
        </span>
    );
}


const SocialProfiles = () => (
    <div>
        <h1>Connect With Me: </h1>
        <div>
            {
                SOCIAL_PROFILES.map(SOCIAL_PROFILE => (
                    <SocialProfile key={SOCIAL_PROFILE.id} socialProfile={SOCIAL_PROFILE} />
                ))
            }
        </div>
    </div>
)

// class SocialProfiles extends Component {

//     render() {
//         return(
//             <div>
//                 <h1>Connect With Me: </h1>
//                 <div>
//                     {
//                         SOCIAL_PROFILES.map(SOCIAL_PROFILE => {
//                             return(
//                                 <SocialProfile key={SOCIAL_PROFILE.id} socialProfile={SOCIAL_PROFILE} />
//                             );
//                         })
//                     }
//                 </div>
//             </div>
//         );
//     }
// }

export default SocialProfiles;