import { css } from "@emotion/css"
import { Icon, IconifyIcon } from "@iconify/react"
import React from "react"
import { Link } from "gatsby"

export const ExternalLink = ({
  to,
  text,
  icon,
}: {
  to: string
  text: string
  icon: IconifyIcon
}) => (
  <a
    href={to}
    className={css`
      display: flex;
      gap: 4px;
      align-items: center;
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    `}
  >
    <Icon icon={icon} height={20} />
    <span>{text}</span>
  </a>
)

export const InternalLink = (props: {
  to: string
  text: string
  isActive: boolean
}) => (
  <Link
    to={props.to}
    className={css`
      text-decoration: ${props.isActive ? "underline" : "none"};
      &:hover {
        text-decoration: underline;
      }
    `}
  >
    {props.text}
  </Link>
)
