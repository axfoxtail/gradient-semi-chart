initGradientSemiCharts();

function initGradientSemiCharts() {
    [].forEach.call(document.getElementsByClassName('gradient-semi-chart'), function(v,i,a) {
        v.style.width = v.parentNode.offsetWidth + 'px';
        v.style.height = v.parentNode.offsetWidth + 'px';
        v.innerHTML = '';
        v.innerHTML += '<div class="chart-bg" style="width:'+ (v.parentNode.offsetWidth - 10) +'px;height:'+ (v.parentNode.offsetWidth - 10) +'px;">'+
                            '<div class="chart-ele chart'+ v.dataset.value +'" style="width:'+ (v.parentNode.offsetWidth - 16) +'px;height:'+ (v.parentNode.offsetWidth - 16) +'px;"></div>'+
                            '<div class="chart-label">'+ v.dataset.value +'</div>'+
                            '<div class="chart-caption">'+ v.dataset.caption +'</div>'+
                        '</div>';
    });
}

window.onresize = initGradientSemiCharts;