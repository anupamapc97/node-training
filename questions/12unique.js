function unique(a)
{
 var b=a;
 var c=new Array();
 for (var i=0;i < b.length;i++)
 {

 if(c.indexOf(b.charAt(i))==-1)
  {
  c += b[i];  
  
   }
  }
  return c;  
}  
console.log(unique("thequickbrownfoxjumpsoverthelazydog"));