import{u as W,c as A,r as u,a as R,b as B,o as e,d as n,F as D,e as $,f as d,g as s,h as l,i as a,w as c,j as N,k as V,t as m,n as F,l as g,m as b}from"./index.c08dcb2a.js";import{T as y,Y as G,G as z,_ as Y,Q as M,q as I,u as O}from"./dateFormat.d2610c91.js";import"./plugin-vue_export-helper.21dcd24c.js";const P={key:0,class:"container py-10 mx-auto dark:text-gray-900"},U={key:0,class:"space-y-2"},H=s("div",{class:"h-3"},null,-1),J={key:0,class:"text-xl font-bold text-green-500"},K={key:1,class:"text-xl font-bold text-red-500 animate-pulse"},X={class:"py-2 text-2xl font-semibold text-red-500"},Z={class:"text-sm"},tt=s("p",{class:"text-sm"},"\u09B6\u09C1\u09A7\u09C1\u09AE\u09BE\u09A4\u09CD\u09B0 \u0989\u0995\u09CD\u09A4 \u09B8\u09AE\u09DF \u098F\u09B0 \u09AE\u09BE\u099D\u09C7 MCQ \u098F\u0995\u09CD\u09B8\u09BE\u09AE \u09A6\u09BF\u09B2\u09C7 \u09A4\u09AC\u09C7\u0987 \u0995\u09C7\u09AC\u09B2 \u09B2\u09C0\u09A1\u09BE\u09B0\u09AC\u09CB\u09B0\u09CD\u09A1\u09C7 \u09A8\u09BE\u09AE \u098F\u09AC\u0982 SMS \u09AA\u09BE\u09AC\u09C7\u0964 ",-1),et={key:0,class:"p-2 border border-gray-600"},st=s("h1",{class:"text-lg font-semibold border-b-2 border-gray-800"},"MCQ",-1),nt={class:"py-2"},ot=s("p",{class:"font-semibold"},"Start Time",-1),at={class:"text-sm"},it={class:"py-2"},lt={key:0,class:"font-semibold"},ct={class:"text-sm"},rt={key:2,class:"flex flex-col justify-center space-x-2"},dt=s("p",{class:"text-sm font-semibold text-center"}," Exam Start Time Remaining",-1),mt={key:3,class:"flex flex-col justify-center space-x-2"},_t=s("p",{class:"text-sm font-semibold text-center"}," Exam End Time Remaining",-1),ut={key:4,class:"flex flex-col justify-center space-x-2"},xt=s("p",{class:"text-sm font-semibold text-center"}," Exam Start Time Remaining",-1),bt={key:5,class:"flex flex-col justify-center space-x-2"},pt=s("p",{class:"text-sm font-semibold text-center"}," Exam End Time Remaining",-1),ft={class:"flex flex-wrap items-center justify-center gap-3"},gt=["onClick"],ht=b("MCQ Solve "),yt=b("MCQ Leaderboard "),vt={class:"grid grid-cols-1 gap-3 mt-5 md:grid-cols-2 lg:grid-cols-3"},kt={class:"text-xl font-semibold text-red-500"},wt={key:0,class:"text-sm leading-tight"},Ct={class:"grid justify-center max-w-sm grid-cols-1 gap-2 mx-auto"},Dt={key:0,class:"p-2 border border-gray-600"},Et=s("h1",{class:"text-lg font-semibold border-b-2 border-gray-800"},"MCQ",-1),Tt={class:"py-2"},St=s("p",{class:"font-semibold"},"Start Time",-1),Qt={class:"text-sm"},$t={key:0,class:"py-2"},Mt=s("p",{class:"font-semibold"}," End Time",-1),qt={class:"text-sm"},jt={class:"flex flex-wrap items-center justify-center gap-3"},Lt=["onClick"],Wt=b("MCQ Solve "),At=b("Leaderboard "),Rt={key:1,class:"flex flex-wrap items-center justify-center gap-3"},Bt=b("Written Exam "),Nt=["href"],Vt=b("Written Leaderboard "),Ft={key:1,class:"py-10 text-center"},Gt=s("button",{class:"btn btn-primary btn-circle loading"},null,-1),zt=[Gt],Yt={class:"fixed inset-0 z-10 overflow-y-auto"},It={class:"min-h-screen px-4 text-center bg-[rgba(0,0,0,0.6)]"},Ot=s("span",{class:"inline-block h-screen align-middle","aria-hidden":"true"}," \u200B ",-1),Pt={class:"inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl"},Ut={class:"mt-2"},Ht={class:"text-sm text-gray-500"},ee={setup(Jt){const q=W(),i=A(()=>q.state.currentTime),f=u({show:!1,title:"",message:""}),E=R();localStorage.getItem("second_timer_21")||E.replace({name:"Login"});function x(r,o){f.value={show:!0,title:`${r} will be available soon`,message:`We are working on ${r}. Please check back after the time ${o}.`}}function T(){f.value={show:!1,title:"",message:""}}const v=u([]);let k=[];const j=u(new Set);u("");const w=u([]),S=u([]),L=u([]);u(""),(()=>{N.get(V+"?type=examlist").then(r=>{v.value=r.data.routines,S.value=r.data.routines,v.value.forEach(o=>{o.subject&&j.value.add(o.subject.split(" ")[0]),o.exam_category&&L.value.push(o.exam_category),new Date(o.upore_thakbo).getTime()>=i.value&&k.length<5&&k.push(o)}),w.value=k}).catch(r=>{console.error(r)})})();const{formattedDate:h}=O(),Q=r=>{E.push(`/exam/${r}`)};return(r,o)=>{const p=B("router-link");return e(),n(D,null,[v.value.length>0?(e(),n("div",P,[w.value?(e(),n("div",U,[(e(!0),n(D,null,$(w.value,(t,C)=>(e(),n("div",{key:C,class:"relative p-2 my-2 space-y-2 text-center shadow-sm bg-gray-50 rounded-xl"},[H,new Date(t.start_time).getTime()>a(i)?(e(),n("h1",J," Upcoming Exam... ")):new Date(t.end_time)>new Date?(e(),n("h1",K," Ongoing Exam... ")):d("",!0),s("h1",X,m(t.topic),1),s("p",Z,m(t.description),1),tt,s("div",{class:F(["grid justify-center max-w-md grid-cols-1 gap-2 mx-auto",{"sm:grid-cols-2":t.cq_start&&t.start_time}])},[t.start_time?(e(),n("div",et,[st,s("div",nt,[ot,s("p",at,m(a(h)(new Date(t.start_time))),1)]),s("div",it,[t.end_time?(e(),n("p",lt," End Time")):d("",!0),s("p",ct,m(a(h)(new Date(t.end_time))),1)])])):d("",!0)],2),new Date(t.start_time).getTime()>a(i)?(e(),n("div",rt,[dt,l(y,{end:new Date(t.start_time)},null,8,["end"])])):new Date(t.end_time)>new Date(a(i))?(e(),n("div",mt,[_t,l(y,{end:new Date(t.end_time)},null,8,["end"])])):new Date(t.cq_start)>new Date(a(i))?(e(),n("div",ut,[xt,l(y,{end:new Date(t.cq_start)},null,8,["end"])])):new Date(t.cq_end)>new Date(a(i))?(e(),n("div",bt,[pt,l(y,{end:new Date(t.cq_end)},null,8,["end"])])):d("",!0),s("div",ft,[new Date(t.start_time).getTime()<a(i)?(e(),n("button",{key:0,class:"btn btn-sm",onClick:_=>Q(t.id)}," MCQ Exam ",8,gt)):(e(),n("button",{key:1,class:"btn btn-sm",onClick:o[0]||(o[0]=_=>x("MCQ Exam","starts"))}," MCQ Exam ")),new Date(t.end_time).getTime()<a(i)?(e(),g(p,{key:2,class:"btn btn-sm",to:`/solution/${t.id}`},{default:c(()=>[ht]),_:2},1032,["to"])):(e(),n("button",{key:3,class:"btn btn-sm",onClick:o[1]||(o[1]=_=>x("MCQ Solve","Ends"))}," MCQ Solve ")),new Date(t.start_time).getTime()<a(i)?(e(),g(p,{key:4,class:"mx-2 btn btn-sm",to:`/ranking/${t.id}`},{default:c(()=>[yt]),_:2},1032,["to"])):(e(),n("button",{key:5,class:"mx-2 btn btn-sm",onClick:o[2]||(o[2]=_=>x("Leaderboard","Starts"))}," MCQ Leaderboard "))])]))),128))])):d("",!0),s("div",vt,[(e(!0),n(D,null,$(S.value,(t,C)=>(e(),n("div",{class:"p-2 space-y-2 text-center shadow-sm bg-gray-50 rounded-xl",key:C},[s("h1",kt,m(t.topic),1),t.description?(e(),n("p",wt,m(t.description),1)):d("",!0),s("div",Ct,[t.start_time?(e(),n("div",Dt,[Et,s("div",Tt,[St,s("p",Qt,m(a(h)(new Date(t.start_time))),1)]),t.end_time?(e(),n("div",$t,[Mt,s("p",qt,m(a(h)(new Date(t.end_time))),1)])):d("",!0)])):d("",!0)]),s("div",jt,[new Date(t.start_time).getTime()<a(i)?(e(),n("button",{key:0,class:"btn btn-sm",onClick:_=>Q(t.id)}," MCQ Exam ",8,Lt)):(e(),n("button",{key:1,class:"btn btn-sm",onClick:o[3]||(o[3]=_=>x("MCQ Exam","starts"))}," MCQ Exam ")),new Date(t.end_time).getTime()<a(i)?(e(),g(p,{key:2,class:"btn btn-sm",to:`/solution/${t.id}`},{default:c(()=>[Wt]),_:2},1032,["to"])):(e(),n("button",{key:3,class:"btn btn-sm",onClick:o[4]||(o[4]=_=>x("MCQ Solve","Ends"))}," MCQ Solve ")),new Date(t.start_time).getTime()<a(i)?(e(),g(p,{key:4,class:"mx-2 btn btn-sm",to:`/ranking/${t.id}`},{default:c(()=>[At]),_:2},1032,["to"])):d("",!0)]),t.cq_link?(e(),n("div",Rt,[new Date(t.cq_start).getTime()<a(i)&&t.cq_link?(e(),g(p,{key:0,class:"btn btn-sm",to:`/cq/${t.id}`},{default:c(()=>[Bt]),_:2},1032,["to"])):(e(),n("button",{key:1,class:"btn btn-sm",onClick:o[5]||(o[5]=_=>x("Written Exam","starts"))}," Written Exam ")),new Date(t.cq_end).getTime()<a(i)&&t.cq_solve?(e(),n("a",{key:2,class:"btn btn-sm",href:t.cq_solve,target:"_blank"},"Written Exam Solve",8,Nt)):(e(),n("button",{key:3,class:"btn btn-sm",onClick:o[6]||(o[6]=_=>x("Solution","Ends"))}," Written Exam Solve ")),l(p,{class:"mx-2 btn btn-sm",to:`/cql/${t.id}`},{default:c(()=>[Vt]),_:2},1032,["to"])])):d("",!0)]))),128))])])):(e(),n("div",Ft,zt)),l(a(G),{appear:"",show:f.value.show,as:"template"},{default:c(()=>[l(a(z),{as:"div",onClose:T},{default:c(()=>[s("div",Yt,[s("div",It,[l(a(M),{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0","enter-to":"opacity-100",leave:"duration-200 ease-in","leave-from":"opacity-100","leave-to":"opacity-0"},{default:c(()=>[l(a(Y),{class:"fixed inset-0"})]),_:1}),Ot,l(a(M),{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0 scale-95","enter-to":"opacity-100 scale-100",leave:"duration-200 ease-in","leave-from":"opacity-100 scale-100","leave-to":"opacity-0 scale-95"},{default:c(()=>[s("div",Pt,[l(a(I),{as:"h3",class:"text-lg font-medium leading-6 text-gray-900"},{default:c(()=>[b(m(f.value.title),1)]),_:1}),s("div",Ut,[s("p",Ht,m(f.value.message),1)]),s("div",{class:"mt-4"},[s("button",{type:"button",class:"inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500",onClick:T}," Got it, thanks! ")])])]),_:1})])])]),_:1})]),_:1},8,["show"])],64)}}};export{ee as default};
