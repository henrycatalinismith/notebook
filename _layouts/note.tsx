import React from "react"

export default function Note(props: any): React.ReactElement {
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
          href={`https://hen.cat/notebook/${props.name}`}
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
              {props.name}
            </h1>
            <p>
              {props.description}
            </p>
          </header>

          <section dangerouslySetInnerHTML={{ __html: props.content }} />

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

            <time dateTime={props.date}>
              {props.date.toISOString().substring(0, 10)}
            </time>
          </footer>

        </article>
      </body>
    </html>
  )
}
