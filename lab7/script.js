alert("Заповнити поля таблиці: Назва спортивної команди, кількість очок. Вивести  під таблицею  назву команди, яка зайняла 1 місце");
    let count = prompt("Введіть кількість команд: ");
    let arr = [count];
    let max;

    for(let i = 0; i < count; i++)
    {
        let teamName = "";
        let pointsCount = 0;

        teamName = prompt("Введіть назву команди: ");
        pointsCount = prompt("Введіть кількість очок зароблених командою: ");

        let team = createTeam(teamName, pointsCount);

        arr[i] = {
            teamName : team.teamName,
            pointsCount : team.pointsCount,
        }
        if(max == undefined)
        {
            max = arr[0].pointsCount;

        }
        else{
            if(arr[i].pointsCount > max){
                max = arr[i].pointsCount;

            }
        }
    }

        let n = 0;
        let element = 0;

        alert("Заповнити поля таблиці: Назва спортивної команди, кількість очок. Вивести  під таблицею  назву команди, яка зайняла 1 місце");


        function createTeam(teamName, pointsCount){
            return {
                teamName,
                pointsCount,
            }
        }

    
        let table = document.querySelector('#table');

        

        fillTable(table);
        

        function fillTable(table)
        {
            for (let i = 0; i <= arr.length; i++)
            {
                 let tr = document.createElement('tr');
                    
                    let td1 = document.createElement('td');
                    td1.innerHTML = n;
                    tr.appendChild(td1);
                    n++;
                        
                    let td2 = document.createElement('td');
                    td2.innerHTML = arr[element].teamName;
                    tr.appendChild(td2);
                        
                    let td3 = document.createElement('td');
                    td3.innerHTML = arr[element].pointsCount;
                    tr.appendChild(td3);
                        
                    element++;
                  table.appendChild(tr);

                  if(max == arr[i].pointsCount)
                  {
                    
                    document.write("Комнда яка зайняла перше місце:" + arr[i].teamName);
                  }
            }


                
        }