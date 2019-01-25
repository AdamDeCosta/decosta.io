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
      <SocialLink to="https://github.com/adamdecosta" icon={faGithub} />
      <SocialLink to="https://twitter.com/adam_decosta" icon={faTwitter} />
      <SocialLink to="https://instagram.com/adam.decosta" icon={faInstagram} />
      <SocialLink
        to="https://www.linkedin.com/in/adam-decosta-213553141/"
        icon={faLinkedin}
      />
    </ul>
  )
}

export default Social
