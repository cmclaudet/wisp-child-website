(window.webpackJsonprouting=window.webpackJsonprouting||[]).push([[0],[,,,,,,,,,,,,function(e,t,a){},,,function(e,t,a){e.exports=a.p+"static/media/catherine-picture.a2c060df.jpg"},,,,function(e,t,a){e.exports=a.p+"static/media/main-characters.b14c0866.png"},function(e,t,a){e.exports=a.p+"static/media/ademia-and-mylo.c4b9dd20.png"},function(e,t,a){e.exports=a.p+"static/media/ademia-dialogue.59ab156e.png"},function(e,t,a){e.exports=a.p+"static/media/mylo-tree.0fa0ddf3.png"},function(e,t,a){e.exports=a.p+"static/media/mylo-and-building.641640f1.png"},function(e,t,a){e.exports=a.p+"static/media/buildings.4cf7916d.png"},,,,function(e,t,a){e.exports=a.p+"static/media/email-logo.78abd247.png"},function(e,t,a){e.exports=a.p+"static/media/twitter-logo.2451ce30.png"},,,function(e,t,a){e.exports=a.p+"static/media/title.fd84261b.png"},function(e,t,a){e.exports=a.p+"static/media/nate-shout.2b587d00.png"},function(e,t,a){e.exports=a.p+"static/media/orchard.f07220fe.png"},function(e,t,a){e.exports=a.p+"static/media/village-girl.2912ab69.png"},function(e,t,a){e.exports=a.p+"static/media/mylo-neutral.1aacd2fb.png"},function(e,t,a){e.exports=a.p+"static/media/ademia-neutral.f8419ae1.png"},function(e,t,a){e.exports=a.p+"static/media/nate-neutral.ec91f526.png"},function(e,t,a){e.exports=a.p+"static/media/arthur-neutral.f7d8366e.png"},function(e,t,a){e.exports=a(54)},,,,,function(e,t,a){},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),c=a(27),r=a.n(c),o=a(13),s=a(10),l=(a(12),a(1)),u=a(2),p=a(4),m=a(3),h=a(5),d=(a(45),a(28)),b=a.n(d),f=a(29),g=a.n(f),O="/wisp-child-website",E={HOME:{title:"Home",path:"".concat(O,"/")},CHARACTERS:{title:"Characters",path:"".concat(O,"/characters")},CONCEPT_ART:{title:"Concept Art",path:"".concat(O,"/concept_art")}},v=function(e){function t(){return Object(l.a)(this,t),Object(p.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("button",{className:"corner-button ".concat(this.props.isMainMenu&&"corner-button--is-main-menu"),onClick:function(){return e.props.onClick()}},this.props.showCloseIcon?i.a.createElement("div",{className:"corner-button__close"},"X"):i.a.createElement("div",null,i.a.createElement("div",{className:"corner-button__line"}),i.a.createElement("div",{className:"corner-button__line"}),i.a.createElement("div",{className:"corner-button__line"})))}}]),t}(i.a.Component),C=function(e){function t(){return Object(l.a)(this,t),Object(p.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"contact-info"},this.props.widgets)}}]),t}(i.a.Component),k=function(e){function t(){return Object(l.a)(this,t),Object(p.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return i.a.createElement("a",{href:this.props.link,target:"_blank"},i.a.createElement("img",{src:this.props.source,alt:this.props.alt,className:"contact-widget"}))}}]),t}(i.a.Component),j=function(e){function t(){return Object(l.a)(this,t),Object(p.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"menu"},i.a.createElement("div",{className:"menu__outside",onClick:this.props.onClickOutside}),i.a.createElement(w,{class:"menu__inside",selectedSubPage:this.props.selectedSubPage,onClickSubpageButton:this.props.onClickSubpageButton}))}}]),t}(i.a.Component),y=function(e){function t(){return Object(l.a)(this,t),Object(p.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("div",null,i.a.createElement(w,{class:"menu-desktop",selectedSubPage:this.props.selectedSubPage,onClickSubpageButton:function(t,a){return e.props.onClickSubpageButton(t,a)}}),i.a.createElement("h1",{className:"desktop-title"},"Wisp Child"))}}]),t}(i.a.Component),w=function(e){function t(){return Object(l.a)(this,t),Object(p.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:this.props.class},i.a.createElement(N,{isSelectedSubPage:this.props.selectedSubPage===E.HOME.path,title:E.HOME.title,onClickProp:function(){return e.props.onClickSubpageButton(E.HOME.path)}}),i.a.createElement(N,{isSelectedSubPage:this.props.selectedSubPage===E.CHARACTERS.path,title:E.CHARACTERS.title,onClickProp:function(){return e.props.onClickSubpageButton(E.CHARACTERS.path)}}),i.a.createElement(N,{isSelectedSubPage:this.props.selectedSubPage===E.CONCEPT_ART.path,title:E.CONCEPT_ART.title,onClickProp:function(){return e.props.onClickSubpageButton(E.CONCEPT_ART.path)}}))}}]),t}(i.a.Component),N=function(e){function t(){return Object(l.a)(this,t),Object(p.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return i.a.createElement("button",{className:"subpage-button ".concat(this.props.isSelectedSubPage&&"subpage-button--selected"),onClick:this.props.onClickProp},this.props.title)}}]),t}(i.a.Component),S=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(p.a)(this,Object(m.a)(t).call(this,e))).state={isMenuOpen:!1,selectedSubPage:a.props.location.pathname},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"toggleMenu",value:function(){this.setState({isMenuOpen:!this.state.isMenuOpen})}},{key:"onSubPageButtonClick",value:function(e){this.setState({isMenuOpen:!1,selectedSubPage:e}),this.props.history.push(e)}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"app"},this.state.isMenuOpen&&i.a.createElement(j,{onClickOutside:function(){return e.toggleMenu()},selectedSubPage:this.state.selectedSubPage,onClickSubpageButton:function(t,a){return e.onSubPageButtonClick(t,a)}}),i.a.createElement(v,{isMainMenu:!0,showCloseIcon:this.state.isMenuOpen,onClick:function(){return e.toggleMenu()}}),i.a.createElement(y,{selectedSubPage:this.state.selectedSubPage,onClickSubpageButton:function(t,a){return e.onSubPageButtonClick(t,a)}}),this.props.children,i.a.createElement(C,{widgets:[i.a.createElement(k,{key:"email",link:"mailto:cmclaudet@gmail.com?Subject=Hello",source:b.a,alt:"email logo"}),i.a.createElement(k,{key:"twitter",link:"https://twitter.com/beastgamestudio",source:g.a,alt:"twitter logo"})]}))}}]),t}(i.a.Component),P=Object(s.f)(S),_=(a(51),a(32)),A=a.n(_),M=a(33),x=a.n(M),T=a(34),H=a.n(T),R=a(35),W=a.n(R),B=a(15),I=a.n(B),J=function(e){function t(){return Object(l.a)(this,t),Object(p.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"game-snippet ".concat(this.props.flipped&&"game-snippet--flipped")},i.a.createElement("div",{className:"game-snippet__text"},i.a.createElement("h2",{className:"game-snippet__text__header"},this.props.header),i.a.createElement("p",null,this.props.description)),i.a.createElement("img",{className:"game-snippet__screenshot",src:this.props.source,alt:this.props.alt}))}}]),t}(i.a.Component),D=function(e){function t(){return Object(l.a)(this,t),Object(p.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"creator-profile"},i.a.createElement("img",{className:"creator-profile__picture",src:this.props.source,alt:this.props.alt}),i.a.createElement("h2",null,this.props.name),i.a.createElement("p",{className:"creator-profile__description"},this.props.description))}}]),t}(i.a.Component),L=function(e){function t(){return Object(l.a)(this,t),Object(p.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"main"},i.a.createElement("img",{className:"background",src:A.a,alt:"background"}),i.a.createElement("h1",{className:"title-text"},"Wisp Child is amazing"),i.a.createElement(J,{flipped:!0,header:"Look at Nate",description:"Yes. He is obsessed with apples and cider. He wants to make lots of money. More money than his Dad.",source:x.a,alt:"nate shout"}),i.a.createElement(J,{header:"The orchard is beautiful",description:"The whole game is the most beautiful thing you'll ever see. Just look at those apple trees. omg.",source:H.a,alt:"orchard"}),i.a.createElement(J,{flipped:!0,header:"There are NPCs",description:"You can talk to lots of NPCs. The village is epic because of this. All villagers have something hilarious or interesting or cute to say.",source:W.a,alt:"village girl"}),i.a.createElement("a",{className:"download-button",href:"https://beastgamestudios.itch.io/wisp-child",target:"_blank"},"Download"),i.a.createElement("h1",{className:"title-text"},"Beast Game Studio"),i.a.createElement("div",{className:"creator-profiles"},i.a.createElement(D,{source:I.a,alt:"catherine picture",name:"Catherine Claudet",description:"The programmer of Wisp Child. When working on it, she gets crazy obsessed and spends all her free time doing it. Loves Mylo more than most real people."}),i.a.createElement(D,{source:I.a,alt:"emily picture",name:"Emily Claudet",description:"She is obsessed. And very hungry. And wants to beast the world. Every day. All the time. Millions."}),i.a.createElement(D,{source:I.a,alt:"christopher picture",name:"Christopher Claudet",description:"He is also hungry. And he does beast. So much feasting though. He is the fattest in the family."})))}}]),t}(i.a.Component),z=(a(52),a(36)),Y=a.n(z),G=a(37),X=a.n(G),$=a(38),q=a.n($),F=a(39),K=a.n(F),Q=function(e){function t(){return Object(l.a)(this,t),Object(p.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"creator-profile"},i.a.createElement("h2",null,this.props.name),i.a.createElement("img",{className:"character-profile__picture",src:this.props.source,alt:this.props.alt}),i.a.createElement("p",{className:"character-profile__description"},this.props.description))}}]),t}(i.a.Component),U=function(e){function t(){return Object(l.a)(this,t),Object(p.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"characters main"},i.a.createElement("h1",{className:"banner-title-text"},"Characters"),i.a.createElement("div",{className:"character-profiles"},i.a.createElement(Q,{source:Y.a,alt:"mylo",name:"Mylo",description:"Mylo is adorable. Just look at them. Everyone loves Mylo."}),i.a.createElement(Q,{source:X.a,alt:"ademia",name:"Ademia",description:"Ademia is a beast. She is the coolest character. Ridiculously smart and gets obsessed. She loves Mylo more than life itself."}),i.a.createElement(Q,{source:q.a,alt:"nate",name:"Nate",description:"Nate likes the idea of running a business and making lots of money. He assumes Mylo will help him do it. He wants to make even more money than his Dad."}),i.a.createElement(Q,{source:K.a,alt:"arthur",name:"Arthur",description:"Arthur is also a beast. Actually everyone in this game is a beast. Arthur likes money. He works with Ademia because she makes him money. Life is good."})))}}]),t}(i.a.Component),V=Object(s.f)(U),Z=(a(53),a(19)),ee=a.n(Z),te=a(20),ae=a.n(te),ne=a(21),ie=a.n(ne),ce=a(22),re=a.n(ce),oe=a(23),se=a.n(oe),le=a(24),ue=a.n(le),pe=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(p.a)(this,Object(m.a)(t).call(this,e))).state={previewImage:null},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"onClosePreviewWindow",value:function(){this.setState({previewImage:null})}},{key:"onOpenPreviewWindow",value:function(e){this.setState({previewImage:e})}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"concept-art main"},i.a.createElement("h1",{className:"banner-title-text"},"Concept Art"),i.a.createElement("div",{className:"concept-art-pieces"},i.a.createElement("img",{className:"concept-art-piece",src:ee.a,alt:"main characters",onClick:function(){return e.onOpenPreviewWindow(ee.a)}}),i.a.createElement("img",{className:"concept-art-piece",src:ae.a,alt:"ademia and mylo",onClick:function(){return e.onOpenPreviewWindow(ae.a)}}),i.a.createElement("img",{className:"concept-art-piece",src:ie.a,alt:"ademia and mylo",onClick:function(){return e.onOpenPreviewWindow(ie.a)}}),i.a.createElement("img",{className:"concept-art-piece",src:re.a,alt:"ademia and mylo",onClick:function(){return e.onOpenPreviewWindow(re.a)}}),i.a.createElement("img",{className:"concept-art-piece",src:se.a,alt:"ademia and mylo",onClick:function(){return e.onOpenPreviewWindow(se.a)}}),i.a.createElement("img",{className:"concept-art-piece",src:ue.a,alt:"ademia and mylo",onClick:function(){return e.onOpenPreviewWindow(ue.a)}})),this.state.previewImage&&i.a.createElement("div",{className:"preview-window__background",onClick:function(){return e.onClosePreviewWindow()}}),this.state.previewImage&&i.a.createElement("div",{className:"preview-window"},i.a.createElement("img",{src:this.state.previewImage,alt:this.state.previewImage,onClick:function(){}}),i.a.createElement(v,{showCloseIcon:!0,onClick:function(){return e.onClosePreviewWindow()}})))}}]),t}(i.a.Component),me=Object(s.f)(pe);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var he=i.a.createElement(o.a,{basename:"/"},i.a.createElement(P,null,i.a.createElement(s.c,null,i.a.createElement(s.a,{exact:!0,path:E.HOME.path,component:L}),i.a.createElement(s.a,{path:E.CHARACTERS.path,component:V}),i.a.createElement(s.a,{path:E.CONCEPT_ART.path,component:me}))));r.a.render(he,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[40,1,2]]]);
//# sourceMappingURL=main.83dfc1f8.chunk.js.map