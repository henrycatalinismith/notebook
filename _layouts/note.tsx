import React from "react"

export default function Note({
  name,
  description,
  content,
  date,
}: Layout<Note>): React.ReactElement {
  return (
    <html lang="en" dir="ltr">
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <link
          rel="canonical"
          href={`https://hen.cat/notebook/${name}`}
        />
        <link
          rel="stylesheet"
          href="style.scss"
        />
      </head>
      <body>

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
      </body>
    </html>
  )
}
