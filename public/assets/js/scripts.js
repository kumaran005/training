const searchFun=()=>
{
    let filter=document.getElementById('myInput').nodeValue.toUpperCase();
    let myTable=document.getElementById('myTable');
    let tr=myTable.getElementsByTagName('tr');

    for(var i=0;i<tr.length;i++)
    {
        let td=tr[i].getElementsByTagName('td')[0];
        if(td)
        {
            let testvlaue=td.textContent || td.innerHTML;
            if(testvlaue.toUpperCase().indexOf(filter)>-1)
            {
                tr[i].style.display='';
            }
            else
            {
                tr[i].style.display='none';
            }
        }
    }
}