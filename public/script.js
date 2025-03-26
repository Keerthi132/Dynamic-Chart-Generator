document.getElementById('generateChart').addEventListener('click', function () {
    const chartType = document.getElementById('chartType').value;
    const labelsInput = document.getElementById('labels').value;
    const valuesInput = document.getElementById('values').value;

    if (!labelsInput || !valuesInput) {
        alert('Please enter labels and values!');
        return;
    }

    const labels = labelsInput.split(',').map(label => label.trim());
    const values = valuesInput.split(',').map(value => parseFloat(value.trim()));

    if (labels.length !== values.length) {
        alert('Labels and values must have the same number of entries!');
        return;
    }

    // Destroy existing chart if it exists
    if (window.myChart) {
        window.myChart.destroy();
    }

    // Get canvas context
    const ctx = document.getElementById('chartCanvas').getContext('2d');

    // Create new chart
    window.myChart = new Chart(ctx, {
        type: chartType,
        data: {
            labels: labels,
            datasets: [{
                label: 'Data',
                data: values,
                backgroundColor: ['#FF5733', '#33FF57', '#3357FF', '#F4C724', '#24F4C7'],
                borderColor: '#000',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });
});
