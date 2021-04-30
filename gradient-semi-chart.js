initGradientSemiCharts();

function initGradientSemiCharts() {
    [].forEach.call(document.getElementsByClassName('gradient-semi-chart'), function(v,i,a) {
        console.log(v.dataset.value);
        v.innerHTML = '';
        v.innerHTML += '<div class="chart-bg">'+
                            '<div class="chart-ele" style="background-image: url(img/chart'+ v.dataset.value +'.png)"></div>'+
                            '<div class="chart-label">'+ v.dataset.value +'</div>'+
                            '<div class="chart-caption">'+ v.dataset.caption +'</div>'+
                        '</div>';
    });
}