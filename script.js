const spreadSheetContainer=document.querySelector("#spreadsheet-container"); // dom 객체로 querySelector 연결
const Rows=15;//행의 길이를 정할 요소
const Columns=15; // 열의 길이를 정할 요소 
const spreadsheet=[]; //spreadsheet를 위한 배열 생성

function initSpreadsheet()
{
    for(let i=0;i<Rows;i++) //구구단 출력하는 것처럼 15x15칸 행 만들기
    {   let spreadSheetRow=[];
        for(let j=0;j<Columns;j++) // 15x15 만들었음
        {
            spreadSheetRow.push(i+"-"+j); // 지금 '5-0' ,'5-2' 등등 행과 열을 표현하기 위한 식을 만들고 있음
            // 5-1 ,5-2 , 5-3 ,5-4, 5-5, 5-6  구구단 출력하듯이 한 행이 다 출력되면
        }
        spreadsheet.push(spreadSheetRow); //   그 행값을 spreadSheet에다가 i=0 부터 i<Rows 까지 넣어주면됨.

       
    }
    console.log("spreadsheet",spreadsheet);

    
}
