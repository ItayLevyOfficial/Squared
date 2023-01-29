import React from 'react'
import DiscordIcon from './icons/discord.svg'
import DocsIcon from './icons/docs.svg'
import GithubIcon from './icons/github.svg'
import MediumIcon from './icons/medium.svg'
import TwitterIcon from './icons/twitter.svg'

const FooterIcon = ({ src, url }) => (
  <img
    src={src}
    alt=""
    className="opacity-70 hover:opacity-100"
    onClick={() => window.open(url)}
  />
)

const twitter = 'https://twitter.com/squared_dao'
const medium = 'https://squaredfinance.medium.com/'
const github = 'https://github.com/ItayLevyOfficial/squared_backend'
const discord = 'https://discord.gg/CFFwA4zH'
const docs = 'https://squaredfinance.gitbook.io/gitbook/'

export const Footer = () => (
  <div className="flex items-center space-x-9">
    <FooterIcon src={TwitterIcon} url={twitter} />
    <FooterIcon src={MediumIcon} url={medium} />
    <FooterIcon src={DocsIcon} url={docs} />
    <FooterIcon src={DiscordIcon} url={discord} />
    <FooterIcon src={GithubIcon} url={github} />
  </div>
)
