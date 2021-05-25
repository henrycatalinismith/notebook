import { Body, CanonicalLink, Document, Head, StylesheetLink } from "@hendotcat/elements"
import React from "react"

export default function Note({
  name,
  description,
  content,
  date,
}: Layout<Note>): React.ReactElement {
  return (
    <Document lang="en" title={name} description={description}>
      <Head>
        <CanonicalLink href={`https://hen.cat/notebook/${name}`} />
        <StylesheetLink href="style.scss" />
      </Head>
      <Body>

        <article>
          <header>
            <h1>
              {name}
            </h1>
            <p>
              {description}
            </p>
          </header>

          <section dangerouslySetInnerHTML={{ __html: content }} />

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

            <time dateTime={date.toISOString()}>
              {date.toISOString().substring(0, 10)}
            </time>
          </footer>

        </article>
      </Body>
    </Document>
  )
}
