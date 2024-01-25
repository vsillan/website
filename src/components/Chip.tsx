import styled from "@emotion/styled"

const ChipBody = styled.div`
  border: 2px solid;
  border-radius: 999px;
  padding: 4px 8px;
`

export const Chip = (props: { text: string }) => {
  return <ChipBody>{props.text}</ChipBody>
}
