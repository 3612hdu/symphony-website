document.addEventListener('DOMContentLoaded', function() {
    const nextButton = document.getElementById('nextPage');
    const watchTimeElement = document.getElementById('watchTime');
    const totalTimeElement = document.getElementById('totalTime');
    
    let watchTime = 0;
    const requiredWatchTime = 75 * 60; // 75分钟，以秒为单位
    let timer = null;

    // 更新观看时间显示
    function updateWatchTime() {
        const minutes = Math.floor(watchTime / 60);
        const seconds = watchTime % 60;
        watchTimeElement.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
    }

    // 检查视频观看进度
    function checkVideoProgress() {
        // 这里应该根据实际视频播放器API来获取真实进度
        // 目前使用模拟数据
        watchTime += 1;
        updateWatchTime();

        if (watchTime >= requiredWatchTime) {
            nextButton.disabled = false;
            nextButton.textContent = '进入反馈问卷';
            clearInterval(timer);
        }
    }

    // 开始计时
    timer = setInterval(checkVideoProgress, 1000);

    // 点击下一步按钮
    nextButton.addEventListener('click', function() {
        if (!nextButton.disabled) {
            window.location.href = 'survey.html';
        }
    });

    // 设置总时长显示
    totalTimeElement.textContent = '1:15:00';
}); 