document.getElementById('confirm-button').addEventListener('click', function() {
    const activationCode = document.getElementById('activation-code').value;
    const validCode = '123456'; // هذا هو كود التفعيل الصحيح

    if (activationCode.trim() !== '') {
        if (activationCode === validCode) {
			window.location.href = 'welcome.html'; // الانتقال إلى صفحة الترحيب عند إدخال كود صحيح
        } else {
            alert('كود التفعيل غير صحيح.');
        }
    } else {
        alert('الرجاء إدخال كود التفعيل.');
    }
});