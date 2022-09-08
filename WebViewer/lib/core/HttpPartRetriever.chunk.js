/** Notice * This file contains works from many authors under various (but compatible) licenses. Please see core.txt for more information. **/
(function(){(window.wpCoreControlsBundle=window.wpCoreControlsBundle||[]).push([[0],{450:function(Ba,va,r){r.r(va);r.d(va,"ByteRangeRequest",function(){return z});var oa=r(0),ka=r(1);r.n(ka);var la=r(2),fa=r(153);Ba=r(98);var ea=r(253),ca=r(75),x=r(72),y=r(252),h=r(172);r=r(386);var e=[],b=[],a=window,f=function(){return function(){this.ym=1}}(),n;(function(da){da[da.UNSENT=0]="UNSENT";da[da.DONE=4]="DONE"})(n||(n={}));var z=function(){function da(ja,aa,ba,ia){var ha=this;this.url=ja;this.range=aa;this.ff=ba;
this.withCredentials=ia;this.n3=n;this.request=new XMLHttpRequest;this.request.open("GET",this.url,!0);a.Uint8Array&&(this.request.responseType="arraybuffer");ia&&(this.request.withCredentials=ia);w.DISABLE_RANGE_HEADER||(Object(ka.isUndefined)(aa.stop)?this.request.setRequestHeader("Range","bytes="+aa.start):this.request.setRequestHeader("Range",["bytes=",aa.start,"-",aa.stop-1].join("")));ba&&Object.keys(ba).forEach(function(ma){ha.request.setRequestHeader(ma,ba[ma])});this.request.overrideMimeType?
this.request.overrideMimeType("text/plain; charset=x-user-defined"):this.request.setRequestHeader("Accept-Charset","x-user-defined");this.status=y.a.NOT_STARTED}da.prototype.start=function(ja){var aa=this,ba=this.request;ba.onreadystatechange=function(){if(aa.aborted)return aa.status=y.a.ABORTED,ja({code:y.a.ABORTED});if(this.readyState===aa.n3.DONE){aa.XC();var ia=0===window.document.URL.indexOf("file:///");200===ba.status||206===ba.status||ia&&0===ba.status?(ia=a.QU(this),aa.DN(ia,ja)):(aa.status=
y.a.ERROR,ja({code:aa.status,status:aa.status}))}};this.request.send(null);this.status=y.a.STARTED};da.prototype.DN=function(ja,aa){this.status=y.a.SUCCESS;if(aa)return aa(!1,ja)};da.prototype.abort=function(){this.XC();this.aborted=!0;this.request.abort()};da.prototype.XC=function(){var ja=Object(h.c)(this.url,this.range,b);-1!==ja&&b.splice(ja,1);if(0<e.length){ja=e.shift();var aa=new da(ja.url,ja.range,this.ff,this.withCredentials);ja.request=aa;b.push(ja);aa.start(Object(h.d)(ja))}};da.prototype.extend=
function(ja){var aa=Object.assign({},this,ja.prototype);aa.constructor=ja;return aa};return da}(),w=function(da){function ja(aa,ba,ia,ha,ma){ia=da.call(this,aa,ia,ha)||this;ia.rj={};ia.zB=ba;ia.url=aa;ia.DISABLE_RANGE_HEADER=!1;ia.uy=z;ia.CO=3;ia.ff=ma||{};return ia}Object(oa.c)(ja,da);ja.prototype.fw=function(aa,ba,ia){var ha=-1===aa.indexOf("?")?"?":"&";switch(ia){case !1:case x.a.NEVER_CACHE:aa=aa+ha+"_="+Object(ka.uniqueId)();break;case !0:case x.a.CACHE:aa=aa+ha+"_="+ba.start+","+(Object(ka.isUndefined)(ba.stop)?
"":ba.stop)}return aa};ja.prototype.DS=function(aa,ba,ia,ha){void 0===ia&&(ia={});return new this.uy(aa,ba,ia,ha)};ja.prototype.Faa=function(aa,ba,ia,ha,ma){for(var na=0;na<e.length;na++)if(Object(ka.isEqual)(e[na].range,ba)&&Object(ka.isEqual)(e[na].url,aa))return e[na].Xg.push(ha),e[na].bE++,null;for(na=0;na<b.length;na++)if(Object(ka.isEqual)(b[na].range,ba)&&Object(ka.isEqual)(b[na].url,aa))return b[na].Xg.push(ha),b[na].bE++,null;ia={url:aa,range:ba,zB:ia,Xg:[ha],bE:1};if(0===e.length&&b.length<
this.CO)return b.push(ia),ia.request=this.DS(aa,ba,ma,this.withCredentials),ia;e.push(ia);return null};ja.prototype.po=function(aa,ba,ia){var ha=this.fw(aa,ba,this.zB);(aa=this.Faa(ha,ba,this.zB,ia,this.ff))&&aa.request.start(Object(h.d)(aa));return function(){var ma=Object(h.c)(ha,ba,b);if(-1!==ma){var na=--b[ma].bE;0===na&&b[ma].request&&b[ma].request.abort()}else ma=Object(h.c)(ha,ba,e),-1!==ma&&(na=--e[ma].bE,0===na&&e.splice(ma,1))}};ja.prototype.tU=function(){return{start:-fa.a}};ja.prototype.qea=
function(){var aa=-(fa.a+fa.e);return{start:aa-fa.d,end:aa}};ja.prototype.Ht=function(aa){var ba=this;this.FB=!0;var ia=fa.a;this.po(this.url,this.tU(),function(ha,ma,na){function sa(){var qa=ba.wd.pU();ba.po(ba.url,qa,function(ra,ua){if(ra)return Object(la.j)("Error loading central directory: "+ra),aa(ra);ua=Object(ca.a)(ua);if(ua.length!==qa.stop-qa.start)return aa("Invalid XOD file: Zip central directory data is wrong size! Should be "+(qa.stop-qa.start)+" but is "+ua.length);ba.wd.nY(ua);ba.gI=
!0;ba.FB=!1;return aa(!1)})}if(ha)return Object(la.j)("Error loading end header: "+ha),aa(ha,ma,na);ma=Object(ca.a)(ma);if(ma.length!==ia)return aa("Invalid XOD file: Zip end header data is wrong size!");try{ba.wd=new ea.a(ma)}catch(qa){return aa(qa)}ba.wd.Vfa?ba.po(ba.url,ba.qea(),function(qa,ra){if(qa)return Object(la.j)("Error loading zip64 header: "+qa),aa(qa);ra=Object(ca.a)(ra);ba.wd.oga(ra);sa()}):sa()})};ja.prototype.NU=function(aa){aa(Object.keys(this.wd.Nn))};ja.prototype.fM=function(aa,
ba){var ia=this;if(this.wd.sS(aa)){var ha=this.wd.Ow(aa);if(ha in this.rj){var ma=this.qh[aa];ma.os=this.rj[ha];ma.os.ym++;ma.cancel=ma.os.cancel}else{var na=this.wd.Cca(aa),sa=this.po(this.url,na,function(ra,ua){ra?(Object(la.j)('Error loading part "'+aa+'": '+ra),ia.po(ia.url,na,function(pa,wa){if(pa)return ba(pa,aa);ia.rY(wa,na,ha,aa,ba)})):ia.rY(ua,na,ha,aa,ba)}),qa=this.qh[aa];qa&&(qa.x_=!0,qa.cancel=function(){qa.os.ym--;0===qa.os.ym&&(sa(),delete ia.rj[ha])},this.rj[ha]=new f(ha),qa.os=this.rj[ha],
qa.os.cancel=qa.cancel)}}else delete this.qh[aa],ba(Error('File not found: "'+aa+'"'),aa)};ja.prototype.rY=function(aa,ba,ia,ha,ma){if(aa.length!==ba.stop-ba.start)ma(Error("Part data is wrong size!"),ha);else{do{if(!this.rj[ia])return;ha=this.rj[ia].ym;for(var na=ba.Rq.length,sa=0;sa<na;++sa){var qa=ba.Rq[sa];ma(!1,qa.Nq,aa["string"===typeof aa?"substring":"subarray"](qa.start,qa.stop),this.wd.SV(qa.Nq));qa.Nq in this.qh&&delete this.qh[qa.Nq]}}while(ha!==this.rj[ia].ym);delete this.rj[ia]}};ja.DISABLE_RANGE_HEADER=
!1;ja.CO=3;return ja}(Ba.a);(function(da){function ja(aa,ba,ia){var ha=da.call(this)||this,ma;for(ma in aa)ha[ma]=aa[ma];ha.Ira=aa;ha.startOffset=ba;ha.endOffset=ia;ha.DS=function(na,sa,qa,ra){Object(ka.isUndefined)(sa.stop)?(sa.start+=ha.endOffset,sa.stop=ha.endOffset):(sa.start+=ha.startOffset,sa.stop+=ha.startOffset);na=ha.fw(ha.url,sa,ha.zB);return new aa.uy(na,sa,qa,ra)};return ha}Object(oa.c)(ja,da);return ja})(w);Object(r.a)(w);Object(r.b)(w);va["default"]=w}}]);}).call(this || window)