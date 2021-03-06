import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import { albacross, redditPixel } from 'utils/analytics'

export default function HTML(props) {
  const [isShowingBanner, setShowingBanner] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setShowingBanner(true)
    }, 1000)
  })

  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <link href="https://use.fontawesome.com" rel="dns-prefetch" />
        {props.headComponents}
        <script async defer data-domain="featurepeek.com" src="https://plausible.io/js/plausible.js"></script>
      </head>
      <body {...props.bodyAttributes} className={isShowingBanner ? 'show-banner' : undefined}>
        {props.preBodyComponents}
        <div key={`body`} id="___gatsby" dangerouslySetInnerHTML={{ __html: props.body }} />
        {props.postBodyComponents}
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.8.2/css/all.css"
          integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay"
          crossOrigin="anonymous"
        />
        <script type="text/javascript" dangerouslySetInnerHTML={{ __html: albacross }} />
        <script type="text/javascript" dangerouslySetInnerHTML={{ __html: redditPixel }} />
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
