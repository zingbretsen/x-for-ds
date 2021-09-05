import Layout from '@components/Layout'

const About = ({ title, description, ...props }) => {
  return (
    <>
      <Layout pageTitle={`${title} | About`} description={description}>
        <h1 className="title">Welcome to X for DS!</h1>

        <p className="description">
          X for DS is meant to help Data Scientists fill in the blanks about tools and techniques that will complement their daily work.
        </p>

        <p className="description">
          You may have had classes on statistics, probability, and machine learning, but probably not on git, Linux, or Docker. There are so many tools that you're supposed to just figure out on your own, but which make a huge impact on your productivity and happiness.
        </p>

        <p className="description">
          The goal of X for DS is to teach you about tools that are DS-adjacent. You will learn X, where X may be:
        </p>

        <ul>
          <li>Git</li>
          <li>SSH</li>
          <li>Linux</li>
          <li>Docker</li>
          <li>Python</li>
          <li>R</li>
          <li>Much more!</li>
        </ul>
      </Layout>
    </>
  )
}

export default About

export async function getStaticProps() {
  const configData = await import(`../siteconfig.json`)

  return {
    props: {
      title: configData.default.title,
      description: configData.default.description,
    },
  }
}
