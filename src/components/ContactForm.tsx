import { css } from "@emotion/css"

type FormInputProps = {
  label: string
  name: string
  type: "text" | "email"
}

const FormInput = (props: FormInputProps) => {
  return (
    <div
      className={css`
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        gap: 4px;
      `}
    >
      <label>{props.label}</label>
      <input
        type={props.type}
        name={props.name}
        id={props.name}
        required
        className={css`
          &:hover,
          &:focus {
            outline: 2px solid var(--color-primary);
          }
        `}
      />
    </div>
  )
}

const FormMessageTextArea = () => {
  return (
    <div
      className={css`
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        gap: 4px;
      `}
    >
      <label>Message</label>
      <textarea
        name="message"
        id="message"
        rows={10}
        required
        className={css`
          &:hover,
          &:focus {
            outline: 2px solid var(--color-primary);
          }
        `}
      />
    </div>
  )
}

const SubmitButton = () => {
  return (
    <div
      className={css`
        display: flex;
        justify-content: center;
      `}
    >
      <button
        type="submit"
        className={css`
          padding: 8px 16px;
          border-radius: 999px;
          cursor: pointer;
          border: 2px solid var(--color-primary);
          background-color: var(--color-primary);
          color: var(--color-text);
        `}
      >
        Submit
      </button>
    </div>
  )
}

export const ContactForm = () => {
  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      className={css`
        display: flex;
        flex-direction: column;
        gap: 12px;
      `}
    >
      <div
        className={css`
          display: flex;
          gap: 12px;
        `}
      >
        <FormInput label="Name" name="name" type="text" />
        <FormInput label="Email" name="email" type="email" />
      </div>
      <FormMessageTextArea />
      <SubmitButton />
    </form>
  )
}
