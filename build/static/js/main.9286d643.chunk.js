(this["webpackJsonpsimple-react-native-commerce"]=this["webpackJsonpsimple-react-native-commerce"]||[]).push([[0],{405:function(e,t,n){e.exports=n(641)},410:function(e,t,n){},641:function(e,t,n){"use strict";n.r(t);var a,r=n(0),o=n.n(r),c=n(118),i=n.n(c),l=(n(410),n(6)),s=n(5),u=n(8),m=n(4),f=n(9),d=n(55),g=n(316),p=n(72),b=n(351),h=n(248),E=n(317),y={key:"root",storage:n.n(E).a,blacklist:["Auth"]},v=n(29),j=n.n(v),O=n(83),w=n(70),C=Object(w.createActions)({startup:null}),S=C.Types,x=C.Creators,k=S,D=x,I=Object(w.createActions)({addProduct:["item"],addProductSuccess:["data"]}),R=I.Types,P=I.Creators,L=R,A=P,F=Object(w.createActions)({fetchHome:null,fetchHomeSuccess:["data"],fetchHomeFailure:["error"]}),B=F.Types,z=F.Creators,_=B,H=z,T=n(27);var N={navigate:function(e,t){a.dispatch(T.NavigationActions.navigate({routeName:e,params:t}))},navigateAndReset:function(e,t){a.dispatch(T.StackActions.reset({index:0,key:null,actions:[T.NavigationActions.navigate({routeName:e,params:t})]}))},setTopLevelNavigator:function(e){a=e},goBack:function(){a.dispatch(T.NavigationActions.back({key:null}))}},U=j.a.mark(M);function M(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:N.navigateAndReset("Login");case 1:case"end":return e.stop()}}),U)}var G=j.a.mark(W);function W(e){var t;return j.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.item,n.next=3,Object(O.c)(A.addProductSuccess(t));case 3:alert("Produk ".concat(t.title," berhasil dimasukkan ke keranjang belanja anda"));case 4:case"end":return n.stop()}}),G)}var V=n(333),J="https://private-4639ce-ecommerce56.apiary-mock.com",q="/home",X=n.n(V).a.create({baseURL:J}),$=function(){return X.request({url:q,method:"GET"})},K=j.a.mark(Q);function Q(){var e,t;return j.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(O.b)($);case 3:if(e=n.sent){n.next=6;break}return n.abrupt("return","Something wrong, please try again later.");case 6:return t=e.data,n.next=9,Object(O.c)(H.fetchHomeSuccess(t[0].data));case 9:n.next=14;break;case 11:n.prev=11,n.t0=n.catch(0),console.log("Error : ".concat(JSON.stringify(n.t0)));case 14:case"end":return n.stop()}}),K,null,[[0,11]])}var Y=j.a.mark(Z);function Z(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(O.a)([Object(O.d)(k.STARTUP,M),Object(O.d)(L.ADD_PRODUCT,W),Object(O.d)(_.FETCH_HOME,Q)]);case 2:case"end":return e.stop()}}),Y)}var ee,te,ne,ae,re=n(2),oe=n(7),ce=Object(w.createActions)({signIn:["form"],signInSuccess:["auth"],signInFailure:["error"]}),ie=ce.Types,le=ce.Creators,se=Object(w.createReducer)({isLoading:!1,error:null,auth:null},(ee={},Object(re.a)(ee,ie.SIGN_IN,(function(e){return Object(oe.a)({},e,{isLoading:!0})})),Object(re.a)(ee,ie.SIGN_IN_SUCCESS,(function(e,t){var n=t.auth;return Object(oe.a)({},e,{isLoading:!1,auth:n})})),Object(re.a)(ee,ie.SIGN_IN_FAILURE,(function(e,t){var n=t.error;return Object(oe.a)({},e,{isLoading:!1,error:n})})),ee)),ue=n(77),me=Object(w.createReducer)({products:[],error:null,isLoading:!1},(te={},Object(re.a)(te,L.ADD_PRODUCT,(function(e){return Object(oe.a)({},e,{isLoading:!0})})),Object(re.a)(te,L.ADD_PRODUCT_SUCCESS,(function(e,t){var n=t.data,a=Object(ue.a)(e.products).concat(n);return Object(oe.a)({},e,{isLoading:!1,products:a})})),te)),fe=Object(w.createReducer)({isLoading:!1,error:null,data:null},(ne={},Object(re.a)(ne,_.FETCH_HOME,(function(e){return Object(oe.a)({},e,{isLoading:!0})})),Object(re.a)(ne,_.FETCH_HOME_SUCCESS,(function(e,t){var n=t.data;return Object(oe.a)({},e,{isLoading:!1,data:n})})),Object(re.a)(ne,_.FETCH_HOME_FAILURE,(function(e,t){var n=t.error;return Object(oe.a)({},e,{isLoading:!1,error:n})})),ne)),de=n(334),ge=n(654),pe=n(34),be=n(16),he=n(84),Ee=n(13),ye=(ae={transparent:"rgba(0,0,0,0)",white:"#ffffff",text:"#212529",primary:"#8BC34A",success:"#28a745",error:"#dc3545",black:"#1a1917",gray:"#888888",background1:"#B721FF",background2:"#21D4FD",darkPrimary:"#689F38",lightPrimary:"#DCEDC8",icons:"#212121",accent:"#4CAF50"},Object(re.a)(ae,"text","#212121"),Object(re.a)(ae,"textSecondary","#757575"),Object(re.a)(ae,"divider","#BDBDBD"),ae),ve=38,je=34,Oe=30,we=17,Ce=14,Se=12,xe=Ee.a.create({h1:{fontSize:ve},h2:{fontSize:je},h3:{fontSize:Oe},normal:{fontSize:we},medium:{fontSize:Ce},small:{fontSize:Se}}),ke=Ee.a.create({backgroundReset:{backgroundColor:ye.transparent},center:{alignItems:"center",justifyContent:"center"},colCenter:{alignItems:"center",flexDirection:"column",justifyContent:"center"},colCross:{alignItems:"center",flexDirection:"column"},colMain:{flexDirection:"column",justifyContent:"center"},column:{flexDirection:"column"},columnReverse:{flexDirection:"column-reverse"},crossCenter:{alignItems:"center"},crossEnd:{alignItems:"flex-end"},crossStart:{alignItems:"flex-start"},crossStretch:{alignItems:"stretch"},fill:{flex:1},fillCenter:{alignItems:"center",flex:1,justifyContent:"center"},fillCol:{flex:1,flexDirection:"column"},fillColCenter:{alignItems:"center",flex:1,flexDirection:"column",justifyContent:"center"},fillColCross:{alignItems:"center",flex:1,flexDirection:"column"},fillColMain:{flex:1,flexDirection:"column",justifyContent:"center"},fillColReverse:{flex:1,flexDirection:"column-reverse"},fillRow:{flex:1,flexDirection:"row"},fillRowCenter:{alignItems:"center",flex:1,flexDirection:"row",justifyContent:"center"},fillRowCross:{alignItems:"center",flex:1,flexDirection:"row"},fillRowMain:{flex:1,flexDirection:"row",justifyContent:"center"},fillRowReverse:{flex:1,flexDirection:"row-reverse"},fullSize:{height:"100%",width:"100%"},fullWidth:{width:"100%"},mainCenter:{justifyContent:"center"},mainEnd:{justifyContent:"flex-end"},mainSpaceAround:{justifyContent:"space-around"},mainSpaceBetween:{justifyContent:"space-between"},mainStart:{justifyContent:"flex-start",marginBottom:"20px"},mirror:{transform:[{scaleX:-1}]},rotate90:{transform:[{rotate:"90deg"}]},rotate90Inverse:{transform:[{rotate:"-90deg"}]},row:{flexDirection:"row"},rowCenter:{alignItems:"center",flexDirection:"row",justifyContent:"center"},rowCross:{alignItems:"center",flexDirection:"row"},rowMain:{flexDirection:"row",justifyContent:"center"},rowReverse:{flexDirection:"row-reverse"},scrollSpaceAround:{flexGrow:1,justifyContent:"space-around"},scrollSpaceBetween:{flexGrow:1,justifyContent:"space-between"},selfStretch:{alignSelf:"stretch"},textCenter:{textAlign:"center"},textJustify:{textAlign:"justify"},textLeft:{textAlign:"left"},textRight:{textAlign:"right"}}),De=Ee.a.create({container:{backgroundColor:ye.primary},logo:{backgroundColor:ye.white,height:70,width:70}}),Ie=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement(be.a,{style:[ke.fillRowCenter,De.container]},o.a.createElement(be.a,{style:[ke.center,De.logo]},o.a.createElement(he.a,null,"LOGO")))}}]),t}(o.a.Component),Re=n(350),Pe=n(236),Le=n(138),Ae=n(104),Fe=n(42),Be=n(54);function ze(e){var t=e.placeholder,n=e.iconName,a=e.onPress,r=e.setValue,c=(e.value,e.isBack);return o.a.createElement(be.a,{style:[ke.mainStart,ke.column,{paddingLeft:10,paddingRight:10}]},o.a.createElement(be.a,{style:[ke.row]},o.a.createElement(be.a,{style:[ke.center]},o.a.createElement(Le.a,{onPress:function(){c&&N.goBack()}},o.a.createElement(Be.a,{name:n,size:25,color:"red",style:{marginRight:"10px"}}))),o.a.createElement(be.a,{style:[ke.fill,ke.column,{marginTop:5,marginLeft:5,marginBottom:5,borderRadius:20,borderWidth:1,borderColor:"gray"}]},o.a.createElement(Le.a,{onPress:a},o.a.createElement(be.a,{style:[ke.row,{paddingLeft:10}]},o.a.createElement(be.a,{style:[ke.mainCenter]},o.a.createElement(Be.a,{name:"search",size:20,color:"gray"})),o.a.createElement(Ae.a,{style:{height:40,width:"100%",paddingLeft:10},placeholder:t,editable:!a,onSubmitEditing:function(e){r(e.nativeEvent.text),console.log(e.nativeEvent.text)}}))))))}ze.defaultProps={isBack:!0};var _e=ze,He=n(240);var Te=function(e){var t=e.category,n=Ee.a.create({container:{flex:1},item:{backgroundColor:"#f9c2ff",padding:20,marginVertical:8,marginHorizontal:"15px"},title:{fontSize:15,textAlign:"center"}});return o.a.createElement(be.a,null,o.a.createElement(He.a,{data:t||[],renderItem:function(e){var t=e.item;return o.a.createElement(be.a,{style:(ke.column,{marginBottom:20})},o.a.createElement(be.a,{style:{margin:10}},o.a.createElement(Fe.e,{source:{uri:t.imageUrl},style:{width:80,height:80},PlaceholderContent:o.a.createElement(Pe.a,null)})),o.a.createElement(be.a,null,o.a.createElement(Fe.h,{style:n.title},t.name)))},keyExtractor:function(e){return"id-".concat(e.id)},horizontal:!0}))};var Ne=function(e){var t=e.product;return Ee.a.create({container:{flex:1},item:{backgroundColor:"#f9c2ff",padding:20,marginVertical:8,marginHorizontal:16},title:{fontSize:32}}),o.a.createElement(He.a,{data:t||[],renderItem:function(e){var t=e.item,n=e.index;return o.a.createElement(Le.a,{onPress:function(){N.navigate("Detail",{item:t})}},o.a.createElement(Fe.b,{title:t.title,image:{uri:t.imageUrl},titleStyle:xe.h3,containerStyle:{boxShadow:"0 1px 6px 0 rgba(0,0,0,0.1)",border:"none",borderRadius:"5px",marginBottom:15,padding:"10px 0"}},o.a.createElement(be.a,{style:[ke.row]},o.a.createElement(be.a,{style:[ke.center,{marginRight:10}]},o.a.createElement(Be.a,{name:"heart",size:35,color:n%2===0?"red":"gray"})))))},keyExtractor:function(e){return"id-".concat(e.id)}})};var Ue=function(){var e=Object(d.c)(),t=Object(d.d)((function(e){return e.Home})),n=t.isLoading,a=t.data;return Object(r.useEffect)((function(){e(H.fetchHome())}),[]),o.a.createElement(o.a.Fragment,null,o.a.createElement(_e,{iconName:"heart",onPress:function(){N.navigate("Search")}}),!n&&o.a.createElement(Te,{category:a&&a.category||[]}),n&&o.a.createElement(Pe.a,null),!n&&o.a.createElement(Ne,{product:a&&a.productPromo||[]}))};Ee.a.create({});var Me=function(){return o.a.createElement(be.a,{style:[ke.fillCenter]},o.a.createElement(he.a,null,"Hello Feed Page"))};Ee.a.create({});var Ge=function(){return o.a.createElement(be.a,{style:[ke.fillCenter]},o.a.createElement(he.a,null,"Hello Cart Page"))};var We=function(){var e=Object(d.d)((function(e){return e.Purchase})).products,t=function(e){var t=e.item;return o.a.createElement(Fe.g,{title:t.title,subtitle:"".concat(t.price),contentContainerStyle:{paddingLeft:10},leftAvatar:{source:t.imageUrl&&{uri:t.imageUrl}},onPress:function(){N.navigate("Detail",{item:t})},bottomDivider:!0,chevron:!0})};return o.a.createElement(o.a.Fragment,null,o.a.createElement(Fe.d,{leftComponent:o.a.createElement(Be.a,{name:"arrow-left",size:20,color:"white",onPress:function(){N.goBack()}}),centerComponent:{text:"Purchased History",style:{color:"#fff",fontSize:20}}}),o.a.createElement((function(){return o.a.createElement(He.a,{keyExtractor:function(e){return e.id.toString()},data:e,renderItem:t})}),null))};window.__DEV__=!0;var Ve=Object(Re.a)({HomePage:{screen:Ue,path:"home"},Feed:{screen:Me,path:"feed"},Cart:{screen:Ge,path:"cart"},Profile:{screen:We,path:"profile"}},{lazy:!0});Ue.navigationOptions={title:"Home"},Me.navigationOptions={title:"Feed"},Ge.navigationOptions={title:"Cart"},We.navigationOptions={title:"Profile"};var Je=Ve,qe=n(60);var Xe=function(){var e=Object(r.useState)(!1),t=Object(qe.a)(e,2),n=(t[0],t[1],Object(d.d)((function(e){return e.Auth})).auth,Object(d.c)());Object(r.useEffect)((function(){return"web"===pe.a.OS&&(document.addEventListener("google-loaded",c),window.gapi&&c()),function(){"web"===pe.a.OS&&document.removeEventListener("google-loaded",c)}}),[]);var a=function(e){var t=e.getBasicProfile(),a=e.getAuthResponse().id_token;console.log("google user obj",t),console.log("google_id_token",a),n(le.signInSuccess(Object(oe.a)({},t,{id_token:a,provider:"google"})))},c=function(){console.log("rendering google signin button"),window.gapi.signin2.render("my-signin2",{scope:"profile email",width:250,height:40,longtitle:!0,theme:"dark",onsuccess:a,onFailure:i})},i=function(e){alert("Something Wrong when signin to google : ".concat(e))};return o.a.createElement(o.a.Fragment,null,"web"===pe.a.OS?o.a.createElement("div",null,o.a.createElement("div",{id:"my-signin2",style:{paddingTop:10}}),o.a.createElement("br",null)):o.a.createElement(be.a,{style:{paddingBottom:20}},o.a.createElement(Fe.a,{title:"Login With Google"})))};var $e=function(){var e,t=Object(r.useState)(!1),n=Object(qe.a)(t,2),a=n[0],c=n[1],i=Object(d.c)();Object(r.useEffect)((function(){return"web"===pe.a.OS&&window.addEventListener("FBInit",l),function(){"web"===pe.a.OS&&window.removeEventListener("FBInit",l)}}),[]);var l=function(){e=window.FB,console.log("FB",e),s()},s=function(){e.getLoginStatus(u)},u=function(t){"connected"===t.status?e.api("/me",(function(e){var n=Object(oe.a)({},t,{user:e});console.log(n),c(!0),i(le.signInSuccess(Object(oe.a)({},e,{provider:"facebook"})))})):c(!1)};return o.a.createElement(be.a,null,!a&&o.a.createElement(Fe.a,{title:"Login With Facebook",onPress:function t(){if(console.log(e),!e)return l(),void t();e.getLoginStatus((function(t){"connected"===t.status?u(t):e.login(u,{scope:"public_profile"})}))}}))};var Ke=function(){var e=Ee.a.create({loginForm:{backgroundColor:"white",marginLeft:15,marginRight:15,paddingTop:10,paddingBottom:10,borderRadius:10},containerInput:{marginBottom:15,borderWidth:1,borderColor:ye.mediumGreen,borderRadius:5},inputContainerStyle:{borderBottomWidth:0},containerStyleCheckbox:{backgroundColor:"white",borderWidth:0,paddingTop:0,paddingLeft:0,paddingBottom:0,paddingRight:0,marginTop:0,marginBottom:0},titleStyle:{fontSize:14}}),t=Object(r.useRef)(null),n=Object(r.useRef)(null),a=Object(r.useState)({isRemember:!1,username:"",password:"",provider:"form"}),c=Object(qe.a)(a,2),i=c[0],l=c[1],s=Object(d.d)((function(e){return e.Auth})).auth,u=Object(d.c)();Object(r.useEffect)((function(){s&&N.navigateAndReset("Home")}),[s]);var m=function(){if(""===i.username||""===i.password)return t.current.shake(),void n.current.shake();u(le.signInSuccess(i))};return o.a.createElement(be.a,{style:[ke.fill,ke.colMain]},o.a.createElement(be.a,{style:[ke.center,e.loginForm]},o.a.createElement(o.a.Fragment,null,o.a.createElement(be.a,{styles:[]},o.a.createElement(Fe.h,{style:xe.h1},"Login")),o.a.createElement(be.a,{style:[ke.column,{width:"90%",paddingTop:10}]},o.a.createElement(Fe.f,{ref:t,containerStyle:e.containerInput,inputContainerStyle:e.inputContainerStyle,underlineColorAndroid:"transparent",placeholder:"username",onChangeText:function(e){l(Object(oe.a)({},i,{username:e}))},value:i.username,leftIcon:o.a.createElement(Be.a,{name:"user",size:15,color:"gray",className:"input-icon"}),className:"input"}),o.a.createElement(Fe.f,{ref:n,labelStyle:xe.medium,inputStyle:xe.medium,containerStyle:e.containerInput,inputContainerStyle:e.inputContainerStyle,underlineColorAndroid:"white",secureTextEntry:!0,placeholder:"password",onChangeText:function(e){l(Object(oe.a)({},i,{password:e}))},value:i.password,leftIcon:o.a.createElement(Be.a,{name:"lock",size:15,color:"gray",className:"input-icon"}),className:"input"}),o.a.createElement(be.a,{style:[ke.row,ke.mainSpaceBetween,ke.fullWidth]},o.a.createElement(Fe.c,{title:"Remember Me",containerStyle:e.containerStyleCheckbox,checked:i.isRemember,onIconPress:function(){console.log(t.current),l(Object(oe.a)({},i,{isRemember:!i.isRemember}))}}),o.a.createElement(Fe.a,{titleStyle:e.titleStyle,title:"Sign In",onPress:m,className:"btn"})))),o.a.createElement(be.a,{style:{marginTop:"50px"}},o.a.createElement(Xe,null),o.a.createElement($e,null))))};n(195);Ee.a.create({});var Qe=function(){var e=Object(d.d)((function(e){return e.Home})).data.productPromo,t=Object(r.useState)(""),a=Object(qe.a)(t,2),c=a[0],i=a[1],l=Object(r.useState)([]),s=Object(qe.a)(l,2),u=s[0],m=s[1],f=Object(r.useState)(!0),g=Object(qe.a)(f,2),p=g[0],b=g[1];Object(r.useEffect)((function(){if(!p){var t=e.filter((function(e){return e.title.toLowerCase().includes(c.toLowerCase())}));m(t)}}),[c]),Object(r.useEffect)((function(){b(!1)}),[]);var h=function(e){var t=e.item;return o.a.createElement(Fe.g,{title:t.title,subtitle:"".concat(t.price),contentContainerStyle:{paddingLeft:10},leftAvatar:{source:t.imageUrl&&{uri:t.imageUrl}},onPress:function(){N.navigate("Detail",{item:t})},bottomDivider:!0,chevron:!0})};return o.a.createElement(o.a.Fragment,null,function(){if("web"===pe.a.OS)return o.a.createElement("style",{type:"text/css"},"\n\t\t\t\t @font-face {\n\t\t\t\t  font-family: 'MaterialIcons';\n\t\t\t\t  src: url(".concat(n(309),") format('truetype');\n\t\t\t\t}\n\t\t\t\t@font-face {\n\t\t\t\t  font-family: 'FontAwesome';\n\t\t\t\t  src: url(").concat(n(310),") format('truetype');\n\t\t\t\t}\n\t\t\t\t@font-face {\n\t\t\t\t  font-family: 'Ionicons';\n\t\t\t\t  src: url(").concat(n(311),") format('truetype');\n\t\t\t\t}\n\t\t\t\t"))}(),o.a.createElement(_e,{onPress:null,iconName:"arrow-left",placeholder:"Nitendo",value:c,setValue:i}),o.a.createElement((function(){return o.a.createElement(He.a,{keyExtractor:function(e){return e.id.toString()},data:u,renderItem:h})}),null))},Ye=n(234),Ze=n(101);var et=function(e){var t=e.navigation,n=Object(d.c)(),a=t.getParam("item"),c=a.title,i=a.imageUrl,l=a.description,s=a.price,u=(a.id,Object(r.useState)(!1)),m=Object(qe.a)(u,2),f=m[0],g=m[1];return o.a.createElement(o.a.Fragment,null,o.a.createElement(Fe.d,{leftComponent:o.a.createElement(Be.a,{name:"arrow-left",size:20,color:"white",onPress:function(){N.goBack()}}),centerComponent:{text:"Detail Product",style:{color:"#fff",fontSize:20}},rightComponent:"web"===pe.a.OS?o.a.createElement("a",{href:"https://www.facebook.com/sharer/sharer.php?u=".concat(encodeURIComponent("http://amoebadev.home.blog"),"&t=").concat(c),target:"_blank",title:"Share on Facebook"},o.a.createElement(Be.a,{name:"share",size:20,color:"white"})):o.a.createElement(Be.a,{name:"share",size:20,color:"white"})}),o.a.createElement(be.a,{style:[ke.fill]},o.a.createElement(Ze.a,null,o.a.createElement((function(){return o.a.createElement(Fe.b,null,o.a.createElement(be.a,{style:[ke.fill,ke.row,ke.mainCenter]},o.a.createElement(Ye.a,{source:{uri:i},style:{flex:1,height:230}})))}),null),o.a.createElement((function(){return o.a.createElement(be.a,{style:[ke.row,ke.mainSpaceBetween,{paddingHorizontal:15,paddingVertical:15}]},o.a.createElement(be.a,null,o.a.createElement(Fe.h,{h4:!0},c)),o.a.createElement(be.a,null,o.a.createElement(Be.a,{name:"heart",color:f?"red":"gray",size:25,onPress:function(e){e.preventDefault(),g(!f)}})))}),null),o.a.createElement((function(){return o.a.createElement(Ze.a,null,o.a.createElement(be.a,{style:[ke.column,ke.mainStart,{flex:2,paddingHorizontal:15}]},o.a.createElement(Fe.h,null,l||"this is the placeholder of description adnakl alad lad adsad  ahks hakd kad kjada dhak hdjkadj adjka dja djkadka dkja")))}),null),o.a.createElement((function(){return o.a.createElement(be.a,{style:[ke.row,ke.mainEnd,ke.fill]},o.a.createElement(be.a,{style:[ke.mainCenter,ke.colCenter]},o.a.createElement(Fe.h,{style:{fontSize:20}},s||"Rp. 100 ")),o.a.createElement(be.a,{style:[ke.mainCenter,{paddingHorizontal:15,width:"50%"}]},o.a.createElement(Fe.a,{title:"Buy",onPress:function(e){var a;e.preventDefault(),a=t.getParam("item"),n(A.addProduct(a))}})))}),null))))};window.__DEV__=!0;var tt=Object(ge.a)({SplashScreen:Ie,Login:{screen:Ke,path:"login"},Home:{screen:Je,path:""},Search:{screen:Qe,path:"search"},Detail:{screen:et,path:"detail/"}},{initialRouteName:"SplashScreen",headerMode:"none",lazyLoad:!0}),nt="web"===pe.a.OS?Object(de.createBrowserApp)(tt):Object(T.createAppContainer)(tt),at=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.props.startup()}},{key:"loadFont",value:function(){if("web"===pe.a.OS)return o.a.createElement("style",{type:"text/css"},"\n         @font-face {\n          font-family: 'MaterialIcons';\n          src: url(".concat(n(309),") format('truetype');\n        }\n        @font-face {\n          font-family: 'FontAwesome';\n          src: url(").concat(n(310),") format('truetype');\n        }\n        @font-face {\n          font-family: 'Ionicons';\n          src: url(").concat(n(311),") format('truetype');\n        }\n        "))}},{key:"render",value:function(){return o.a.createElement(be.a,{style:ke.fill},this.loadFont(),o.a.createElement(nt,{ref:function(e){N.setTopLevelNavigator(e)}}))}}]),t}(r.Component),rt=Object(d.b)((function(e){return{}}),(function(e){return{startup:function(){return e(D.startup())}}}))(at),ot=n(160),ct=function(e,t){var n=[],a=[],r=Object(b.a)();n.push(r),a.push(p.a.apply(void 0,n));var o=Object(h.a)(y,e),c=Object(p.e)(o,p.d.apply(void 0,a)),i=Object(h.b)(c);return r.run(t),{store:c,persistor:i}}(Object(p.c)({Auth:se,Purchase:me,Home:fe}),Z),it=ct.store,lt=ct.persistor,st={colors:{primary:ye.primary,secondary:ye.darkPrimary,divider:ye.divider},Button:{titleStyle:{color:ye.white},raised:!0},Text:{style:{color:ye.text}}},ut=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement(d.a,{store:it},o.a.createElement(g.PersistGate,{loading:o.a.createElement(Pe.a,null),persistor:lt},o.a.createElement(Fe.i,{theme:st},o.a.createElement(ot.a,{backgroundColor:"#FFC804",barStyle:"light-content"}),o.a.createElement(rt,null))))}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(ut,null),document.getElementById("root"))}},[[405,1,2]]]);
//# sourceMappingURL=main.9286d643.chunk.js.map