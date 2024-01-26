let timer = document.getElementById("timer")
let controlButton = document.getElementById("controlButton")
let task = document.getElementById("task")
let taskList  = document.getElementById("taskList")
let taskLabel = document.getElementById("taskLabel")

let currentIcon = controlButton.getElementsByTagName("i")[0]


let taskListItem = document.createElement("li")
let currentTask = document.createElement("h5")

let hours = 0;
let minutes = 0;
let seconds = 0;
let interval;
let taskContent;
function recordTask(currentTime){
    taskContent = task.value
    taskListItem = document.createElement("li")
    taskListItem.setAttribute("class", "list-group-item list-group-item-action")
    currentTask = document.createElement("h5")
    currentTask.innerText = taskContent + `${currentTime}`
    taskListItem.appendChild(currentTask)
    taskList.appendChild(taskListItem)
}

controlButton.addEventListener("click", function(e){
    
    currentIcon = controlButton.getElementsByTagName("i")[0]
    
    if(currentIcon.classList.contains("bi-play-fill")){
        interval = setInterval(function(){
            if(seconds==60){
                
                seconds = 0;
                minutes++;
        
                if(minutes==60){
                    minutes = 0;
                    hours++;
                }
        
            }
            
            seconds++;
            timer.innerHTML = `<h2>${hours}:${minutes}:${seconds}</h2>`
        }, 1000)

        controlButton.innerHTML = '<i class="bi bi-stop-circle"></i>'
    }
    else{
        
        clearInterval(interval)
        recordTask(`${hours}:${minutes}:${seconds}`)
        hours = 0;
        minutes = 0;
        seconds = 0;
        timer.innerHTML = `<h2>${hours}:${minutes}:${seconds}</h2>`

        controlButton.innerHTML = '<i class="bi bi-play-fill"></i>'        
        
    }
    
})



