let visibleElementsArray = ['about', 'experience', 'education', 'projects', 'skills'];

function showElement(id)
{

    for (let i=0; i<visibleElementsArray.length; i++)
    {
        let curId = visibleElementsArray[i];
        let curEle = document.getElementById(curId);

        if(id === curId)
            curEle.style.display = 'block';
        else
            curEle.style.display = 'none';
    }
            
}