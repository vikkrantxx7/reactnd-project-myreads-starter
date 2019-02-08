(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,a){e.exports=a(33)},28:function(e,t,a){},31:function(e,t,a){},33:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(15),c=a.n(r),l=a(5),s=a(6),i=a(8),u=a(7),h=a(9),m=a(34),d=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={value:""},a.changeValue=function(e){a.setState({value:e.target.value})},a.callOnChange=function(e){a.changeValue(e),a.props.updateShelf(a.props.book,e.target.value)},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.book;return o.a.createElement("li",null,o.a.createElement("div",{className:"book"},o.a.createElement("div",{className:"book-top"},o.a.createElement("div",{className:"book-cover",style:{width:128,height:193,backgroundImage:e.imageLinks?"url(".concat(e.imageLinks.thumbnail,")"):"none"}},"undefined"===typeof e.imageLinks&&o.a.createElement("span",null,"No Cover")),o.a.createElement("div",{className:"book-shelf-changer"},o.a.createElement("select",{onChange:this.callOnChange,value:""===this.state.value?e.shelf:this.state.value},o.a.createElement("option",{value:"move",disabled:!0},"Move to..."),o.a.createElement("option",{value:"currentlyReading"},"Currently Reading"),o.a.createElement("option",{value:"wantToRead"},"Want to Read"),o.a.createElement("option",{value:"read"},"Read"),o.a.createElement("option",{value:"none"},"None")))),o.a.createElement("div",{className:"book-title"},e.title),o.a.createElement("div",{className:"book-authors"},e.authors?e.authors.join("; "):"No Author")))}}]),t}(n.Component),f=a(16),p=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.query,a=e.books,n=e.searchBook,r=e.updateShelf;return o.a.createElement("div",{className:"search-books"},o.a.createElement("div",{className:"search-books-bar"},o.a.createElement(m.a,{className:"close-search",to:"/"},"Close"),o.a.createElement("div",{className:"search-books-input-wrapper"},o.a.createElement(f.DebounceInput,{debounceTimeout:500,placeholder:"Search by title or author",value:t,onChange:n}))),o.a.createElement("div",{className:"search-books-results"},o.a.createElement("ol",{className:"books-grid"},a.map(function(e){return o.a.createElement(d,{key:e.id,book:e,updateShelf:r})}))))}}]),t}(n.Component),b=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.books,a=e.title,n=e.updateShelf;return o.a.createElement("div",{className:"bookshelf"},o.a.createElement("h2",{className:"bookshelf-title"},a),o.a.createElement("div",{className:"bookshelf-books"},o.a.createElement("ol",{className:"books-grid"},t.map(function(e){return o.a.createElement(d,{key:e.id,book:e,updateShelf:n})}))))}}]),t}(n.Component),k=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.getAllBooks,a=e.updateShelf,n=t.filter(function(e){return"currentlyReading"===e.shelf}),r=t.filter(function(e){return"wantToRead"===e.shelf}),c=t.filter(function(e){return"read"===e.shelf});return o.a.createElement("div",{className:"list-books"},o.a.createElement("div",{className:"list-books-title"},o.a.createElement("h1",null,"MyReads")),o.a.createElement("div",{className:"list-books-content"},o.a.createElement("div",null,o.a.createElement(b,{title:"Currently Reading",books:n,updateShelf:a}),o.a.createElement(b,{title:"Want To Read",books:r,updateShelf:a}),o.a.createElement(b,{title:"Read",books:c,updateShelf:a}))),o.a.createElement("div",{className:"open-search"},o.a.createElement(m.a,{to:"/search"},"Add a book")))}}]),t}(n.Component),v=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"list-books-title"},o.a.createElement("h1",null,"The page you are looking for does not exist !"))}}]),t}(n.Component),E=a(37),y=a(36),g=(a(28),a(13)),j="https://reactnd-books-api.udacity.com",O=localStorage.token;O||(O=localStorage.token=Math.random().toString(36).substr(-8));var S={Accept:"application/json",Authorization:O},N=function(){return fetch("".concat(j,"/books"),{headers:S}).then(function(e){return e.json()}).then(function(e){return e.books})},C=function(e,t){return fetch("".concat(j,"/books/").concat(e.id),{method:"PUT",headers:Object(g.a)({},S,{"Content-Type":"application/json"}),body:JSON.stringify({shelf:t})}).then(function(e){return e.json()})},A=function(e){return fetch("".concat(j,"/search"),{method:"POST",headers:Object(g.a)({},S,{"Content-Type":"application/json"}),body:JSON.stringify({query:e})}).then(function(e){return e.json()}).then(function(e){return e.books})},B=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={getAllBooks:[],query:"",books:[]},a.updateState=function(){N().then(function(e){a.setState({getAllBooks:e})}).catch(function(e){console.error(e)})},a.updateShelf=function(e,t){C(e,t).then(function(){a.updateState()})},a.searchBook=function(e){var t=e.target.value.trim();a.setState({query:t}),""!==t?A(t).then(function(e){a.setState({books:e.map(function(e){return a.state.getAllBooks.every(function(t){return t.id===e.id?(e.shelf=t.shelf,!1):(e.shelf="none",!0)}),e})})}).catch(function(){a.setState({books:[]}),console.error("No Books returned for the supplied query")}):(a.setState({books:[]}),console.error("Please enter a valid query"))},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;N().then(function(t){e.setState({getAllBooks:t})}).catch(function(e){console.error(e)})}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"app"},o.a.createElement(E.a,null,o.a.createElement(y.a,{exact:!0,path:"/",render:function(){return o.a.createElement(k,{getAllBooks:e.state.getAllBooks,updateShelf:e.updateShelf})}}),o.a.createElement(y.a,{exact:!0,path:"/search",render:function(){return o.a.createElement(p,{getAllBooks:e.state.getAllBooks,updateShelf:e.updateShelf,searchBook:e.searchBook,query:e.state.query,books:e.state.books})}}),o.a.createElement(y.a,{component:v})))}}]),t}(o.a.Component),w=(a(31),a(35));c.a.render(o.a.createElement(w.a,{basename:"/reactnd-project-myreads-starter"},o.a.createElement(B,null)),document.getElementById("root"))}},[[18,2,1]]]);
//# sourceMappingURL=main.12e9f3a3.chunk.js.map