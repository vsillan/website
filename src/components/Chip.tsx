import { css } from "@emotion/css"

export const Chip = (props: { text: string }) => {
  return (
    <div
      className={css`
        border: 2px solid;
        border-radius: 999px;
        padding: 4px 8px;
      `}
    >
      {props.text}
    </div>
  )
}
