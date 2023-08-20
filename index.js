document.querySelector('#push').onclick = function() {
    var inputField = document.querySelector('#newtask input');
    
    if(inputField.value.length == 0) {
        alert("Kindly Enter Task Name!!!!");
    } else {
        document.querySelector('#tasks').innerHTML += `
            <div class="task">
                <span class="taskname">
                    ${inputField.value}
                </span>
                <button class="delete">
                    <i class="far fa-trash-alt"></i>
                </button>
            </div>
        `;

        inputField.value = '';
    }
}

document.querySelector('#tasks').addEventListener('click', function(e) {
    if(e.target.classList.contains('delete') || e.target.parentElement.classList.contains('delete')) {
        e.target.closest('.task').remove();
    }
});
