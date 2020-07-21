(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{14:function(e,n,t){e.exports=t(36)},36:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(13),l=t.n(o),c=t(2),u=function(e){var n=e.nameFilter,t=e.setFilterName;return r.a.createElement("div",null,"filter shown with ",r.a.createElement("input",{value:n,onChange:t}))},i=function(e){var n=e.newName,t=e.handleNameChange,a=e.newNumber,o=e.handleNumberChange,l=e.addPerson;return r.a.createElement("form",{onSubmit:l},r.a.createElement("div",null,"name: ",r.a.createElement("input",{value:n,onChange:t})),r.a.createElement("div",null,"number: ",r.a.createElement("input",{value:a,onChange:o})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"add")))},d=function(e){var n=e.persons,t=e.nameFilter,a=e.deletePerson;return r.a.createElement("ul",null,n.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())})).map((function(e){return r.a.createElement("li",{key:e.name},e.name," ",e.number,r.a.createElement("button",{onClick:function(){return a(e)}},"delete"))})))},m=function(e){var n=e.message,t=e.success;if(null===n)return null;var a={};return a=t?{color:"green",fontStyle:"italic",fontSize:20,backgroundColor:"lightgrey",borderRadius:5,padding:10,marginBottom:10,borderStyle:"solid",borderColor:"green"}:{color:"red",fontStyle:"italic",fontSize:20,backgroundColor:"lightgrey",borderRadius:5,padding:10,marginBottom:10,borderStyle:"solid",borderColor:"red"},r.a.createElement("div",{className:"notification",style:a},n)},s=t(3),f=t.n(s),b="/api/persons",h=function(){var e=f.a.get(b);return console.log(e.data),e.then((function(e){return e.data}))},g=function(e,n){var t=null,a=null;return n?(a=f.a.post(b,e),t="added ".concat(e.name," ").concat(e.id)):(a=f.a.put("".concat(b,"/").concat(e.id),e),t="updated ".concat(e.name," ").concat(e.id)),a.then(console.log(t))},v=function(e){return f.a.delete("".concat(b,"/").concat(e.id)).then(console.log("removed ".concat(e.name)))},p=function(){var e=Object(a.useState)([]),n=Object(c.a)(e,2),t=n[0],o=n[1],l=Object(a.useState)(""),s=Object(c.a)(l,2),f=s[0],b=s[1],p=Object(a.useState)(""),E=Object(c.a)(p,2),w=E[0],y=E[1],C=Object(a.useState)(""),j=Object(c.a)(C,2),O=j[0],S=j[1],N=Object(a.useState)(null),k=Object(c.a)(N,2),F=k[0],P=k[1],T=Object(a.useState)(!1),B=Object(c.a)(T,2),D=B[0],I=B[1];Object(a.useEffect)((function(){h().then((function(e){return o(e)}))}),[]);return r.a.createElement("div",null,r.a.createElement("h2",null,"Phonebook"),r.a.createElement(m,{message:F,success:D}),r.a.createElement(u,{nameFilter:O,setFilterName:function(e){S(e.target.value)}}),r.a.createElement("h2",null,"add a new"),r.a.createElement(i,{newName:f,handleNameChange:function(e){b(e.target.value)},newNumber:w,handleNumberChange:function(e){y(e.target.value)},addPerson:function(e){e.preventDefault();var n=t.filter((function(e){return e.name===f})),a=1===n.length?n[0]:null;if(null!==a){if(a.number===w)return void window.alert("".concat(f," is already added to phonebook"));if(!window.confirm("".concat(f," is already added to phonebook, replace the old number with the new one?")))return}var r={name:null===a?f:a.name,number:w,id:null===a?t.length+1:a.id};o(null!==a?t.filter((function(e){return e.id!==a.id})).concat(r):t.concat(r)),g(r,null===a).then((function(){P("Added/updated ".concat(r.name)),I(!0),setTimeout((function(){P(null),I(!1)}),3e3)})).catch((function(e){P("Information from ".concat(r.name," has already been removed from the server")),setTimeout((function(){P(null)}),3e3),o(t.filter((function(e){return e.id!==r.id})))})),b(""),y("")}}),r.a.createElement("h2",null,"Numbers"),r.a.createElement(d,{persons:t,nameFilter:O,deletePerson:function(e){if(window.confirm("Delete ".concat(e.name," ?"))){var n=t.filter((function(n){return n.id!==e.id}));v(e).then((function(){P("Deleted ".concat(e.name)),I(!0),setTimeout((function(){P(null),I(!1)}),3e3)})).catch((function(n){P("Information from ".concat(e.name," has already been removed from the server")),setTimeout((function(){P(null)}),3e3),o(t.filter((function(n){return n.id!==e.id})))})),o(n)}else console.log("".concat(e.name," not removed"))}}))};l.a.render(r.a.createElement(p,null),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.e578a669.chunk.js.map