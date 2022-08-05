"use strict";(self.webpackChunkwiki_fedimint=self.webpackChunkwiki_fedimint||[]).push([[4638],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>m});var i=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function r(t,e){if(null==t)return{};var n,i,a=function(t,e){if(null==t)return{};var n,i,a={},s=Object.keys(t);for(i=0;i<s.length;i++)n=s[i],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)n=s[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var l=i.createContext({}),h=function(t){var e=i.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},p=function(t){var e=h(t.components);return i.createElement(l.Provider,{value:e},t.children)},g={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},c=i.forwardRef((function(t,e){var n=t.components,a=t.mdxType,s=t.originalType,l=t.parentName,p=r(t,["components","mdxType","originalType","parentName"]),c=h(n),m=a,d=c["".concat(l,".").concat(m)]||c[m]||g[m]||s;return n?i.createElement(d,o(o({ref:e},p),{},{components:n})):i.createElement(d,o({ref:e},p))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var s=n.length,o=new Array(s);o[0]=c;var r={};for(var l in e)hasOwnProperty.call(e,l)&&(r[l]=e[l]);r.originalType=t,r.mdxType="string"==typeof t?t:a,o[1]=r;for(var h=2;h<s;h++)o[h]=n[h];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}c.displayName="MDXCreateElement"},8367:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>o,default:()=>g,frontMatter:()=>s,metadata:()=>r,toc:()=>h});var i=n(7462),a=(n(7294),n(3905));const s={sidebar_position:5},o="How do Fedimint transactions work?",r={unversionedId:"GettingStarted/How-FM-Transactions-Work",id:"GettingStarted/How-FM-Transactions-Work",title:"How do Fedimint transactions work?",description:"This is a set of simplified transactions flows to explain how transaction processing works inside the Fedimint, with integration to the wider lightning network and between different mints.",source:"@site/docs/GettingStarted/05-How-FM-Transactions-Work.md",sourceDirName:"GettingStarted",slug:"/GettingStarted/How-FM-Transactions-Work",permalink:"/wiki_fedimint/docs/GettingStarted/How-FM-Transactions-Work",draft:!1,editUrl:"https://github.com/humansinstitute/wiki_fedimint/tree/main/docs/GettingStarted/05-How-FM-Transactions-Work.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Core Technology Components",permalink:"/wiki_fedimint/docs/GettingStarted/TechCompontents"},next:{title:"Trade Offs",permalink:"/wiki_fedimint/docs/category/trade-offs"}},l={},h=[{value:"Transactions within a Fedimint",id:"transactions-within-a-fedimint",level:2},{value:"Step 1 : The Invoice",id:"step-1--the-invoice",level:3},{value:"Step 2: Share tokens",id:"step-2-share-tokens",level:3},{value:"Step 3: Settle the transaction with new eCash tokens",id:"step-3-settle-the-transaction-with-new-ecash-tokens",level:3},{value:"Transactions from Fedimint to Lightning",id:"transactions-from-fedimint-to-lightning",level:2},{value:"Step 1: The lightning invoice",id:"step-1-the-lightning-invoice",level:3},{value:"Step 2: Create the incentive to pay",id:"step-2-create-the-incentive-to-pay",level:3},{value:"Step 3: Broadcast to Lightning Gateways",id:"step-3-broadcast-to-lightning-gateways",level:3},{value:"Step 4: Lightning Gateway Pays the Invoice",id:"step-4-lightning-gateway-pays-the-invoice",level:3},{value:"Step 5: Lightning Gateway settles the mint contract",id:"step-5-lightning-gateway-settles-the-mint-contract",level:3},{value:"Transactions from Fedimint to Other Fedimints",id:"transactions-from-fedimint-to-other-fedimints",level:2},{value:"Step 1: Alice sells a pre-image",id:"step-1-alice-sells-a-pre-image",level:3},{value:"Step 2: Alice let&#39;s Bob know how to pay",id:"step-2-alice-lets-bob-know-how-to-pay",level:3},{value:"Step 3: Bob buys a pre-image",id:"step-3-bob-buys-a-pre-image",level:3},{value:"Step 4: Lighting Gateway B pays Lightning Gateway B",id:"step-4-lighting-gateway-b-pays-lightning-gateway-b",level:3},{value:"Step 5: Lightning Gateway A settles in Fedimint 1",id:"step-5-lightning-gateway-a-settles-in-fedimint-1",level:3},{value:"Step 6: Lightning Gateway A settles with Lightning Gateway B",id:"step-6-lightning-gateway-a-settles-with-lightning-gateway-b",level:3},{value:"Step 7: Lightning Gateway B settles in Fedimint 2",id:"step-7-lightning-gateway-b-settles-in-fedimint-2",level:3},{value:"Pay Lightning into a Fedimint",id:"pay-lightning-into-a-fedimint",level:2},{value:"Lightning Routing",id:"lightning-routing",level:3}],p={toc:h};function g(t){let{components:e,...s}=t;return(0,a.kt)("wrapper",(0,i.Z)({},p,s,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"how-do-fedimint-transactions-work"},"How do Fedimint transactions work?"),(0,a.kt)("p",null,"This is a set of simplified transactions flows to explain how transaction processing works inside the Fedimint, with integration to the wider lightning network and between different mints. "),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"This Guide is being actively worked on!")),(0,a.kt)("h2",{id:"transactions-within-a-fedimint"},"Transactions within a Fedimint"),(0,a.kt)("p",null,"This represents how a transaction would settle entirely within the same Fedimint. "),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"IntramintPayments",src:n(710).Z,width:"1241",height:"990"})),(0,a.kt)("h3",{id:"step-1--the-invoice"},"Step 1 : The Invoice"),(0,a.kt)("p",null,"An invoice (in the form of data) is passed from Bob's wallet to Alice's wallet asking for payment to be forwarded for 15,000 sats."),(0,a.kt)("h3",{id:"step-2-share-tokens"},"Step 2: Share tokens"),(0,a.kt)("p",null,"Alice's wallet responds by checking the tokens it holds and selecting tokens that total 15,000 sats  in this case a 10k sats and a 5k sats eCash token. "),(0,a.kt)("p",null,"It then forwards these tokens to Bob's wallet.  "),(0,a.kt)("h3",{id:"step-3-settle-the-transaction-with-new-ecash-tokens"},"Step 3: Settle the transaction with new eCash tokens"),(0,a.kt)("p",null,"Bob now has the eCash files and can redeem them from the Fedimint. However, there is a risk that Alice still has the eCash tokens copied and could redeem them first. As such the payment is not yet settled. "),(0,a.kt)("p",null,"To settle the payment Bob submits the eCash tokens to the mint and instead of redeeming for bitcoin, asks to swap them out for fresh eCash tokens, in this instance a 15,000 sats eCash token. "),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},'During implementation it is suspected that users will not use "pay me in the mint" invoices and would instead always assume they are paying Lightning invoices. ')),(0,a.kt)("h2",{id:"transactions-from-fedimint-to-lightning"},"Transactions from Fedimint to Lightning"),(0,a.kt)("p",null,"In this case the payment is being sent from a Fedimint user to pay a lightning invoice. "),(0,a.kt)("p",null,"This works by setting up a situation in which a lightning gateway provider is incentivised to pay the lightning invoice in ",(0,a.kt)("strong",{parentName:"p"},"sats")," in order to receive a ",(0,a.kt)("strong",{parentName:"p"},"hash pre-image")," that allows them to claim ",(0,a.kt)("strong",{parentName:"p"},"fm-sats"),"."),(0,a.kt)("p",null,"We will unpick this below. "),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Pay Fedimint to Lightning",src:n(4460).Z,width:"2001",height:"1123"})),(0,a.kt)("h3",{id:"step-1-the-lightning-invoice"},"Step 1: The lightning invoice"),(0,a.kt)("p",null,"A lightning merchant (or general recipient) generates a lightning invoice in this case for ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"10,000 sats")),". "),(0,a.kt)("p",null,"This is actually a ",(0,a.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=hs79R8kd_70&t=62s"},"Hash Time Lock Contract (HTLC)"),' contract that will provide some secret information - "',(0,a.kt)("strong",{parentName:"p"},"a hash pre-image"),'" in return for a payment in satoshis. '),(0,a.kt)("p",null,"The merchant is in effect ",(0,a.kt)("strong",{parentName:"p"},'"selling a pre-image-A"')," for sats. "),(0,a.kt)("h3",{id:"step-2-create-the-incentive-to-pay"},"Step 2: Create the incentive to pay"),(0,a.kt)("p",null,"Alice would like to pay this invoice from her Fedimint wallet, but doesn't run a lightning wallet herself. "),(0,a.kt)("p",null,"Instead she creates an equivalent ",(0,a.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=hs79R8kd_70&t=62s"},"Hash Time Lock Contract (HTLC)")," that will pay out ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"10,200 fm-sats"))," to anyone who can supply a pre-image to the contract where the extra ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"200 fm-sats")),"  represent a fee for the service."),(0,a.kt)("p",null,"An important note is that the ",(0,a.kt)("strong",{parentName:"p"},"hash")," used in this contract is the same ",(0,a.kt)("strong",{parentName:"p"},"hash")," used in the contract by the merchant linking the contracts together. "),(0,a.kt)("p",null,"Here Alice is in effect willing to ",(0,a.kt)("strong",{parentName:"p"},'"buy pre-image-A"')," for sats+200."),(0,a.kt)("h3",{id:"step-3-broadcast-to-lightning-gateways"},"Step 3: Broadcast to Lightning Gateways"),(0,a.kt)("p",null,"The Lightning Gateway, is now incentivized by this arbitrage opportunity to pay this invoice and obtain the pre-image in order to obtain fm-sats plus fee. "),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"There is a process by which the Lightning Gateway needs to become aware of the contract which could either be by direct contact from the user, or by the mint broadcasting available contracts. Yet to be fully defined. ")),(0,a.kt)("h3",{id:"step-4-lightning-gateway-pays-the-invoice"},"Step 4: Lightning Gateway Pays the Invoice"),(0,a.kt)("p",null,"The Lightning Gateway routes a payment, through the lightning network to the merchant paying the invoice and obtaining the pre-image. "),(0,a.kt)("p",null,'The "lightning" balance of the Lightning Gateway is now reduced by 10,000 sats.'),(0,a.kt)("h3",{id:"step-5-lightning-gateway-settles-the-mint-contract"},"Step 5: Lightning Gateway settles the mint contract"),(0,a.kt)("p",null,"The Lightning Gateway now takes that pre-image and uses this to claim the 10,200 fm-sats."),(0,a.kt)("p",null,"The Lightning Gateway's fm-BTC balance is now up 10,200 sats and their net position is up 200 sats.  "),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},'By linking the HTLCs with the same pre-image between the lightning route and the mint, the allows the Fedimint to spoof a lightning node and extend the route "into the mint". ')),(0,a.kt)("h2",{id:"transactions-from-fedimint-to-other-fedimints"},"Transactions from Fedimint to Other Fedimints"),(0,a.kt)("p",null,"This transaction both represents a payment from a Fedimint to a Fedimint. As a payment between FMs is routed over the lightning network we can also imply in the same use case, how a lightning node to Fedimint payment would be completed. "),(0,a.kt)("p",null,"In this instance Alice (in Fedimint 1) will receive a payment of 10,000 sats from Bob (in Fedimint 2)."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Pay Fedimint to Fedimint",src:n(468).Z,width:"2043",height:"1282"})),(0,a.kt)("h3",{id:"step-1-alice-sells-a-pre-image"},"Step 1: Alice sells a pre-image"),(0,a.kt)("p",null,"Alice want's to receive 10,000 sats, but her wallet doesn't have a lightning node. "),(0,a.kt)("p",null,"Instead her wallet creates a contract in Fedimint 1 which will sell the pre-image to a hash for 9,800 fm-sats, we'll call this ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},'"pre-image-A"')),"."),(0,a.kt)("h3",{id:"step-2-alice-lets-bob-know-how-to-pay"},"Step 2: Alice let's Bob know how to pay"),(0,a.kt)("p",null,"Alice now sends Bob a Lightning invoice for 10,000 sats which includes two pieces of important information:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"a fake endpoint ID associated with Fedimint 1."),(0,a.kt)("li",{parentName:"ul"},"a route hint to Lightning Gateway A")),(0,a.kt)("p",null,"This provides Bob with the information required to pay this invoice over lightning."),(0,a.kt)("h3",{id:"step-3-bob-buys-a-pre-image"},"Step 3: Bob buys a pre-image"),(0,a.kt)("p",null,"Bob would love to pay the 10,000 sats, but his wallet doesn't have a lightning node. "),(0,a.kt)("p",null,"Instead he follows the previous payment flow and posts a contract to Fedimint 2 that will pay 10,200 fm-sats to buy ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},'"pre-image-A"'))," and let's Lightning Gateway B know about it, by providing the invoice with the route hint to Lightning Gateway A."),(0,a.kt)("h3",{id:"step-4-lighting-gateway-b-pays-lightning-gateway-b"},"Step 4: Lighting Gateway B pays Lightning Gateway B"),(0,a.kt)("p",null,"Lighting Gateway B routes 10,000 sats over the lightning network to Lightning Network A seeking a pre-image!"),(0,a.kt)("h3",{id:"step-5-lightning-gateway-a-settles-in-fedimint-1"},"Step 5: Lightning Gateway A settles in Fedimint 1"),(0,a.kt)("p",null,"Luckily Lightning Gateway A realizes that he can obtain this pre-image and get paid a 200 fm-sats difference by paying 9,800 fm-sats to the contract (which then goes to Alice)."),(0,a.kt)("p",null,"Now Lightning Gateway A has the pre-image."),(0,a.kt)("h3",{id:"step-6-lightning-gateway-a-settles-with-lightning-gateway-b"},"Step 6: Lightning Gateway A settles with Lightning Gateway B"),(0,a.kt)("p",null,"LN Gateway A takes the pre-image and uses it to settle the payment with Lightning Gateway B and now receives sats to it's lightning balance sheet. "),(0,a.kt)("p",null,"The final balance sheet standing for Lightning Gateway A is:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"fm-sats: -9,800"),(0,a.kt)("li",{parentName:"ul"},"LN sats: +10,000 "),(0,a.kt)("li",{parentName:"ul"},"Net: +200 sats ")),(0,a.kt)("h3",{id:"step-7-lightning-gateway-b-settles-in-fedimint-2"},"Step 7: Lightning Gateway B settles in Fedimint 2"),(0,a.kt)("p",null,"Having the pre-image lightning gateway B now settles the contract held in Fedimint 2, receiving fm-sats for this from Bob. "),(0,a.kt)("p",null,"The final balance sheet for Lightning Gateway B is: "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"fm-sats: +10,200"),(0,a.kt)("li",{parentName:"ul"},"LN sats: -10,000"),(0,a.kt)("li",{parentName:"ul"},"Net: +200 sats ")),(0,a.kt)("h2",{id:"pay-lightning-into-a-fedimint"},"Pay Lightning into a Fedimint"),(0,a.kt)("p",null,"The process by which you would make a payment from a lightning wallet into a Fedimint wallet is a simplified case of paying from Mint 2 to Mint 1. "),(0,a.kt)("p",null,'If Bob had a lightning wallet instead of "buying a pre-image" in step 3, he would have skipped directly to step 4 and paid Lightning Gateway A himself. '),(0,a.kt)("p",null,"There would also have been no requirement for step 7. "),(0,a.kt)("h3",{id:"lightning-routing"},"Lightning Routing"),(0,a.kt)("p",null,"You may be thinking - hang on if I can receive lightning payments and send lightning payments can I route lightning payments. "),(0,a.kt)("p",null,"The answer is yes, sort of. "),(0,a.kt)("p",null,"This will be explored more in the FAQs as it has some interesting implications for use cases privacy and computational use cases."))}g.isMDXComponent=!0},710:(t,e,n)=>{n.d(e,{Z:()=>i});const i=n.p+"assets/images/fm-Pay-IntraMint.excalidraw-db1e7ad6ae524af7b3a708e6c5a61fb1.png"},4460:(t,e,n)=>{n.d(e,{Z:()=>i});const i=n.p+"assets/images/fm-Pay-MintToLN.excalidraw-7af2eac9c8fef5624eff5d63529a12ce.png"},468:(t,e,n)=>{n.d(e,{Z:()=>i});const i=n.p+"assets/images/fm-Pay-MintToMint.excalidraw-5a5d4079c069dbb4a7a61de3fb95c248.png"}}]);