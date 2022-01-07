import {
  Anchor,
  Body,
  CanonicalLink,
  DescriptionList,
  Document,
  Head,
  Header,
  StylesheetLink,
} from "@henrycatalinismith/elements"
import React from "react"

export default function Home({
  collections,
  title,
  description,
}: Layout<Home>): React.ReactElement {
  return (
    <Document lang="en" title={title} description={description}>
      <Head>
        <CanonicalLink href="https://hen.cat/notebook" />
        <StylesheetLink href="style.scss" />
      </Head>
      <Body>
        <main>

          <Header className="hero">

            <h1>
              <span>{title}</span>
              <svg xmlns="http://www.w3.org/2000/svg" strokeLinecap="round" strokeLinejoin="round" viewBox="-2 0 41 8">
                <g fill="none">
                  <path stroke="#000" strokeWidth="2.8" d="M0 6V3h1l1 1v2"/>
                  <path stroke="#fff1e8" d="M0 6V3h1l1 1v2"/>
                </g>
                <g fill="none">
                  <path stroke="#000" strokeWidth="2.8" d="M4.8 5v1h1l1-1V3h-1l-1 1v1"/>
                  <path stroke="#fff1e8" d="M4.8 5v1h1l1-1V3h-1l-1 1v1"/>
                </g>
                <g fill="none">
                  <path stroke="#000" strokeWidth="2.8" d="M9.6 3h2m-1 0v3"/>
                  <path stroke="#fff1e8" d="M9.6 3h2m-1 0v3"/>
                </g>
                <g fill="none">
                  <path stroke="#000" strokeWidth="2.8" d="M16.4 3h-2v3h2m-1-1.5h-1"/>
                  <path stroke="#fff1e8" d="M16.4 3h-2v3h2m-1-1.5h-1"/>
                </g>
                <g fill="none">
                  <path stroke="#000" strokeWidth="2.8" d="M19.2 5v1h2V5l-1-1V3h-1v2"/>
                  <path stroke="#fff1e8" d="M19.2 5v1h2V5l-1-1V3h-1v2"/>
                </g>
                <g fill="none">
                  <path stroke="#000" strokeWidth="2.8" d="M24 5v1h1l1-1V3h-1l-1 1v1"/>
                  <path stroke="#fff1e8" d="M24 5v1h1l1-1V3h-1l-1 1v1"/>
                </g>
                <g fill="none">
                  <path stroke="#000" strokeWidth="2.8" d="M28.8 5v1h1l1-1V3h-1l-1 1v1"/>
                  <path stroke="#fff1e8" d="M28.8 5v1h1l1-1V3h-1l-1 1v1"/>
                </g>
                <g fill="none">
                  <path stroke="#000" strokeWidth="2.8" d="M33.6 3v3m0-1l2-2m-1 1l1 1v1"/>
                  <path stroke="#fff1e8" d="M33.6 3v3m0-1l2-2m-1 1l1 1v1"/>
                </g>
              </svg>
            </h1>
          </Header>

          <DescriptionList
            items={collections.notes.filter(n => !!n.data.name).map(note => [
              <Anchor href={`/${note.fileSlug}`}>{note.data.name}</Anchor>,
              note.data.description,
            ])}
          />

          <footer>
            <p
              itemProp="creator"
              itemScope
              itemType="http://schema.org/Person">
              <a href="https://hen.cat/" target="_blank">
                <span itemProp="name">
                  Henry Catalini Smith
                </span>
              </a>
            </p>
          </footer>

        </main>
      </Body>
    </Document>
  )
}
