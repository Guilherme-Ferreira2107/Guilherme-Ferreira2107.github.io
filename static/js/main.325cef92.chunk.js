(this.webpackJsonpsmallcaps_web=this.webpackJsonpsmallcaps_web||[]).push([[0],{17:function(e,t,a){},25:function(e,t,a){e.exports=a.p+"static/media/logoC.de23cd38.png"},41:function(e,t,a){e.exports=a(64)},64:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(28),l=a.n(o),c=a(6),s=a(7),u=a(9),i=a(8),d=a(10),m=(a(17),a(3)),p=a(25),E=a.n(p),h=a(18),f=a.n(h),b=a(15),O=(a(60),function(e){return{type:"MODIFICA_BANCA",payload:e}}),v=function(e){return{type:"MODIFICA_NOME",payload:e}},F=function(e){return{type:"MODIFICA_SENHA",payload:e}},y=function(e){return{type:"MODIFICA_EMAIL",payload:e}},R=function(e){e({type:"CADASTRO_USUARIO_SUCESSO"})},C=function(e,t){return t({type:"CADASTRO_USUARIO_ERRO",payload:e.message})},j=function(e){e({type:"AUTENTICA_USUARIO_SUCESSO"})},A=function(e,t){t({type:"AUTENTICA_USUARIO_ERRO",payload:e.message})},g=a(19),x=a(4),k=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(i.a)(t).call(this,e))).state={nome:"",email:"",senha:"",redirect:""},a.autenticaUsuario=a.autenticaUsuario.bind(Object(m.a)(a)),a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"autenticaUsuario",value:function(){var e=this.state,t=e.email,a=e.senha;this.props.autenticaUsuario({email:t,senha:a})}},{key:"render",value:function(){var e=this;return n.a.createElement("div",{class:"base login"},n.a.createElement("table",{class:"popUpLogin"},n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement("img",{class:"logo",src:E.a}))),n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement("h1",null,"\xc1rea do Aluno"))),n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement("p",null,"Endere\xe7o de E-mail:"),n.a.createElement("input",{class:"campoLogon",onChange:function(t){e.setState({email:t.target.value})}}))),n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement("p",null,"Senha:"),n.a.createElement("input",{class:"campoLogon",type:"password",onChange:function(t){e.setState({senha:t.target.value})}}))),n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement("input",{class:"botaoAction",type:"submit",value:"Entrar",onClick:this.autenticaUsuario}),n.a.createElement("h5",{class:"erro"},this.props.erroLogin," "),"Principal"==this.props.redirect?n.a.createElement(g.a,{to:"/Principal"}," ",console.log("Redireciona p Principal")):n.a.createElement(g.a,{to:"/Login"}," ",console.log("redireciona p Login")))),n.a.createElement("tr",null,n.a.createElement("td",{class:"entrarCampo"},"Ainda n\xe3o tem registro? ",n.a.createElement(x.b,{to:"/Cadastro"}," ",n.a.createElement("h3",null,"Registre-se Agora!"))))))}}]),t}(n.a.Component),S=Object(b.b)((function(e){return{email:e.CalculosReducers.email,senha:e.CalculosReducers.senha,erroLogin:e.CalculosReducers.erroLogin,redirect:e.CalculosReducers.redirect}}),{modificaEmail:y,modificaSenha:F,autenticaUsuario:function(e){var t=e.email,a=e.senha;return function(e){f.a.auth().signInWithEmailAndPassword(t,a).then((function(t){return j(e)})).catch((function(t){return A(t,e)}))}}})(k),I=a(34),U=a.n(I),$=a(39),L=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(i.a)(t).call(this,e))).state={nome:"",email:"",senha:"",redirect:""},a.noReload=a.noReload.bind(Object(m.a)(a)),a.cadastrarUsuario=a.cadastrarUsuario.bind(Object(m.a)(a)),a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"cadastrarUsuario",value:function(){var e=Object($.a)(U.a.mark((function e(){var t,a,r,n;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.state,a=t.nome,r=t.email,n=t.senha,this.setState({nome:this.props.nome}),e.next=4,this.props.cadastraUsuario({nome:a,email:r,senha:n});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"noReload",value:function(e){e.preventDefault(this)}},{key:"render",value:function(){var e=this;return n.a.createElement("div",{class:"base login"},n.a.createElement("form",{onSubmit:this.noReload},n.a.createElement("table",{class:"popUpLogin"},n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement("img",{class:"logo",src:E.a}))),n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement("h1",null,"Cadastre-se"))),n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement("p",null,"Nome:"),n.a.createElement("input",{class:"campoLogon",onChange:function(t){e.setState({nome:t.target.value})}}))),n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement("p",null,"Endere\xe7o de E-mail:"),n.a.createElement("input",{class:"campoLogon",onChange:function(t){e.setState({email:t.target.value})}}))),n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement("p",null,"Senha:"),n.a.createElement("input",{class:"campoLogon",type:"password",onChange:function(t){e.setState({senha:t.target.value})}}))),n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement("input",{class:"botaoAction",type:"submit",value:"Cadastrar",onClick:this.cadastrarUsuario}),n.a.createElement("h5",{class:"erro"},this.props.erroCadastro," "),"Login"==this.props.redirect?n.a.createElement(g.a,{to:"/CadastroSucesso"}," ",console.log("Redireciona p CadastroSucesso")):n.a.createElement(g.a,{to:"/Cadastro"}," ",console.log("redireciona p Cadastro")))))))}}]),t}(r.Component),_=Object(b.b)((function(e){return{nome:e.CalculosReducers.nome,email:e.CalculosReducers.email,senha:e.CalculosReducers.senha,erroCadastro:e.CalculosReducers.erroCadastro,redirect:e.CalculosReducers.redirect}}),{modificaEmail:y,modificaNome:v,modificaSenha:F,cadastraUsuario:function(e){e.nome;var t=e.email,a=e.senha;return function(e){f.a.auth().createUserWithEmailAndPassword(t,a).then((function(t){R(e)})).catch((function(t){return C(t,e)}))}}})(L),B=a(14),M=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement(x.a,null,n.a.createElement("div",null,n.a.createElement("h3",null,"Seja bem vindo ",this.props.nome,", selecione seu gerenciamento:")," ",n.a.createElement("br",null),n.a.createElement("div",null,n.a.createElement("table",null,n.a.createElement("tr",null,n.a.createElement("td",{class:"menu botaoMenu"},n.a.createElement(x.b,{exact:!0,to:"/"},"Soros")),n.a.createElement("td",{class:"menu botaoMenu"},n.a.createElement(x.b,{to:"/martingale"},"Martingale")),n.a.createElement("td",{class:"menu botaoMenu"},n.a.createElement(x.b,{to:"/sorosGale"},"SorosGale"))))),n.a.createElement("hr",null),n.a.createElement(g.d,null,n.a.createElement(g.b,{exact:!0,path:"/"},n.a.createElement(T,null)),n.a.createElement(g.b,{path:"/martingale"},n.a.createElement(N,null)),n.a.createElement(g.b,{path:"/sorosGale"},n.a.createElement(D,null))))))}}]),t}(n.a.Component),N=function(e){function t(e){var a,r;return Object(c.a)(this,t),(r=Object(u.a)(this,Object(i.a)(t).call(this,e))).state=(a={stopLoss:e.stopLoss,payout:98,QtdaMartingale:0,ordem:50,ordemA2:0,ordemA3:0,ordemA4:0,ordemA5:0,ordemB:0,ordemB2:0,ordemB3:0,ordemB4:0,ordemB5:0},Object(B.a)(a,"ordemB",0),Object(B.a)(a,"ordemB2",0),Object(B.a)(a,"ordemB3",0),Object(B.a)(a,"ordemB4",0),Object(B.a)(a,"ordemB5",0),Object(B.a)(a,"retorno",e.retorno),Object(B.a)(a,"retorno2",0),Object(B.a)(a,"retorno3",0),Object(B.a)(a,"retorno4",0),Object(B.a)(a,"retorno5",0),a),r.noReload=r.noReload.bind(Object(m.a)(r)),r.zerar=r.zerar.bind(Object(m.a)(r)),r}return Object(d.a)(t,e),Object(s.a)(t,[{key:"noReload",value:function(e){e.preventDefault(this)}},{key:"zerar",value:function(){this.setState({payout:0*this.state.payout,ordem:0*this.state.ordem})}},{key:"retorno",value:function(){if(-1!==((e=parseFloat(this.ordemA())*(this.state.payout/100)+parseFloat(this.state.ordem))+"").indexOf("."))var e=e.toFixed(2);return e=parseFloat(e)}},{key:"retorno2",value:function(){if(-1!==((e=parseFloat(this.ordemA2())*(this.state.payout/100)+parseFloat(this.retorno()))+"").indexOf("."))var e=e.toFixed(2);return e=parseFloat(e)}},{key:"retorno3",value:function(){if(-1!==((e=parseFloat(this.ordemA3())*(this.state.payout/100)+parseFloat(this.retorno2()))+"").indexOf("."))var e=e.toFixed(2);return e=parseFloat(e)}},{key:"retorno4",value:function(){if(-1!==((e=parseFloat(this.ordemA4())*(this.state.payout/100)+parseFloat(this.retorno3()))+"").indexOf("."))var e=e.toFixed(2);return e=parseFloat(e)}},{key:"retorno5",value:function(){if(-1!==((e=parseFloat(this.ordemA5())*(this.state.payout/100)+parseFloat(this.retorno4()))+"").indexOf("."))var e=e.toFixed(2);return e=parseFloat(e)}},{key:"ordemA",value:function(){if(-1!==((e=parseFloat(this.state.ordem)*parseFloat(.1287))+"").indexOf("."))var e=e.toFixed(2);return e=parseFloat(e)}},{key:"ordemA2",value:function(){if(-1!==((e=parseFloat(this.retorno())*parseFloat(.1287))+"").indexOf("."))var e=e.toFixed(2);return e=parseFloat(e)}},{key:"ordemA3",value:function(){if(-1!==((e=parseFloat(this.retorno2())*parseFloat(.1287))+"").indexOf("."))var e=e.toFixed(2);return e=parseFloat(e)}},{key:"ordemA4",value:function(){if(-1!==((e=parseFloat(this.retorno3())*parseFloat(.1287))+"").indexOf("."))var e=e.toFixed(2);return e=parseFloat(e)}},{key:"ordemA5",value:function(){if(-1!==((e=parseFloat(this.retorno4())*parseFloat(.1287))+"").indexOf("."))var e=e.toFixed(2);return e=parseFloat(e)}},{key:"ordemB",value:function(){if(-1!==((e=parseFloat(this.state.ordem)*parseFloat(.2767))+"").indexOf("."))var e=e.toFixed(2);return e=parseFloat(e)}},{key:"ordemB2",value:function(){if(-1!==((e=parseFloat(this.retorno())*parseFloat(.2767))+"").indexOf("."))var e=e.toFixed(2);return e=parseFloat(e)}},{key:"ordemB3",value:function(){if(-1!==((e=parseFloat(this.retorno2())*parseFloat(.2767))+"").indexOf("."))var e=e.toFixed(2);return e=parseFloat(e)}},{key:"ordemB4",value:function(){if(-1!==((e=parseFloat(this.retorno3())*parseFloat(.2767))+"").indexOf("."))var e=e.toFixed(2);return e=parseFloat(e)}},{key:"ordemB5",value:function(){if(-1!==((e=parseFloat(this.retorno4())*parseFloat(.2767))+"").indexOf("."))var e=e.toFixed(2);return e=parseFloat(e)}},{key:"ordemC",value:function(){if(-1!==((e=parseFloat(this.state.ordem)*parseFloat(.5947))+"").indexOf("."))var e=e.toFixed(2);return e=parseFloat(e)}},{key:"ordemC2",value:function(){if(-1!==((e=parseFloat(this.retorno())*parseFloat(.5947))+"").indexOf("."))var e=e.toFixed(2);return e=parseFloat(e)}},{key:"ordemC3",value:function(){if(-1!==((e=parseFloat(this.retorno2())*parseFloat(.5947))+"").indexOf("."))var e=e.toFixed(2);return e=parseFloat(e)}},{key:"ordemC4",value:function(){if(-1!==((e=parseFloat(this.retorno3())*parseFloat(.5947))+"").indexOf("."))var e=e.toFixed(2);return e=parseFloat(e)}},{key:"ordemC5",value:function(){if(-1!==((e=parseFloat(this.retorno4())*parseFloat(.5947))+"").indexOf("."))var e=e.toFixed(2);return e=parseFloat(e)}},{key:"render",value:function(){var e=this;return n.a.createElement("div",null,n.a.createElement("form",{onSubmit:this.noReload},n.a.createElement("table",null,n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement("h3",null,"Informe o valor de seu StopLoss:"),n.a.createElement("input",{value:this.state.ordem,type:"number",onChange:function(t){e.setState({ordem:t.target.value})}}),n.a.createElement("h4",null," Ordem: R$",this.state.ordem," ")),n.a.createElement("td",null,n.a.createElement("h3",null,"Informe o valor do payout:"),n.a.createElement("input",{value:this.state.payout,type:"number",onChange:function(t){e.setState({payout:t.target.value})}}),n.a.createElement("h4",null," Payout: ",this.state.payout,"% ")))),n.a.createElement("h3",null,"Resultado:"),n.a.createElement("table",{class:"tableResultado"},n.a.createElement("tr",null,n.a.createElement("td",null),n.a.createElement("td",null,"1\xb0 Ordem"),n.a.createElement("td",null,"2\xb0 Ordem"),n.a.createElement("td",null,"3\xb0 Ordem"),n.a.createElement("td",null,"Retorno")),n.a.createElement("tr",null,n.a.createElement("td",null,"1\xb0 N\xedvel"),n.a.createElement("td",null,"R$ ",this.ordemA()),n.a.createElement("td",null,"R$ ",this.ordemB()),n.a.createElement("td",null,"R$ ",this.ordemC()),n.a.createElement("td",null,"R$",this.retorno())),n.a.createElement("tr",null,n.a.createElement("td",null,"2\xb0 N\xedvel"),n.a.createElement("td",null,"R$ ",this.ordemA2()),n.a.createElement("td",null,"R$ ",this.ordemB2()),n.a.createElement("td",null,"R$ ",this.ordemC2()),n.a.createElement("td",null,"R$ ",this.retorno2())),n.a.createElement("tr",null,n.a.createElement("td",null,"3\xb0 N\xedvel"),n.a.createElement("td",null,"R$ ",this.ordemA3()),n.a.createElement("td",null,"R$ ",this.ordemB3()),n.a.createElement("td",null,"R$ ",this.ordemC3()),n.a.createElement("td",null,"R$",this.retorno3())),n.a.createElement("tr",null,n.a.createElement("td",null,"4\xb0 N\xedvel"),n.a.createElement("td",null,"R$ ",this.ordemA4()),n.a.createElement("td",null,"R$ ",this.ordemB4()),n.a.createElement("td",null,"R$ ",this.ordemC4()),n.a.createElement("td",null,"R$ ",this.retorno4())),n.a.createElement("tr",null,n.a.createElement("td",null,"5\xb0 N\xedvel"),n.a.createElement("td",null,"R$ ",this.ordemA5()),n.a.createElement("td",null,"R$ ",this.ordemB5()),n.a.createElement("td",null,"R$ ",this.ordemC5()),n.a.createElement("td",null,"R$ ",this.retorno5()))),n.a.createElement("button",{type:"button",onClick:this.zerar},"Zerar")))}}]),t}(n.a.Component),D=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(i.a)(t).call(this,e))).state={stopLoss:e.stopLoss,payout:98,QtdaMartingale:0,ordem:50,ordemA2:e.ordem2,ordemA3:e.ordem3,ordemA4:e.ordem4,ordemA5:e.ordem5,retorno:e.retorno,retorno2:e.retorn2,retorno3:e.retorn3,retorno4:e.retorn4,retorno5:e.retorno5},a.noReload=a.noReload.bind(Object(m.a)(a)),a.ordemA2=a.ordemA2.bind(Object(m.a)(a)),a.ordemA3=a.ordemA3.bind(Object(m.a)(a)),a.ordemA4=a.ordemA4.bind(Object(m.a)(a)),a.ordemA5=a.ordemA5.bind(Object(m.a)(a)),a.retorno=a.retorno.bind(Object(m.a)(a)),a.retorno2=a.retorno2.bind(Object(m.a)(a)),a.retorno3=a.retorno3.bind(Object(m.a)(a)),a.retorno4=a.retorno4.bind(Object(m.a)(a)),a.retorno5=a.retorno5.bind(Object(m.a)(a)),a.zerar=a.zerar.bind(Object(m.a)(a)),a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"noReload",value:function(e){e.preventDefault(this)}},{key:"zerar",value:function(){this.setState({payout:0*this.state.payout,ordem:0*this.state.ordem})}},{key:"retorno",value:function(){if(-1!==((e=parseFloat(this.ordemA())*(this.state.payout/100)+parseFloat(this.state.ordem))+"").indexOf("."))var e=e.toFixed(2);return e=parseFloat(e)}},{key:"retorno2",value:function(){if(-1!==((e=parseFloat(this.ordemA2())*(this.state.payout/100)+parseFloat(this.retorno()))+"").indexOf("."))var e=e.toFixed(2);return e=parseFloat(e)}},{key:"retorno3",value:function(){if(-1!==((e=parseFloat(this.ordemA3())*(this.state.payout/100)+parseFloat(this.retorno2()))+"").indexOf("."))var e=e.toFixed(2);return e=parseFloat(e)}},{key:"retorno4",value:function(){if(-1!==((e=parseFloat(this.ordemA4())*(this.state.payout/100)+parseFloat(this.retorno3()))+"").indexOf("."))var e=e.toFixed(2);return e=parseFloat(e)}},{key:"retorno5",value:function(){if(-1!==((e=parseFloat(this.ordemA5())*(this.state.payout/100)+parseFloat(this.retorno4()))+"").indexOf("."))var e=e.toFixed(2);return e=parseFloat(e)}},{key:"ordemA",value:function(){if(-1!==((e=parseFloat(this.state.ordem)*parseFloat(.33))+"").indexOf("."))var e=e.toFixed(2);return e=parseFloat(e)}},{key:"ordemA2",value:function(){if(-1!==((e=parseFloat(this.retorno())*parseFloat(.33))+"").indexOf("."))var e=e.toFixed(2);return e=parseFloat(e)}},{key:"ordemA3",value:function(){if(-1!==((e=parseFloat(this.retorno2())*parseFloat(.33))+"").indexOf("."))var e=e.toFixed(2);return e=parseFloat(e)}},{key:"ordemA4",value:function(){if(-1!==((e=parseFloat(this.retorno3())*parseFloat(.33))+"").indexOf("."))var e=e.toFixed(2);return e=parseFloat(e)}},{key:"ordemA5",value:function(){if(-1!==((e=parseFloat(this.retorno4())*parseFloat(.33))+"").indexOf("."))var e=e.toFixed(2);return e=parseFloat(e)}},{key:"ordemB",value:function(){if(-1!==((e=parseFloat(this.state.ordem)*parseFloat(.67))+"").indexOf("."))var e=e.toFixed(2);return e=parseFloat(e)}},{key:"ordemB2",value:function(){if(-1!==((e=parseFloat(this.retorno())*parseFloat(.67))+"").indexOf("."))var e=e.toFixed(2);return e=parseFloat(e)}},{key:"ordemB3",value:function(){if(-1!==((e=parseFloat(this.retorno2())*parseFloat(.67))+"").indexOf("."))var e=e.toFixed(2);return e=parseFloat(e)}},{key:"ordemB4",value:function(){if(-1!==((e=parseFloat(this.retorno3())*parseFloat(.67))+"").indexOf("."))var e=e.toFixed(2);return e=parseFloat(e)}},{key:"ordemB5",value:function(){if(-1!==((e=parseFloat(this.retorno4())*parseFloat(.67))+"").indexOf("."))var e=e.toFixed(2);return e=parseFloat(e)}},{key:"render",value:function(){var e=this;return n.a.createElement("div",null,n.a.createElement("form",{onSubmit:this.noReload},n.a.createElement("table",null,n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement("h3",null,"Informe o valor de seu StopLoss:"),n.a.createElement("input",{value:this.state.ordem,type:"number",onChange:function(t){e.setState({ordem:t.target.value})}}),n.a.createElement("h4",null," Ordem: R$",this.state.ordem," ")),n.a.createElement("td",null,n.a.createElement("h3",null,"Informe o valor do payout:"),n.a.createElement("input",{value:this.state.payout,type:"number",onChange:function(t){e.setState({payout:t.target.value})}}),n.a.createElement("h4",null," Payout: ",this.state.payout,"% ")))),n.a.createElement("h3",null,"Resultado:"),n.a.createElement("table",{class:"tableResultado"},n.a.createElement("tr",null,n.a.createElement("td",null),n.a.createElement("td",null,"1\xb0 Ordem"),n.a.createElement("td",null,"2\xb0 Ordem"),n.a.createElement("td",null,"Retorno")),n.a.createElement("tr",null,n.a.createElement("td",null,"1\xb0 N\xedvel"),n.a.createElement("td",null,"R$ ",this.ordemA()),n.a.createElement("td",null,"R$ ",this.ordemB()),n.a.createElement("td",null,"R$ ",this.retorno())),n.a.createElement("tr",null,n.a.createElement("td",null,"2\xb0 N\xedvel"),n.a.createElement("td",null,"R$ ",this.ordemA2()),n.a.createElement("td",null,"R$ ",this.ordemB2()),n.a.createElement("td",null,"R$ ",this.retorno2())),n.a.createElement("tr",null,n.a.createElement("td",null,"3\xb0 N\xedvel"),n.a.createElement("td",null,"R$ ",this.ordemA3()),n.a.createElement("td",null,"R$ ",this.ordemB3()),n.a.createElement("td",null,"R$ ",this.retorno3())),n.a.createElement("tr",null,n.a.createElement("td",null,"4\xb0 N\xedvel"),n.a.createElement("td",null,"R$ ",this.ordemA4()),n.a.createElement("td",null,"R$ ",this.ordemB4()),n.a.createElement("td",null,"R$ ",this.retorno4())),n.a.createElement("tr",null,n.a.createElement("td",null,"5\xb0 N\xedvel"),n.a.createElement("td",null,"R$ ",this.ordemA5()),n.a.createElement("td",null,"R$ ",this.ordemB5()),n.a.createElement("td",null,"R$ ",this.retorno5()))),n.a.createElement("button",{type:"button",onClick:this.zerar},"Zerar")))}}]),t}(n.a.Component),T=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(i.a)(t).call(this,e))).state={stopLoss:e.stopLoss,payout:98,QtdaMartingale:0,ordem:50,ordem2:e.ordem2,ordem3:e.ordem3,ordem4:e.ordem4,ordem5:e.ordem5,retorno:e.retorno,retorno2:e.retorn2,retorno3:e.retorn3,retorno4:e.retorn4,retorno5:e.retorno5},a.noReload=a.noReload.bind(Object(m.a)(a)),a.ordem2=a.ordem2.bind(Object(m.a)(a)),a.ordem3=a.ordem3.bind(Object(m.a)(a)),a.ordem4=a.ordem4.bind(Object(m.a)(a)),a.ordem5=a.ordem5.bind(Object(m.a)(a)),a.retorno=a.retorno.bind(Object(m.a)(a)),a.retorno2=a.retorno2.bind(Object(m.a)(a)),a.retorno3=a.retorno3.bind(Object(m.a)(a)),a.retorno4=a.retorno4.bind(Object(m.a)(a)),a.retorno5=a.retorno5.bind(Object(m.a)(a)),a.zerar=a.zerar.bind(Object(m.a)(a)),a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"noReload",value:function(e){e.preventDefault(this)}},{key:"zerar",value:function(){this.setState({payout:0*this.state.payout,ordem:0*this.state.ordem})}},{key:"retorno",value:function(){if(-1!==((e=this.state.ordem*(this.state.payout/100))+"").indexOf("."))var e=e.toFixed(2);return e=parseFloat(e)}},{key:"retorno2",value:function(){if(-1!==((e=parseFloat(this.ordem2())*(this.state.payout/100))+"").indexOf("."))var e=e.toFixed(2);return e=parseFloat(e)}},{key:"retorno3",value:function(){if(-1!==((e=parseFloat(this.ordem3())*(this.state.payout/100))+"").indexOf("."))var e=e.toFixed(2);return e=parseFloat(e)}},{key:"retorno4",value:function(){if(-1!==((e=parseFloat(this.ordem4())*(this.state.payout/100))+"").indexOf("."))var e=e.toFixed(2);return e=parseFloat(e)}},{key:"retorno5",value:function(){if(-1!==((e=parseFloat(this.ordem5())*(this.state.payout/100))+"").indexOf("."))var e=e.toFixed(2);return e=parseFloat(e)}},{key:"ordem2",value:function(){if(-1!==((e=parseFloat(this.state.ordem)+parseFloat(this.state.ordem*this.state.payout)/100)+"").indexOf("."))var e=e.toFixed(2);return e=parseFloat(e)}},{key:"ordem3",value:function(){var e=parseFloat(this.state.ordem)+parseFloat(this.state.ordem*this.state.payout)/100;if(-1!==((t=e+parseFloat(e)*(this.state.payout/100))+"").indexOf("."))var t=t.toFixed(2);return t=parseFloat(t)}},{key:"ordem4",value:function(){if(-1!==((e=this.ordem3()+this.retorno3())+"").indexOf("."))var e=e.toFixed(2);return e=parseFloat(e)}},{key:"ordem5",value:function(){if(-1!==((e=this.ordem4()+this.retorno4())+"").indexOf("."))var e=e.toFixed(2);return e=parseFloat(e)}},{key:"render",value:function(){var e=this;return n.a.createElement("div",null,n.a.createElement("form",{onSubmit:this.noReload},n.a.createElement("table",null,n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement("h3",null,"Informe o valor de sua ordem:"),n.a.createElement("input",{value:this.state.ordem,type:"number",onChange:function(t){e.setState({ordem:t.target.value})}}),n.a.createElement("h4",null," Ordem: R$",this.state.ordem," ")),n.a.createElement("td",null,n.a.createElement("h3",null,"Informe o valor do payout:"),n.a.createElement("input",{value:this.state.payout,type:"number",onChange:function(t){e.setState({payout:t.target.value})}}),n.a.createElement("h4",null," Payout: ",this.state.payout,"% ")))),n.a.createElement("h3",null,"Resultado:"),n.a.createElement("table",{class:"tableResultado"},n.a.createElement("tr",null,n.a.createElement("td",null),n.a.createElement("td",null,"1\xb0 Ordem"),n.a.createElement("td",null,"Retorno")),n.a.createElement("tr",null,n.a.createElement("td",null,"1\xb0 N\xedvel"),n.a.createElement("td",null,"R$ ",this.state.ordem),n.a.createElement("td",null,"R$ ",this.retorno())),n.a.createElement("tr",null,n.a.createElement("td",null,"2\xb0 N\xedvel"),n.a.createElement("td",null,"R$ ",this.ordem2()),n.a.createElement("td",null,"R$ ",this.retorno2())),n.a.createElement("tr",null,n.a.createElement("td",null,"3\xb0 N\xedvel"),n.a.createElement("td",null,"R$ ",this.ordem3()),n.a.createElement("td",null,"R$ ",this.retorno3())),n.a.createElement("tr",null,n.a.createElement("td",null,"4\xb0 N\xedvel"),n.a.createElement("td",null,"R$ ",this.ordem4()),n.a.createElement("td",null,"R$ ",this.retorno4())),n.a.createElement("tr",null,n.a.createElement("td",null,"5\xb0 N\xedvel"),n.a.createElement("td",null,"R$ ",this.ordem5()),n.a.createElement("td",null,"R$ ",this.retorno5()))),n.a.createElement("button",{type:"button",onClick:this.zerar},"Zerar")))}}]),t}(n.a.Component),z=Object(b.b)((function(e){return{nome:e.CalculosReducers.nome,banca:e.CalculosReducers.banca,stopLoss:e.CalculosReducers.stopLoss,payout:e.CalculosReducers.payout,ordem:e.CalculosReducers.ordem,ordem2:e.CalculosReducers.ordem2,ordem3:e.CalculosReducers.ordem3,ordem4:e.CalculosReducers.ordem4,ordem5:e.CalculosReducers.ordem5,ordem6:e.CalculosReducers.ordem6,ordem7:e.CalculosReducers.ordem7,ordem8:e.CalculosReducers.ordem8,ordem9:e.CalculosReducers.ordem9,ordem10:e.CalculosReducers.ordem10,ordem11:e.CalculosReducers.ordem11,ordem12:e.CalculosReducers.ordem12,ordem13:e.CalculosReducers.ordem13,ordem14:e.CalculosReducers.ordem14,ordem15:e.CalculosReducers.ordem15,retorno:e.CalculosReducers.retorno,retorno2:e.CalculosReducers.retorno2,retorno3:e.CalculosReducers.retorno3,retorno4:e.CalculosReducers.retorno4,retorno5:e.CalculosReducers.retorno5,retorno6:e.CalculosReducers.retorno6,retorno7:e.CalculosReducers.retorno7,retorno8:e.CalculosReducers.retorno8,retorno9:e.CalculosReducers.retorno9,retorno10:e.CalculosReducers.retorno10,retorno11:e.CalculosReducers.retorno11,retorno12:e.CalculosReducers.retorno12,retorno13:e.CalculosReducers.retorno13,retorno14:e.CalculosReducers.retorno14,retorno15:e.CalculosReducers.retorno15}}),{modificaBanca:O,modificaOrdem:function(e){return{type:"MODIFICA_ORDEM",payload:e}},modificaPayout:function(e){return{type:"MODIFICA_PAYOUT",payload:e}},modificaRetorno:function(e){return{type:"MODIFICA_RETORNO",payload:e}},modificaStopLoss:function(e){return{type:"MODIFICA_STOPLOSS",payload:e}}})(M),P=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(i.a)(t).call(this,e))).state={nome:"nomeState",email:"mailState",senha:"senhaState"},a.noReload=a.noReload.bind(Object(m.a)(a)),a.cadastrarUsuario=a.cadastrarUsuario.bind(Object(m.a)(a)),a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"cadastrarUsuario",value:function(){console.log("testando fun\xe7\xe3o")}},{key:"noReload",value:function(e){e.preventDefault(this)}},{key:"render",value:function(){var e=this;return n.a.createElement("div",null,n.a.createElement("form",{onSubmit:this.noReload},n.a.createElement("div",{class:"base login"},n.a.createElement("table",{class:"popUp"},n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement("h4",null,"Informe seus dados"),n.a.createElement("p",null,"Primeiro Nome:"),n.a.createElement("input",{value:this.state.nome,class:"campoLogon",onChange:function(t){e.setState({nome:t.target.value})}}))),n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement("p",null,"Endere\xe7o de E-mail:"),n.a.createElement("input",{value:this.state.email,class:"campoLogon",onChange:function(t){e.setState({email:t.target.value})}}))),n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement("p",null,"Senha:"),n.a.createElement("input",{value:this.state.senha,class:"campoLogon",onChange:function(t){e.setState({senha:t.target.value})}}))),n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement("button",{type:"submit",onClick:this.logarUsuario()},"Entrar"))),n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement("button",{type:"submit",onClick:this.cadastrarUsuario()},"Cadastrar")))))))}}]),t}(r.Component),w=Object(b.b)((function(e){return console.log("estado: "+e),{banca:e.CalculosReducers.banca,resultado:e.CalculosReducers.resultado,email:e.CalculosReducers.email,senha:e.CalculosReducers.senha,nome:e.CalculosReducers.nome}}),{modificaBanca:O,modificaEmail:y,modificaSenha:F,modificaNome:v})(P),W=function(){return n.a.createElement("div",{class:"conteudo"},n.a.createElement("table",null,n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement(z,null)))))},H=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(i.a)(t).call(this,e))).state={nome:"",email:"",senha:"",redirect:""},a.sair=a.sair.bind(Object(m.a)(a)),a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"sair",value:function(){this.props.sair()}},{key:"render",value:function(){return n.a.createElement("div",{class:"header"},n.a.createElement("table",{border:"0"},n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement("h1",null,"Calculadora Pro Trader Investing")),n.a.createElement("td",null,n.a.createElement(x.b,{to:"/Login"},n.a.createElement("p",{class:"botaoSair"},"Sair"))))),n.a.createElement("hr",null))}}]),t}(n.a.Component),G=Object(b.b)((function(e){return{redirect:e.CalculosReducers.redirect}}),{sair:function(){return{type:"SAIR"}}})(H),Q=function(){return n.a.createElement("div",{class:"footer"},n.a.createElement("hr",null),n.a.createElement("table",null,n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement("h3",null,"Servi\xe7os"),n.a.createElement("a",{href:"https://br.investing.com/economic-calendar/",target:"_blank"},n.a.createElement("p",null,"Sala de Opera\xe7\xf5es")),n.a.createElement("a",{href:"https://tradertimerzone.com.br/web/",target:"_blank"},n.a.createElement("p",null,"Grupo de sinais")),n.a.createElement("a",{href:"#",target:"_blank"},n.a.createElement("p",null,"Indicador Quebra Broker"))),n.a.createElement("td",null,n.a.createElement("h3",null,"Ferramentas"),n.a.createElement("a",{href:"https://br.investing.com/economic-calendar/",target:"_blank"},n.a.createElement("p",null,"Calend\xe1rio Econ\xf4mico")),n.a.createElement("a",{href:"https://tradertimerzone.com.br/web/",target:"_blank"},n.a.createElement("p",null,"Trader Timer Zone"))),n.a.createElement("td",null,n.a.createElement("h3",null,"Redes Sociais"),n.a.createElement("a",{href:"#",target:"_blank"},n.a.createElement("p",null,"Pro Trader Investing")),n.a.createElement("a",{href:"#",target:"_blank"},n.a.createElement("p",null,"Quebra Broker"))))),n.a.createElement("hr",null))},Z=function(){return n.a.createElement("div",{class:"base principal"},n.a.createElement("table",null,n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement(G,null),n.a.createElement(W,null),n.a.createElement(Q,null)))))},J=function(){return n.a.createElement("div",{class:"base login"},n.a.createElement("table",{class:"popUpLogin"},n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement("img",{class:"logo",src:E.a}))),n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement("h2",null,"Cadastro realizado com sucesso!"))),n.a.createElement("td",{class:"entrarCampo"},n.a.createElement(x.b,{to:"/Login"},n.a.createElement("h3",null,"Fa\xe7a seu login!")))),n.a.createElement("hr",null))},Y=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentWillMount",value:function(){f.a.initializeApp({apiKey:"AIzaSyBHqyVsYLWstk2duzVS_uo8aWm-0sWMtZA",authDomain:"pro-trader-investing.firebaseapp.com",databaseURL:"https://pro-trader-investing.firebaseio.com",projectId:"pro-trader-investing",storageBucket:"pro-trader-investing.appspot.com",messagingSenderId:"362607954129",appId:"1:362607954129:web:486eb9086b9ec04c715df0",measurementId:"G-HJHXBWMMHE"})}},{key:"render",value:function(){return n.a.createElement(x.a,null,n.a.createElement("div",{class:"base"},n.a.createElement(g.d,null,n.a.createElement(g.b,{path:"/",exact:!0,component:S}),n.a.createElement(g.b,{path:"/Login",exact:!0,component:S}),n.a.createElement(g.b,{path:"/Cadastro",component:_}),n.a.createElement(g.b,{path:"/Teste",component:w}),n.a.createElement(g.b,{path:"/Principal",component:Z}),n.a.createElement(g.b,{path:"/CadastroSucesso",component:J}))))}}]),t}(n.a.Component),V=a(22),q=a(11),K={nome:"",email:"",senha:"",erroCadastro:"",erroLogin:"",redirect:"",banca:0,payout:0,stopLoss:0,ordem:0,ordem2:0,ordem3:0,ordem4:0,ordem5:0,ordem6:0,ordem7:0,ordem8:0,ordem9:0,ordem10:0,ordem11:0,ordem12:0,ordem13:0,ordem14:0,ordem15:0,retorno:0,retorno2:0,retorno3:0,retorno4:0,retorno5:0,retorno6:0,retorno7:0,retorno8:0,retorno9:0,retorno10:0,retorno11:0,retorno12:0,retorno13:0,retorno14:0,retorno15:0,resultado:0},X=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1?arguments[1]:void 0;switch(console.log(t),t.type){case"MODIFICA_EMAIL":return Object(q.a)({},e,{email:t.payload});case"MODIFICA_NOME":return Object(q.a)({},e,{nome:t.payload});case"MODIFICA_SENHA":return Object(q.a)({},e,{senha:t.payload});case"MODIFICA_BANCA":return Object(q.a)({},e,{banca:t.payload});case"MODIFICA_PAYOUT":return Object(q.a)({},e,{payout:t.payload});case"MODIFICA_RETORNO":return Object(q.a)({},e,{retorno:t.payload});case"MODIFICA_STOPLOSS":return Object(q.a)({},e,{stopLoss:t.payload});case"MODIFICA_ORDEM":return Object(q.a)({},e,{ordem:t.payload});case"CADASTRO_USUARIO_ERRO":return Object(q.a)({},e,{erroCadastro:t.payload,redirect:"Cadastro"});case"CADASTRO_USUARIO_SUCESSO":return Object(q.a)({},e,{redirect:"Login"});case"AUTENTICA_USUARIO_ERRO":return Object(q.a)({},e,{erroLogin:t.payload});case"AUTENTICA_USUARIO_SUCESSO":return Object(q.a)({},e,{redirect:"Principal"});case"SAIR":return Object(q.a)({},e,{email:"",senha:"",nome:""})}return e},ee=Object(V.c)({CalculosReducers:X}),te=a(40);l.a.render(n.a.createElement(b.a,{store:Object(V.d)(ee,{},Object(V.a)(te.a))},n.a.createElement(Y,null)),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.325cef92.chunk.js.map