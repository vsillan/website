import React from "react"
import { Icon } from "@iconify/react"
import styled from "@emotion/styled"
import { useTheme } from "../context/ThemeContext"

const ToggleButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  color: var(--color-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 0.2s ease-in-out;
`

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <ToggleButton onClick={toggleTheme} aria-label="Toggle theme">
      <Icon
        icon={
          theme === "dark"
            ? "teenyicons:sun-outline"
            : "teenyicons:moon-outline"
        }
        height={20}
      />
    </ToggleButton>
  )
}
