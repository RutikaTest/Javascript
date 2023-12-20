let chances=10;
let result=document.getElementById('result');
let chancesLeft=document.getElementById('chances_left');
let random_num=document.getElementById('random');
function performAction()
{
  let x=parseInt(Math.random()*(10-1)+1);
  let inputval=document.getElementById('num').value;
  random_num.innerHTML=x;
  for(let i=10;i>=1;i--)
  {
    if(chances<=10)
    {
      if(inputval==x)
      {
      result.style.display="block";
      result.innerHTML=`value is correct`;
      }
    else{
      result.style.display="block";
      result.innerHTML=`value is not correct`;
    }
    }
    else
    {
      result.innerHTML=`your chances are ended !`;
    }
    chancesLeft.innerHTML=`chances left ${chances}`
    chances--;
  }
}

