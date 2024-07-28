document.addEventListener('DOMContentLoaded', () => {
    const menuLinks = document.querySelectorAll('.horizontal-menu a');

    menuLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); // جلوگیری از بارگذاری مجدد صفحه
            const sectionId = link.getAttribute('data-section');
            const section = document.getElementById(sectionId);

            if (section) {
                section.scrollIntoView({
                    behavior: 'smooth', // انیمیشن پیمایش نرم
                    block: 'start' // بخش از بالای viewport دیده شود
                });
            }
        });
    });
});
