export default ({body, title}) => {

    return `<!doctype html>
     <html>
        <head>
            <title>${title}</title>
        </head>
        <body>
            ${body}
        </body>
        <script src="/assets/bundle.js"></script>
     </html>
`
}