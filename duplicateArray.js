let n=[56,78,90,23,90,76,43,56]
for(let i=0;i<=n.length;i++){
for(let j=i+1;j<=n.length;j++)
{
    if(n[i]===n[j])
    {
        console.log(n[i])
    }
}
}