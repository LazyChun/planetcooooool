(this["webpackJsonpplanet-web"]=this["webpackJsonpplanet-web"]||[]).push([[0],{1008:function(e,n,t){"use strict";var r=t(10),a=t(1),o=t(0),c=t.n(o),i=t(2),u=t(479),l=t(965);function m(){var e=Object(a.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n"]);return m=function(){return e},e}var p=Object(i.a)(l.a)(m());n.a=function(e){var n=e.type,t=e.objId,a=e.title,i=e.currentReport,l=e.reportCallback,m=e.text,d=e.children,f=Object(o.useState)(!1),s=Object(r.a)(f,2),b=s[0],v=s[1];return c.a.createElement(c.a.Fragment,null,c.a.createElement(p,{onClick:function(){return v(!0)},title:i?"\u5df2\u4e3e\u62a5":"\u70b9\u51fb\u4e3e\u62a5"},d||m),b&&c.a.createElement(u.a,{type:n,objId:t,title:a,currentReport:i,reportCallback:l,onHide:function(){return v(!1)}}))}},1009:function(e,n,t){"use strict";var r=t(10),a=t(1),o=t(0),c=t.n(o),i=t(2),u=t(141);function l(){var e=Object(a.a)(["\n  position: absolute;\n  top: -14px;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 100;\n"]);return l=function(){return e},e}function m(){var e=Object(a.a)(["\n  font-size: 20px;\n  font-weight: 600;\n"]);return m=function(){return e},e}function p(){var e=Object(a.a)(["\n  position: relative;\n  background-color: #f6f6f6;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 800px;\n"]);return p=function(){return e},e}function d(){var e=Object(a.a)(["\n  position: absolute;\n  left: 0px;\n  right: 0px;\n  top: 758px;\n  height: 38px;\n  z-index: 200;\n  background-color: white;\n"]);return d=function(){return e},e}function f(){var e=Object(a.a)(["\n  position: relative;\n  .bilibili-player-video-pause-panel-container-qrcode {\n    display: none !important;\n  }\n  iframe {\n    position: absolute;\n    left: 0px;\n    right: 0px;\n    width: 100% !important;\n    height: 800px;\n    margin: 0;\n    padding: 0;\n    .bilibili-player-video-pause-panel-container-qrcode {\n      display: none !important;\n    }\n  }\n  background-color: white;\n"]);return f=function(){return e},e}var s=i.a.div(f()),b=i.a.div(d()),v=i.a.div(p()),j=i.a.div(m()),h=i.a.div(l());n.a=function(e){var n=e.contentUrl,t=e.isContent,a=void 0===t||t,i=Object(o.useState)(""),l=Object(r.a)(i,2),m=l[0],p=l[1];return Object(o.useEffect)((function(){a?Object(u.a)(n,"data.content",(function(e){return p(e)})):p(n)}),[n]),c.a.createElement(s,null,c.a.createElement(v,null,c.a.createElement(j,null,"\u52a0\u8f7d\u4e2d..."),c.a.createElement(h,{dangerouslySetInnerHTML:{__html:m}})),c.a.createElement(b,{onClick:function(e){return e.stopPropagation()}}))}},987:function(e,n,t){"use strict";var r=t(10),a=t(1),o=t(0),c=t.n(o),i=t(2),u=t(60),l=t(33),m=t(69),p=t(61),d=t(332);function f(){var e=Object(a.a)([""]);return f=function(){return e},e}function s(){var e=Object(a.a)(["\n  cursor: pointer;\n  margin-right: 4px !important;\n  margin-bottom: 4px !important;\n"]);return s=function(){return e},e}function b(){var e=Object(a.a)(["\n  cursor: pointer;\n  font-size: 10px;\n  margin-right: 10px;\n"]);return b=function(){return e},e}function v(){var e=Object(a.a)(["\n  display: flex;\n  align-items: center;\n"]);return v=function(){return e},e}function j(){var e=Object(a.a)(["\n  cursor: pointer;\n  margin-left: 10px;\n"]);return j=function(){return e},e}function h(){var e=Object(a.a)(["\n  margin-right: 10px;\n"]);return h=function(){return e},e}function C(){var e=Object(a.a)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  justify-content: space-between;\n  margin-top: 10px;\n  color: #99a2aa;\n"]);return C=function(){return e},e}var g=i.a.div(C()),O=i.a.div(h()),y=i.a.div(j()),x=i.a.div(v()),E=i.a.div(b()),I=Object(i.a)(u.a)(s()),k=i.a.div(f());n.a=function(e){var n=e.commentId,t=e.dateCreated,a=e.onReply,i=function(e){var n=e.upCount,t=e.currentUpped,a=e.currentReport,c=Object(o.useState)(n),i=Object(r.a)(c,2),u=i[0],d=i[1],f=Object(o.useState)(a),s=Object(r.a)(f,2),b=s[0],v=s[1],j=Object(o.useState)(t),h=Object(r.a)(j,2),C=h[0],g=h[1],O=Object(l.a)(m.n,{onCompleted:function(e){var n=e.switchUpComment;d(n.upCount),g(n.currentUpped)},onError:function(){return p.a.error("\u70b9\u8d5e\u5931\u8d25")}}),y=Object(r.a)(O,2),x=y[0],E=y[1];E.data,E.loading;return{uCount:u,setUCount:d,cUpped:C,setCUpped:g,switchUpComment:x,report:b,setReport:v}}({upCount:e.upCount,currentUpped:e.currentUpped,currentReport:e.currentReport}),u=i.uCount,f=i.cUpped,s=i.switchUpComment,b=i.report,v=i.setReport;return c.a.createElement(g,null,c.a.createElement(x,null,c.a.createElement(O,null,t),c.a.createElement(I,{color:f?"red":"",onClick:function(e){e.stopPropagation(),s({variables:{commentId:n}})},name:f?"thumbs up":"thumbs up outline"}),u>0&&c.a.createElement(k,null,u),a&&c.a.createElement(y,{onClick:a},"\u56de\u590d")),c.a.createElement(E,{onClick:function(e){e.stopPropagation(),d.a.show("Comment",n,b,{reportCallback:function(e){return v(e)}})}},b?"\u5df2\u4e3e\u62a5":"\u4e3e\u62a5"))}},990:function(e,n,t){"use strict";var r=t(1),a=t(0),o=t.n(a),c=t(2),i=t(329),u=t(105),l=t(10),m=t(960),p=t(192),d=t(70),f=t(5),s=t.n(f),b=t(140),v=t(75);function j(){var e=Object(r.a)([""]);return j=function(){return e},e}function h(){var e=Object(r.a)(["\n  flex: 1;\n  padding: 10px;\n  height: 65px;\n  outline: none;\n  border-radius: 6px;\n  &:focus {\n    -moz-outline-radius: 6px;\n    border: 1px solid lightskyblue;\n  }\n"]);return h=function(){return e},e}function C(){var e=Object(r.a)(["\n  width: 100%;\n  display: flex;\n"]);return C=function(){return e},e}function g(){var e=Object(r.a)(["\n  width: 80px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n"]);return g=function(){return e},e}function O(){var e=Object(r.a)(["\n  display: flex;\n  width: 100%;\n  height: 70px;\n  margin-bottom: 30px;\n"]);return O=function(){return e},e}var y=c.a.div(O()),x=c.a.div(g()),E=c.a.div(C()),I=Object(c.a)(m.a)(h()),k=Object(c.a)(p.a)(j()),w=function(e){var n=e.objId,t=e.commentType,r=e.currentUser,c=e.refetchComments,i=e.repliedCommentId,u=e.parentId,m=e.replyPlaceholder,p=e.saveCallback,f=Object(a.useState)(""),j=Object(l.a)(f,2),h=j[0],C=j[1],g=Object(b.c)({refetch:c,commentType:t,repliedCommentId:i,parentId:u,objId:n,saveCallback:p,clearForm:function(){return C("")}}),O=g.mLoading,w=g.onSaveComment;return o.a.createElement(y,null,o.a.createElement(x,null,o.a.createElement(d.a,{width:54,size:"big",url:s()(r,"avatar.url")})),o.a.createElement(E,null,o.a.createElement(I,{onInput:function(e,n){var t=n.value;return C(t)},onFocus:function(){return v.a.checkLogin()},maxLength:255,rows:4,placeholder:m,value:h}),o.a.createElement(k,{loading:O,onClick:function(){return v.a.checkLogin((function(){return w(h)}))},style:{marginLeft:10},primary:!0},"\u53d1\u5e03")))},U=t(18),S=t.n(U),R=t(89),P=t(987),z=function(e){var n=e.commentType,t=e.objId,r=e.currentUser,a=e.refetchComments,c=e.repliedCommentId,i=e.parentId,u=e.replyPlaceholder,l=e.saveCallback;return o.a.createElement(w,{commentType:n,objId:t,saveCallback:l,repliedCommentId:c,currentUser:r,parentId:i,refetchComments:a,replyPlaceholder:u})},L=t(34),F=t.n(L),M=t(196);function T(){var e=Object(r.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n"]);return T=function(){return e},e}function _(){var e=Object(r.a)(["\n  width: 40px;\n"]);return _=function(){return e},e}function q(){var e=Object(r.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  margin-bottom: 20px;\n"]);return q=function(){return e},e}function H(){var e=Object(r.a)(["\n  color: #00a1d6;\n  margin-left: 10px;\n  margin-right: 10px;\n  cursor: pointer;\n"]);return H=function(){return e},e}function J(){var e=Object(r.a)(["\n  font-size: 14px;\n  margin-left: 10px;\n"]);return J=function(){return e},e}function K(){var e=Object(r.a)(["\n  text-align: left;\n"]);return K=function(){return e},e}function Q(){var e=Object(r.a)(["\n  color: #6d757a;\n  font-size: 16px;\n  font-weight: bold;\n  text-align: left;\n  cursor: pointer;\n"]);return Q=function(){return e},e}function W(){var e=Object(r.a)(["\n  margin-bottom: 10px;\n  display: flex;\n  align-items: center;\n"]);return W=function(){return e},e}function A(){var e=Object(r.a)(["\n  width: 100%;\n  display: flex;\n"]);return A=function(){return e},e}var B=c.a.div(A()),D=c.a.div(W()),G=c.a.div(Q()),N=c.a.div(K()),V=c.a.div(J()),X=c.a.span(H()),Y=function(e){var n=e.creator,t=e.repliedComment;return o.a.createElement(D,null,o.a.createElement(G,null,Object(R.a)(n,["nickname","username"])),t&&o.a.createElement(V,null,"\u56de\u590d",o.a.createElement(X,null,"@",Object(R.a)(t.creator,["nickname","username"])),":"))},Z=c.a.div(q()),$=c.a.div(_()),ee=c.a.div(T()),ne=function(e){var n=e.item,t=e.currentUser,r=e.objId,a=e.type,c=e.refchComments,i=e.parentId,u=e.onSaveCallback,l=n.creator,m=n.content,p=n.dateCreated,f=n.currentUpped,v=n.upCount,j=n.currentReport,h=Object(b.k)({repliedComment:n}),C=h.showReplyForm,g=h.setShowReplyForm,O=h.replyPlaceholder;return o.a.createElement(B,null,o.a.createElement($,null,o.a.createElement(d.a,{size:"small",width:30,avatar:s()(l,"avatar.url")})),o.a.createElement(ee,null,o.a.createElement(Z,null,o.a.createElement(Y,{creator:l,repliedComment:n.repliedComment}),o.a.createElement(N,null,m),o.a.createElement(P.a,{onReply:function(){return g(!C)},dateCreated:p,currentUpped:f,upCount:v,commentId:n.id,currentReport:j})),C&&o.a.createElement(z,{saveCallback:u,replyPlaceholder:O,parentId:i,currentUser:t,commentType:a,objId:r,refetchComments:c,repliedCommentId:n.id})))};function te(){var e=Object(r.a)(["\n  cursor: pointer;\n  color: #00a1d6;\n"]);return te=function(){return e},e}function re(){var e=Object(r.a)(["\n  text-align: left;\n  color: #6d757a;\n  font-size: 12px;\n"]);return re=function(){return e},e}function ae(){var e=Object(r.a)([""]);return ae=function(){return e},e}var oe=c.a.div(ae()),ce=c.a.div(re()),ie=c.a.span(te()),ue=function(e){var n=e.commentsCount,t=e.onCheckMore;return n<3?null:o.a.createElement(ce,null,"\u5171",o.a.createElement("b",null,n),"\u6761\u56de\u590d\uff0c",o.a.createElement(ie,{onClick:t},"\u70b9\u51fb\u67e5\u770b"))},le=function(e){var n=e.currentUser,t=e.objId,r=e.type,c=e.parentId,i=e.onCheckMore,u=function(e){var n=e.item,t=n.last3Comments,r=Object(a.useState)(t),o=Object(l.a)(r,2),c=o[0],i=o[1],u=Object(a.useState)(n.subCommentsCount),m=Object(l.a)(u,2);return{subComments:c,subCommentsCount:m[0],setSubComments:i,setSubCommentsCount:m[1]}}({item:e.item}),m=u.subComments,p=u.subCommentsCount,d=u.setSubComments,f=u.setSubCommentsCount;return o.a.createElement(oe,null,S()(m,(function(e){return o.a.createElement(ne,{key:"sub_comment_"+e.id,item:e,type:r,currentUser:n,objId:t,onSaveCallback:function(e){f(p+1),d([e].concat(Object(M.a)(m)))},parentId:c})})),o.a.createElement(ue,{commentsCount:p,onCheckMore:i}))};function me(){var e=Object(r.a)([""]);return me=function(){return e},e}function pe(){var e=Object(r.a)(["\n  .paginationWrapper {\n    display: flex;\n    justify-content: flex-start;\n  }\n"]);return pe=function(){return e},e}var de=c.a.div(pe()),fe=c.a.div(me()),se=function(e){var n=e.objId,t=e.type,r=e.currentUser,a=e.parentId;return o.a.createElement(de,null,o.a.createElement(i.a,{searchFields:{objId:n,parentId:a,types:[t],isUserQuery:!0,sort:"dateCreated",order:"asc"},hidePaginationInSinglePage:!0,gql:u.d,paginationSecondary:!0,paginationSize:"mini",dataKey:"comments",limit:10},(function(e){e.loading,e.count;var c=e.items,i=e.refetch;return o.a.createElement(fe,null,S()(c,(function(e){return o.a.createElement(ne,{key:"sub_comment_"+e.id,refchComments:i,currentUser:r,objId:n,item:e,type:t,parentId:a})})))})))};function be(){var e=Object(r.a)(["\n  margin-bottom: 20px;\n"]);return be=function(){return e},e}var ve=c.a.div(be()),je=function(e){var n=e.item,t=e.currentUser,r=e.objId,c=e.type,i=function(e){e.item;var n=Object(a.useState)(!1),t=Object(l.a)(n,2);return{checkMore:t[0],setCheckMore:t[1]}}({item:n}),u=i.checkMore,m=i.setCheckMore;return F()(n.last3Comments)?null:o.a.createElement(ve,null,u?o.a.createElement(se,{objId:r,currentUser:t,type:c,parentId:n.id}):o.a.createElement(le,{objId:r,type:c,item:n,parentId:n.id,onCheckMore:function(){return m(!0)},currentUser:t}))};function he(){var e=Object(r.a)(["\n  text-align: left;\n"]);return he=function(){return e},e}function Ce(){var e=Object(r.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  margin-bottom: 20px;\n"]);return Ce=function(){return e},e}function ge(){var e=Object(r.a)(["\n  color: #6d757a;\n  font-size: 16px;\n  font-weight: bold;\n  text-align: left;\n"]);return ge=function(){return e},e}function Oe(){var e=Object(r.a)(["\n  margin-bottom: 10px;\n"]);return Oe=function(){return e},e}function ye(){var e=Object(r.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n"]);return ye=function(){return e},e}function xe(){var e=Object(r.a)(["\n  width: 80px;\n"]);return xe=function(){return e},e}function Ee(){var e=Object(r.a)(["\n  width: 100%;\n  display: flex;\n  margin-bottom: 24px;\n  padding-bottom: 20px;\n  border-bottom: 1px solid\n    ",";\n"]);return Ee=function(){return e},e}var Ie=c.a.div(Ee(),(function(e){return e.isLastOne?"transparent":"#e5e9ef"})),ke=c.a.div(xe()),we=c.a.div(ye()),Ue=c.a.div(Oe()),Se=c.a.div(ge()),Re=function(e){var n=e.creator;return o.a.createElement(Ue,null,o.a.createElement(Se,null,Object(R.a)(n,["nickname","username"])))},Pe=c.a.div(Ce()),ze=c.a.div(he()),Le=function(e){var n=e.item,t=e.currentUser,r=e.objId,a=e.type,c=e.refetchComments,i=e.isLastOne,u=n.creator,m=n.content,p=n.dateCreated,f=n.id,v=n.currentUpped,j=n.upCount,h=n.currentReport,C=Object(b.k)({repliedComment:n}),g=C.showReplyForm,O=C.setShowReplyForm,y=C.replyPlaceholder,x=Object(b.j)(),E=Object(l.a)(x,2),I=E[0],k=E[1];return o.a.createElement(Ie,{key:I,isLastOne:i},o.a.createElement(ke,null,o.a.createElement(d.a,{size:"large",width:50,avatar:s()(u,"avatar.url")})),o.a.createElement(we,null,o.a.createElement(Pe,null,o.a.createElement(Re,{creator:u}),o.a.createElement(ze,null,m),o.a.createElement(P.a,{onReply:function(){return O(!g)},dateCreated:p,currentUpped:v,upCount:j,commentId:f,currentReport:h})),o.a.createElement(je,{type:a,currentUser:t,objId:r,item:n}),g&&o.a.createElement(z,{refetchComments:function(){c().then((function(e){k()}))},replyPlaceholder:y,parentId:f,currentUser:t,commentType:a,objId:r})))},Fe=t(194);function Me(){var e=Object(r.a)(["\n  margin-bottom: 30px;\n"]);return Me=function(){return e},e}function Te(){var e=Object(r.a)(["\n  .paginationWrapper {\n    display: flex;\n    justify-content: flex-start;\n  }\n"]);return Te=function(){return e},e}var _e=c.a.div(Te()),qe=c.a.div(Me());n.a=function(e){var n=e.objId,t=e.type;return o.a.createElement(Fe.a.Consumer,null,(function(e){var r=e.currentUser;return o.a.createElement(_e,null,o.a.createElement(i.a,{searchFields:{objId:n,types:[t],isUserQuery:!0,searchParentComment:!0},hidePaginationInSinglePage:!0,gql:u.d,paginationSize:"mini",paginationSecondary:!0,dataKey:"comments",limit:10},(function(e){e.loading,e.count;var a=e.items,c=e.refetch;return o.a.createElement(qe,null,o.a.createElement(w,{objId:n,commentType:t,currentUser:r,refetchComments:c}),S()(a,(function(e,i){return o.a.createElement(Le,{key:"comment_"+e.id,item:e,isLastOne:i+1===a.length,objId:n,type:t,refetchComments:c,currentUser:r})})))})))}))}},993:function(e,n,t){"use strict";var r=t(10),a=t(1),o=t(0),c=t.n(o),i=t(33),u=t(54),l=t(61);function m(){var e=Object(a.a)(["\n  display: flex;\n  align-items: center;\n"]);return m=function(){return e},e}var p=t(2).a.div(m());n.a=function(e){var n=e.variables,t=e.children,a=e.gql,o=e.autoLoading,m=e.onCompleted,d=e.onError,f=Object(i.a)(a,{variables:n,onCompleted:m,onError:d||function(e){l.a.error(e.toString())}}),s=Object(r.a)(f,2),b=s[0],v=s[1],j=(v.data,v.loading),h=c.a.createElement(p,{onClick:function(){return b({variables:n})}},t);return o&&j?c.a.createElement(u.a,null,h):h}}}]);
//# sourceMappingURL=0.67821d81.chunk.js.map