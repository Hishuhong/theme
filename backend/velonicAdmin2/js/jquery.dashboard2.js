!function(e){"use strict";var a=function(){this.$body=e("body")};a.prototype.createAreaGraph=function(a,o,r,t,i){var n=new Rickshaw.Graph({element:document.querySelector(a),renderer:"area",stroke:!0,height:190,preserve:!0,series:[{color:t[0],data:o[0],name:i[0]},{color:t[1],data:o[1],name:i[1]}]});n.render(),setInterval(function(){r.removeData(o),r.addData(o),n.update()},700),e(window).resize(function(){n.render()})},a.prototype.createPlotGraph=function(a,o,r,t,i,n,s){e.plot(e(a),[{data:o,label:t[0],color:i[0]},{data:r,label:t[1],color:i[1]}],{series:{lines:{show:!0,fill:!0,lineWidth:1,fillColor:{colors:[{opacity:.5},{opacity:.5}]}},points:{show:!0},shadowSize:0},legend:{position:"nw"},grid:{hoverable:!0,clickable:!0,borderColor:n,borderWidth:1,labelMargin:10,backgroundColor:s},yaxis:{min:0,max:15,color:"rgba(0,0,0,0.1)"},xaxis:{color:"rgba(0,0,0,0.1)"},tooltip:!0,tooltipOpts:{content:"%s: Value of %x is %y",shifts:{x:-60,y:25},defaultTheme:!1}})},a.prototype.init=function(){for(var e=[[],[],[],[],[],[],[],[],[]],a=new Rickshaw.Fixtures.RandomData(200),o=0;100>o;o++)a.addData(e);var r=["#1a2942","#E9E9E9"],t=["Moscow","Shanghai"];this.createAreaGraph("#rickshaw9",e,a,r,t);var i=[[0,9],[1,8],[2,5],[3,8],[4,5],[5,14],[6,10]],n=[[0,5],[1,12],[2,4],[3,3],[4,12],[5,11],[6,14]],s=["Visits","Pages/Visit"],c=["#3bc0c3","#1a2942"],l="#efefef",d="#fff";this.createPlotGraph("#website-stats",i,n,s,c,l,d)},e.Dashboard2=new a,e.Dashboard2.Constructor=a}(window.jQuery),function(e){"use strict";e.Dashboard2.init()}(window.jQuery);