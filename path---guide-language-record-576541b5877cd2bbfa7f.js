webpackJsonp([23],{"./node_modules/json-loader/index.js!./.cache/json/guide-language-record.json":function(e,a){e.exports={data:{allFile:{edges:[{node:{relativePath:"guide/examples.md",childMarkdownRemark:{frontmatter:{title:"Examples",order:60}}}},{node:{relativePath:"guide/index.md",childMarkdownRemark:{frontmatter:{title:"The Reason Guide",order:0}}}},{node:{relativePath:"guide/what-and-why.md",childMarkdownRemark:{frontmatter:{title:"What & Why",order:0}}}},{node:{relativePath:"guide/ocaml.md",childMarkdownRemark:{frontmatter:{title:"Comparison to OCaml",order:50}}}},{node:{relativePath:"guide/editor-tools/global-installation.md",childMarkdownRemark:{frontmatter:{title:"Global Installation",order:10}}}},{node:{relativePath:"guide/editor-tools/editors-plugins.md",childMarkdownRemark:{frontmatter:{title:"Editors Plugins",order:20}}}},{node:{relativePath:"guide/editor-tools/extra-goodies.md",childMarkdownRemark:{frontmatter:{title:"Extra Goodies",order:30}}}},{node:{relativePath:"guide/editor-tools/index.md",childMarkdownRemark:{frontmatter:{title:"Editor Setup",order:10}}}},{node:{relativePath:"guide/javascript/index.md",childMarkdownRemark:{frontmatter:{title:"JavaScript",order:30}}}},{node:{relativePath:"guide/javascript/converting.md",childMarkdownRemark:{frontmatter:{title:"Converting from JS",order:5}}}},{node:{relativePath:"guide/javascript/libraries.md",childMarkdownRemark:{frontmatter:{title:"Libraries",order:2}}}},{node:{relativePath:"guide/javascript/interop.md",childMarkdownRemark:{frontmatter:{title:"Interop",order:1}}}},{node:{relativePath:"guide/javascript/syntax-cheatsheet.md",childMarkdownRemark:{frontmatter:{title:"Syntax Cheatsheet",order:1}}}},{node:{relativePath:"guide/javascript/quickstart.md",childMarkdownRemark:{frontmatter:{title:"Quickstart",order:0}}}},{node:{relativePath:"guide/language/boolean.md",childMarkdownRemark:{frontmatter:{title:"Boolean",order:30}}}},{node:{relativePath:"guide/language/destructuring.md",childMarkdownRemark:{frontmatter:{title:"Destructuring",order:130}}}},{node:{relativePath:"guide/language/exception.md",childMarkdownRemark:{frontmatter:{title:"Exception",order:175}}}},{node:{relativePath:"guide/language/function.md",childMarkdownRemark:{frontmatter:{title:"Function",order:100}}}},{node:{relativePath:"guide/language/if-else.md",childMarkdownRemark:{frontmatter:{title:"If-Else",order:110}}}},{node:{relativePath:"guide/language/external.md",childMarkdownRemark:{frontmatter:{title:"External",order:170}}}},{node:{relativePath:"guide/language/imperative-loops.md",childMarkdownRemark:{frontmatter:{title:"Imperative Loops",order:150}}}},{node:{relativePath:"guide/language/jsx.md",childMarkdownRemark:{frontmatter:{title:"JSX",order:160}}}},{node:{relativePath:"guide/language/let-binding.md",childMarkdownRemark:{frontmatter:{title:"Let Binding",order:10}}}},{node:{relativePath:"guide/language/index.md",childMarkdownRemark:{frontmatter:{title:"Language basics",order:20}}}},{node:{relativePath:"guide/language/integer-and-float.md",childMarkdownRemark:{frontmatter:{title:"Integer & Float",order:40}}}},{node:{relativePath:"guide/language/list-and-array.md",childMarkdownRemark:{frontmatter:{title:"List & Array",order:80}}}},{node:{relativePath:"guide/language/module.md",childMarkdownRemark:{frontmatter:{title:"Module",order:180}}}},{node:{relativePath:"guide/language/more-on-type.md",childMarkdownRemark:{frontmatter:{title:"More on Type",order:120}}}},{node:{relativePath:"guide/language/mutation.md",childMarkdownRemark:{frontmatter:{title:"Mutation",order:140}}}},{node:{relativePath:"guide/language/object.md",childMarkdownRemark:{frontmatter:{title:"Object",order:175}}}},{node:{relativePath:"guide/language/overview.md",childMarkdownRemark:{frontmatter:{title:"Overview",order:0}}}},{node:{relativePath:"guide/language/pattern-matching.md",childMarkdownRemark:{frontmatter:{title:"Pattern Matching!",order:135}}}},{node:{relativePath:"guide/language/record.md",childMarkdownRemark:{frontmatter:{title:"Record",order:60}}}},{node:{relativePath:"guide/language/string-and-char.md",childMarkdownRemark:{frontmatter:{title:"String & Char",order:20}}}},{node:{relativePath:"guide/language/type.md",childMarkdownRemark:{frontmatter:{title:"Type!",order:15}}}},{node:{relativePath:"guide/language/tuple.md",childMarkdownRemark:{frontmatter:{title:"Tuple",order:50}}}},{node:{relativePath:"guide/native/index.md",childMarkdownRemark:{frontmatter:{title:"Native",order:40}}}},{node:{relativePath:"guide/native/convert-from-ocaml.md",childMarkdownRemark:{frontmatter:{title:"Converting from OCaml",order:4}}}},{node:{relativePath:"guide/language/variant.md",childMarkdownRemark:{frontmatter:{title:"Variant!",order:70}}}},{node:{relativePath:"guide/native/quickstart.md",childMarkdownRemark:{frontmatter:{title:"Quickstart",order:0}}}}]},file:{relativePath:"guide/language/record.md",childMarkdownRemark:{html:'<p>Records are like JavaScript objects but are</p>\n<ul>\n<li>lighter</li>\n<li>immutable by default</li>\n<li>fixed in field names and types</li>\n<li>veeery fast</li>\n<li>veeeery nicely typed</li>\n</ul>\n<h3 id="usage"><a href="#usage" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Usage</h3>\n<p>Type (mandatory):</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-keyword">type</span> person = {\n  age: int,\n  name: string\n};</code></pre>\n      </div>\n<p>Value (this will be inferred to be of type <code>person</code>):</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> me = {\n  age: <span class="hljs-number">5</span>,\n  name: <span class="hljs-string">"Big Reason"</span>\n};</code></pre>\n      </div>\n<p>Access (the familiar dot notation):</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> name = me.name;</code></pre>\n      </div>\n<h4 id="record-needs-an-explicit-definition"><a href="#record-needs-an-explicit-definition" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Record Needs an Explicit Definition</h4>\n<p>If you only write <code>{age: 5, name: "Baby Reason"}</code> without an explicit declaration somewhere above, the type system will give you an error. If the type definition resides in another file, you need to explicitly indicate which file it is:</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-comment">/* School.re */</span>\n\n<span class="hljs-keyword">type</span> person = {age: int, name: string};</code></pre>\n      </div>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-comment">/* example.re */</span>\n\n<span class="hljs-keyword">let</span> me: <span class="hljs-type">School</span>.person = {age: <span class="hljs-number">20</span>, name: <span class="hljs-string">"Big Reason"</span>};\n<span class="hljs-comment">/* or */</span>\n<span class="hljs-keyword">let</span> me = <span class="hljs-type">School</span>.{age: <span class="hljs-number">20</span>, name: <span class="hljs-string">"Big Reason"</span>};\n<span class="hljs-comment">/* or */</span>\n<span class="hljs-keyword">let</span> me = {<span class="hljs-type">School</span>.age: <span class="hljs-number">20</span>, name: <span class="hljs-string">"Big Reason"</span>};</code></pre>\n      </div>\n<p>Either of the above 3 says "this record\'s definition is found in the School file". The first one, the regular type annotation, is preferred.</p>\n<h4 id="immutable-update"><a href="#immutable-update" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Immutable Update</h4>\n<p>New records can be created from old records with the <code>...</code> spread operator. The original record isn\'t mutated.</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> meNextYear = {...me, age: me.age + <span class="hljs-number">1</span>};</code></pre>\n      </div>\n<p>This update is very efficient! Try a few in our <a href="/try">playground</a> to see how records are compiled.</p>\n<p><strong>Note</strong>: spread cannot add new fields, as a record\'s shape is fixed by its type.</p>\n<h4 id="mutable-update"><a href="#mutable-update" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Mutable Update</h4>\n<p>Record fields can optionally be mutable. This allows you to update those fields in-place with the <code>=</code> operator.</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-keyword">type</span> person = {\n  name: string,\n  <span class="hljs-keyword">mutable</span> age: int\n};\n<span class="hljs-keyword">let</span> baby = {name: <span class="hljs-string">"Baby Reason"</span>, age: <span class="hljs-number">5</span>};\nbaby.age = baby.age + <span class="hljs-number">1</span>; <span class="hljs-comment">/* alter `baby`. Happy birthday! */</span></code></pre>\n      </div>\n<h3 id="syntax-shorthand"><a href="#syntax-shorthand" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Syntax shorthand</h3>\n<p>To reduce redundancy, we provide <strong>punning</strong> for a record\'s types and values. You can use it when the name of a record field matches the name of its value/type.</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-keyword">type</span> horsePower = {power: int, metric: bool};\n\n<span class="hljs-keyword">let</span> metric = <span class="hljs-literal">true</span>;\n<span class="hljs-keyword">let</span> someHorsePower = {power: <span class="hljs-number">10</span>, metric};\n<span class="hljs-comment">/* same as the value {power: 10, metric: metric}; */</span>\n\n<span class="hljs-keyword">type</span> car = {name: string, horsePower};\n<span class="hljs-comment">/* same as the type {name: string, horsePower: horsePower}; */</span></code></pre>\n      </div>\n<p><strong>Note that there\'s no punning for a single record field</strong>! <code>{foo}</code> doesn\'t do what you expect (it\'s a block that returns the value <code>foo</code>).</p>\n<h3 id="tips--tricks"><a href="#tips--tricks" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Tips &#x26; Tricks</h3>\n<h4 id="interop-with-javascript"><a href="#interop-with-javascript" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Interop with JavaScript</h4>\n<p>If you\'re working with JavaScript, the record syntax &#x26; operations should feel familiar, and you might be tempted to interop with JS by converting a JS object to a record, and vice-versa. This is fine, but we have an <strong>even better way without conversion overhead</strong>! See <a href="https://bucklescript.github.io/bucklescript/Manual.html#_binding_to_js_objects">here</a> which talks about <strong><a href="/guide/language/object">Reason objects</a></strong>. Here\'s an example:</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-keyword">type</span> payload = <span class="hljs-type">Js</span>.t {\n    .\n    name: string\n};\nexternal sendQuery: payload =&gt; unit = <span class="hljs-string">"sendQuery"</span> [@@bs.<span class="hljs-keyword">module</span> <span class="hljs-string">"myAjaxLibrary"</span>];\nsendQuery {<span class="hljs-string">"name"</span>: <span class="hljs-string">"Reason"</span>};</code></pre>\n      </div>\n<p>Notice the dot in the type definiton. That\'s is an object type notation, and has nothing to do with a record! Objects will be described in a later section.</p>\n<h4 id="record-types-are-found-by-field-name"><a href="#record-types-are-found-by-field-name" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Record Types Are Found By Field Name</h4>\n<p>With records, you <strong>cannot</strong> say "I\'d like this function to take any record type, as long as they have the field <code>age</code>". The following <em>works</em>, but not as expected:</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-keyword">type</span> person = {age: int, name: string};\n<span class="hljs-keyword">type</span> monster = {age: int, hasTentacles: bool};\n\n<span class="hljs-keyword">let</span> getAge entity =&gt; entity.age;</code></pre>\n      </div>\n<p>The last line\'s function will infer that the parameter <code>entity</code> must be of type <code>monster</code>. So the follow code\'s last line fails:</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> kraken = {age: <span class="hljs-number">9999</span>, hasTentacles: <span class="hljs-literal">true</span>};\n<span class="hljs-keyword">let</span> me = {age: <span class="hljs-number">5</span>, name: <span class="hljs-string">"Baby Reason"</span>};\n\ngetAge kraken;\ngetAge me;</code></pre>\n      </div>\n<p>The type system will complain that <code>me</code> is a <code>person</code>, and that <code>getAge</code> only works on <code>monster</code>. If you need such capability, use Reason objects, mentioned in the previous section.</p>\n<h3 id="design-decisions"><a href="#design-decisions" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Design Decisions</h3>\n<p>After reading the constraints in the previous sections, and if you\'re coming from a dynamic language background, you might be wondering why one would bother with record in the first place instead of straight using object, since the former needs explicit typing and doesn\'t allow different records with the same field name to be passed to the same function, etc.</p>\n<ol>\n<li>\n<p>The truth is that most of the times in your app, your data\'s shape is actually fixed, and if it\'s not, it can potentially be better represented as a combination of variant (introduced next) + record instead*.</p>\n</li>\n<li>\n<p>Record, since its fields are fixed, is compiled to an array with array index accesses instead of JS object (try it in the playground!). On native, it compiles to basically a region of memory where a field access is just one field lookup + one actual access, aka <strong>2 assembly instructions</strong>. The good old days where folks measured in nanoseconds...</p>\n</li>\n</ol>\n<!--TODO: sharable playground  -->\n<ol start="3">\n<li>Finally, since a record type is resolved through finding that single explicit type declaration (we call this "nominal typing"), the type error messages end up better than the counterpart ("structural typing", like for tuples). This makes refactoring easier; changing a record type\'s fields naturally allows the compiler to know that it\'s still the same record, just misused in some places. Otherwise, under structural typing, it might get hard to tell whether the definition site or the usage site is wrong.</li>\n</ol>\n<p>* And we\'re not just finding excuses for ourselves! Reason objects do support these features.</p>',frontmatter:{title:"Record"}}}},pathContext:{section:"guide",sectionTitle:"Guide",relativePath:"guide/language/record.md",relatedFiles:"/^guide\\/.*\\.md$/"}}}});
//# sourceMappingURL=path---guide-language-record-576541b5877cd2bbfa7f.js.map