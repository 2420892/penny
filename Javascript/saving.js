var salaryInput = document.querySelector('input#salary');
var goalInput = document.querySelector('input#exampleDataList');
var costInput = document.querySelector('input#totalCost');
var contributionInput = document.querySelector('input#contribution');
var resultSpan = document.getElementById('resultSpan');
var selectedOptionText = document.getElementById('selectedOptionText');
// to goal input
goalInput.addEventListener('input', function() {
    selectedOptionText.textContent = goalInput.value;
});
// calculate button
document.querySelector('button#calculateBtn').addEventListener('click', function() {
    var salary = parseFloat(salaryInput.value);
    var goal = parseFloat(goalInput.value);
    var cost = parseFloat(costInput.value);
    var contribution = parseFloat(contributionInput.value);
    if (isNaN(salary) || isNaN(contribution)) {
       showPopupMessage('Please enter valid numbers.')
       return;
    }
    // Calculate number of months to reach the goal
    var months = Math.ceil(cost / contribution);
    // Display the result
    showPopupMessage(`It will take you ${months} months to reach this goal`, "bold red");
    
    const progressData = [];
    let currentAmount = 0;
    for (let i = 1; i <= months; i++) {
        currentAmount += contribution;
        progressData.push(currentAmount);
    }

    // Update the line chart with new data
    updateLineChart(progressData);



});
document.getElementById('commitment').addEventListener('change', function() {
    var commitmentValue = this.value.toUpperCase();
    if (commitmentValue === 'YES') {
        showPopupMessage(":blush:Thank you for trusting us, we will email you the detailed contract. We are happy to help you reach your financial goal :blush:", "bold red.");
    } else if (commitmentValue === 'NO') {
        showPopupMessage(":cry:We understand your hesitation, but don't miss out on this amazing opportunity to reach your financial goals. Take a leap of faith and let us guide you!:blush:", "bold red");
    }
});
function showPopupMessage(message, style) {
    var popup = document.createElement('div');
    popup.textContent = message;
    popup.style.fontWeight = 'bold';
    popup.style.color = 'red';
    popup.style.position = 'fixed';
    popup.style.top = '50%';
    popup.style.left = '50%';
    popup.style.transform = 'translate(-50%, -50%)';
    popup.style.padding = '20px';
    popup.style.border = '2px solid red';
    popup.style.backgroundColor = 'white';
    popup.style.zIndex = '9999';
    document.body.appendChild(popup);
    setTimeout(function() {
        popup.remove();
    }, 7500);
}


function updateLineChart(data) {
    const ctx = document.getElementById('savingsChart').getContext('2d');
    const savingsChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: Array.from({ length: data.length }, (_, i) => `Month ${i + 1}`),
            datasets: [{
                label: 'Savings Progress',
                data: data,
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderWidth: 2,
                pointRadius: 5,
                pointBackgroundColor: 'rgba(75, 192, 192, 1)',
                fill: true,
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        stepSize: 500 // Adjust the step size based on your data range
                    }
                }
            },
            plugins: {
                title: {
                    display: true,
                    text: 'Savings Goal Progress'
                }
            }
        }
    });
}

// Optional JavaScript to add the 'sticky' class to the sidebar when scrolling
window.onscroll = function() {
    var sidebar = document.querySelector(".sidebar");
    var topOffset = sidebar.offsetTop;
  
    if (window.pageYOffset > topOffset) {
      sidebar.classList.add("sticky");
    } else {
      sidebar.classList.remove("sticky");
    }
  };
  