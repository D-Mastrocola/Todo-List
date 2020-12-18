console.log(document.querySelector('.selector').checked);

let completeTask = () => {
    let tasks = document.querySelectorAll('.selector');
    for(let i = 0; i < tasks.length; i++) {
        let checked = tasks[i].checked;
        let textStyle = document.querySelector('.task').style;
        if(checked) {
            console.log(document.querySelector('.task').style)
            textStyle.textDecoration = 'line-through';
            textStyle.opacity = .5;
        }
        else {
            textStyle.textDecoration = 'none';
            textStyle.opacity = 1;
        }
    }
}