import * as React from "react"
import '../styles/index.css';
import { DiscordLogo, GithubLogo, NewspaperClipping, EnvelopeOpen, HeartStraight } from 'phosphor-react'

function Index() {
  return (
    <>
      <div class="topnav">
        <a className="active" href="/#home">Home</a>
        <a className="tab" href="/#projects">Projects</a>
        <a className="tab" href="/#technologies">Technologies</a>
        <a className="tab" href="/#about">About</a>
        <a className="social" href="https://discordapp.com/channels/@me/704106773660827690/"> < DiscordLogo size={19} /> </a>
        <a className="social" href="https://blog.infinitybeond1.tk/"> < NewspaperClipping size={19} /> </a>
        <a className="social" href="mailto:Infinitybeond1@protonmail.com"> < EnvelopeOpen size={19} /> </a>
        <a className="social" href="https://github.com/Infinitybeond1"> < GithubLogo size={19} /> </a>
      </div>

      <div class="home" id="home">
        <h1>
          👋 Hello
        </h1>
        <p>
          I'm Luke, also known as Infinitybeond1.<br />
          I am linux user and FOSS enthusiast and developer, I routinely contibute to projects on GitHub. I love systems programming and web developement.<br />
          I've been a programmer for 3 years, and my favorite languages are nim and zig. Ive been into linux for a year now and I have some expirence with the command line. I also have some expirence with docker and the cloud! I started out programming by creating discord bots, and currently I make CLI apps and websites.<br />
        </p>
      </div>

      <div class="projects" id="projects">
        <h1>
          Projects
        </h1>
        <p>
          Coming soon!
        </p>
      </div>

      <div class="footer">
        <p class="footer-txt">
          Made with <HeartStraight size={12} weight="fill" /> using the <a href="https://github.com/articblush" target="_blank" rel="noreferrer">articblush</a> colorscheme and <a href="https://www.gatsbyjs.com/" target="_blank" rel="noreferrer">GatsbyJS</a>
        </p>
      </div>
    </>
  );
}

export const Head = () => (
  <>
    <title>Infinitybeond1's site</title>
    <meta content="Infinitybeond1" property="og:title" />
    <meta content="My website where I do cool stuff" property="og:description" />
    <meta content="https://infinitybeond1.tk/~" property="og:url" />
    <meta content="https://infinitybeond1.tk/favicon.ico" property="og:image" />
    <meta content="#73c291" name="theme-color" />
  </>
)

export default Index;
