(this["webpackJsonpmercurio-site-new"]=this["webpackJsonpmercurio-site-new"]||[]).push([[0],{17:function(e,a){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADkAAAAoCAYAAABEklK7AAAACXBIWXMAAADbAAAA2wHwUOacAAACWUlEQVRoge2Y4XHaQBCFn/V/B3eAOzAdQCowHUQdhA5CKrA6iN0BqSByB1CBTQfAFkDmmCdGEdKxB4ejaPTN6A+g5d7t7bu9u9vv96iiqimAKYCnyldrADmAFxHJT15sKX+JVNWJEwBgaBjum5sIEdn8NyKZvZ+B728BTERkeZPRReIgkhn8fWFIJ/ShzRlNVPWeS/RSBle+f3MSAKmxBn08qeqo7SJjMPu3Upq52+12p3uIH1eDCwAfpV898KluK86QliLyYQ1eoKou3ohPlU0p9lkvCBHp9si5iNTWn6rOAXz3vPvC/bVRMIWlgSW0KsWuFZwYA726GW0SaGDICXhX1YxmVxZ3z0l65+9CPOIRwLNbWapaWzIWka8ikkbcIr65ZVYYFbOXe1aBFefyz6qaVycxYbqbWDmBxj+ZBAzIZSpnA7JkNmIxZuyj0IQm0oTJMZmNceAgB+ywBhEFFjyWdTmRGR2zyjqgCc9uMNBrGXOlIGGtzWsC+jJ8hIGqp5W2cNB1MB4RyeigZc4azYVN/WcyVNXp0V1pMD9KA2g8WbgaVNVFg8A1n5isrog5PTk009qL5esyvHFHKX4+oot+rQnmJigrthq6W8pYl5jLlsa3qMScBW43b7U3AwwY0u59aTIpTk4eKNR7Tg0sk6214/Hxy+fCHGidsfmY+Q7i7Lx8+3uZQQyRFhcOaQe3xvbR5P4I6F19nD1hsKasM2+9SjFfucQQacXa+1oHb+6lP1Okleh3RW0UGZ1eZFfoRXaFXmRX6EV2hV5kV+hFdoVeZFfovkgAfwA/sO9cd1Ll6wAAAABJRU5ErkJggg=="},18:function(e,a,t){e.exports=t.p+"static/media/pic01.6d762dbc.webp"},19:function(e,a,t){e.exports=t.p+"static/media/pic02.d87ffb89.webp"},20:function(e,a,t){e.exports=t.p+"static/media/pic03.4f026799.webp"},21:function(e,a,t){e.exports=t.p+"static/media/pic04.f203013d.webp"},22:function(e,a,t){e.exports=t(34)},27:function(e,a,t){},34:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(13),o=t.n(r),i=(t(27),t(5)),c=t(3),s=t(4),m=function(){var e=Object(n.useContext)(T);return l.a.createElement(l.a.Fragment,null,l.a.createElement("header",{id:"header",className:"alt"},l.a.createElement("h1",null,l.a.createElement(c.b,{onClick:e,to:"/"},"Home")),l.a.createElement("nav",null,l.a.createElement("a",{href:"#menu",onClick:e},"Menu"))))},u=t(10),d=t.n(u),p=t(16),E=function(){var e=Object(n.useState)(""),a=Object(i.a)(e,2),t=a[0],r=a[1],o=Object(n.useState)(""),c=Object(i.a)(o,2),s=c[0],m=c[1],u=Object(n.useState)(""),E=Object(i.a)(u,2),g=E[0],f=E[1],b=function(){var e=Object(p.a)(d.a.mark((function e(a){var n,l;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.prev=1,n={method:"Post",headers:{"Content-Type":"application/json;charset=utf-8"},body:{name:s,email:t,msg:g}},e.next=5,fetch("https://mercuriomkt.com/api/mail",n);case 5:l=e.sent,console.log(l),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:m(""),r(""),f("");case 15:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(a){return e.apply(this,arguments)}}();return l.a.createElement("form",{action:"#"},l.a.createElement("div",{className:"fields"},l.a.createElement("div",{className:"field"},l.a.createElement("label",{htmlFor:"name"},"Nome"),l.a.createElement("input",{id:"name",type:"text",onChange:function(e){return m(e.target.value)},value:s}))),l.a.createElement("div",{className:"fields"},l.a.createElement("div",{className:"field"},l.a.createElement("label",{htmlFor:"email"},"E-mail"),l.a.createElement("input",{id:"email",type:"email",onChange:function(e){return r(e.target.value)},value:t}))),l.a.createElement("div",{className:"fields"},l.a.createElement("div",{className:"field"},l.a.createElement("label",{htmlFor:"msg"},"Sua mensagem"),l.a.createElement("textarea",{id:"msg",rows:"4",onChange:function(e){return f(e.target.value)},value:g}))),l.a.createElement("ul",{className:"actions"},l.a.createElement("li",null,l.a.createElement("input",{type:"submit",value:"Enviar mensagem",onClick:b}))))},g=function(){return l.a.createElement("section",{id:"footer"},l.a.createElement("div",{className:"inner"},l.a.createElement("h2",{className:"major"},"Manda um al\xf4"),l.a.createElement("p",null,"Utilize o formul\xe1rio abaixo para nos enviar uma mensagem, tirar todas as suas d\xfavidas e receber uma consultoria gratuita para a sua empresa. T\xe1 esperando o que?"),l.a.createElement(E,null),l.a.createElement("ul",{className:"contact"},l.a.createElement("li",{className:"fa-home"},"Mercurio Marketing ",l.a.createElement("br",null),"Av. Cassiano Ricardo, n\xba 601 - Sala 172 ",l.a.createElement("br",null),"17\xba andar - Ed. The One ",l.a.createElement("br",null),"Jardim Aquarius. S\xe3o Jos\xe9 dos Campos - SP"),l.a.createElement("li",{className:"fa-phone"},"(12) 99603-2167"),l.a.createElement("li",{className:"fa-envelope"},l.a.createElement("a",{href:"mailto:atendimento@mercuriomkt.com"},"atendimento@mercuriomkt.com")),l.a.createElement("li",{className:"fa-linkedin"},l.a.createElement("a",{href:"https://www.linkedin.com/company/mercurio-marketing",target:"_blank",rel:"noopener noreferrer"},"/mercurio-marketing")),l.a.createElement("li",{className:"fa-facebook"},l.a.createElement("a",{href:"https://www.facebook.com/mercuriomkt",target:"_blank",rel:"noopener noreferrer"},"/mercuriomkt")),l.a.createElement("li",{className:"fa-instagram"},l.a.createElement("a",{href:"https://www.instagram.com/mercuriomkt",target:"_blank",rel:"noopener noreferrer"},"@mercuriomkt"))),l.a.createElement("ul",{className:"copyright"},l.a.createElement("li",null,"Mercurio Digital - Todos os direitos reservados \xa9 2016-2020"))))},f=t(17),b=t.n(f),v=function(){return l.a.createElement("section",{id:"banner"},l.a.createElement("div",{className:"inner"},l.a.createElement("div",{className:"logo"},l.a.createElement("img",{src:b.a,alt:"logo"})),l.a.createElement("h2",null,"Mercurio Digital"),l.a.createElement("p",null,"Explore um universo de possibilidades")))},h=function(e){return l.a.createElement("div",{id:"page-wrapper"},l.a.createElement(m,null),e.home?l.a.createElement(v,null):null,l.a.createElement("section",{id:"wrapper"},e.children),l.a.createElement(g,null))},k=function(e){var a=e.styleNumber,t=e.alt,n=e.img,r=e.title,o=e.children,i=e.link,s=e.linkText,m=e.spotlight;return l.a.createElement("section",{className:"wrapper ".concat(m?"spotlight":null," style").concat(a," ").concat(t?"alt":null)},l.a.createElement("div",{className:"inner"},l.a.createElement(c.b,{to:"/",className:"image"},n?l.a.createElement("img",{src:n,alt:"Link para home"}):"Retornar a home"),l.a.createElement("div",{className:"content"},l.a.createElement("h2",{className:"major"},r),o,i?l.a.createElement(c.b,{to:i,className:"special"},s):null)))},A=function(e){var a=e.icon,t=e.title,n=e.children;return l.a.createElement("article",null,l.a.createElement("div",{className:"logo"},l.a.createElement("span",{className:"icon fa-".concat(a)})),l.a.createElement("h3",{className:"major"},t),l.a.createElement("p",null,n))},N=function(){return l.a.createElement("section",{className:"features"},l.a.createElement(A,{title:"M\xeddias Sociais",icon:"comment"},"Se tem uma coisa que a Mercurio entende s\xe3o as m\xeddias sociais. Com a gente, o seu neg\xf3cio ganha presen\xe7a e relev\xe2ncia no mundo online."),l.a.createElement(A,{title:"Design Gr\xe1fico e Editorial",icon:"pencil"},"A beleza \xe9 a nossa paix\xe3o. Aqui, o design vai al\xe9m do logotipo. Envolve pesquisa, planejamento e o objetivo da entrega \xe9 sempre o mesmo: levar sua melhor imagem ao consumidor final."),l.a.createElement(A,{title:"Sistemas de Informa\xe7\xe3o",icon:"laptop"},"A Mercurio entrou de cabe\xe7a no mundo digital, e agora n\xf3s oferecemos a op\xe7\xe3o de informatizar totalmente a sua empresa com o desenvolvimento de sistemas e aplica\xe7\xf5es web, mobile e desktop."),l.a.createElement(A,{title:"Audiovisual",icon:"camera-retro"},"A forma como seu produto \xe9 apresentado ao cliente interfere significativamente na decis\xe3o de compra. Valorize o que voc\xea faz de melhor com imagens de alta qualidade."))},w=t(18),C=t.n(w),y=t(19),x=t.n(y),j=t(20),S=t.n(j),M=function(){return l.a.createElement(h,{home:!0},l.a.createElement(k,{img:C.a,styleNumber:"1",title:"Marketing Digital",link:"/sobre-nos",linkText:"Saiba mais",spotlight:!0},l.a.createElement("p",null,"A Mercurio se destaca de outras empresas de marketing digital pela qualidade de seus servi\xe7os. Mais do que gerenciar m\xeddias sociais, n\xf3s trabalhamos de forma hol\xedstica com todos os canais online da empresa, elaborando estrat\xe9gias e planejando a melhor forma de alcan\xe7ar o seu cliente. N\xf3s contamos com profissionais das \xe1reas de marketing, comunica\xe7\xe3o e computa\xe7\xe3o, que garantem o sucesso dos servi\xe7os prestados em diversos aspectos do mundo digital.")),l.a.createElement(k,{img:x.a,styleNumber:"2",title:"Criatividade Digital",spotlight:!0,alt:!0},l.a.createElement("p",null,"A Mercurio j\xe1 atendeu mais de 70 clientes, prestando servi\xe7os que incluem a cria\xe7\xe3o de logotipos e identidade visual, gest\xe3o de m\xeddias sociais como o Facebook e o Instagram, desenvolvimento de sites e sistemas digitais, entre outros.")),l.a.createElement(k,{img:S.a,styleNumber:"3",title:"Informa\xe7\xe3o e Entretenimento",link:"/blog",linkText:"Ir para o blog",spotlight:!0},l.a.createElement("p",null,"Aproveite e fique por dentro de todas as novidades da comunica\xe7\xe3o, marketing e desenvolvimento. Visite o nosso blog.")),l.a.createElement(k,{title:"Servi\xe7os",styleNumber:"2",alt:!0},l.a.createElement("p",null,"A Mercurio oferece uma gama de servi\xe7os de Marketing Digital. Conhe\xe7a alguns dos principais!"),l.a.createElement(N,null)))},q=function(e){var a=e.children,t=e.text;return l.a.createElement("div",{className:"wrapper"},l.a.createElement("div",{className:"inner"},t,l.a.createElement("section",{className:"features"},a)))},B=function(e){return l.a.createElement("header",null,l.a.createElement("div",{className:"inner"},l.a.createElement("h2",null,e.children)))},O=function(e){var a=e.link,t=e.icon,n=e.label;return l.a.createElement("li",null,l.a.createElement("a",{href:a,target:"_blank",rel:"noopener noreferrer",className:"icon fa-".concat(t)},l.a.createElement("span",{className:"label"},n)))},F=function(e){var a=e.link,t=e.image,n=e.category,r=e.title,o=e.description,i=e.social.map((function(e,a){return l.a.createElement(O,{link:e.link,icon:e.icon,label:e.label,key:a})}));return l.a.createElement("article",null,l.a.createElement("a",{href:a,className:"image"},l.a.createElement("img",{src:t,alt:"banner"})),l.a.createElement("h6",null,n),l.a.createElement("h3",{className:"major"},r),l.a.createElement("p",null,o),l.a.createElement("ul",{className:"icons"},i))},V=t(21),W=[{link:"https://oftalmoguara.com.br/",title:"Oftalmo Guar\xe1",category:"Marketing Digital",image:t.n(V).a,description:"Nosso trabalho com a cl\xednica de oftalmologia Oftalmo Guar\xe1 consistiu na cria\xe7\xe3o de um website e uma p\xe1gina do facebook, na qual s\xe3o produzidos conte\xfados relevantes para a marca e seus clientes.",social:[{label:"Site",icon:"globe",link:"https://oftalmoguara.com.br/"},{label:"Facebook",icon:"facebook",link:"https://www.facebook.com/oftalmoguara"}]}],I=function(){var e=W.map((function(e){return l.a.createElement(F,{link:e.link,title:e.title,image:e.image,social:e.social,description:e.description,key:e.title})})),a=l.a.createElement("p",null,"A Mercurio surgiu em 2016, na cidade de Campos do Jord\xe3o. Atualmente localizada em S\xe3o Jos\xe9 dos Campos, a nossa empresa cresceu e hoje faz parte da",l.a.createElement("a",{href:"https://www.proisolucoes.com.br/"}," Proi Solu\xe7\xf5es"),", onde buscamos nos tornar refer\xeancia em marketing e comunica\xe7\xe3o digital no Vale do Para\xedba, oferecendo servi\xe7os globais aliados a uma estrat\xe9gia de neg\xf3cios inteligente. ",l.a.createElement("br",null),l.a.createElement("br",null),"Conhe\xe7a alguns de nossos projetos.");return l.a.createElement(h,null,l.a.createElement(B,null,"Sobre n\xf3s"),l.a.createElement(q,{text:a},e))},R=function(){var e=Object(n.useContext)(T),a=function(){e(),window.scrollTo(0,0)};return l.a.createElement("nav",{id:"menu"},l.a.createElement("div",{className:"inner"},l.a.createElement("h2",null,"Menu"),l.a.createElement("ul",{className:"links"},l.a.createElement("li",null,l.a.createElement(c.b,{to:"/",onClick:a},"Home")),l.a.createElement("li",null,l.a.createElement(c.b,{to:"/sobre-nos",onClick:a},"Sobre n\xf3s"))),l.a.createElement("button",{style:{boxShadow:"none",backgroundPosition:"50%"},className:"close",onClick:e},"Fechar")))},T=l.a.createContext();o.a.render(l.a.createElement((function(){var e=Object(n.useState)(!1),a=Object(i.a)(e,2),t=a[0],r=a[1],o=document.querySelector("body").classList;return Object(n.useEffect)((function(){t?o.add("is-menu-visible"):o.remove("is-menu-visible")}),[t,o]),Object(n.useEffect)((function(){var e=setTimeout((function(){o.remove("is-preload")}),100);return function(){return clearTimeout(e)}}),[o]),l.a.createElement(c.a,null,l.a.createElement(T.Provider,{value:function(){return r(!t)}},l.a.createElement(s.c,null,l.a.createElement(s.a,{exact:!0,path:"/"},l.a.createElement(M,null)),l.a.createElement(s.a,{path:"/sobre-nos"},l.a.createElement(I,null))),l.a.createElement(R,null)))}),null),document.querySelector("#root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.2cbd821b.chunk.js.map