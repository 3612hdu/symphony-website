document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('feedbackForm');

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        // 收集表单数据
        const formData = new FormData(form);
        const data = {};
        formData.forEach((value, key) => {
            if (key === 'interests') {
                if (!data[key]) {
                    data[key] = [];
                }
                data[key].push(value);
            } else {
                data[key] = value;
            }
        });

        // 验证表单
        if (!validateForm(data)) {
            return;
        }

        // 这里可以添加发送数据到服务器的代码
        // 目前只是显示提交成功消息
        alert('感谢您的反馈！');
        
        // 重置表单
        form.reset();
    });

    function validateForm(data) {
        // 验证姓名
        if (!data.name || data.name.trim().length < 2) {
            alert('请输入有效的姓名');
            return false;
        }

        // 验证邮箱
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(data.email)) {
            alert('请输入有效的电子邮箱地址');
            return false;
        }

        // 验证了解程度
        if (!data.knowledge) {
            alert('请选择您对交响乐的了解程度');
            return false;
        }

        // 验证反馈内容
        if (!data.feedback || data.feedback.trim().length < 10) {
            alert('请提供至少10个字的反馈内容');
            return false;
        }

        return true;
    }
}); 