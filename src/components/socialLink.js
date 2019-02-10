import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './social.scss'

const SocialLink = props => {
  return (
    <li>
      <a href={props.to} className="social__link" target="blank" aria-label={props.alt}>
        <FontAwesomeIcon icon={props.icon} alt={props.alt} />
      </a>
    </li>
  )
}

export default SocialLink
