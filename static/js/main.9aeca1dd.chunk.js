(window.webpackJsonprouting=window.webpackJsonprouting||[]).push([[0],[,,,,,,,,,,,,function(e,t,a){},,,,,,function(e,t,a){e.exports=a.p+"static/media/main-characters.b14c0866.png"},function(e,t,a){e.exports=a.p+"static/media/ademia-and-mylo.c4b9dd20.png"},function(e,t,a){e.exports=a.p+"static/media/ademia-dialogue.59ab156e.png"},function(e,t,a){e.exports=a.p+"static/media/mylo-tree.0fa0ddf3.png"},function(e,t,a){e.exports=a.p+"static/media/mylo-and-building.641640f1.png"},function(e,t,a){e.exports=a.p+"static/media/buildings.4cf7916d.png"},,,,function(e,t,a){e.exports=a.p+"static/media/email-logo.78abd247.png"},function(e,t,a){e.exports=a.p+"static/media/twitter-logo.2451ce30.png"},,,function(e,t,a){e.exports=a.p+"static/media/title.fd84261b.png"},function(e,t,a){e.exports=a.p+"static/media/nate-shout.2b587d00.png"},function(e,t,a){e.exports=a.p+"static/media/orchard.f07220fe.png"},function(e,t,a){e.exports=a.p+"static/media/village-girl.2912ab69.png"},function(e,t,a){e.exports=a.p+"static/media/catherine-picture.a2c060df.jpg"},function(e,t,a){e.exports=a.p+"static/media/christopher-picture.938f6fd0.jpg"},function(e,t,a){e.exports=a.p+"static/media/emily-picture.d7084f24.jpg"},function(e,t,a){e.exports=a.p+"static/media/mylo-neutral.1aacd2fb.png"},function(e,t,a){e.exports=a.p+"static/media/ademia-neutral.f8419ae1.png"},function(e,t,a){e.exports=a.p+"static/media/nate-neutral.ec91f526.png"},function(e,t,a){e.exports=a.p+"static/media/arthur-neutral.f7d8366e.png"},function(e,t,a){e.exports=a(56)},,,,,function(e,t,a){},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),c=a(26),r=a.n(c),o=a(13),s=a(10),l=(a(12),a(1)),u=a(2),p=a(4),m=a(3),h=a(5),d=(a(47),a(27)),b=a.n(d),f=a(28),g=a.n(f),O={title:"Home",path:"/"},v={title:"Characters",path:"/characters"},E={title:"Concept Art",path:"/concept_art"},k=function(e){function t(){return Object(l.a)(this,t),Object(p.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("button",{className:"corner-button ".concat(this.props.isMainMenu&&"corner-button--is-main-menu"),onClick:function(){return e.props.onClick()}},this.props.showCloseIcon?i.a.createElement("div",{className:"corner-button__close"},"X"):i.a.createElement("div",null,i.a.createElement("div",{className:"corner-button__line"}),i.a.createElement("div",{className:"corner-button__line"}),i.a.createElement("div",{className:"corner-button__line"})))}}]),t}(i.a.Component),j=function(e){function t(){return Object(l.a)(this,t),Object(p.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"contact-info"},this.props.widgets)}}]),t}(i.a.Component),y=function(e){function t(){return Object(l.a)(this,t),Object(p.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return i.a.createElement("a",{href:this.props.link,target:"_blank"},i.a.createElement("img",{src:this.props.source,alt:this.props.alt,className:"contact-widget"}))}}]),t}(i.a.Component),w=function(e){function t(){return Object(l.a)(this,t),Object(p.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"menu"},i.a.createElement("div",{className:"menu__outside",onClick:this.props.onClickOutside}),i.a.createElement(N,{class:"menu__inside",selectedSubPage:this.props.selectedSubPage,onClickSubpageButton:this.props.onClickSubpageButton}))}}]),t}(i.a.Component),C=function(e){function t(){return Object(l.a)(this,t),Object(p.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("div",null,i.a.createElement(N,{class:"menu-desktop",selectedSubPage:this.props.selectedSubPage,onClickSubpageButton:function(t,a){return e.props.onClickSubpageButton(t,a)}}),i.a.createElement("h1",{className:"desktop-title"},"Wisp Child"))}}]),t}(i.a.Component),N=function(e){function t(){return Object(l.a)(this,t),Object(p.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:this.props.class},i.a.createElement(S,{isSelectedSubPage:this.props.selectedSubPage===O.path,title:O.title,onClickProp:function(){return e.props.onClickSubpageButton(O.path)}}),i.a.createElement(S,{isSelectedSubPage:this.props.selectedSubPage===v.path,title:v.title,onClickProp:function(){return e.props.onClickSubpageButton(v.path)}}),i.a.createElement(S,{isSelectedSubPage:this.props.selectedSubPage===E.path,title:E.title,onClickProp:function(){return e.props.onClickSubpageButton(E.path)}}))}}]),t}(i.a.Component),S=function(e){function t(){return Object(l.a)(this,t),Object(p.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return i.a.createElement("button",{className:"subpage-button ".concat(this.props.isSelectedSubPage&&"subpage-button--selected"),onClick:this.props.onClickProp},this.props.title)}}]),t}(i.a.Component),P=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(p.a)(this,Object(m.a)(t).call(this,e))).state={isMenuOpen:!1,selectedSubPage:a.props.location.pathname},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"toggleMenu",value:function(){this.setState({isMenuOpen:!this.state.isMenuOpen})}},{key:"onSubPageButtonClick",value:function(e){this.setState({isMenuOpen:!1,selectedSubPage:e}),this.props.history.push(e)}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"app"},this.state.isMenuOpen&&i.a.createElement(w,{onClickOutside:function(){return e.toggleMenu()},selectedSubPage:this.state.selectedSubPage,onClickSubpageButton:function(t,a){return e.onSubPageButtonClick(t,a)}}),i.a.createElement(k,{isMainMenu:!0,showCloseIcon:this.state.isMenuOpen,onClick:function(){return e.toggleMenu()}}),i.a.createElement(C,{selectedSubPage:this.state.selectedSubPage,onClickSubpageButton:function(t,a){return e.onSubPageButtonClick(t,a)}}),this.props.children,i.a.createElement(j,{widgets:[i.a.createElement(y,{key:"email",link:"mailto:cmclaudet@gmail.com?Subject=Hello",source:b.a,alt:"email logo"}),i.a.createElement(y,{key:"twitter",link:"https://twitter.com/beastgamestudio",source:g.a,alt:"twitter logo"})]}))}}]),t}(i.a.Component),_=Object(s.f)(P),x=(a(53),a(31)),M=a.n(x),W=a(32),B=a.n(W),A=a(33),I=a.n(A),H=a(34),T=a.n(H),J=a(35),D=a.n(J),L=a(36),z=a.n(L),Y=a(37),G=a.n(Y),R=function(e){function t(){return Object(l.a)(this,t),Object(p.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"game-snippet ".concat(this.props.flipped&&"game-snippet--flipped")},i.a.createElement("div",{className:"game-snippet__text"},i.a.createElement("h2",{className:"game-snippet__text__header"},this.props.header),i.a.createElement("p",null,this.props.description)),i.a.createElement("img",{className:"game-snippet__screenshot",src:this.props.source,alt:this.props.alt}))}}]),t}(i.a.Component),X=function(e){function t(){return Object(l.a)(this,t),Object(p.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"creator-profile"},i.a.createElement("img",{className:"creator-profile__picture",src:this.props.source,alt:this.props.alt}),i.a.createElement("h2",null,this.props.name),i.a.createElement("p",{className:"creator-profile__description"},this.props.description))}}]),t}(i.a.Component),$=function(e){function t(){return Object(l.a)(this,t),Object(p.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"main"},i.a.createElement("img",{className:"background",src:M.a,alt:"background"}),i.a.createElement("h1",{className:"title-text"},"Wisp Child is amazing"),i.a.createElement(R,{flipped:!0,header:"Look at Nate",description:"Yes. He is obsessed with apples and cider. He wants to make lots of money. More money than his Dad.",source:B.a,alt:"nate shout"}),i.a.createElement(R,{header:"The orchard is beautiful",description:"The whole game is the most beautiful thing you'll ever see. Just look at those apple trees. omg.",source:I.a,alt:"orchard"}),i.a.createElement(R,{flipped:!0,header:"There are NPCs",description:"You can talk to lots of NPCs. The village is epic because of this. All villagers have something hilarious or interesting or cute to say.",source:T.a,alt:"village girl"}),i.a.createElement("a",{className:"download-button",href:"https://beastgamestudios.itch.io/wisp-child",target:"_blank"},"Download"),i.a.createElement("h1",{className:"title-text"},"Beast Game Studio"),i.a.createElement("div",{className:"creator-profiles"},i.a.createElement(X,{source:D.a,alt:"catherine picture",name:"Catherine Claudet",description:"The programmer of Wisp Child. When working on it, she gets crazy obsessed and spends all her free time doing it. Loves Mylo more than most real people."}),i.a.createElement(X,{source:G.a,alt:"emily picture",name:"Emily Claudet",description:"She is obsessed. And very hungry. And wants to beast the world. Every day. All the time. Millions."}),i.a.createElement(X,{source:z.a,alt:"christopher picture",name:"Christopher Claudet",description:"He is also hungry. And he does beast. So much feasting though. He is the fattest in the family."})))}}]),t}(i.a.Component),q=(a(54),a(38)),F=a.n(q),K=a(39),Q=a.n(K),U=a(40),V=a.n(U),Z=a(41),ee=a.n(Z),te=function(e){function t(){return Object(l.a)(this,t),Object(p.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"creator-profile"},i.a.createElement("h2",null,this.props.name),i.a.createElement("img",{className:"character-profile__picture",src:this.props.source,alt:this.props.alt}),i.a.createElement("p",{className:"character-profile__description"},this.props.description))}}]),t}(i.a.Component),ae=function(e){function t(){return Object(l.a)(this,t),Object(p.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"characters main"},i.a.createElement("h1",{className:"banner-title-text"},"Characters"),i.a.createElement("div",{className:"character-profiles"},i.a.createElement(te,{source:F.a,alt:"mylo",name:"Mylo",description:"Mylo is adorable. Just look at them. Everyone loves Mylo."}),i.a.createElement(te,{source:Q.a,alt:"ademia",name:"Ademia",description:"Ademia is a beast. She is the coolest character. Ridiculously smart and gets obsessed. She loves Mylo more than life itself."}),i.a.createElement(te,{source:V.a,alt:"nate",name:"Nate",description:"Nate likes the idea of running a business and making lots of money. He assumes Mylo will help him do it. He wants to make even more money than his Dad."}),i.a.createElement(te,{source:ee.a,alt:"arthur",name:"Arthur",description:"Arthur is also a beast. Actually everyone in this game is a beast. Arthur likes money. He works with Ademia because she makes him money. Life is good."})))}}]),t}(i.a.Component),ne=Object(s.f)(ae),ie=(a(55),a(18)),ce=a.n(ie),re=a(19),oe=a.n(re),se=a(20),le=a.n(se),ue=a(21),pe=a.n(ue),me=a(22),he=a.n(me),de=a(23),be=a.n(de),fe=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(p.a)(this,Object(m.a)(t).call(this,e))).state={previewImage:null},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"onClosePreviewWindow",value:function(){this.setState({previewImage:null})}},{key:"onOpenPreviewWindow",value:function(e){this.setState({previewImage:e})}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"concept-art main"},i.a.createElement("h1",{className:"banner-title-text"},"Concept Art"),i.a.createElement("div",{className:"concept-art-pieces"},i.a.createElement("img",{className:"concept-art-piece",src:ce.a,alt:"main characters",onClick:function(){return e.onOpenPreviewWindow(ce.a)}}),i.a.createElement("img",{className:"concept-art-piece",src:oe.a,alt:"ademia and mylo",onClick:function(){return e.onOpenPreviewWindow(oe.a)}}),i.a.createElement("img",{className:"concept-art-piece",src:le.a,alt:"ademia and mylo",onClick:function(){return e.onOpenPreviewWindow(le.a)}}),i.a.createElement("img",{className:"concept-art-piece",src:pe.a,alt:"ademia and mylo",onClick:function(){return e.onOpenPreviewWindow(pe.a)}}),i.a.createElement("img",{className:"concept-art-piece",src:he.a,alt:"ademia and mylo",onClick:function(){return e.onOpenPreviewWindow(he.a)}}),i.a.createElement("img",{className:"concept-art-piece",src:be.a,alt:"ademia and mylo",onClick:function(){return e.onOpenPreviewWindow(be.a)}})),this.state.previewImage&&i.a.createElement("div",{className:"preview-window__background",onClick:function(){return e.onClosePreviewWindow()}}),this.state.previewImage&&i.a.createElement("div",{className:"preview-window"},i.a.createElement("img",{src:this.state.previewImage,alt:this.state.previewImage,onClick:function(){}}),i.a.createElement(k,{showCloseIcon:!0,onClick:function(){return e.onClosePreviewWindow()}})))}}]),t}(i.a.Component),ge=Object(s.f)(fe);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Oe=i.a.createElement(o.a,null,i.a.createElement(_,null,i.a.createElement(s.c,null,i.a.createElement(s.a,{exact:!0,path:O.path,component:$}),i.a.createElement(s.a,{path:v.path,component:ne}),i.a.createElement(s.a,{path:E.path,component:ge}))));r.a.render(Oe,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[42,1,2]]]);
//# sourceMappingURL=main.9aeca1dd.chunk.js.map