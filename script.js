document.addEventListener('DOMContentLoaded', function() {
    const nextButton = document.getElementById('nextPage');
    const sections = document.querySelectorAll('.review-section');
    const timelineItems = document.querySelectorAll('.timeline-item');
    let currentSection = 0;
    let hasReadContent = false;

    // 初始化第一个部分
    sections[0].classList.add('active');

    // 检测滚动位置
    function checkScroll() {
        const scrollPosition = window.scrollY + window.innerHeight;
        const contentHeight = document.documentElement.scrollHeight;
        
        if (scrollPosition >= contentHeight - 100) {
            hasReadContent = true;
            nextButton.disabled = false;
        }
    }

    // 添加滚动监听
    window.addEventListener('scroll', checkScroll);

    // 添加时间轴动画
    function animateTimeline() {
        timelineItems.forEach((item, index) => {
            setTimeout(() => {
                item.classList.add('active');
            }, index * 800);
        });
    }

    // 点击下一步按钮
    nextButton.addEventListener('click', function() {
        if (hasReadContent) {
            if (currentSection === 0) {
                // 显示第二个部分
                sections[1].classList.add('active');
                animateTimeline();
                currentSection = 1;
                nextButton.textContent = '进入视频学习';
            } else {
                window.location.href = 'video.html';
            }
        }
    });

    // 添加数字增长动画
    function animateNumber(element, target) {
        let current = 0;
        const increment = target / 50;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            element.textContent = Math.floor(current);
        }, 20);
    }

    // 初始化数字动画
    const statNumbers = document.querySelectorAll('.stat-number');
    statNumbers.forEach(number => {
        const target = parseInt(number.textContent);
        number.textContent = '0';
        animateNumber(number, target);
    });

    // 初始检查
    checkScroll();
}); 