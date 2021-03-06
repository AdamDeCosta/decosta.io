import React from 'react'

import {
  faGithub,
  faTwitter,
  faInstagram,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons'

import SocialLink from './socialLink'

const Social = () => {
  return (
    <ul className="social">
      <SocialLink to="https://github.com/adamdecosta" icon={faGithub} alt="Github Link" />
      <SocialLink to="https://twitter.com/adam_decosta" icon={faTwitter} alt="Twitter Link" />
      <SocialLink to="https://instagram.com/adam.decosta" icon={faInstagram} alt="Instagram Link" />
      <SocialLink
        to="https://www.linkedin.com/in/adam-decosta-213553141/"
        icon={faLinkedin}
        alt = "LinkedIn Link"
      />
    </ul>
  )
}

export default Social
