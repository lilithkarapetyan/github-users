(this["webpackJsonpgithub-users"]=this["webpackJsonpgithub-users"]||[]).push([[0],[,,function(t,s,e){t.exports={Button:"button_Button__QQGlf",Success:"button_Success__2rI35",Danger:"button_Danger__3r57k",Close:"button_Close__1r4AP",Add:"button_Add__3-uBV"}},,,,function(t,s,e){t.exports={UsersList:"editableUsersList_UsersList__3RqIy",EditableListItem:"editableUsersList_EditableListItem__3RemB"}},,,,function(t,s,e){t.exports={User:"user_User__3HiJO",Texts:"user_Texts__1adNO"}},,,,function(t,s,e){t.exports={Input:"input_Input__3APXa",Invalid:"input_Invalid__DDR-y"}},function(t,s,e){t.exports=e.p+"static/media/no-profile-pic.896129ac.svg"},function(t,s,e){t.exports={InputContainer:"userForm_InputContainer__1V4TR"}},,function(t,s,e){t.exports={UsersDashboard:"usersDashboard_UsersDashboard__2TM8b"}},function(t,s,e){t.exports=e(27)},,,,,function(t,s,e){},function(t,s,e){},,function(t,s,e){"use strict";e.r(s);var r=e(0),i=e.n(r),u=e(13),a=e.n(u),o=(e(24),e(25),e(3)),n=e(1),p=e(4),l=e(5),c=e(8),h=e(7),g=e(10),m=e.n(g),_=e(6),b=e.n(_),v=e(2),d=e.n(v),f=function(t){var s={clicked:t.clicked,classNames:[d.a.Button,t.classNames||""]};switch(t.type){case"EDIT":s=Object(n.a)(Object(n.a)({},s),{},{text:"Edit"});break;case"CANCEL":s=Object(n.a)(Object(n.a)({},s),{},{text:"Cancel",classNames:[].concat(Object(o.a)(s.classNames),[d.a.Danger])});break;case"SAVE":s=Object(n.a)(Object(n.a)({},s),{},{text:"Save",classNames:[].concat(Object(o.a)(s.classNames),[d.a.Success])});break;default:s=Object(n.a)({},t)}return s.classNames&&Array.isArray(s.classNames)&&(s.classNames=s.classNames.join(" ")),i.a.createElement("button",{onClick:s.clicked,className:s.classNames},s.text)},w=e(14),y=e.n(w),j=function(t){var s=[y.a.Input,t.classNames||""].join(" ");return i.a.createElement("input",{onClick:t.onClick,className:s,placeholder:t.placeholder,value:t.value,onChange:function(s){return t.onChange(s.target.value)}})},k=function(t){return i.a.createElement("span",{onClick:t.onClose,className:d.a.Close},"\xd7")},E=function(t){return i.a.createElement("span",{className:d.a.Add,onClick:t.createUser},"+")},U="EDIT",z="SAVE",D="CANCEL",N=e(15),O=e.n(N),M=function(t){return i.a.createElement("div",{className:[m.a.User,b.a.EditableListItem].join(" ")},i.a.createElement(k,{onClose:t.onClose}),i.a.createElement("a",{href:t.user.html_url,target:"_blank",rel:"noopener noreferrer"},i.a.createElement("img",{src:t.user.avatar_url||O.a,alt:"avatar pic"})),i.a.createElement("div",{className:m.a.Texts},i.a.createElement("h3",null,t.user.login),i.a.createElement("span",null,t.user.type)),t.edit?i.a.createElement(f,{type:U,clicked:t.edit}):"")},Q=function(t){Object(c.a)(e,t);var s=Object(h.a)(e);function e(){var t;Object(p.a)(this,e);for(var r=arguments.length,i=new Array(r),u=0;u<r;u++)i[u]=arguments[u];return(t=s.call.apply(s,[this].concat(i))).state={isEditing:t.props.isEditing||!1},t.edit=function(){t.setState(Object(n.a)(Object(n.a)({},t.state),{},{isEditing:!0}))},t.cancelEdit=function(){t.setState(Object(n.a)(Object(n.a)({},t.state),{},{isEditing:!1}),(function(){return t.props.cancelEdit()}))},t.editUser=function(s){t.setState(Object(n.a)(Object(n.a)({},t.state),{},{isEditing:!1}),(function(){return t.props.editUser(s)}))},t}return Object(l.a)(e,[{key:"render",value:function(){return this.state.isEditing?i.a.createElement(I,Object.assign({},this.props,{editUser:this.editUser,cancelEdit:this.cancelEdit})):i.a.createElement(M,Object.assign({},this.props,{edit:this.edit}))}}]),e}(r.Component),V=function(t){return i.a.createElement("div",{className:b.a.UsersList},t.users.map((function(s){return i.a.createElement(Q,{key:s.id,user:s,editUser:t.editUser,cancelEdit:function(){return t.cancelEdit(s)},isEditing:s.isEditing,onClose:function(){return t.deleteUser(s)}})})))},x=e(9),X=e(16),C=e.n(X),I=function(t){Object(c.a)(e,t);var s=Object(h.a)(e);function e(){var t;Object(p.a)(this,e);for(var r=arguments.length,i=new Array(r),u=0;u<r;u++)i[u]=arguments[u];return(t=s.call.apply(s,[this].concat(i))).state={user:t.props.user},t.onChange=function(s,e){t.setState({user:Object(n.a)(Object(n.a)({},t.state.user),{},Object(x.a)({},s,e))})},t}return Object(l.a)(e,[{key:"render",value:function(){var t=this;return i.a.createElement("div",{className:b.a.EditableListItem},i.a.createElement("div",{className:C.a.InputContainer},[{id:"login",title:"Username"},{id:"type",title:"User type"},{id:"avatar_url",title:"Avatar Url"},{id:"html_url",title:"Profile Url"}].map((function(s){return i.a.createElement(r.Fragment,{key:s.id},i.a.createElement("span",null,s.title),i.a.createElement(j,{value:t.state.user[s.id],onChange:function(e){return t.onChange(s.id,e)}}))}))),i.a.createElement("div",null,i.a.createElement(f,{type:z,clicked:function(){return t.props.editUser(t.state.user)}}),i.a.createElement(f,{type:D,clicked:this.props.cancelEdit})))}}]),e}(r.Component),A=e(11),S=e.n(A),K=e(17),L=function(){var t=Object(K.a)(S.a.mark((function t(){var s;return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,s={data:[{login:"mojombo",id:1,node_id:"MDQ6VXNlcjE=",avatar_url:"https://avatars0.githubusercontent.com/u/1?v=4",gravatar_id:"",url:"https://api.github.com/users/mojombo",html_url:"https://github.com/mojombo",followers_url:"https://api.github.com/users/mojombo/followers",following_url:"https://api.github.com/users/mojombo/following{/other_user}",gists_url:"https://api.github.com/users/mojombo/gists{/gist_id}",starred_url:"https://api.github.com/users/mojombo/starred{/owner}{/repo}",subscriptions_url:"https://api.github.com/users/mojombo/subscriptions",organizations_url:"https://api.github.com/users/mojombo/orgs",repos_url:"https://api.github.com/users/mojombo/repos",events_url:"https://api.github.com/users/mojombo/events{/privacy}",received_events_url:"https://api.github.com/users/mojombo/received_events",type:"User",site_admin:!1},{login:"defunkt",id:2,node_id:"MDQ6VXNlcjI=",avatar_url:"https://avatars0.githubusercontent.com/u/2?v=4",gravatar_id:"",url:"https://api.github.com/users/defunkt",html_url:"https://github.com/defunkt",followers_url:"https://api.github.com/users/defunkt/followers",following_url:"https://api.github.com/users/defunkt/following{/other_user}",gists_url:"https://api.github.com/users/defunkt/gists{/gist_id}",starred_url:"https://api.github.com/users/defunkt/starred{/owner}{/repo}",subscriptions_url:"https://api.github.com/users/defunkt/subscriptions",organizations_url:"https://api.github.com/users/defunkt/orgs",repos_url:"https://api.github.com/users/defunkt/repos",events_url:"https://api.github.com/users/defunkt/events{/privacy}",received_events_url:"https://api.github.com/users/defunkt/received_events",type:"User",site_admin:!1},{login:"pjhyett",id:3,node_id:"MDQ6VXNlcjM=",avatar_url:"https://avatars0.githubusercontent.com/u/3?v=4",gravatar_id:"",url:"https://api.github.com/users/pjhyett",html_url:"https://github.com/pjhyett",followers_url:"https://api.github.com/users/pjhyett/followers",following_url:"https://api.github.com/users/pjhyett/following{/other_user}",gists_url:"https://api.github.com/users/pjhyett/gists{/gist_id}",starred_url:"https://api.github.com/users/pjhyett/starred{/owner}{/repo}",subscriptions_url:"https://api.github.com/users/pjhyett/subscriptions",organizations_url:"https://api.github.com/users/pjhyett/orgs",repos_url:"https://api.github.com/users/pjhyett/repos",events_url:"https://api.github.com/users/pjhyett/events{/privacy}",received_events_url:"https://api.github.com/users/pjhyett/received_events",type:"User",site_admin:!1},{login:"wycats",id:4,node_id:"MDQ6VXNlcjQ=",avatar_url:"https://avatars0.githubusercontent.com/u/4?v=4",gravatar_id:"",url:"https://api.github.com/users/wycats",html_url:"https://github.com/wycats",followers_url:"https://api.github.com/users/wycats/followers",following_url:"https://api.github.com/users/wycats/following{/other_user}",gists_url:"https://api.github.com/users/wycats/gists{/gist_id}",starred_url:"https://api.github.com/users/wycats/starred{/owner}{/repo}",subscriptions_url:"https://api.github.com/users/wycats/subscriptions",organizations_url:"https://api.github.com/users/wycats/orgs",repos_url:"https://api.github.com/users/wycats/repos",events_url:"https://api.github.com/users/wycats/events{/privacy}",received_events_url:"https://api.github.com/users/wycats/received_events",type:"User",site_admin:!1},{login:"ezmobius",id:5,node_id:"MDQ6VXNlcjU=",avatar_url:"https://avatars0.githubusercontent.com/u/5?v=4",gravatar_id:"",url:"https://api.github.com/users/ezmobius",html_url:"https://github.com/ezmobius",followers_url:"https://api.github.com/users/ezmobius/followers",following_url:"https://api.github.com/users/ezmobius/following{/other_user}",gists_url:"https://api.github.com/users/ezmobius/gists{/gist_id}",starred_url:"https://api.github.com/users/ezmobius/starred{/owner}{/repo}",subscriptions_url:"https://api.github.com/users/ezmobius/subscriptions",organizations_url:"https://api.github.com/users/ezmobius/orgs",repos_url:"https://api.github.com/users/ezmobius/repos",events_url:"https://api.github.com/users/ezmobius/events{/privacy}",received_events_url:"https://api.github.com/users/ezmobius/received_events",type:"User",site_admin:!1},{login:"ivey",id:6,node_id:"MDQ6VXNlcjY=",avatar_url:"https://avatars0.githubusercontent.com/u/6?v=4",gravatar_id:"",url:"https://api.github.com/users/ivey",html_url:"https://github.com/ivey",followers_url:"https://api.github.com/users/ivey/followers",following_url:"https://api.github.com/users/ivey/following{/other_user}",gists_url:"https://api.github.com/users/ivey/gists{/gist_id}",starred_url:"https://api.github.com/users/ivey/starred{/owner}{/repo}",subscriptions_url:"https://api.github.com/users/ivey/subscriptions",organizations_url:"https://api.github.com/users/ivey/orgs",repos_url:"https://api.github.com/users/ivey/repos",events_url:"https://api.github.com/users/ivey/events{/privacy}",received_events_url:"https://api.github.com/users/ivey/received_events",type:"User",site_admin:!1},{login:"evanphx",id:7,node_id:"MDQ6VXNlcjc=",avatar_url:"https://avatars0.githubusercontent.com/u/7?v=4",gravatar_id:"",url:"https://api.github.com/users/evanphx",html_url:"https://github.com/evanphx",followers_url:"https://api.github.com/users/evanphx/followers",following_url:"https://api.github.com/users/evanphx/following{/other_user}",gists_url:"https://api.github.com/users/evanphx/gists{/gist_id}",starred_url:"https://api.github.com/users/evanphx/starred{/owner}{/repo}",subscriptions_url:"https://api.github.com/users/evanphx/subscriptions",organizations_url:"https://api.github.com/users/evanphx/orgs",repos_url:"https://api.github.com/users/evanphx/repos",events_url:"https://api.github.com/users/evanphx/events{/privacy}",received_events_url:"https://api.github.com/users/evanphx/received_events",type:"User",site_admin:!1},{login:"vanpelt",id:17,node_id:"MDQ6VXNlcjE3",avatar_url:"https://avatars1.githubusercontent.com/u/17?v=4",gravatar_id:"",url:"https://api.github.com/users/vanpelt",html_url:"https://github.com/vanpelt",followers_url:"https://api.github.com/users/vanpelt/followers",following_url:"https://api.github.com/users/vanpelt/following{/other_user}",gists_url:"https://api.github.com/users/vanpelt/gists{/gist_id}",starred_url:"https://api.github.com/users/vanpelt/starred{/owner}{/repo}",subscriptions_url:"https://api.github.com/users/vanpelt/subscriptions",organizations_url:"https://api.github.com/users/vanpelt/orgs",repos_url:"https://api.github.com/users/vanpelt/repos",events_url:"https://api.github.com/users/vanpelt/events{/privacy}",received_events_url:"https://api.github.com/users/vanpelt/received_events",type:"User",site_admin:!1},{login:"wayneeseguin",id:18,node_id:"MDQ6VXNlcjE4",avatar_url:"https://avatars0.githubusercontent.com/u/18?v=4",gravatar_id:"",url:"https://api.github.com/users/wayneeseguin",html_url:"https://github.com/wayneeseguin",followers_url:"https://api.github.com/users/wayneeseguin/followers",following_url:"https://api.github.com/users/wayneeseguin/following{/other_user}",gists_url:"https://api.github.com/users/wayneeseguin/gists{/gist_id}",starred_url:"https://api.github.com/users/wayneeseguin/starred{/owner}{/repo}",subscriptions_url:"https://api.github.com/users/wayneeseguin/subscriptions",organizations_url:"https://api.github.com/users/wayneeseguin/orgs",repos_url:"https://api.github.com/users/wayneeseguin/repos",events_url:"https://api.github.com/users/wayneeseguin/events{/privacy}",received_events_url:"https://api.github.com/users/wayneeseguin/received_events",type:"User",site_admin:!1},{login:"brynary",id:19,node_id:"MDQ6VXNlcjE5",avatar_url:"https://avatars0.githubusercontent.com/u/19?v=4",gravatar_id:"",url:"https://api.github.com/users/brynary",html_url:"https://github.com/brynary",followers_url:"https://api.github.com/users/brynary/followers",following_url:"https://api.github.com/users/brynary/following{/other_user}",gists_url:"https://api.github.com/users/brynary/gists{/gist_id}",starred_url:"https://api.github.com/users/brynary/starred{/owner}{/repo}",subscriptions_url:"https://api.github.com/users/brynary/subscriptions",organizations_url:"https://api.github.com/users/brynary/orgs",repos_url:"https://api.github.com/users/brynary/repos",events_url:"https://api.github.com/users/brynary/events{/privacy}",received_events_url:"https://api.github.com/users/brynary/received_events",type:"User",site_admin:!1},{login:"kevinclark",id:20,node_id:"MDQ6VXNlcjIw",avatar_url:"https://avatars3.githubusercontent.com/u/20?v=4",gravatar_id:"",url:"https://api.github.com/users/kevinclark",html_url:"https://github.com/kevinclark",followers_url:"https://api.github.com/users/kevinclark/followers",following_url:"https://api.github.com/users/kevinclark/following{/other_user}",gists_url:"https://api.github.com/users/kevinclark/gists{/gist_id}",starred_url:"https://api.github.com/users/kevinclark/starred{/owner}{/repo}",subscriptions_url:"https://api.github.com/users/kevinclark/subscriptions",organizations_url:"https://api.github.com/users/kevinclark/orgs",repos_url:"https://api.github.com/users/kevinclark/repos",events_url:"https://api.github.com/users/kevinclark/events{/privacy}",received_events_url:"https://api.github.com/users/kevinclark/received_events",type:"User",site_admin:!1},{login:"technoweenie",id:21,node_id:"MDQ6VXNlcjIx",avatar_url:"https://avatars3.githubusercontent.com/u/21?v=4",gravatar_id:"",url:"https://api.github.com/users/technoweenie",html_url:"https://github.com/technoweenie",followers_url:"https://api.github.com/users/technoweenie/followers",following_url:"https://api.github.com/users/technoweenie/following{/other_user}",gists_url:"https://api.github.com/users/technoweenie/gists{/gist_id}",starred_url:"https://api.github.com/users/technoweenie/starred{/owner}{/repo}",subscriptions_url:"https://api.github.com/users/technoweenie/subscriptions",organizations_url:"https://api.github.com/users/technoweenie/orgs",repos_url:"https://api.github.com/users/technoweenie/repos",events_url:"https://api.github.com/users/technoweenie/events{/privacy}",received_events_url:"https://api.github.com/users/technoweenie/received_events",type:"User",site_admin:!1},{login:"macournoyer",id:22,node_id:"MDQ6VXNlcjIy",avatar_url:"https://avatars3.githubusercontent.com/u/22?v=4",gravatar_id:"",url:"https://api.github.com/users/macournoyer",html_url:"https://github.com/macournoyer",followers_url:"https://api.github.com/users/macournoyer/followers",following_url:"https://api.github.com/users/macournoyer/following{/other_user}",gists_url:"https://api.github.com/users/macournoyer/gists{/gist_id}",starred_url:"https://api.github.com/users/macournoyer/starred{/owner}{/repo}",subscriptions_url:"https://api.github.com/users/macournoyer/subscriptions",organizations_url:"https://api.github.com/users/macournoyer/orgs",repos_url:"https://api.github.com/users/macournoyer/repos",events_url:"https://api.github.com/users/macournoyer/events{/privacy}",received_events_url:"https://api.github.com/users/macournoyer/received_events",type:"User",site_admin:!1},{login:"takeo",id:23,node_id:"MDQ6VXNlcjIz",avatar_url:"https://avatars3.githubusercontent.com/u/23?v=4",gravatar_id:"",url:"https://api.github.com/users/takeo",html_url:"https://github.com/takeo",followers_url:"https://api.github.com/users/takeo/followers",following_url:"https://api.github.com/users/takeo/following{/other_user}",gists_url:"https://api.github.com/users/takeo/gists{/gist_id}",starred_url:"https://api.github.com/users/takeo/starred{/owner}{/repo}",subscriptions_url:"https://api.github.com/users/takeo/subscriptions",organizations_url:"https://api.github.com/users/takeo/orgs",repos_url:"https://api.github.com/users/takeo/repos",events_url:"https://api.github.com/users/takeo/events{/privacy}",received_events_url:"https://api.github.com/users/takeo/received_events",type:"User",site_admin:!1},{login:"caged",id:25,node_id:"MDQ6VXNlcjI1",avatar_url:"https://avatars3.githubusercontent.com/u/25?v=4",gravatar_id:"",url:"https://api.github.com/users/caged",html_url:"https://github.com/caged",followers_url:"https://api.github.com/users/caged/followers",following_url:"https://api.github.com/users/caged/following{/other_user}",gists_url:"https://api.github.com/users/caged/gists{/gist_id}",starred_url:"https://api.github.com/users/caged/starred{/owner}{/repo}",subscriptions_url:"https://api.github.com/users/caged/subscriptions",organizations_url:"https://api.github.com/users/caged/orgs",repos_url:"https://api.github.com/users/caged/repos",events_url:"https://api.github.com/users/caged/events{/privacy}",received_events_url:"https://api.github.com/users/caged/received_events",type:"User",site_admin:!1},{login:"topfunky",id:26,node_id:"MDQ6VXNlcjI2",avatar_url:"https://avatars3.githubusercontent.com/u/26?v=4",gravatar_id:"",url:"https://api.github.com/users/topfunky",html_url:"https://github.com/topfunky",followers_url:"https://api.github.com/users/topfunky/followers",following_url:"https://api.github.com/users/topfunky/following{/other_user}",gists_url:"https://api.github.com/users/topfunky/gists{/gist_id}",starred_url:"https://api.github.com/users/topfunky/starred{/owner}{/repo}",subscriptions_url:"https://api.github.com/users/topfunky/subscriptions",organizations_url:"https://api.github.com/users/topfunky/orgs",repos_url:"https://api.github.com/users/topfunky/repos",events_url:"https://api.github.com/users/topfunky/events{/privacy}",received_events_url:"https://api.github.com/users/topfunky/received_events",type:"User",site_admin:!1},{login:"anotherjesse",id:27,node_id:"MDQ6VXNlcjI3",avatar_url:"https://avatars3.githubusercontent.com/u/27?v=4",gravatar_id:"",url:"https://api.github.com/users/anotherjesse",html_url:"https://github.com/anotherjesse",followers_url:"https://api.github.com/users/anotherjesse/followers",following_url:"https://api.github.com/users/anotherjesse/following{/other_user}",gists_url:"https://api.github.com/users/anotherjesse/gists{/gist_id}",starred_url:"https://api.github.com/users/anotherjesse/starred{/owner}{/repo}",subscriptions_url:"https://api.github.com/users/anotherjesse/subscriptions",organizations_url:"https://api.github.com/users/anotherjesse/orgs",repos_url:"https://api.github.com/users/anotherjesse/repos",events_url:"https://api.github.com/users/anotherjesse/events{/privacy}",received_events_url:"https://api.github.com/users/anotherjesse/received_events",type:"User",site_admin:!1},{login:"roland",id:28,node_id:"MDQ6VXNlcjI4",avatar_url:"https://avatars2.githubusercontent.com/u/28?v=4",gravatar_id:"",url:"https://api.github.com/users/roland",html_url:"https://github.com/roland",followers_url:"https://api.github.com/users/roland/followers",following_url:"https://api.github.com/users/roland/following{/other_user}",gists_url:"https://api.github.com/users/roland/gists{/gist_id}",starred_url:"https://api.github.com/users/roland/starred{/owner}{/repo}",subscriptions_url:"https://api.github.com/users/roland/subscriptions",organizations_url:"https://api.github.com/users/roland/orgs",repos_url:"https://api.github.com/users/roland/repos",events_url:"https://api.github.com/users/roland/events{/privacy}",received_events_url:"https://api.github.com/users/roland/received_events",type:"User",site_admin:!1},{login:"lukas",id:29,node_id:"MDQ6VXNlcjI5",avatar_url:"https://avatars2.githubusercontent.com/u/29?v=4",gravatar_id:"",url:"https://api.github.com/users/lukas",html_url:"https://github.com/lukas",followers_url:"https://api.github.com/users/lukas/followers",following_url:"https://api.github.com/users/lukas/following{/other_user}",gists_url:"https://api.github.com/users/lukas/gists{/gist_id}",starred_url:"https://api.github.com/users/lukas/starred{/owner}{/repo}",subscriptions_url:"https://api.github.com/users/lukas/subscriptions",organizations_url:"https://api.github.com/users/lukas/orgs",repos_url:"https://api.github.com/users/lukas/repos",events_url:"https://api.github.com/users/lukas/events{/privacy}",received_events_url:"https://api.github.com/users/lukas/received_events",type:"User",site_admin:!1},{login:"fanvsfan",id:30,node_id:"MDQ6VXNlcjMw",avatar_url:"https://avatars2.githubusercontent.com/u/30?v=4",gravatar_id:"",url:"https://api.github.com/users/fanvsfan",html_url:"https://github.com/fanvsfan",followers_url:"https://api.github.com/users/fanvsfan/followers",following_url:"https://api.github.com/users/fanvsfan/following{/other_user}",gists_url:"https://api.github.com/users/fanvsfan/gists{/gist_id}",starred_url:"https://api.github.com/users/fanvsfan/starred{/owner}{/repo}",subscriptions_url:"https://api.github.com/users/fanvsfan/subscriptions",organizations_url:"https://api.github.com/users/fanvsfan/orgs",repos_url:"https://api.github.com/users/fanvsfan/repos",events_url:"https://api.github.com/users/fanvsfan/events{/privacy}",received_events_url:"https://api.github.com/users/fanvsfan/received_events",type:"User",site_admin:!1},{login:"tomtt",id:31,node_id:"MDQ6VXNlcjMx",avatar_url:"https://avatars2.githubusercontent.com/u/31?v=4",gravatar_id:"",url:"https://api.github.com/users/tomtt",html_url:"https://github.com/tomtt",followers_url:"https://api.github.com/users/tomtt/followers",following_url:"https://api.github.com/users/tomtt/following{/other_user}",gists_url:"https://api.github.com/users/tomtt/gists{/gist_id}",starred_url:"https://api.github.com/users/tomtt/starred{/owner}{/repo}",subscriptions_url:"https://api.github.com/users/tomtt/subscriptions",organizations_url:"https://api.github.com/users/tomtt/orgs",repos_url:"https://api.github.com/users/tomtt/repos",events_url:"https://api.github.com/users/tomtt/events{/privacy}",received_events_url:"https://api.github.com/users/tomtt/received_events",type:"User",site_admin:!1},{login:"railsjitsu",id:32,node_id:"MDQ6VXNlcjMy",avatar_url:"https://avatars2.githubusercontent.com/u/32?v=4",gravatar_id:"",url:"https://api.github.com/users/railsjitsu",html_url:"https://github.com/railsjitsu",followers_url:"https://api.github.com/users/railsjitsu/followers",following_url:"https://api.github.com/users/railsjitsu/following{/other_user}",gists_url:"https://api.github.com/users/railsjitsu/gists{/gist_id}",starred_url:"https://api.github.com/users/railsjitsu/starred{/owner}{/repo}",subscriptions_url:"https://api.github.com/users/railsjitsu/subscriptions",organizations_url:"https://api.github.com/users/railsjitsu/orgs",repos_url:"https://api.github.com/users/railsjitsu/repos",events_url:"https://api.github.com/users/railsjitsu/events{/privacy}",received_events_url:"https://api.github.com/users/railsjitsu/received_events",type:"User",site_admin:!1},{login:"nitay",id:34,node_id:"MDQ6VXNlcjM0",avatar_url:"https://avatars2.githubusercontent.com/u/34?v=4",gravatar_id:"",url:"https://api.github.com/users/nitay",html_url:"https://github.com/nitay",followers_url:"https://api.github.com/users/nitay/followers",following_url:"https://api.github.com/users/nitay/following{/other_user}",gists_url:"https://api.github.com/users/nitay/gists{/gist_id}",starred_url:"https://api.github.com/users/nitay/starred{/owner}{/repo}",subscriptions_url:"https://api.github.com/users/nitay/subscriptions",organizations_url:"https://api.github.com/users/nitay/orgs",repos_url:"https://api.github.com/users/nitay/repos",events_url:"https://api.github.com/users/nitay/events{/privacy}",received_events_url:"https://api.github.com/users/nitay/received_events",type:"User",site_admin:!1},{login:"kevwil",id:35,node_id:"MDQ6VXNlcjM1",avatar_url:"https://avatars2.githubusercontent.com/u/35?v=4",gravatar_id:"",url:"https://api.github.com/users/kevwil",html_url:"https://github.com/kevwil",followers_url:"https://api.github.com/users/kevwil/followers",following_url:"https://api.github.com/users/kevwil/following{/other_user}",gists_url:"https://api.github.com/users/kevwil/gists{/gist_id}",starred_url:"https://api.github.com/users/kevwil/starred{/owner}{/repo}",subscriptions_url:"https://api.github.com/users/kevwil/subscriptions",organizations_url:"https://api.github.com/users/kevwil/orgs",repos_url:"https://api.github.com/users/kevwil/repos",events_url:"https://api.github.com/users/kevwil/events{/privacy}",received_events_url:"https://api.github.com/users/kevwil/received_events",type:"User",site_admin:!1},{login:"KirinDave",id:36,node_id:"MDQ6VXNlcjM2",avatar_url:"https://avatars2.githubusercontent.com/u/36?v=4",gravatar_id:"",url:"https://api.github.com/users/KirinDave",html_url:"https://github.com/KirinDave",followers_url:"https://api.github.com/users/KirinDave/followers",following_url:"https://api.github.com/users/KirinDave/following{/other_user}",gists_url:"https://api.github.com/users/KirinDave/gists{/gist_id}",starred_url:"https://api.github.com/users/KirinDave/starred{/owner}{/repo}",subscriptions_url:"https://api.github.com/users/KirinDave/subscriptions",organizations_url:"https://api.github.com/users/KirinDave/orgs",repos_url:"https://api.github.com/users/KirinDave/repos",events_url:"https://api.github.com/users/KirinDave/events{/privacy}",received_events_url:"https://api.github.com/users/KirinDave/received_events",type:"User",site_admin:!1},{login:"jamesgolick",id:37,node_id:"MDQ6VXNlcjM3",avatar_url:"https://avatars2.githubusercontent.com/u/37?v=4",gravatar_id:"",url:"https://api.github.com/users/jamesgolick",html_url:"https://github.com/jamesgolick",followers_url:"https://api.github.com/users/jamesgolick/followers",following_url:"https://api.github.com/users/jamesgolick/following{/other_user}",gists_url:"https://api.github.com/users/jamesgolick/gists{/gist_id}",starred_url:"https://api.github.com/users/jamesgolick/starred{/owner}{/repo}",subscriptions_url:"https://api.github.com/users/jamesgolick/subscriptions",organizations_url:"https://api.github.com/users/jamesgolick/orgs",repos_url:"https://api.github.com/users/jamesgolick/repos",events_url:"https://api.github.com/users/jamesgolick/events{/privacy}",received_events_url:"https://api.github.com/users/jamesgolick/received_events",type:"User",site_admin:!1},{login:"atmos",id:38,node_id:"MDQ6VXNlcjM4",avatar_url:"https://avatars3.githubusercontent.com/u/38?v=4",gravatar_id:"",url:"https://api.github.com/users/atmos",html_url:"https://github.com/atmos",followers_url:"https://api.github.com/users/atmos/followers",following_url:"https://api.github.com/users/atmos/following{/other_user}",gists_url:"https://api.github.com/users/atmos/gists{/gist_id}",starred_url:"https://api.github.com/users/atmos/starred{/owner}{/repo}",subscriptions_url:"https://api.github.com/users/atmos/subscriptions",organizations_url:"https://api.github.com/users/atmos/orgs",repos_url:"https://api.github.com/users/atmos/repos",events_url:"https://api.github.com/users/atmos/events{/privacy}",received_events_url:"https://api.github.com/users/atmos/received_events",type:"User",site_admin:!1},{login:"errfree",id:44,node_id:"MDEyOk9yZ2FuaXphdGlvbjQ0",avatar_url:"https://avatars2.githubusercontent.com/u/44?v=4",gravatar_id:"",url:"https://api.github.com/users/errfree",html_url:"https://github.com/errfree",followers_url:"https://api.github.com/users/errfree/followers",following_url:"https://api.github.com/users/errfree/following{/other_user}",gists_url:"https://api.github.com/users/errfree/gists{/gist_id}",starred_url:"https://api.github.com/users/errfree/starred{/owner}{/repo}",subscriptions_url:"https://api.github.com/users/errfree/subscriptions",organizations_url:"https://api.github.com/users/errfree/orgs",repos_url:"https://api.github.com/users/errfree/repos",events_url:"https://api.github.com/users/errfree/events{/privacy}",received_events_url:"https://api.github.com/users/errfree/received_events",type:"Organization",site_admin:!1},{login:"mojodna",id:45,node_id:"MDQ6VXNlcjQ1",avatar_url:"https://avatars2.githubusercontent.com/u/45?v=4",gravatar_id:"",url:"https://api.github.com/users/mojodna",html_url:"https://github.com/mojodna",followers_url:"https://api.github.com/users/mojodna/followers",following_url:"https://api.github.com/users/mojodna/following{/other_user}",gists_url:"https://api.github.com/users/mojodna/gists{/gist_id}",starred_url:"https://api.github.com/users/mojodna/starred{/owner}{/repo}",subscriptions_url:"https://api.github.com/users/mojodna/subscriptions",organizations_url:"https://api.github.com/users/mojodna/orgs",repos_url:"https://api.github.com/users/mojodna/repos",events_url:"https://api.github.com/users/mojodna/events{/privacy}",received_events_url:"https://api.github.com/users/mojodna/received_events",type:"User",site_admin:!1},{login:"bmizerany",id:46,node_id:"MDQ6VXNlcjQ2",avatar_url:"https://avatars2.githubusercontent.com/u/46?v=4",gravatar_id:"",url:"https://api.github.com/users/bmizerany",html_url:"https://github.com/bmizerany",followers_url:"https://api.github.com/users/bmizerany/followers",following_url:"https://api.github.com/users/bmizerany/following{/other_user}",gists_url:"https://api.github.com/users/bmizerany/gists{/gist_id}",starred_url:"https://api.github.com/users/bmizerany/starred{/owner}{/repo}",subscriptions_url:"https://api.github.com/users/bmizerany/subscriptions",organizations_url:"https://api.github.com/users/bmizerany/orgs",repos_url:"https://api.github.com/users/bmizerany/repos",events_url:"https://api.github.com/users/bmizerany/events{/privacy}",received_events_url:"https://api.github.com/users/bmizerany/received_events",type:"User",site_admin:!1}]},t.abrupt("return",{data:s.data,error:null});case 5:return t.prev=5,t.t0=t.catch(0),t.abrupt("return",{data:[],error:t.t0.message});case 8:case"end":return t.stop()}}),t,null,[[0,5]])})));return function(){return t.apply(this,arguments)}}(),B=e(18),T=e.n(B),R=e(29),F=function(t){Object(c.a)(e,t);var s=Object(h.a)(e);function e(){var t;Object(p.a)(this,e);for(var r=arguments.length,i=new Array(r),u=0;u<r;u++)i[u]=arguments[u];return(t=s.call.apply(s,[this].concat(i))).state={users:[]},t.editUser=function(s){if(s.login){var e=t.state.users.map((function(t){return t.id===s.id?Object(n.a)({},s):t}));t.setState({users:e})}else t.deleteUser(s)},t.deleteUser=function(s){var e=t.state.users.indexOf(s),r=Object(o.a)(t.state.users);r.splice(e,1),t.setState(Object(n.a)(Object(n.a)({},t.state),{},{users:r}))},t.createUser=function(){var s=Object(o.a)(t.state.users);s.unshift({id:Object(R.a)(),isEditing:!0}),t.setState(Object(n.a)(Object(n.a)({},t.state),{},{users:s}))},t.cancelEdit=function(s){s.login||t.deleteUser(s)},t}return Object(l.a)(e,[{key:"componentDidMount",value:function(){var t=this;L().then((function(s){return t.setState(Object(n.a)(Object(n.a)({},t.state),{},{users:Object(o.a)(s.data)}))}))}},{key:"render",value:function(){return i.a.createElement("div",{className:T.a.UsersDashboard},i.a.createElement("h2",null,"Gitub users"),i.a.createElement(E,{createUser:this.createUser}),i.a.createElement(V,{users:this.state.users,editUser:this.editUser,cancelEdit:this.cancelEdit,deleteUser:this.deleteUser}))}}]),e}(r.Component);var G=function(){return i.a.createElement("div",null,i.a.createElement(F,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(G,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}],[[19,1,2]]]);
//# sourceMappingURL=main.b59fd66c.chunk.js.map