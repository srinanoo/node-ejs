EJS
    - Embedded JavaScript Template
    - Installation
        npm i ejs

        - create default node file
            app.js
        - create folder
            "views"
                - create folders
                    "pages"
                        list all .ejs files for rendering, bascially all HTML which should be rendered as webpages
                    "partials"
                        are sections in the page


    - features
        <%=
            this tag is called escaped output, as any HTML tags if it comes as data, then it will converted to HTML codes, eg: & or < > (angle brackets)

        <%-
            this tag is called unecaped output, to render raw HTML output

        <%
            this tag is called the "scriplet" and contains the JS code/logic within

        delimiter
            custom delimiter like <? ?> instead of default <% %>
                option 1:
                    ejs.render("/path"/, data, { delimiter: "?" });
                option 2:
                    ejs.delimiter = "?";
                    ejs.render("/path"/, data);

    - Static Files in EJS
        option 1:
            - create "public" folder
                - create folders / files for assets (css, images, js)
                    eg:
                        public/css/styles.css
            - set "static" option in Express
                app.use(express.static(__dirname + '/public'));
            - create css file and add it to the ejs template
                <link href="./css/styles.css" rel="stylesheet">
        option 2:
            - create "styles" or any folder related to styles in the "views" folder
                - add the styles inside the <style></style> tag
                    eg: css/styles.ejs
                        <style>
                            p {color: red;}
                        </style>
                - using the "include" add it to the head tag
                    <%- include("../css/styles.ejs") %>

    - EJS with Express:
        https://github.com/mde/ejs/wiki/Using-EJS-with-Express
            
    - Syntax Guide
        https://github.com/mde/ejs/blob/main/docs/syntax.md