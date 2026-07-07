function copyText(text,label){
  navigator.clipboard.writeText(text).then(()=>alert(label+"已复制："+text)).catch(()=>alert("请手动复制："+text));
}
document.querySelectorAll(".section").forEach((el)=>{el.style.opacity=0;el.style.transform="translateY(18px)";});
const io=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){e.target.style.transition="all .6s ease";e.target.style.opacity=1;e.target.style.transform="translateY(0)";}})});
document.querySelectorAll(".section").forEach(el=>io.observe(el));
document.querySelectorAll(".gallery img").forEach(img=>{
  img.addEventListener("click",()=>{
    const mask=document.createElement("div");
    mask.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,.8);z-index:99;display:grid;place-items:center;padding:20px";
    const big=document.createElement("img");
    big.src=img.src; big.style.cssText="max-width:96vw;max-height:90vh;border-radius:16px;background:white";
    mask.appendChild(big); mask.onclick=()=>mask.remove(); document.body.appendChild(mask);
  });
});