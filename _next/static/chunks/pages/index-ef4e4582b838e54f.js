(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5301:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return s(4125)}])},8063:function(e,t,s){"use strict";var n=s(5893);t.Z=function(e){var t=e.name,s=e.picture;return(0,n.jsxs)("div",{className:"flex items-center",children:[(0,n.jsx)("img",{src:s,className:"w-12 h-12 rounded-full mr-4",alt:t}),(0,n.jsx)("div",{className:"text-xl font-bold",children:t})]})}},7518:function(e,t,s){"use strict";var n=s(5893);t.Z=function(e){var t=e.children;return(0,n.jsx)("div",{className:"container mx-auto px-5",children:t})}},9371:function(e,t,s){"use strict";var n=s(5893),r=s(4184),i=s.n(r),a=s(1664);t.Z=function(e){var t=e.title,s=e.src,r=e.slug,l=(0,n.jsx)("img",{src:s,alt:"Cover Image for ".concat(t),className:i()("shadow-small",{"hover:shadow-medium transition-shadow duration-200":r})});return(0,n.jsx)("div",{className:"sm:mx-0",children:r?(0,n.jsx)(a.default,{as:"/posts/".concat(r),href:"/posts/[...slug]",children:(0,n.jsx)("a",{"aria-label":t,children:l})}):l})}},3797:function(e,t,s){"use strict";var n=s(5893),r=s(3855),i=s(5313);t.Z=function(e){var t=e.dateString,s=(0,r.Z)(t);return(0,n.jsx)("time",{dateTime:t,children:(0,i.Z)(s,"yyyy/MM/dd")})}},5303:function(e,t,s){"use strict";s.d(t,{Z:function(){return c}});var n=s(5893),r=s(7518),i=function(){return(0,n.jsx)("footer",{className:"bg-accent-1 border-t border-accent-2",children:(0,n.jsx)(r.Z,{children:(0,n.jsx)("div",{className:"py-28 flex flex-col lg:flex-row items-center",children:(0,n.jsx)("h3",{className:"text-4xl lg:text-5xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4",children:"Statically Generated with Next.js."})})})})},a=s(9008),l=function(){return(0,n.jsxs)(a.default,{children:[(0,n.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/favicon/apple-touch-icon.png"}),(0,n.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon/favicon-32x32.png"}),(0,n.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicon/favicon-16x16.png"}),(0,n.jsx)("link",{rel:"manifest",href:"/favicon/site.webmanifest"}),(0,n.jsx)("link",{rel:"mask-icon",href:"/favicon/safari-pinned-tab.svg",color:"#000000"}),(0,n.jsx)("link",{rel:"shortcut icon",href:"/favicon/favicon.ico"}),(0,n.jsx)("meta",{name:"msapplication-TileColor",content:"#000000"}),(0,n.jsx)("meta",{name:"msapplication-config",content:"/favicon/browserconfig.xml"}),(0,n.jsx)("meta",{name:"theme-color",content:"#000"}),(0,n.jsx)("link",{rel:"alternate",type:"application/rss+xml",href:"/feed.xml"}),(0,n.jsx)("meta",{name:"description",content:"A statically generated blog example using Next.js and ".concat("Markdown",".")}),(0,n.jsx)("meta",{property:"og:image",content:"https://og-image.now.sh/Next.js%20Blog%20Starter%20Example.png?theme=light&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg"})]})},c=function(e){e.preview;var t=e.children;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(l,{}),(0,n.jsx)("div",{className:"min-h-screen",children:(0,n.jsx)("main",{children:t})}),(0,n.jsx)(i,{})]})}},4125:function(e,t,s){"use strict";s.r(t),s.d(t,{__N_SSG:function(){return h},default:function(){return f}});var n=s(5893),r=s(7518),i=s(8063),a=s(3797),l=s(9371),c=s(1664),o=function(e){var t=e.title,s=e.coverImage,r=e.date,o=e.excerpt,d=e.author,x=e.slug;return(0,n.jsxs)("div",{children:[s&&(0,n.jsx)("div",{className:"mb-5",children:(0,n.jsx)(l.Z,{slug:x,title:t,src:s})}),(0,n.jsx)("h3",{className:"text-3xl mb-3 leading-snug",children:(0,n.jsx)(c.default,{as:"/posts/".concat(x),href:"/posts/[...slug]",children:(0,n.jsx)("a",{className:"hover:underline",children:t})})}),(0,n.jsx)("div",{className:"text-lg mb-4",children:(0,n.jsx)(a.Z,{dateString:r})}),(0,n.jsx)("p",{className:"text-lg leading-relaxed mb-4",children:o}),d&&(0,n.jsx)(i.Z,{name:d.name,picture:d.picture})]})},d=function(e){var t=e.posts;return(0,n.jsxs)("section",{children:[(0,n.jsx)("h2",{className:"mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight",children:"More"}),(0,n.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32",children:t.map((function(e){return(0,n.jsx)(o,{title:e.title,coverImage:e.coverImage,date:e.date,author:e.author,slug:e.slug,excerpt:e.excerpt},e.slug)}))})]})},x=function(e){var t=e.title,s=e.coverImage,r=e.date,o=e.excerpt,d=e.author,x=e.slug;return(0,n.jsxs)("section",{children:[s&&(0,n.jsx)("div",{className:"mb-8 md:mb-16",children:(0,n.jsx)(l.Z,{title:t,src:s,slug:x})}),(0,n.jsxs)("div",{className:"md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28",children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("h3",{className:"mb-4 text-4xl lg:text-6xl leading-tight",children:(0,n.jsx)(c.default,{as:"/posts/".concat(x),href:"/posts/[...slug]",children:(0,n.jsx)("a",{className:"hover:underline",children:t})})}),(0,n.jsx)("div",{className:"mb-4 md:mb-0 text-lg",children:(0,n.jsx)(a.Z,{dateString:r})})]}),d&&(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{className:"text-lg leading-relaxed mb-4",children:o}),(0,n.jsx)(i.Z,{name:d.name,picture:d.picture})]})]})]})},m=function(){return(0,n.jsx)("section",{className:"flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12",children:(0,n.jsx)("h1",{className:"text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8",children:"Blog."})})},u=s(5303),g=s(9008),h=!0,f=function(e){var t=e.allPosts,s=t[0],i=t.slice(1);return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)(u.Z,{children:[(0,n.jsx)(g.default,{children:(0,n.jsx)("title",{children:"Austin's Blog"})}),(0,n.jsxs)(r.Z,{children:[(0,n.jsx)(m,{}),s&&(0,n.jsx)(x,{title:s.title,coverImage:s.coverImage,date:s.date,author:s.author,slug:s.slug,excerpt:s.excerpt}),i.length>0&&(0,n.jsx)(d,{posts:i})]})]})})}}},function(e){e.O(0,[912,774,888,179],(function(){return t=5301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);