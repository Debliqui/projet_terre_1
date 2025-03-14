import PropTypes from "prop-types"

import "./index.scss"

export default function ArticleFigure({ src, alt, ref, nasa, children }) {
  return (
    <figure className="image-container">
      <img src={src} alt={alt} />
      {nasa === true ? (
        <figcaption className="image-caption">
          Image Credit: NASA. Source:
          <a
            href={`https://images.nasa.gov/details/${ref}`}
            rel="nofollow"
            target="_blank"
          >
            NASA Media Library
          </a>
        </figcaption>
      ) : (
        children
      )}
    </figure>
  )
}

ArticleFigure.propTypes = {
  nasa: PropTypes.bool.isRequired,
}
