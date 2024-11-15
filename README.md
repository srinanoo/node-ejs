<strong>EJS - Embedded JavaScript Template</strong>

<ul>
    <li>Installation
        <ul>
            <li>npm i ejs</li>
        </ul>
    </li>
    <li>create default node file
        <ul>
            <li>app.js</li>
            <li>include express and basic configuration</li>
        </ul>
    </li>
    <li>create "views" folder under project root folder
        <ul>
            <li>create folders
                <ul>
                    <li>"pages" - list all .ejs files for rendering, bascially all HTML which should be rendered as webpages</li>
                    <li>"partials" - all sections in the each page</li>
                </ul>
            </li>
        </ul>
    </li>
    <li>features
        <ul>
            <li><%= : this tag is called escaped output, as any HTML tags if it comes as data, then it will converted to HTML codes, eg: & or < > (angle brackets)</li>
            <li><%- : this tag is called unecaped output, to render raw HTML output</li>
            <li><% : this tag is called the "scriplet" and contains the JS code/logic within</li>
            <li>
                delimiter
                <ul>
                    <li>
                        custom delimiter like <? ?> instead of default <% %>
                        <ul>
                            <li>option 1:
                                <ul>
                                    <li>ejs.render("/path"/, data, { delimiter: "?" });</li>
                                </ul>
                            </li>
                            <li>option 2:
                                <ul>
                                    <li>
                                        ejs.delimiter = "?";<br/>
                                        ejs.render("/path"/, data);
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>
        </ul>
    </li>
    <li>
        Static Files in EJS
        <ul>
            <li>option 1:
                <ul>
                    <li>create "public" folder
                        <ul>
                            <li>create folders / files for assets (css, images, js)<br />
                                eg:<br />
                                    public/css/styles.css
                            </li>
                        </ul>
                    </li>
                    <li>set "static" option in Express  
                        <ul>
                            <li>app.use(express.static(__dirname + '/public'));</li>
                        </ul>
                    </li>
                    <li>create css file and add it to the ejs template
                        <ul>
                            <li>&lt;link href="./css/styles.css" rel="stylesheet"&gt;</li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li>option 2:
                <ul>
                    <li>create "styles" or any folder related to styles in the "views" folder
                        <ul>
                            <li>add the styles inside the <style></style> tag<br />
                                eg: css/styles.ejs<br />
                                &lt;style&gt;
                                    p {color: red;}
                                &lt;/style&gt;
                            </li>
                            <li>using the "include" add it to the head tag<br />
                                &lt;%- include("../css/styles.ejs") %&gt;
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>
        </ul>
    </li>
    <li>EJS with Express: https://github.com/mde/ejs/wiki/Using-EJS-with-Express</li>
    <li>Syntax Guide: https://github.com/mde/ejs/blob/main/docs/syntax.md</li>
</ul>