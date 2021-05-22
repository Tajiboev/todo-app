(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[5],{187:function(t,e,n){"use strict";n.r(e);var r=n(74),i=n.n(r),s=n(5),a=n(75),u=n.n(a),o=n(1);e.default=function(){var t=Object(s.b)((function(t){return t.totalTodos})),e=Object(s.b)((function(t){return t.completedTodos})),n=i()().format("D"),r=i()().format("dddd"),a=i()().format("MMMM"),c="tasks";return 1===t&&(c="task"),Object(o.jsxs)("header",{className:u.a.header,children:[Object(o.jsxs)("div",{className:u.a.row,children:[Object(o.jsx)("p",{className:u.a.day,children:r}),Object(o.jsxs)("p",{className:u.a.completed_text,children:[e,"/",t," ",c," done"]})]}),Object(o.jsx)("div",{children:Object(o.jsxs)("p",{className:u.a.month_date,children:[a,", ",n]})})]})}},74:function(t,e,n){t.exports=function(){"use strict";var t="millisecond",e="second",n="minute",r="hour",i="day",s="week",a="month",u="quarter",o="year",c="date",h=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,d=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,f={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},l=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},$={s:l,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+l(r,2,"0")+":"+l(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,a),s=n-i<0,u=e.clone().add(r+(s?-1:1),a);return+(-(r+(n-i)/(s?i-u:u-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(h){return{M:a,y:o,w:s,d:i,D:c,h:r,m:n,s:e,ms:t,Q:u}[h]||String(h||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},m="en",M={};M[m]=f;var p=function(t){return t instanceof g},y=function(t,e,n){var r;if(!t)return m;if("string"==typeof t)M[t]&&(r=t),e&&(M[t]=e,r=t);else{var i=t.name;M[i]=t,r=i}return!n&&r&&(m=r),r||!n&&m},v=function(t,e){if(p(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new g(n)},D=$;D.l=y,D.i=p,D.w=function(t,e){return v(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var g=function(){function f(t){this.$L=y(t.locale,null,!0),this.parse(t)}var l=f.prototype;return l.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(D.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(h);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},l.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},l.$utils=function(){return D},l.isValid=function(){return!("Invalid Date"===this.$d.toString())},l.isSame=function(t,e){var n=v(t);return this.startOf(e)<=n&&n<=this.endOf(e)},l.isAfter=function(t,e){return v(t)<this.startOf(e)},l.isBefore=function(t,e){return this.endOf(e)<v(t)},l.$g=function(t,e,n){return D.u(t)?this[e]:this.set(n,t)},l.unix=function(){return Math.floor(this.valueOf()/1e3)},l.valueOf=function(){return this.$d.getTime()},l.startOf=function(t,u){var h=this,d=!!D.u(u)||u,f=D.p(t),l=function(t,e){var n=D.w(h.$u?Date.UTC(h.$y,e,t):new Date(h.$y,e,t),h);return d?n:n.endOf(i)},$=function(t,e){return D.w(h.toDate()[t].apply(h.toDate("s"),(d?[0,0,0,0]:[23,59,59,999]).slice(e)),h)},m=this.$W,M=this.$M,p=this.$D,y="set"+(this.$u?"UTC":"");switch(f){case o:return d?l(1,0):l(31,11);case a:return d?l(1,M):l(0,M+1);case s:var v=this.$locale().weekStart||0,g=(m<v?m+7:m)-v;return l(d?p-g:p+(6-g),M);case i:case c:return $(y+"Hours",0);case r:return $(y+"Minutes",1);case n:return $(y+"Seconds",2);case e:return $(y+"Milliseconds",3);default:return this.clone()}},l.endOf=function(t){return this.startOf(t,!1)},l.$set=function(s,u){var h,d=D.p(s),f="set"+(this.$u?"UTC":""),l=(h={},h[i]=f+"Date",h[c]=f+"Date",h[a]=f+"Month",h[o]=f+"FullYear",h[r]=f+"Hours",h[n]=f+"Minutes",h[e]=f+"Seconds",h[t]=f+"Milliseconds",h)[d],$=d===i?this.$D+(u-this.$W):u;if(d===a||d===o){var m=this.clone().set(c,1);m.$d[l]($),m.init(),this.$d=m.set(c,Math.min(this.$D,m.daysInMonth())).$d}else l&&this.$d[l]($);return this.init(),this},l.set=function(t,e){return this.clone().$set(t,e)},l.get=function(t){return this[D.p(t)]()},l.add=function(t,u){var c,h=this;t=Number(t);var d=D.p(u),f=function(e){var n=v(h);return D.w(n.date(n.date()+Math.round(e*t)),h)};if(d===a)return this.set(a,this.$M+t);if(d===o)return this.set(o,this.$y+t);if(d===i)return f(1);if(d===s)return f(7);var l=(c={},c[n]=6e4,c[r]=36e5,c[e]=1e3,c)[d]||1,$=this.$d.getTime()+t*l;return D.w($,this)},l.subtract=function(t,e){return this.add(-1*t,e)},l.format=function(t){var e=this;if(!this.isValid())return"Invalid Date";var n=t||"YYYY-MM-DDTHH:mm:ssZ",r=D.z(this),i=this.$locale(),s=this.$H,a=this.$m,u=this.$M,o=i.weekdays,c=i.months,h=function(t,r,i,s){return t&&(t[r]||t(e,n))||i[r].substr(0,s)},f=function(t){return D.s(s%12||12,t,"0")},l=i.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},$={YY:String(this.$y).slice(-2),YYYY:this.$y,M:u+1,MM:D.s(u+1,2,"0"),MMM:h(i.monthsShort,u,c,3),MMMM:h(c,u),D:this.$D,DD:D.s(this.$D,2,"0"),d:String(this.$W),dd:h(i.weekdaysMin,this.$W,o,2),ddd:h(i.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(s),HH:D.s(s,2,"0"),h:f(1),hh:f(2),a:l(s,a,!0),A:l(s,a,!1),m:String(a),mm:D.s(a,2,"0"),s:String(this.$s),ss:D.s(this.$s,2,"0"),SSS:D.s(this.$ms,3,"0"),Z:r};return n.replace(d,(function(t,e){return e||$[t]||r.replace(":","")}))},l.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},l.diff=function(t,c,h){var d,f=D.p(c),l=v(t),$=6e4*(l.utcOffset()-this.utcOffset()),m=this-l,M=D.m(this,l);return M=(d={},d[o]=M/12,d[a]=M,d[u]=M/3,d[s]=(m-$)/6048e5,d[i]=(m-$)/864e5,d[r]=m/36e5,d[n]=m/6e4,d[e]=m/1e3,d)[f]||m,h?M:D.a(M)},l.daysInMonth=function(){return this.endOf(a).$D},l.$locale=function(){return M[this.$L]},l.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=y(t,e,!0);return r&&(n.$L=r),n},l.clone=function(){return D.w(this.$d,this)},l.toDate=function(){return new Date(this.valueOf())},l.toJSON=function(){return this.isValid()?this.toISOString():null},l.toISOString=function(){return this.$d.toISOString()},l.toString=function(){return this.$d.toUTCString()},f}(),S=g.prototype;return v.prototype=S,[["$ms",t],["$s",e],["$m",n],["$H",r],["$W",i],["$M",a],["$y",o],["$D",c]].forEach((function(t){S[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),v.extend=function(t,e){return t.$i||(t(e,g,v),t.$i=!0),v},v.locale=y,v.isDayjs=p,v.unix=function(t){return v(1e3*t)},v.en=M[m],v.Ls=M,v.p={},v}()},75:function(t,e,n){t.exports={header:"header_header__1XEXF",row:"header_row__cSb6k",day:"header_day__225IT",month_date:"header_month_date__F6ZMS"}}}]);
//# sourceMappingURL=5.84a2e862.chunk.js.map