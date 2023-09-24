import Layout from "../components/Layout"

const MessageSent = (props: { location: Location }) => {
  return (
    <Layout title="Your message has been sent" location={props.location}>
      <h2>Thank you!</h2>
      <p>Your message has been sent.</p>
    </Layout>
  )
}

export default MessageSent
