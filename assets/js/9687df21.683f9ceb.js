"use strict";(self.webpackChunkwiki_fedimint=self.webpackChunkwiki_fedimint||[]).push([[9192],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),m=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=m(e.components);return i.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=m(n),h=a,p=c["".concat(l,".").concat(h)]||c[h]||d[h]||r;return n?i.createElement(p,o(o({ref:t},u),{},{components:n})):i.createElement(p,o({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var m=2;m<r;m++)o[m]=n[m];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}c.displayName="MDXCreateElement"},1511:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>m});var i=n(7462),a=(n(7294),n(3905));const r={title:"Blind Signatures & eCash",tags:["eCash","Analogy","Blind Signatures"]},o="Blind Signatures & Chaumian eCash",s={unversionedId:"CommonTerms/Blind Signatures",id:"CommonTerms/Blind Signatures",title:"Blind Signatures & eCash",description:"This Guide is a work in progress.  We would appreciate any feedback you may have and you can submit edits through the link at the bottom of the page.",source:"@site/docs/CommonTerms/Blind Signatures.md",sourceDirName:"CommonTerms",slug:"/CommonTerms/Blind Signatures",permalink:"/wiki_fedimint/docs/CommonTerms/Blind Signatures",draft:!1,editUrl:"https://github.com/fedimint/fedimint.org/tree/main/docs/CommonTerms/Blind Signatures.md",tags:[{label:"eCash",permalink:"/wiki_fedimint/docs/tags/e-cash"},{label:"Analogy",permalink:"/wiki_fedimint/docs/tags/analogy"},{label:"Blind Signatures",permalink:"/wiki_fedimint/docs/tags/blind-signatures"}],version:"current",frontMatter:{title:"Blind Signatures & eCash",tags:["eCash","Analogy","Blind Signatures"]},sidebar:"tutorialSidebar",previous:{title:"Definitions & Terms",permalink:"/wiki_fedimint/docs/category/definitions--terms"},next:{title:"Honey Badger Byzantine Fault Tolerant Consensus",permalink:"/wiki_fedimint/docs/CommonTerms/HBBFTConsensus"}},l={},m=[],u={toc:m};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,i.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"blind-signatures--chaumian-ecash"},"Blind Signatures & Chaumian eCash"),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"This Guide is a work in progress.  We would appreciate any feedback you may have and you can submit edits through the link at the bottom of the page.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Community Custody on a spectrum",src:n(7438).Z,width:"1154",height:"288"})),(0,a.kt)("p",null,"The canonical explanation of blind signatures was given by David Chaum in terms of imprinting a signature on a message using carbon copy paper."),(0,a.kt)("p",null,"As highlighted in the figure above imagine obtaining a signature on a document as follows:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Create a document and seal the document into an envelope along with carbon copy paper."),(0,a.kt)("li",{parentName:"ol"},"You pass the envelope to the signer who can sign the outside of the envelope."),(0,a.kt)("li",{parentName:"ol"},"This creates an internal signature onto the document from the carbon paper. ."),(0,a.kt)("li",{parentName:"ol"},"If you were to reveal your document at a later date, the signer could confirm that they did indeed sign that document.")),(0,a.kt)("p",null,'This is concept is utilized inside eCash to allow an eCash mint to issue "IOUs" that it can confirm are valid, whilst retaining the privacy of the user.'),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Community Custody on a spectrum",src:n(3433).Z,width:"991",height:"296"})),(0,a.kt)("p",null,"A user can present a mint with a random identifier and request a blind signature from the mint. The mint signs different denominations with different private keys (for example a 10k Sats private key, a 5k sats private key and so on)."),(0,a.kt)("p",null,"So when a deposit (lets say 10,000 satoshis) is made, I present the mint with a random identifier and ask a blind signature with their 10,000 satoshi private key."),(0,a.kt)("p",null,"These two piece of data make up an eCash token."),(0,a.kt)("p",null,"When it comes time to redeem these satoshis, I provide the mint with the eCash token and it performs two checks:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"The mint confirms the signature was made with their 10,000 satoshi private key."),(0,a.kt)("li",{parentName:"ol"},"The mint checks it has not previously redeemed an eCash token with this unique reference number.")),(0,a.kt)("p",null,"If both of these checks pass then the eCash token is accepted."),(0,a.kt)("p",null,"Until this redemption is made the mint is unaware of the unique reference number on the eCash token, as a blind signing algorithm was used."),(0,a.kt)("p",null,"This means that the mint is unable to ascertain the following information:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Whether the individual redeeming the token was the same individual who minted the token."),(0,a.kt)("li",{parentName:"ul"},"What the number of tokens held by any individual user are.")),(0,a.kt)("p",null,"This is the basis of the strong privacy claims in eCash."))}d.isMDXComponent=!0},3433:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/Fedimint-ecashtoken-verify-6fd9c74f0e3497ca08d43c7c2ff60fb4.png"},7438:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/blind-signing-12c89c6dece70a0a674fc3883d9ed1ef.png"}}]);