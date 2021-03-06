// @flow
import React from 'react'
import Box from 'ui-box'
import MediaQuery from 'react-responsive'

import { Button, Code, Flex, Heading } from 'primitives'

import { track } from 'utils/analytics'
// import { rhythm, scale } from 'utils/typography'

export default function CtaBox({ light, brew }) {
  return (
    <MediaQuery maxWidth={800}>
      {mobile => (
        <Box
          background={light ? 'radial-gradient(#fff, #f8f8f8)' : 'radial-gradient(#0d5166, #0a3e53)'}
          paddingX={mobile ? 40 : 80}
          paddingY={mobile ? 60 : 120}
        >
          {brew ? (
            <Box paddingY={32} textAlign="center">
              <a href="https://github.com/featurepeek/peek" style={{ textDecoration: 'none' }} target="_blank">
                <Code background="transparent" border="none" boxShadow="none" color="white" fontSize={36}>
                  brew install featurepeek/tap/peek
                </Code>
              </a>
            </Box>
          ) : (
            <>
              <Heading color={light ? undefined : 'white'} h={5} size={500} textAlign="center">
                Start your two-week trial today.
              </Heading>
              <Flex alignItems="center" justifyContent="center" height={100}>
                <Button
                  href="https://dashboard.featurepeek.com/login"
                  onClick={() => track('Clicked CTA', { cta: 'CtaBox' })}
                >
                  Sign up for a free trial
                </Button>
              </Flex>
            </>
          )}
        </Box>
      )}
    </MediaQuery>
  )
}
