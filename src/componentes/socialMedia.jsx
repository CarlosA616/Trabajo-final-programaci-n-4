/* // src/components/SocialMediaIcons.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faPinterest, faReddit, faTumblr, faEnvelope } from '@fortawesome/free-brands-svg-icons';
import './socialMedia.css';

const SocialMedia = () => {
    return (
        <section className="social-media-icons">

            <a href="https://twitter.com" >
                <FontAwesomeIcon icon={faTwitter} className="social-icon" />
            </a>
            <a href="https://pinterest.com" >
                <FontAwesomeIcon icon={faPinterest} className="social-icon" />
            </a>
            <a href="https://reddit.com" >
                <FontAwesomeIcon icon={faReddit} className="social-icon" />
            </a>
            <a href="https://tumblr.com" >
                <FontAwesomeIcon icon={faTumblr} className="social-icon" />
            </a>
            <a href="mailto:someone@example.com" >
                <FontAwesomeIcon icon={faEnvelope} className="social-icon" />
            </a>

        </section>
    );
};

export default SocialMedia;
 */