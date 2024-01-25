import { Icon, IconifyIcon } from "@iconify/react"
import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"

const A = styled.a`
  display: flex;
  gap: 4px;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`

const InternalLinkContainer = styled.span<{ isActive: boolean }>`
  a {
    text-decoration: ${props => (props.isActive ? "underline" : "none")};
    &:hover {
      text-decoration: underline;
    }
  }
`

export const ExternalLink = ({
  to,
  text,
  icon,
}: {
  to: string
  text: string
  icon: IconifyIcon
}) => (
  <A href={to}>
    <Icon icon={icon} height={20} />
    <span>{text}</span>
  </A>
)

export const InternalLink = (props: {
  to: string
  text: string
  isActive?: boolean
}) => (
  <InternalLinkContainer isActive={!!props.isActive}>
    <Link to={props.to}>{props.text}</Link>
  </InternalLinkContainer>
)
