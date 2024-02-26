const spreadSheetContainer=document.querySelector("#spreadsheet-container"); // dom 객체로 querySelector 연결
const Rows=15;//행의 길이를 정할 요소
const Columns=15; // 열의 길이를 정할 요소 
const spreadsheet=[]; //spreadsheet를 위한 배열 생성



class Cell{ // class 속성 사용해주기.
    constructor(isheader,disabled,data,row,column,active=false)
    {
        this.isheader=isheader;
        this.disabled=disabled;
        this.data=data;
        this.row=row;
        this.column=column;
        this.active=active;
    }
}

initSpreadsheet(); // 함수 호출.

function initSpreadsheet()
{
    for(let i=0;i<Rows;i++) //구구단 출력하는 것처럼 15x15칸 행 만들기
    {   let spreadSheetRow=[];
        for(let j=0;j<Columns;j++) // 15x15 만들었음
        {
            const cell=new Cell(false,false,i+"-"+j,i,j,false); // hard Coding임. 
            
            spreadSheetRow.push(cell); // 실제 class 값인 cell을 출력해주는 부분임.
        }
        spreadsheet.push(spreadSheetRow); //   그 행값을 spreadSheet에다가 i=0 부터 i<Rows 까지 넣어주면됨.

       
    }
    console.log(spreadsheet); //데이터는 원하는대로 생성했는데
    // 아직 console에만 찍힘.

    //disabled => 클릭이 되는지 안되는지 속성 true = 클릭안됨.
}
drawSheet();


//데이터나 속성을 객체화 시키려면 class를 만들어줘야함

function createcell(goodcell) //각각의 셀에다가 input 태그를 이용해서 직접 만들어 주자.
{
    const cellEl=document.createElement("input");// createElement는 만들고 싶은 요소의
    // Tag 이름을 붙여줘야한다.
    cellEl.ClassName="goodcell";
    cellEl.id="goodcell_"+goodcell.row+goodcell.column; // 클래스의 이름을 이용해서 붙임id
    cellEl.value=goodcell.data;
    cellEl.disabled=goodcell.disabled; // Cell 클래스의 각각 요소의 값을 
    // dynamic 하게 만들어주기 위함.
    return cellEl; //  cellEl 반환 . 

}

function drawSheet()// 실제로 createSell 이후 cell을 화면에 보일수 있도록 렌더링
//해주는 부분임.
{
    for(let i=0;i<spreadsheet.length;i++)
    {
        for(let j=0;j<spreadsheet[i].length;j++) // 지금 i가 행이고 , j가 열임.
        {
            const cell=spreadsheet[i][j] // 0 1 02 03 04 05 06 이런식으로 증가 하면
            spreadSheetContainer.append(createcell(cell));
            //querySelector에 등록된 "#spreadsheet-container" 인거임.
        }
    }
}
