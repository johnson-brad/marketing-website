// @flow
import React from 'react'
import Box from 'ui-box'

import { Flex, Icon, Link, ListItem, Paragraph, Text, UnorderedList } from 'primitives'

import { gradientMap } from 'utils/color'

const items = [
  {
    for: 'For Continuous Integration',
    color: gradientMap.blue,
    icon: 'fas fa-users',
    href: '/product/teams',
    label: 'FeaturePeek Teams',
  },
  {
    for: 'For the Command Line',
    color: gradientMap.black,
    icon: 'fas fa-terminal',
    href: '/product/indie',
    label: 'FeaturePeek Indie',
  },
]

export default function SubNav(props) {
  const { isShowing } = props
  return (
    <UnorderedList
      background="#fefcfb"
      border="2px solid #fbfbfb"
      borderRadius={8}
      boxShadow="0 1px 4px rgba(0, 0, 0, 0.1), 0 16px 40px rgba(0, 0, 0, 0.1)"
      className="subnav"
      left={-82}
      opacity={isShowing ? 1 : 0}
      marginTop={8}
      pointerEvents={isShowing ? 'auto' : 'none'}
      position="absolute"
      transform={isShowing ? 'translateY(4px)' : 'translateY(-8px)'}
      transition="all 0.2s ease"
      width={280}
    >
      {items.map((item, i) => (
        <ListItem
          key={item.label}
          // background="white"
          borderTopLeftRadius={i === 0 ? 8 : 0}
          borderTopRightRadius={i === 0 ? 8 : 0}
          borderBottomLeftRadius={i === items.length - 1 ? 8 : 0}
          borderBottomRightRadius={i === items.length - 1 ? 8 : 0}
          className={`subnav${i + 1}`}
          marginTop={0}
          marginBottom={0}
          transition="background 0.15s ease"
        >
          <Link color={item.color[0]} fontSize={17} href={item.href} padding={16} underline={false} width="100%">
            <Flex alignItems="center">
              <Flex
                alignItems="center"
                background={`linear-gradient(${item.color[0]}, ${item.color[1]})`}
                borderRadius={40}
                height={40}
                justifyContent="center"
                marginRight={12}
                width={40}
              >
                <Icon color="white" icon={item.icon} fontSize={18} />
              </Flex>
              <Box>
                <Text margin={0} opacity={0.6} fontSize={14}>
                  {item.for}
                </Text>
                <Paragraph paddingTop={0}>{item.label}</Paragraph>
              </Box>
            </Flex>
          </Link>
        </ListItem>
      ))}
    </UnorderedList>
  )
}
