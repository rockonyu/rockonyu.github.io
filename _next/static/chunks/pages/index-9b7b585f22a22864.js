(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5301:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(1456)}])},1737:function(e,t,n){"use strict";n.d(t,{W:function(){return s},Z:function(){return x}});var r=n(5893),s=function(e){var t=e.children;return(0,r.jsx)("div",{className:"container mx-auto px-5",children:t})},i=n(4184),a=n.n(i),c=function(e){var t=e.preview;return(0,r.jsx)("div",{className:a()("border-b",{"bg-accent-7 border-accent-7 text-white":t,"bg-accent-1 border-accent-2 dark:bg-accent-8 dark:border-accent-7":!t}),children:(0,r.jsx)(s,{children:(0,r.jsx)("div",{className:"py-2 text-center text-sm",children:t?(0,r.jsxs)(r.Fragment,{children:["This page is a preview."," ",(0,r.jsx)("a",{href:"/api/exit-preview",className:"underline hover:text-cyan duration-200 transition-colors",children:"Click here"})," ","to exit preview mode."]}):(0,r.jsxs)(r.Fragment,{children:["The source code for this blog is"," ",(0,r.jsx)("a",{href:"https://github.com/rockonyu/rockonyu.github.io",className:"underline hover:text-success duration-200 transition-colors",children:"available on GitHub"}),"."]})})})})},l=function(){return(0,r.jsx)("footer",{className:"bg-accent-1 border-t border-accent-2 dark:bg-accent-8",children:(0,r.jsx)(s,{children:(0,r.jsx)("div",{className:"py-28 flex flex-col lg:flex-row items-center",children:(0,r.jsx)("h3",{className:"text-4xl lg:text-5xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4",children:"Statically Generated with Next.js."})})})})},d=n(9008),o=function(){return(0,r.jsxs)(d.default,{children:[(0,r.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/favicon/apple-touch-icon.png"}),(0,r.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon/favicon-32x32.png"}),(0,r.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicon/favicon-16x16.png"}),(0,r.jsx)("link",{rel:"manifest",href:"/favicon/site.webmanifest"}),(0,r.jsx)("link",{rel:"mask-icon",href:"/favicon/safari-pinned-tab.svg",color:"#000000"}),(0,r.jsx)("link",{rel:"shortcut icon",href:"/favicon/favicon.ico"}),(0,r.jsx)("meta",{name:"msapplication-TileColor",content:"#000000"}),(0,r.jsx)("meta",{name:"msapplication-config",content:"/favicon/browserconfig.xml"}),(0,r.jsx)("meta",{name:"theme-color",content:"#000"}),(0,r.jsx)("link",{rel:"alternate",type:"application/rss+xml",href:"/feed.xml"}),(0,r.jsx)("meta",{name:"description",content:"A statically generated blog example using Next.js and ".concat("Markdown",".")}),(0,r.jsx)("meta",{property:"og:image",content:"https://og-image.now.sh/Next.js%20Blog%20Starter%20Example.png?theme=light&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg"})]})},x=function(e){var t=e.preview,n=e.children;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o,{}),(0,r.jsxs)("div",{className:"min-h-screen",children:[(0,r.jsx)(c,{preview:t}),(0,r.jsx)("main",{children:n})]}),(0,r.jsx)(l,{})]})}},733:function(e,t,n){"use strict";n.d(t,{h4:function(){return i},vA:function(){return v},vF:function(){return b},yO:function(){return o},mV:function(){return f},DZ:function(){return j}});var r=n(5893),s=n(1664),i=function(){return(0,r.jsxs)("h2",{className:"text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8",children:[(0,r.jsx)(s.default,{href:"/",children:(0,r.jsx)("a",{className:"hover:underline",children:"Blog"})}),"."]})},a=n(5021),c=n.n(a),l=n(4184),d=n.n(l),o=(n(9784),function(e){var t=e.content,n=e.comment;return(0,r.jsxs)("div",{className:"max-w-2xl mx-auto",children:[(0,r.jsx)("div",{className:d()(c().markdown,"mb-16"),dangerouslySetInnerHTML:{__html:t}}),n]})}),x=function(e){var t=e.name,n=e.picture;return(0,r.jsxs)("div",{className:"flex items-center",children:[(0,r.jsx)("img",{src:n,className:"w-12 h-12 rounded-full mr-4",alt:t}),(0,r.jsx)("div",{className:"text-xl font-bold",children:t})]})},m=n(3855),h=n(5313),u=function(e){var t=e.dateString,n=(0,m.Z)(t);return(0,r.jsx)("time",{dateTime:t,children:(0,h.Z)(n,"yyyy/MM/dd")})},g=function(e){var t=e.title,n=e.src,i=e.slug,a=(0,r.jsx)("img",{src:n,alt:"Cover Image for ".concat(t),className:d()("shadow-small",{"hover:shadow-medium transition-shadow duration-200":i})});return(0,r.jsx)("div",{className:"sm:mx-0",children:i?(0,r.jsx)(s.default,{as:"/posts/".concat(i),href:"/posts/[...slug]",children:(0,r.jsx)("a",{"aria-label":t,children:a})}):a})},j=function(e){var t=e.children;return(0,r.jsx)("h1",{className:"text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left",children:t})},f=function(e){var t=e.title,n=e.coverImage,s=e.date,i=e.author;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(j,{children:t}),i&&(0,r.jsx)("div",{className:"hidden md:block md:mb-12",children:(0,r.jsx)(x,{name:i.name,picture:i.picture})}),n&&(0,r.jsx)("div",{className:"mb-8 md:mb-16 sm:mx-0",children:(0,r.jsx)(g,{title:t,src:n})}),(0,r.jsxs)("div",{className:"max-w-2xl mx-auto",children:[i&&(0,r.jsx)("div",{className:"block md:hidden mb-6",children:(0,r.jsx)(x,{name:i.name,picture:i.picture})}),s&&(0,r.jsx)("div",{className:"mb-6 text-lg",children:(0,r.jsx)(u,{dateString:s})})]})]})},p=function(e){var t=e.title,n=e.coverImage,i=e.date,a=e.excerpt,c=e.author,l=e.slug;return(0,r.jsxs)("div",{children:[n&&(0,r.jsx)("div",{className:"mb-5",children:(0,r.jsx)(g,{slug:l,title:t,src:n})}),(0,r.jsx)("h3",{className:"text-3xl mb-3 leading-snug",children:(0,r.jsx)(s.default,{as:"/posts/".concat(l),href:"/posts/[...slug]",children:(0,r.jsx)("a",{className:"hover:underline",children:t})})}),(0,r.jsx)("div",{className:"text-lg mb-4",children:i&&(0,r.jsx)(u,{dateString:i})}),(0,r.jsx)("p",{className:"text-lg leading-relaxed mb-4",children:a}),c&&(0,r.jsx)(x,{name:c.name,picture:c.picture})]})},v=function(e){var t=e.title,n=e.coverImage,i=e.date,a=e.excerpt,c=e.author,l=e.slug;return(0,r.jsxs)("section",{children:[n&&(0,r.jsx)("div",{className:"mb-8 md:mb-16",children:(0,r.jsx)(g,{title:t,src:n,slug:l})}),(0,r.jsxs)("div",{className:"md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("h3",{className:"mb-4 text-4xl lg:text-6xl leading-tight",children:(0,r.jsx)(s.default,{as:"/posts/".concat(l),href:"/posts/[...slug]",children:(0,r.jsx)("a",{className:"hover:underline",children:t})})}),(0,r.jsx)("div",{className:"mb-4 md:mb-0 text-lg",children:i&&(0,r.jsx)(u,{dateString:i})})]}),c&&(0,r.jsxs)("div",{children:[(0,r.jsx)("p",{className:"text-lg leading-relaxed mb-4",children:a}),(0,r.jsx)(x,{name:c.name,picture:c.picture})]})]})]})},b=function(e){var t=e.posts;return(0,r.jsxs)("section",{children:[(0,r.jsx)("h2",{className:"mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight",children:"More"}),(0,r.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32",children:t.map((function(e){return(0,r.jsx)(p,{title:e.title,coverImage:e.coverImage,date:e.date,author:e.author,slug:e.slug,excerpt:e.excerpt},e.slug)}))})]})}},1456:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return l},default:function(){return d}});var r=n(5893),s=n(733),i=function(){return(0,r.jsx)("section",{className:"flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12",children:(0,r.jsx)("h1",{className:"text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8",children:"Blog."})})},a=n(1737),c=n(9008),l=!0,d=function(e){var t=e.allPosts,n=t[0],l=t.slice(1);return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(a.Z,{children:[(0,r.jsx)(c.default,{children:(0,r.jsx)("title",{children:"Austin's Blog"})}),(0,r.jsxs)(a.W,{children:[(0,r.jsx)(i,{}),n&&(0,r.jsx)(s.vA,{title:n.title,coverImage:n.coverImage,date:n.date,author:n.author,slug:n.slug,excerpt:n.excerpt}),l.length>0&&(0,r.jsx)(s.vF,{posts:l})]})]})})}},5021:function(e){e.exports={markdown:"markdown-styles_markdown__3w_hn"}}},function(e){e.O(0,[498,774,888,179],(function(){return t=5301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);