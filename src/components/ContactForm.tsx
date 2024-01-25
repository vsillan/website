import styled from "@emotion/styled"

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
`

const InputRow = styled.div`
  display: flex;
  gap: 12px;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 4px;
`

const Input = styled.input`
  &:hover,
  &:focus {
    outline: 2px solid var(--color-primary);
  }
`

const Textarea = styled.textarea`
  &:hover,
  &:focus {
    outline: 2px solid var(--color-primary);
  }
`

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`

const Button = styled.div`
  padding: 8px 16px;
  border-radius: 999px;
  cursor: pointer;
  border: 2px solid var(--color-primary);
  background-color: var(--color-primary);
  color: var(--color-text);
`

type FormInputProps = {
  label: string
  name: string
  type: "text" | "email"
}

const FormInput = (props: FormInputProps) => {
  return (
    <InputContainer>
      <label>{props.label}</label>
      <Input type={props.type} name={props.name} id={props.name} required />
    </InputContainer>
  )
}

const FormMessageTextArea = () => {
  return (
    <InputContainer>
      <label>Message</label>
      <Textarea name="message" id="message" rows={10} required />
    </InputContainer>
  )
}

const SubmitButton = () => {
  return (
    <ButtonContainer>
      <Button>Submit</Button>
    </ButtonContainer>
  )
}

export const ContactForm = () => {
  return (
    <Form
      name="contact"
      method="POST"
      data-netlify="true"
      action="/message-sent"
      netlify-honeypot="honeybot"
    >
      <input type="hidden" name="form-name" value="contact" />
      <input type="hidden" name="honeybot" />
      <InputRow>
        <FormInput label="Name" name="name" type="text" />
        <FormInput label="Email" name="email" type="email" />
      </InputRow>
      <FormMessageTextArea />
      <SubmitButton />
    </Form>
  )
}
